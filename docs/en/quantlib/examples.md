---
meta:
- name: title
  content: QuantLib Examples - Haun Blog
- name: description
  content: QuantLib Python Simple Examples
- name: keywords
  content: Quant, QuantLib, Simple Examples, Modules, European Call Option, Pricing a Fixed Income Bond, Pricing an Interest Rate Swap, Pricing a Currency Option, Pricing a Commodity Forward
- property: og:title
  content: QuantLib Examples - Haun Blog
- property: og:description
  content: QuantLib Python Simple Examples
- property: og:image
  content: /images/QuantLib.jpg
- property: og:url
  content: https://haun84.github.io/en/quantlib/examples.html
tags: ["QuantLib", "quantlib", "QuantLib-Python", "Examples", "Modules", "European Call Option", "Fixed Income Bond", "Interest Rate Swap", "Currency Option", "Commodity Forward", "QuantLib Python Examples"]
---

# QuantLib: Examples

::: tip QuantLib
**QuantLib** is a a powerful open-source library for **quantitative finance** and **financial instrument pricing** and **analysis**.  
  
It is written in **C++**, but it also provides **Python** bindings, making it accessible to Python developers.  
  
QuantLib is widely used in the finance industry for tasks such as **pricing derivatives**, **risk management** and **financial instrument modeling**.  
  
Let's break down the structure of the **QuantLib library in Python**
:::


## QuantLib Modules

**QuantLib** is organized into various modules, each of which focuses on a specific aspect of **quantitative finance**. Some of the core modules include:  
  
### QuantLib
* This is the main module that provides the core functionality of the QuantLib library. It contains classes and functions for **modeling financial instruments, term structures, and various financial calculations**.
  
### QuantLib.PricingEngines
* This module contains **pricing engines for different types of financial instruments** such as options, bonds, and swaps. These engines are used to calculate the **fair value of** these instruments.
  
### QuantLib.Instruments
* Here, you'll find classes that **represent various financial instruments**, including options (e.g., EuropeanOption), bonds (e.g., FixedRateBond), and swaps (e.g., InterestRateSwap).
  
### QuantLib.Calendars
* This module deals with **financial calendars**, which are essential for calculating dates related to financial instruments. It includes classes for different **financial calendars, holidays, and business day conventions**.
  
### QuantLib.Currencies
* This module provides classes to work with different currencies, including **currency codes, exchange rates, and conversion functions**.
  
### QuantLib.MarketData
* This module deals with market data such as **interest rates, yield curves, and volatility surfaces**. It provides tools to manage and **interpolate** market data.
  
### QuantLib.Time
* Time-related calculations are crucial in finance. This module contains classes and functions for managing dates, time periods, and day counting conventions.
  
### QuantLib.Solvers
* Solvers are used to find solutions to various mathematical problems, such as **root finding and optimization**. This module provides tools for solving financial equations.
  

## Sample Codes of Pricing

To use **QuantLib in Python**, you typically start by importing the necessary **modules and classes**.  
  
You can **create financial instruments, set up pricing engines, and perform calculations based on your specific needs**.  
  
Here's a simple example of **how to use QuantLib in Python to calculate the price of a financial instruments**.  

### Pricing a European Call Option

```python
import QuantLib as ql

# Set Date
valuationDate = ql.Date(28, 8, 2024)
ql.Settings.instance().evaluationDate = valuationDate
calendar = ql.NullCalendar()
dayCount = ql.Actual360()

# Define Option Parameters
option_type = ql.Option.Call
underlying_price = 100
strike_price = 105
maturity_date = ql.Date(15, 9, 2025)
volatility = 0.2
risk_free_rate = 0.05
dividend = 0.01

# Simple Quote Objects
underlying_qt = ql.SimpleQuote(underlying_price)
dividend_qt = ql.SimpleQuote(dividend)
risk_free_rate_qt = ql.SimpleQuote(risk_free_rate)
volatility_qt = ql.SimpleQuote(volatility)

# Quote Handle Objects
u_qhd = ql.QuoteHandle(underlying_qt)
d_qhd = ql.QuoteHandle(dividend_qt)
r_qhd = ql.QuoteHandle(risk_free_rate_qt)
v_qhd = ql.QuoteHandle(volatility_qt)

# Term-Structure Objects
d_ts = ql.FlatForward(valuationDate, d_qhd, dayCount)
r_ts = ql.FlatForward(valuationDate, r_qhd, dayCount)
v_ts = ql.BlackConstantVol(valuationDate, calendar, v_qhd, dayCount)

# Term-Structure Handle Objects
d_thd = ql.YieldTermStructureHandle(d_ts)
r_thd = ql.YieldTermStructureHandle(r_ts)
v_thd = ql.BlackVolTermStructureHandle(v_ts)

# Process & Engine
process = ql.BlackScholesMertonProcess(u_qhd, d_thd, r_thd, v_thd)
engine = ql.AnalyticEuropeanEngine(process)

# Option Objects
exercise = ql.EuropeanExercise(maturity_date)
payoff = ql.PlainVanillaPayoff(option_type, strike_price)
option = ql.VanillaOption(payoff, exercise)

# Set the pricing engine for the option
option.setPricingEngine(engine)

# Price & Greeks Results
print("Option Price:", round(option.NPV(), 2))
print("Option Delta:", round(option.delta(), 4))
print("Option Gamma:", round(option.gamma(), 4))
print("Option Theta:", round(option.thetaPerDay(), 4))
print("Option Vega:", round(option.vega() / 100, 4))
print("Option Rho:", round(option.rho() / 100, 4))

# Automatic Re-Pricing
underlying_qt.setValue(103)
print("\n# Automatic Re-Pricing")
print("Option Price:", round(option.NPV(), 2))
print("Option Delta:", round(option.delta(), 4))
print("Option Gamma:", round(option.gamma(), 4))
print("Option Theta:", round(option.thetaPerDay(), 4))
print("Option Vega:", round(option.vega() / 100, 4))
print("Option Rho:", round(option.rho() / 100, 4))

## Output
# Option Price: 7.85
# Option Delta: 0.5235
# Option Gamma: 0.0191
# Option Theta: -0.0151
# Option Vega: 0.4061
# Option Rho: 0.4734

# # Automatic Re-Pricing
# Option Price: 9.5
# Option Delta: 0.5794
# Option Gamma: 0.0181
# Option Theta: -0.0158
# Option Vega: 0.4097
# Option Rho: 0.5338
```

### Pricing a Fixed Income Bond

```python
import QuantLib as ql

# Define bond parametes
face_value = 100
issue_date = ql.Date(15, 9, 2021)
maturity_date = ql.Date(15, 9, 2031)
coupon_rate = 0.05
settlement_date = ql.Date(15, 9, 2023)

# Create QuantLib objects
schedule = ql.MakeSchedule(issue_date, maturity_date, ql.Period('6M'))
interest = ql.FixedRateLeg(schedule, ql.Actual360(), [100.], [0.05])
bond = ql.Bond(0, ql.TARGET(), issue_date, interest)

# Set Pricing Engine
crv = ql.FlatForward(settlement_date, coupon_rate, ql.Actual360())
yts = ql.YieldTermStructureHandle(crv)
engine = ql.DiscountingBondEngine(yts)
bond.setPricingEngine(engine)

# Calculate bond price
bond_price = bond.cleanPrice()
print("Fixed Income Bond Price:", round(bond_price, 4))

## Output
# Fixed Income Bond Price: 99.6176
```
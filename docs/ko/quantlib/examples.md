---
meta:
- name: title
  content: QuantLib 파이썬 예제
- name: description
  content: QuantLib 파이썬 예제
- name: keywords
  content: Quant, QuantLib, Simple Examples, Modules, European Call Option, Pricing a Fixed Income Bond, Pricing an Interest Rate Swap, Pricing a Currency Option, Pricing a Commodity Forward
- property: og:title
  content: QuantLib 파이썬 예제 - Haun Blog
- property: og:description
  content: QuantLib 파이썬 예제
- property: og:image
  content: /images/QuantLib.jpg
- property: og:url
  content: https://haun84.github.io/ko/quantlib/examples.html
tags: ["QuantLib", "quantlib", "QuantLib-Python", "Examples", "Modules", "European Call Option", "Fixed Income Bond", "Interest Rate Swap", "Currency Option", "Commodity Forward", "QuantLib Python Examples", "QuantLib 설치", "QuantLib 파이썬", "QuantLib 파이썬 예제"]
---

# QuantLib: Examples

## QuantLib-Python

::: tip QuantLib
**QuantLib**는 **정량 금융 분석** 및 **금융상품 가격 평가** 및 **분석**를 위한 강력한 오픈소스 라이브러리입니다.  
  
QuantLib 자체는 C++로 작성되었지만 **Python** 바인딩도 제공하므로 파이썬 개발자도 액세스할 수 있습니다.  
  
QuantLib 은 금융 업계에서 **파생상품 가격 계산**, **리스크 관리**, **금융상품 모델링** 등의 작업에 널리 사용되고 있습니다.  
  
아래에서 **파이썬 QuantLib 라이브러리**의 구조를 분석해 보겠습니다.
:::


## QuantLib Modules

**QuantLib**은 다양한 모듈로 구성되어 있으며, 각 모듈은 **금융 공학**의 특정 측면에 초점을 맞추고 있습니다:
  
### QuantLib
* 이 모듈은 QuantLib 라이브러리의 핵심 기능을 제공하는 주요 모듈입니다. **금융상품 모델링, 기간 구조 및 다양한 재무 계산**을 위한 클래스와 기능이 포함되어 있습니다.
  
### QuantLib.PricingEngines
* 이 모듈에는 옵션, 채권, 스왑 등 다양한 유형의 금융상품에 대한 **가격 평가 엔진**이 포함되어 있습니다. 이러한 엔진은 이러한 상품의 **공정가치**를 계산하는 데 사용됩니다.
  
### QuantLib.Instruments
* 여기에서 옵션(예: 유럽 옵션), 채권(예: 고정금리채권), 스왑(예: 이자율스왑) 등 다양한 **금융상품**을 대표하는 클래스를 찾을 수 있습니다.
  
### QuantLib.Calendars
* 이 모듈에서는 금융상품과 관련된 날짜를 계산하는 데 필수적인 **금융 캘린더**를 다룹니다. 여기에는 다양한 **금융 캘린더, 공휴일 및 영업일관행** 클래스가 포함되어 있습니다.
  
### QuantLib.Currencies
* 이 모듈은 **통화 코드, 환율, 변환 함수** 등 다양한 통화로 작동할 수 있는 클래스를 제공합니다.
  
### QuantLib.MarketData
* 이 모듈은 **금리, 수익률 곡선, 변동성 표면**과 같은 시장 데이터를 다룹니다. 시장 데이터를 관리하고 **보간**할 수 있는 도구를 제공합니다.
  
### QuantLib.Time
* 시간 관련 계산은 재무에서 매우 중요합니다. 이 모듈에는 **날짜, 시간대 및 요일 계산 규칙**을 관리하기 위한 클래스와 기능이 포함되어 있습니다.
  
### QuantLib.Solvers
* Solvers는 **근 찾기 및 최적화**와 같은 다양한 수학 문제의 해를 찾는 데 사용됩니다. 이 모듈은 **금융 방정식**을 풀기 위한 도구를 제공합니다.
  

## 가격평가 예제 코드

**Python**에서 **QuantLib**을 사용하려면 일반적으로 필요한 **모듈과 클래스**를 가져오는 것부터 시작해야 합니다.  
  
이를 통해 **금융상품을 만들고, 가격 엔진을 설정하고, 특정 요구에 따라 계산을 수행할 수 있습니다**.  
  
다음은 파이썬에서 QuantLib을 사용하여 금융 상품 평가 가격을 계산하는 간단한 방법의 예입니다.  

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
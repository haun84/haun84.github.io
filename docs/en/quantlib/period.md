---
meta:
- name: title
  content: QuantLib Period Class - Haun Blog
- name: description
  content: Period class provides a Period (length + TimeUnit) class and implements a limited algebra
- name: keywords
  content: Quant, QuantLib, Period Class
- property: og:title
  content: QuantLib Period Class - Haun Blog
- property: og:description
  content: Period class provides a Period (length + TimeUnit) class and implements a limited algebra
- property: og:image
  content: /images/QuantLib.jpg
- property: og:url
  content: https://haun84.github.io/quantlib/period.html
tags: ["QuantLib", "퀀트립", "quantlib", "Period", "Period Class", "QuantLib-Python"]
---

# QuantLib: Period Class

Period class provides a Period (length + TimeUnit) class and implements a limited algebra

## Period Class Overview

::: tip Period Class
All derivatives basically require various date information about the product, such as **effective date**, **maturity date**, **settlement date**, **interest payment date**, etc.  
  
These information are not only basic components of derivatives, but also can vary in price depending on how they are defined, so these details are very detailed in the transaction statement for trading derivatives.  
  
The reason this date information is needed is essentially to determine how long a product has to expire or how long it has until the interest payment date.  
  
In other words, what we should be interested in for pricing or position management is actually the period, not the date.  
  
In other words, it means that the relative section is more important than the absolute time point, and our perspective should focus on the line rather than the point.
:::


## Period Class Structure

If the Date class exists to define a specific date, the Period class exists to define a specific period.  
The Period class is not intended to define a viewpoint accurately, but to determine a period between the viewpoint and the viewpoint.  
In order to use the Period class, the following structure must be followed.

### Period Class Construction #1

```python
import QuantLib as ql

# ql.Period(Integer, TimeUnits)
period = ql.Period(3, ql.Months)  # 3M
```

* The first method is to set an integer (Integer) and a time unit (Time Units) in the factor.
* In the case of integers, you can enter a general number, but one thing to watch out for is time. There are various types of enumeration for different purposes in a QuantLib.
* Enumeration refers to a data type that constitutes a set of a series of members, and a specific enumeration is the same as a group organized by a user for a certain purpose.
* The time unit also has the following members as one of these enumeration rows.
* For example, if you want to define a period of 3 months, you can enter 3 for the first factor and ql.Months for the second factor.

::: warning TimeUnits
* ql.Days
* ql.Weeks
* ql.Months
* ql.Years
:::

### Period Class Construction #2

```python
import QuantLib as ql

# ql.Period(Frequency)
period = ql.Period(ql.Semiannual)
print(period)  # 6M
```

* The second method of defining the Period class is a method of inputting a frequency into a factor.
* In the QuantLib, the period is also made of an enumeration type, and the members below are the members constituting the enumeration type. 
* These cycle enumerators are frequently used to implement products such as interest rate swaps and currency swaps that pay interest on a specific cycle.

::: warning Frequency
* ql.Annual
* ql.Semiannual
* ql.Quarterly
* ql.Monthly
* ql.Biweekly
* ql.Daily
* ql.Once
:::


## Period Class Functions

The main feature of the Period class is that it is combined with Date to enable arithmetical operation for dates. For example, let's say you're curious about a date three weeks, three months, or three years from April 11, 2020.  
These questions can be answered very easily by combining the Date class and the Period class. This function of adding and subtracting a specific period of time to a date is one of the useful functions of QuantLib. This arithmetic calculation is also possible between dates, which provides an answer to the period between dates.

```python
# Functions
import QuantLib as ql

date1 = ql.Date(10, 4, 2024)
date2 = ql.Date(31, 12, 2024)

print(f"After 3 Weeks : {date1 + ql.Period(3, ql.Weeks)}")
print(f"After 3 Months : {date1 + ql.Period(3, ql.Months)}") 
print(f"After 3 Years : {date1 + ql.Period(3, ql.Years)}")

print(f"Days between Date2 and Date1 = {date2 - date1}")

# After 3 Weeks : May 1st, 2024   
# After 3 Months : July 10th, 2024
# After 3 Years : April 10th, 2027
# Days between Date2 and Date1 = 265
```
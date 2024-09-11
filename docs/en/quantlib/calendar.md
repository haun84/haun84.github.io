---
meta:
- name: title
  content: QuantLib Calendar Class - Haun Blog
- name: description
  content: The Calendar Class provides the interface for determining whether a date is a business day or a holiday for a given exchange or a given country, and for incrementing/decrementing a date of a given number of business days.
- name: keywords
  content: Quant, QuantLib, Calendar Class
- property: og:title
  content: QuantLib Calendar Class - Haun Blog
- property: og:description
  content: The Calendar Class provides the interface for determining whether a date is a business day or a holiday for a given exchange or a given country, and for incrementing/decrementing a date of a given number of business days.
- property: og:image
  content: /images/QuantLib.jpg
- property: og:url
  content: https://haun84.github.io/en/quantlib/calendar.html
tags: ["QuantLib", "퀀트립", "quantlib", "Calendar", "Calendar Class", "QuantLib-Python"]
---

# QuantLib: Calendar Class

The **Calendar Class** provides the interface for determining whether a date is a **business day** or a **holiday** for a given **exchange** or a given **country**, and for incrementing, decrementing a date of a given number of business days.

## Calendar Class Overview

::: tip Calendar Class
**Holiday processing** is one of the difficult parts of OTC derivatives. Holiday processing is troublesome because each country's holidays vary widely, and business days are frequently changed by irregular holidays such as election days and alternative holidays.  
  
Financial markets basically open and ask prices only on business days, so if you don't take into account the details of this holiday processing, the pricing results can be distorted daily. Therefore, there is a class for this holiday processing in QuantLib, and that is the Calendar class.
:::

## Calendar Class Structure

The Calendar Class provides the interface for determining whether a date is a business day or a holiday for a given exchange or a given country, and for incrementing/decrementing a date of a given number of business days.  
To implement the Calendar class, you only need to enter the name of the country you want to use.  
The source code below is an example of implementing calendars in the United States, the Eurozone, Korea, Japan, and China as objects, respectively.  
As such, the Calendar class is very useful because it does not have to make a separate effort to manage each country's holidays.

```python
import QuantLib as ql

# Construction
us = ql.UnitedStates(ql.UnitedStates.NYSE)
eu = ql.TARGET()
kr = ql.SouthKorea()
jp = ql.Japan()
cn = ql.China()
```

::: warning Calendar Markets
* Argentina : [‘Merval’]
* Brazil : [‘Exchange’, ‘Settlement’]
* Canada : [‘Settlement’, ‘TSX’]
* China : [‘IB’, ‘SSE’]
* CzechRepublic : [‘PSE’]
* France : [‘Exchange’, ‘Settlement’]
* Germany : [‘Eurex’, ‘FrankfurtStockExchange’, ‘Settlement’, ‘Xetra’]
* HongKong : [‘HKEx’]
* Iceland : [‘ICEX’]
* India : [‘NSE’]
* Indonesia : [‘BEJ’, ‘JSX’]
* Israel : [‘Settlement’, ‘TASE’]
* Italy : [‘Exchange’, ‘Settlement’]
* Mexico : [‘BMV’]
* Russia : [‘MOEX’, ‘Settlement’]
* SaudiArabia : [‘Tadawul’]
* Singapore : [‘SGX’]
* Slovakia : [‘BSSE’]
* SouthKorea : [‘KRX’, ‘Settlement’]
* Taiwan : [‘TSEC’]
* Ukraine : [‘USE’]
* UnitedKingdom : [‘Exchange’, ‘Metals’, ‘Settlement’]
* UnitedStates : [‘FederalReserve’, ‘GovernmentBond’, ‘LiborImpact’, ‘NERC’, ‘NYSE’, ‘Settlement’]
:::

```python
import QuantLib as ql

uk = ql.UnitedKingdom(ql.UnitedKingdom.Metals)
us = ql.UnitedStates(ql.UnitedStates.NYSE)
```

## Calendar Class Functions

### some commonly used member functions:

```python
import QuantLib as ql

cal = ql.SouthKorea()
date = ql.Date(20, 6, 2024)

# isBusinessDay(d) : A Boolean value that determines whether d is a business day
print('Is BusinessDay :', cal.isBusinessDay(date))  # Is BusinessDay : True

 # isHoliday(d) : A boolean value that determines whether d is a holiday
print('Is Holiday :', cal.isHoliday(date))  # Is Holiday : False

 # isWeekend(w) : A Boolean value that determines whether w is a weekend (in some countries, weekends are not scheduled on Saturdays and Sundays)
print('Is Weekend :', cal.isWeekend(ql.Friday))  # Is Weekend : False

 # isEndOfMonth(d) : A boolean value that determines whether d is the last working day at the end of the month
print('Is Last BusinessDay :', cal.isEndOfMonth(ql.Date(27, 6, 2024)))  # Is Last BusinessDay : False

 # endOfMonth(d) : date, returns the last working day of the month in which d is located
print('Last BusinessDay :', cal.endOfMonth(date))  # Last BusinessDay : June 28th, 2024
```

### Holiday List

Returns the holidays between two dates

```python
 # ql.Calendar.holidayList(_calendar_, _from_, _to_, _includeWeekEnds=False_)
print(ql.Calendar.holidayList(ql.SouthKorea(), ql.Date(1,1,2024), ql.Date(31,12,2024)))
 ```

### Custom Holiday List

The Calendar object in QuantLib can conveniently implement custom holidays. Generally, only the following two functions are needed.

* addHoliday(d) : add d as a holiday
* removeHoliday(d) : remove d from the holiday table

```python
import QuantLib as ql

cal = ql.TARGET()
  
day1 = ql.Date(26, 2, 2020)
day2 = ql.Date(10, 4, 2020)

print('Is Business Day : ', cal.isBusinessDay(day1))  # Is Business Day : True
print('Is Business Day : ', cal.isBusinessDay(day2))  # Is Business Day : False

cal.addHoliday(day1)
cal.removeHoliday(day2) 

print('Is Business Day : ', cal.isBusinessDay(day1))  # Is Business Day : False
print('Is Business Day : ', cal.isBusinessDay(day2))  # Is Business Day : True
```

### Counting

The Calendar class provides the function of calculating the number of business days between two dates and the function of returning a date after a certain period from a certain date.

* advance(d, period, convention, endOfMonth)
  - date, the date is moved backward by time interval period and then modified according to the conversion mode convention
  - the parameter endOfMonth indicates that if d is the end of the month, the date after the correction is also at the end of the month
    
::: warning BusinessDayConvention
* ql.Unadjusted : No adjustment
* ql.Preceding : Correct the date to the last business day that Preceding before
* ql.ModifiedPreceding : modify the date to the last working day that appeared before, unless the working sunrise is now the previous month; if the modified working sunrise is now the previous month, the date is modified to the first working day after that The original date and the revised date are guaranteed to be in the same month
* ql.Following : The date is corrected to the first working day that follows
* ql.ModifiedFollowing : The date is corrected to the first working day after that, unless this working day is in the next month; if the modified working day is in the next month, the date is corrected to the last working day that appears before, to ensure the original The date and the revised date are in the same month
:::

* businessDaysBetween(from, to, includeFirst, includeLast)
  - Calculate the number of working days between the dates from and to (whether or not the dates are included)

```python
import QuantLib as ql

cal = ql.SouthKorea()
firstDate = ql.Date(31, 1, 2024)
secondDate = ql.Date(1, 4, 2024)

print('Date 2 Adj :', cal.adjust(secondDate, ql.Preceding))  # Date 2 Adj : April 1st, 2024
print('Date 2 Adj :', cal.adjust(secondDate, ql.ModifiedPreceding))  # Date 2 Adj : April 1st, 2024

mat = ql.Period(2, ql.Months)  

print('Date 1 Month Adv :', cal.advance(firstDate, mat, ql.Following, False))  # Date 1 Month Adv : April 1st, 2024
print('Date 1 Month Adv :', cal.advance(firstDate, mat, ql.ModifiedFollowing, False))  # Date 1 Month Adv : March 29th, 2024

print('Business Days Between :',
    cal.businessDaysBetween(
        ql.Date(5, ql.March, 2024), ql.Date(30, ql.March, 2024),
        True, True))  # Business Days Between : 19
```

### joint Calendar

Suppose a trader in Korea trades OTC derivatives with a trader in Europe based on a two-year interest rate on US government bonds. There will be three calendars for traders to consider at this time: Korea, the Eurozone, and the United States.  
They should set an interest payment date, interest rate setting date, or maturity date, taking into account the holidays of all three countries.  
The jointCalendar serves to combine each calendar into one. The jointCalendar takes the country's calendars as factors and combines them to make a new calendar.  

```python
import QuantLib as ql

# Construction
us = ql.UnitedStates(ql.UnitedStates.NYSE)
eu = ql.TARGET()
kr = ql.SouthKorea()
 
date1 = ql.Date(1, 1, 2024)
date2 = ql.Date(31, 12, 2024)

 # ql.JointCalendar(calendar1, calendar2, calendar3, calendar4, JointCalendarRule=JoinHolidays)
new_calendar = ql.JointCalendar(us, eu, kr)
print(new_calendar.holidayList(date1, date2))
```
---
meta:
- name: title
  content: QuantLib Date Class - Haun Blog
- name: description
  content: Date class provides methods to inspect dates as well as methods and operators which implement a limited date algebra (increasing and decreasing dates, and calculating their difference)
- name: keywords
  content: Quant, QuantLib, Date Class
- property: og:title
  content: QuantLib Date Class - Haun Blog
- property: og:description
  content: Date class provides methods to inspect dates as well as methods and operators which implement a limited date algebra (increasing and decreasing dates, and calculating their difference)
- property: og:image
  content: /images/QuantLib.jpg
- property: og:url
  content: https://haun84.github.io/en/quantlib/date.html
tags: ["QuantLib", "quantlib", "Date", "Date Class", "QuantLib-Python"]
---

# QuantLib: Date Class

**Date class provides methods to inspect dates as well as methods and operators which implement a limited date algebra** (increasing and decreasing dates, and calculating their difference)
* providing basic information such as **weekday**, **day of the month**, **day of the year**, **month**, and **year**
* **comparing two dates** to determine whether they are equal, or which one is the earlier or later, or the difference between them expressed in days
* **incrementing or decrementing** a date of a given number of days, or of a given period expressed in weeks, months, or years

## Date Class Overview

::: tip Date Class
Before evaluating the price of a derivative, the existence of time must be premised. This is because underlying assets and other external variables change over time, and the price of derivatives is also affected in the process.  
  
Even if all variables do not change, the price is bound to change over time because derivatives are maturities.  
  
The moment of birth and extinction of a derivative falls on the Effective Date and the Maturity Date, and the price of the derivative also changes as the time from the effective date to the expiration date passes day by day.  
  
In the end, in the world of derivatives, it is essential to specify effective and expiration dates or settlement dates, and QuantLib has a class called Date to declare these dates.
:::


## Date Class Structure

### Date Class Construction #1

```python
import QuantLib as ql

# ql.Date(Day, Month, Year)
date = ql.Date(30, 6, 2024)
print(date.ISO())  # 2024-06-30
```
* To enter Day, Month, and Year as input variables
* A common and intuitive way to use it

### Date Class Construction #2

```python
import QuantLib as ql

# ql.Date(dateString, formatString)
date = ql.Date('20240630', '%Y%m%d')
print(date.ISO())  # 2024-06-30
```
* To enter date information in string form
* It is easier to read and use date information stored in the company DB in practice than #1 when using it as it is

### Date Class Construction #3

```python
import QuantLib as ql

# ql.Date(serialNumber)
date = ql.Date(45473)
print(date.ISO())  # 2024-06-30
```
* Similar to the method of using the date function in Excel, the method of counting by day by setting January 1, 1900 as one

```python
import QuantLib as ql

# Construction
date1 = ql.Date(30, 6, 2024)
date2 = ql.Date('20240630', '%Y%m%d')

print(date1)  # 2024-06-30
print(date2)  # 2024-06-30
```

## Date Class Functions

### Member functions

```python
date = ql.Date(30, 6, 2024)  # 2024-06-30

# ISO() : ISO format, YYYY-MM-DD
print('ISO format:', date.ISO())  # ISO format: 2024-06-30

# weekday() : an integer that returns the number corresponding to the week
# Sunday:1 - ... - Saturday:7
print('Weekday:', date.weekday())  # Weekday: 1

# dayOfMonth() : integer, the date returned is the day of the month
print('Day of Month:', date.dayOfMonth())  # Day of Month: 30

# dayOfYear() : integer, the date returned is the day of the year
print('Day of Year:', date.dayOfYear())  # Day of Year: 182

# month() : an integer that returns the month corresponding to the date
print('Month:', date.month())  # Month: 6

# year() : an integer that returns the year corresponding to the date
print('Year:', date.year())  # Year: 2024

# serialNumber() integer, the number of days corresponding to the return date 
# (starting from 1899-12-31)
print('Serial Number:', date.serialNumber())  # Serial Number: 45473
```

### Static functions

```python
# Date.todaysDate() : Date object, which returns the current date of the system.
print('Today:', ql.Date.todaysDate())  # Today: September 5th, 2024

# Date.minDate() : Date object, which returns the minimum date that QuantLib can represent.
print('Min Date:', ql.Date.minDate())  # Min Date: January 1st, 1901

# Date.maxDate() : Date object, which returns the maximum date that QuantLib can represent.
print('Max Date:', ql.Date.maxDate())  # Max Date: December 31st, 2199

# Date.isLeap(y) : Boolean value to determine whether y is a leap year
print('Is Leap:', ql.Date.isLeap(2024))  # Is Leap: True

# Date.endOfMonth(d) : Date object, which returns the date corresponding to the end of the month where the date d is located
print('End of Month:', ql.Date.endOfMonth(ql.Date(4, 8, 2024)))  # End of Month: August 31st, 2024

# Date.isEndOfMonth(d) : Boolean value to determine whether d is at the end of the month
print('Is Month End:', ql.Date.isEndOfMonth(ql.Date(29, 9, 2024)))  # Is Month End: False
print('Is Month End:', ql.Date.isEndOfMonth(ql.Date(30, 9, 2024)))  # Is Month End: True

# Date.nextWeekday(d, w) : Date object, which returns the date corresponding to the first week w after date d 
# (for example, the first Friday after 2018-03-12)
print('Next WD:', ql.Date.nextWeekday(ql.Date(1, 9, 2024), ql.Friday))  # Next WD: September 6th, 2024

# Date.nthWeekday(n, w, m, y) : Date object, which returns the date corresponding to the n week w in the given month m and year y 
# (for example, the third Wednesday of July 2010)
print('n-th WD:', ql.Date.nthWeekday(3, ql.Wednesday, 9, 2024))  # n-th WD: September 18th, 2024
```
---
meta:
- name: title
  content: QuantLib Date Class
- name: description
  content: QunatLib Date 클래스는 날짜를 검사하는 방법과 일자 연산을 구현하는 방법과 연산자를 제공합니다.
- name: keywords
  content: Quant, QuantLib, Date Class, 날짜 클래스, 퀀트립
- property: og:title
  content: QuantLib Date Class
- property: og:description
  content: Date 클래스는 일자 검사, 연산 기능을 제공한다.
- property: og:image
  content: /images/QuantLib.jpg
- property: og:url
  content: https://haun84.github.io/ko/quantlib/date.html
tags: ["QuantLib", "퀀트립", "quantlib", "Date", "Date Class", "QuantLib-Python", "날짜 클래스"]
---

# QuantLib: Date Class

## Date 클래스 개요

::: tip Date 클래스 개요
파생상품의 가격을 평가하기에 앞서 시간이라는 존재가 전제되어 있어야만 한다. 왜냐하면 시간이 흐르는 과정 속에서 기초자산 및 기타 외부 변수들이 변화하고 또 그 과정 속에서 파생상품의 가격 또한 영향을 받기 때문이다.  
  
심지어 모든 변수가 변하지 않아도 파생상품은 만기라는 것이 존재하기 때문에 시간이 지남에 따라 가격은 바뀔 수 밖에 없다.  
  
파생상품의 탄생과 소멸의 순간이 효력발생일(Effective Date)과 만기일(Maturity Date)에 해당되며, 효력발생일로부터 만기일까지 시간이 하루하루 지남에 따라 파생상품의 가격 또한 변한다.  
  
결국 파생상품의 세계에서는 효력발생일과 만기일, 혹은 결제일 등을 지정해 주는 것이 필수적이며, 퀀트립은 이러한 날짜를 선언해 주기 위해 Date 라는 클래스를 가지고 있다.
:::

::: warning Date 클래스 기능
날짜 클래스는 날짜를 검사하는 방법뿐만 아니라 제한된 날짜 대수(날짜 증가 및 감소, 그 차이 계산)를 구현하는 방법과 연산자를 제공합니다
* 평일, 요일, 요일, 요일, 월, 연도와 같은 기본 정보 제공
* 두 날짜를 비교하여 날짜가 동일한지, 어느 날짜가 빠른지 또는 늦은지, 또는 날짜로 표시된 두 날짜의 차이를 확인
* 주어진 일수 또는 주, 월 또는 연도로 표시된 주어진 기간의 날짜를 늘리거나 줄이는 방법 제공
:::



## Date 클래스 구조

### Date 클래스 구현방법 #1

```python
import QuantLib as ql

# ql.Date(Day, Month, Year)
date = ql.Date(30, 6, 2024)
print(date.ISO())  # 2024-06-30
```
* 인자에 각각 일(Day), 월(Month), 년(Year)을 입력하는 방법
* 일반적이면서 직관적이기 때문에 많이 사용하는 방법

### Date 클래스 구현방법 #2

```python
import QuantLib as ql

# ql.Date(dateString, formatString)
date = ql.Date('20240630', '%Y%m%d')
print(date.ISO())  # 2024-06-30
```
* 문자열 형태의 일자 정보를 입력하는 방법
* 금융회사 실무에서 회사 DB 내 저장된 일자 정보를 읽어와 그대로 사용 시 #1 보다 #2 가 간편함

### Date 클래스 구현방법 #3

```python
import QuantLib as ql

# ql.Date(serialNumber)
date = ql.Date(45473)
print(date.ISO())  # 2024-06-30
```
* 엑셀로 날짜 기능 사용하는 방법과 유사, 1900년 1월 1일을 1로 정하여 하루씩 카운팅해나가는 방법

```python
import QuantLib as ql

# Construction
date1 = ql.Date(30, 6, 2024)
date2 = ql.Date('20240630', '%Y%m%d')

print(date1)  # 2024-06-30
print(date2)  # 2024-06-30
```

## Date 클래스 기능

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
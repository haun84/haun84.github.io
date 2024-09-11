---
meta:
- name: title
  content: QuantLib Calendar Class
- name: description
  content: Calendar 클래스는 프라이싱을 위해 특정 거래소 또는 특정 국가의 영업일 또는 휴일을 처리하고 영업일수 계산 기능을 제공한다.
- name: keywords
  content: Quant, QuantLib, Calendar Class, 달력 클래스
- property: og:title
  content: QuantLib Calendar Class
- property: og:description
  content: Calendar 클래스는 거래소 및 국가의 영업일 처리 및 영업일수 계산 기능을 제공한다.
- property: og:image
  content: /images/QuantLib.jpg
- property: og:url
  content: https://haun84.github.io/ko/quantlib/calendar.html
tags: ["QuantLib", "퀀트립", "quantlib", "Calendar", "Calendar Class", "QuantLib-Python"]
---

# QuantLib: Calendar Class

## Calendar 클래스 개요

::: tip Calendar Class 개요
* 장외파생상품에서 다루기 어려운 부분 중 하나가 바로 휴일 처리이다. 휴일처리가 골치 아픈 이유는 각 나라의 휴일이 매우 천차만별일 뿐만 아니라 선거일이나 대체공휴일 같은 비정기적 휴일에 의해 영업일이 자주 변경되기 때문이다.
  
* 금융시장은 기본적으로 영업일에만 시장이 열리고 호가가 형성되기 때문에 이러한 휴일 처리에 대한 디테일들을 챙기지 않는다면 프라이싱 결과가 왜곡되는 일일 발생할 수 있다. 이에 퀀트립에서는 이 휴일 처리를 위한 클래스가 있고, 그것이 바로 Calendar 클래스이다.
:::

## Calendar 클래스 구조

::: warning Calendar Class 구조
Calendar 클래스는 프라이싱을 위해 특정 거래소 또는 특정 국가의 영업일 또는 휴일을 처리하고 영업일수 계산 기능을 제공한다.  
Calendar 클래스를 구현하는 방법은 자신이 사용하고자 하는 국가의 이름만 입력해 주면 된다.  
아래의 소스코드는 각각 미국, 유로존, 한국, 일본, 중국의 달력을 객체로 구현한 예시이다.  
이처럼 Calendar 클래스는 각 나라의 휴일들을 관리하기 위해 별도로 노력하지 않아도 되기 때문에 매우 유용하다.
:::

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

## Calendar 클래스 기능

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

holidayList() 메서드는 달력(Calendar)과 시작일(Date), 그리고 종료일(Date)을 인자로 받아 해당 달력을 기준으로 시작일과 종료일 사이의 기간에 존재하는 휴일들을 반환한다.

```python
 # ql.Calendar.holidayList(_calendar_, _from_, _to_, _includeWeekEnds=False_)
print(ql.Calendar.holidayList(ql.SouthKorea(), ql.Date(1,1,2024), ql.Date(31,12,2024)))
 ```

### Custom Holiday List

Calendar 클래스는 대체공휴일이나 비정기적 휴일은 모니터링 되지 않기 때문에 달력을 수정해 주는 기능을 지원한다.

* addHoliday(d) : 휴일을 새로 추가하는 메서드
* removeHoliday(d) : 휴일에서 제거하는 메서드

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

### 계산 기능

Calendar 클래스는 두 날짜 사이의 영업일수를 계산하는 기능과 어떤 특정 일자(Date)로 부터 특정 기간(Period) 후의 날짜를 반환하는 기능을 제공한다.

* advance(d, period, convention, endOfMonth)
  - 어떤 특정 일자(Date)로부터 특정 기간(Period) 후의 날짜를 반환
  
* 영업일 관행(Business Day Convention)
  - 이론적 만기일과 휴일이 겹칠 때 실제 만기일을 어떤 날짜로 할지에 대한 판단 기준
  - 영업일 관행은 아래와 같이 시장에서 자주 쓰이는 몇 가지 기준을 열거형으로 만들어 놓았으며, 각각의 기준은 아래와 같음
    
::: warning BusinessDayConvention
* ql.Unadjusted : 조정 없음
* ql.Preceding : 직전 영업일로 조정
* ql.ModifiedPreceding : 직전 영업일로 조정하되, 월이 바뀔 경우 익 영업일로 조정
* ql.Following : 익 영업일로 조정
* ql.ModifiedFollowing : 익 영업일로 조정하되, 월이 바뀔 경우 직전 영업일로 조정
:::

* 월말기준(End of Month)
  - 월말기준은 기준 일자가 월의 마지막 영업일일 경우 한 달이라는 기간을 계속해서 영업일의 마지막 일자로 끊을 것인지 여부를 판단하는 것이다.
  - 예를 들어, 만약 오늘이 2024년 2월 29일이라고 가정을 하면 오늘은 2월의 마지막 영업일이 될 것이다.
  - 이때 월말기준이 True 라면 두 달 후의 날짜는 4월 28일이 아닌 4월의 마지막 영업일인 4월 30일이 된다.

* businessDaysBetween(from, to, includeFirst, includeLast)
  - 시작일(Date)과 종료일(Date)을 인자로 받아 두 날짜 사이의 영업일수를 계산해서 반환

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

만약 한국에 있는 트레이더가 유럽에 있는 트레이더와 미국 국채 2년 금리를 기초자산으로 하는 장외파생상품을 거래한다고 하자. 이때 트레이더들이 고려해야 할 달력은 한국, 유로존, 미국 총 3가지가 될 것이다.  
이들은 이 세 나라의 휴일을 모두 고려하여 이자지급일이나 금리 설정일 혹은 만기일을 정해야 한다.  
jointCalendar() 은 각각의 달력을 하나로 합쳐주는 역할을 한다. jointCalendar() 는 필요한 국가의 달력을 인자들로 받아 이를 합쳐 하나의 새로운 달력으로 만들어 준다.

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
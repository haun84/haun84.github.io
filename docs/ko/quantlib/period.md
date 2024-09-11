---
meta:
- name: title
  content: QuantLib Period Class
- name: description
  content: Period 클래스는 특정 기간을 정의하기 위해 존재한다
- name: keywords
  content: Quant, QuantLib, Period Class, 기간 클래스
- property: og:title
  content: QuantLib Period Class
- property: og:description
  content: Period 클래스는 특정 기간을 정의하기 위해 존재한다
- property: og:image
  content: /images/QuantLib.jpg
- property: og:url
  content: https://haun84.github.io/ko/quantlib/period.html
tags: ["QuantLib", "퀀트립", "quantlib", "Period", "Period Class", "QuantLib-Python"]
---

# QuantLib: Period Class

## Period 클래스 개요

::: tip Period Class 개요
모든 파생상품은 기본적으로 효력발생일, 만기일, 결제일, 이자지급일 등과 같이 상품에 대한 여러 가지 날짜 정보가 필요하다.  
  
이러한 정보들은 파생상품을 구성하는 기본적인 요소일 뿐만 아니라 이러한 정보들을 어떻게 정의하냐에 따라 상품의 가격이 다를 수 있기에, 파생상품을 거래하기 위한 거래명세서에는 이러한 디테일들이 매우 자세하게 기입되어 있다.  
  
이러한 날짜 정보가 필요한 이유는 본질적으로 어떤 상품의 만기가 얼마나 남았는지 혹은 이자지급일까지의 기간이 얼마나 남았는지 파악하기 위함이다.  
  
다시 말해 프라이싱 혹은 포지션 관리를 위해 우리가 관심을 가져야 할 사항은 사실 날짜가 아닌 기간이다.  
  
즉, 시간의 절대적인 시점보다는 상대적인 구간이 더 중요하다는 말이며, 우리의 관점은 점보다는 선에 초점이 맞춰줘야 한다는 뜻이다.
:::

## Period 클래스 구조

::: warning Period 클래스 구조
Date 클래스가 특정 날짜를 정의하기 위해 존재한다면, Period 클래스는 특정 기간을 정의하기 위해 존재한다. Period 클래스는 시점을 정확히 정의하는 것이 목적이 아니라 시점과 시점 사이의 기간을 정하기 위한 것이다. Period 클래스를 사용하기 위해서는 다음과 같은 구조를 따라야 한다.
:::

### Period 클래스 구현방법 #1

```python
import QuantLib as ql

# ql.Period(Integer, TimeUnits)
period = ql.Period(3, ql.Months)  # 3M
```
* 첫 번째 방식은 인자에 정수(Integer) 그리고 시간 단위(Time Units)를 설정해 주는 방식이다.
* 정수의 경우 일반적인 숫자를 입력하면 되지만 여기서 주의해야 할 것은 바로 시간이다. 퀀트립에는 각기 다른 목적을 위한 다양한 열거형이 존재한다.
* 열거형(Enumeration)이란 어떤 일련의 멤버들로 구성된 집합을 이루는 자료형을 의미하는데, 특정 열거형은 사용자가 어떤 목적을 위해 조직한 그룹과 같다.
* 시간 단위 또한 이러한 열거행의 하나로써 아래와 같은 멤버들을 가지고 있다.
* 예를 들어, 3개월이란 기간을 정의하고 싶다면 첫 번째 인자에 3 을, 두 번째 인자에 ql.Months 를 입력해 주면 된다.

::: warning TimeUnits
* ql.Days
* ql.Weeks
* ql.Months
* ql.Years
:::

### Period 클래스 구현방법 #2

```python
import QuantLib as ql

# ql.Period(Frequency)
period = ql.Period(ql.Semiannual)
print(period)  # 6M
```

* Period 클래스를 정의하는 두 번째 방식은 인자에 주기(Frequency)를 입력하는 방법이다.
* 퀀트립에서는 주기 또한 열거형으로 만들어져 있으며, 아래는 주기 열거형을 구성하고 있는 멤버들이다. 
* 이러한 주기 열거형은 특정 주기별로 이자를 지급하는 이자율 스왑이나 통화 스왑 같은 상품을 구현하는데 있어 자주 사용되는 기능이다.

::: warning Frequency
* ql.Annual
* ql.Semiannual
* ql.Quarterly
* ql.Monthly
* ql.Biweekly
* ql.Daily
* ql.Once
:::


## Period 클래스 기능

Period 클래스의 주요 기능은 Date 와 결합하여 날짜에 대한 산술 계산(Arithmetic Operation)을 가능하게 한다는 점이다. 예를 들어, 2020년 4월 11일부터 3주, 3개월, 혹은 3년 후의 날짜가 궁금하다고 하자.  
Date 클래스와 Period 클래스를 결합하면 이러한 질문들에 매우 쉽게 답할 수 있다. 이처럼 날짜에 특정 기간을 더하고 빼는 기능은 퀀트립이 가지고 있는 유용한 기능 중 하나이다. 이러한 산술 계산은 날짜와 날짜 간에도 가능한대, 이는 날짜와 날짜 사이의 기간이 얼마인지에 대한 답을 제공한다.

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
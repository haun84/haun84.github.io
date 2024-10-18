import{_ as e,c as l,a2 as i,G as n,B as t,o as h}from"./chunks/framework.CdbxnhrM.js";const y=JSON.parse('{"title":"QuantLib Schedule Class","description":"QuantLib Schedule 클래스의 목적은 시장관행들을 바탕으로 이자지급 스케줄을 생성하여 그것을 사용하는 금융상품 객체에 넘겨주는 것이다.","frontmatter":{"title":"QuantLib Schedule Class","description":"QuantLib Schedule 클래스의 목적은 시장관행들을 바탕으로 이자지급 스케줄을 생성하여 그것을 사용하는 금융상품 객체에 넘겨주는 것이다.","head":[["meta",{"property":"og:title","content":"QuantLib Schedule Class"}],["meta",{"property":"og:description","content":"QuantLib Schedule 클래스의 목적은 시장관행들을 바탕으로 이자지급 스케줄을 생성하여 그것을 사용하는 금융상품 객체에 넘겨주는 것이다."}],["meta",{"property":"og:image","content":"/images/QuantLib.jpg"}],["meta",{"property":"og:url","content":"https://haun84.github.io/ko/quantlib/schedule"}]]},"headers":[],"relativePath":"ko/quantlib/schedule.md","filePath":"ko/quantlib/schedule.md","lastUpdated":null}'),p={name:"ko/quantlib/schedule.md"};function k(d,s,E,c,o,r){const a=t("AdsInarticle");return h(),l("div",null,[s[0]||(s[0]=i('<h1 id="quantlib-schedule-class" tabindex="-1">QuantLib: Schedule Class <a class="header-anchor" href="#quantlib-schedule-class" aria-label="Permalink to &quot;QuantLib: Schedule Class&quot;">​</a></h1><p><strong>QuantLib Schedule 클래스의 목적은 시장관행들을 바탕으로 이자지급 스케줄을 생성하여 그것을 사용하는 금융상품 객체에 넘겨주는 것이다.</strong></p><div class="info custom-block"><p class="custom-block-title">Language</p><ul><li><a href="/quantlib/schedule">English Page: 영어 페이지</a></li></ul></div>',3)),n(a),s[1]||(s[1]=i('<h2 id="schedule-클래스-개요" tabindex="-1">Schedule 클래스 개요 <a class="header-anchor" href="#schedule-클래스-개요" aria-label="Permalink to &quot;Schedule 클래스 개요&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Schedule Class 스케줄 클래스</p><ul><li><p>채권, 스왑, 캡, 플로어 등과 같이 금리를 기초자산으로 하는 대부분의 <code>FICC</code>(Fixed Income, Currency, Commodity) 상품들은 이자지급 스케줄이라는 것이 존재한다.</p></li><li><p>이 <code>이자지급 스케줄</code>이란 주기적으로 이자가 발생하는 것에 대한 구체적인 일련의 날짜들을 의미한다.</p></li><li><p>일반적인 경우 보통 3개월 혹은 6개월 단위의 이자가 발생하기 때문에 이론적으로 이러한 이자지급 스케줄에 대해서 생각해보는 것은 그리 어렵지 않은 일이다.</p></li><li><p>하지만 실제 금융시장에서는 각 나라의 <code>휴일</code>, 상품에 따른 <code>시장관행</code>, <code>거래상대방과의 합의</code> 내용에 따라 구체적인 이자발생일이 조금씩 달라질 수 있다.</p></li><li><p>다시 말해, 이론적 모델링의 세계에서는 전혀 문제가 되지 않던 것이 실제 금융시장에서는 매우 큰 이슈가 될 수 있다.</p></li><li><p><code>QuantLib</code> 의 <code>Schedule</code> 클래스는 이러한 실제 디테일을 정교하게 구현할 수 있는 매우 유용한 도구이다.</p></li></ul></div>',2)),n(a),s[2]||(s[2]=i(`<h2 id="schedule-클래스-구조" tabindex="-1">Schedule 클래스 구조 <a class="header-anchor" href="#schedule-클래스-구조" aria-label="Permalink to &quot;Schedule 클래스 구조&quot;">​</a></h2><p><code>Schedule</code> 클래스는 이전까지 봤던 클래스보다 본질적으로 구조가 더 복잡하다. <code>Schedule</code> 클래스는 이자지급 스케줄을 생성하기 위해서 필요한 <code>클래스</code>들과 <code>열거형</code>들을 취합하는 역할을 담당하기 때문이다.</p><p>다시 말해, 구체적인 이자지급 스케줄을 생성하기 위해 <code>거래명세서</code>에 적혀 있는 여러가지 <code>시장관행</code>들을 반영해야 하는데 <code>Schedule</code> 클래스가 그 기능을 담당하고 있다.</p><p>아래는 <code>Schedule</code> 클래스를 구현하기 위한 구조를 나타내고 있다.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ql.Schedule(Date effectiveDate,                              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 효력발생일</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Date terminationData,                            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 만기일</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Period tenor,                                    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 이자지급주기</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Calendar calendar,                               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 달력</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            BusinessDayConvention convention,                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 이자결제일의 영업일 관행</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            BusinessDayConvention terminationDateConvention, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 만기일의 영업일 관행</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            DateGeneration rule,                             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 날짜생성방식</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Bool endOfMonth)                                 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 월말기준</span></span></code></pre></div><p>여기서 <code>DateGeneration</code> 은 어떤 방식으로 이자지급일에 대한 스케줄을 만들 것인가를 정해주는 열거형이다.</p><div class="warning custom-block"><p class="custom-block-title">DateGeneration</p><ul><li>ql.Backward : 만기일로부터 효력발생일까지 후진(Backward) 방식으로 이자지급 스케줄을 생성한다</li><li>ql.Forward : 효력발생일로부터 만기일까지 전진(Forward) 방식으로 이자지급 스케줄을 생성한다</li><li>ql.Zero : 효력발생일과 만기일 사이에 어떠한 결제일도 존재하지 않는다</li><li>ql.ThirdWednesday : 효력발생일과 만기일을 제외한 모든 중간 이자지급일을 해당 월의 세 번째 수요일로 지정한다</li><li>ql.Twentieth : 효력발생일을 제외한 모든 이자지급일을 해당 월의 20일로 지정한다</li><li>ql.TwentiethIMM : 효력발생일을 제외한 모든 이자지급일을 3, 6, 9, 12월 20일로 지정한다</li></ul></div><p>또한 <code>endOfMonth</code>는 월말기준을 판단하는 인자이다.</p><div class="danger custom-block"><p class="custom-block-title">endOfMonth</p><ul><li><p><code>endOfMonth</code>는 월말기준을 판단하는 인자로써, 이 값이 <code>True</code>이면 효력발생일이 월말 영업일이라면 스케줄을 생성할 때 각 이자지급일을 월말 영업일로 맞추도록 조정하는 역할을 한다.</p></li><li><p>만약 이 값이 <code>False</code>이면 효력발생일이 어떤 날인가에 상관없이 일반적인 일수계산방식을 사용해 스케줄을 생성한다.</p></li><li><p>만약 2월 28일이 월말 영업일이고 <code>endOfMonth</code> 값이 <code>True</code>이면 3개월 후의 이자지급일은 4월 28일이 아닌 4월 30일(월말 영업일일 경우)이 된다.</p></li></ul></div><p>아래의 소스코드는 <code>Schedule</code> 클래스를 구현하기 위해 필요한 <code>입력변수</code>들과 <code>Schedule</code> 클래스의 구현 예시이다.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QuantLib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Components</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">effectiveDate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Date(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2023</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">terminationDate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Date(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2026</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tenor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Period(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ql.Months)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">calendar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.NullCalendar()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">convention </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.ModifiedFollowing</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">terminationDateConvention </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.ModifiedFollowing</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rule </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.DateGeneration.Backward</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">endOfMonth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> False</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Construction</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schedule </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Schedule(effectiveDate,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                       terminationDate,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                       tenor,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                       calendar,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                       convention,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                       terminationDateConvention,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                       rule,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                       endOfMonth)</span></span></code></pre></div>`,11)),n(a),s[3]||(s[3]=i(`<h2 id="schedule-클래스-기능" tabindex="-1">Schedule 클래스 기능 <a class="header-anchor" href="#schedule-클래스-기능" aria-label="Permalink to &quot;Schedule 클래스 기능&quot;">​</a></h2><p><code>Schedule</code> 클래스의 목적은 시장관행들을 바탕으로 이자지급 스케줄을 생성하여 그것을 사용하는 금융상품 객체에 넘겨주는 것이다.</p><div class="tip custom-block"><p class="custom-block-title">Schedule 클래스 목적</p><ul><li><p>예를 들어, <code>QuantLib</code>을 사용해 <code>한국 국채</code>를 구현한다고 했을 때 <code>한국 국채</code>라는 객체를 만드는 과정에서 <code>이자지급 스케줄</code>이 필요하고 이것을 바로 이 <code>Schedule</code> 이라는 클래스가 수행하게 된다.</p></li><li><p>이러한 Schedule 클래스의 특성 상 이 클래스에는 실제 구현 상에서 사용할 만한 명시적인 메서드들이 딱히 존재하지 않는다. 자신의 결과믈을 실제 우리가 프라이상하고자 하는 상품에 넘겨주면서 Schedule 클래스의 역할은 다하기 때문이다.</p></li></ul></div><p>다만, 실제 구현에서 종종 사용하는 <code>nextDate</code>와 <code>previousDate</code>라는 메서드는 확인하고 넘어가자.</p><div class="warning custom-block"><p class="custom-block-title">Shcedule 클래스 함수</p><ul><li><code>nextDate(Date)</code> : 입력받은 날짜(Date) 바로 다음의 이자지급일 반환</li><li><code>previousDate(Date)</code> : 입력받은 날짜(Date) 바로 직전의 이자지급일 반환</li></ul></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QuantLib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ref_date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Date(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Functions</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Previous Payment Date from </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ref_date.ISO()</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schedule.previousDate(ref_date).ISO()</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Next Payment Date from </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ref_date.ISO()</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schedule.nextDate(ref_date).ISO()</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Output</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Previous Payment Date from 2024-08-15 : 2024-06-10</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Next Payment Date from 2024-08-15 : 2024-12-10</span></span></code></pre></div><h2 id="makeschedule" tabindex="-1">MakeSchedule <a class="header-anchor" href="#makeschedule" aria-label="Permalink to &quot;MakeSchedule&quot;">​</a></h2><p><code>ql.MakeSchedule(effectiveDate, terminationDate, frequency)</code></p><div class="warning custom-block"><p class="custom-block-title">Optional params</p><ul><li>calendar=None</li><li>convention=None</li><li>terminalDateConvention=None</li><li>rule=None</li><li>forwards=False</li><li>backwards=False</li><li>endOfMonth=None</li><li>firstDate=None</li><li>nextToLastDate=None</li></ul></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QuantLib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">effectiveDate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Date(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2020</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">terminationDate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Date(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2022</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">frequency </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Period(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;6M&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schedule </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.MakeSchedule(effectiveDate, terminationDate, frequency)</span></span></code></pre></div>`,10))])}const u=e(p,[["render",k]]);export{y as __pageData,u as default};
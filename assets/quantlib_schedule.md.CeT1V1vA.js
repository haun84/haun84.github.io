import{_ as a,B as t,c as n,a2 as i,G as l,o as h}from"./chunks/framework.rTf5PlzF.js";const y=JSON.parse(`{"title":"QuantLib Schedule Class","description":"The purpose of the schedule class is to create an 'interest payment schedule' based on market conventions and hand it over to a 'financial product object' that uses it","frontmatter":{"title":"QuantLib Schedule Class","description":"The purpose of the schedule class is to create an 'interest payment schedule' based on market conventions and hand it over to a 'financial product object' that uses it","head":[["meta",{"property":"og:title","content":"QuantLib Schedule Class"}],["meta",{"property":"og:description","content":"The purpose of the schedule class is to create an 'interest payment schedule' based on market conventions and hand it over to a 'financial product object' that uses it"}],["meta",{"property":"og:image","content":"/images/QuantLib.jpg"}],["meta",{"property":"og:url","content":"https://haun84.github.io/quantlib/schedule"}]]},"headers":[],"relativePath":"quantlib/schedule.md","filePath":"en/quantlib/schedule.md","lastUpdated":null}`),p={name:"quantlib/schedule.md"};function d(o,s,k,r,c,E){const e=t("AdsInarticle");return h(),n("div",null,[s[0]||(s[0]=i('<h1 id="quantlib-schedule-class" tabindex="-1">QuantLib: Schedule Class <a class="header-anchor" href="#quantlib-schedule-class" aria-label="Permalink to &quot;QuantLib: Schedule Class&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">Language</p><ul><li><a href="/ko/quantlib/schedule">한국어 페이지: Korean Page</a></li></ul></div><p>The purpose of the schedule class is to create an &#39;interest payment schedule&#39; based on market conventions and hand it over to a &#39;financial product object&#39; that uses it.</p><h2 id="schedule-class-overview" tabindex="-1">Schedule Class Overview <a class="header-anchor" href="#schedule-class-overview" aria-label="Permalink to &quot;Schedule Class Overview&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Schedule Class</p><ul><li><p>Most <code>FICC</code>(Fixed Income, Currency, Commodity) products with interest rates as underlying assets, such as bonds, swaps, caps, and floors, have interest payment schedules.</p></li><li><p>This <code>interest payment schedule</code> means a specific set of dates for periodic interest accruals.</p></li><li><p>In general, interest is usually accrued every three or six months, so it is theoretically not that difficult to think about such an interest payment schedule.</p></li><li><p>However, in the actual financial market, the specific interest accrual date may vary slightly depending on the contents of each country&#39;s <code>holiday</code>, <code>market convention</code>, and <code>agreement with the counterparty</code>.</p></li><li><p>In other words, what was not a problem at all in the world of theoretical modeling can be a very big issue in the actual financial market.</p></li><li><p>The <code>Schedule</code> class of <code>QuantLib</code> is a very useful tool that can precisely implement these real details.</p></li></ul></div>',5)),l(e),s[1]||(s[1]=i(`<h2 id="schedule-class-structure" tabindex="-1">Schedule Class Structure <a class="header-anchor" href="#schedule-class-structure" aria-label="Permalink to &quot;Schedule Class Structure&quot;">​</a></h2><p>The <code>Schedule</code> class is essentially more complex than the class we have seen before. This is because the <code>Schedule</code> class plays a role in collecting the <code>class</code> and <code>enumeration type</code> necessary to generate interest payment schedules.</p><p>In other words, in order to generate a specific interest payment schedule, various <code>market conventions</code> written in the <code>transaction specification</code> must be reflected, and the <code>Schedule</code> class is in charge of its function.</p><p>The following shows the structure for implementing the <code>Schedule</code> class.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ql.Schedule(Date effectiveDate,                              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Effective Date</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Date terminationData,                            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Maturity Date</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Period tenor,                                    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Interest Payment Cycle</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Calendar calendar,                               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Calendar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            BusinessDayConvention convention,                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># BusinessDayConvention on Interest Settlement Date</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            BusinessDayConvention terminationDateConvention, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># BusinessDayConvention at Maturity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            DateGeneration rule,                             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># DateGeneration</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Bool endOfMonth)                                 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># End Of Month</span></span></code></pre></div><p>Here, <code>Date Generation</code> is an enumerated type that determines how to create a schedule for the interest payment date.</p><div class="warning custom-block"><p class="custom-block-title">DateGeneration</p><ul><li>ql.Backward : generate an interest payment schedule in a backward manner from the maturity date to the effective date</li><li>ql.Forward : generate interest payment schedules in a forward manner from the effective date to the maturity date</li><li>ql.Zero : No settlement date exists between the effective date and the maturity date</li><li>ql.ThirdWednesday : Designate all interim interest payment dates as the third Wednesday of the month, excluding effective and maturity dates</li><li>ql.Twentieth : All interest payment dates except effective date shall be designated as the 20th of the month</li><li>ql.TwentiethIMM : Designate all interest payment dates as March, June, September, and December 20 except effective dates</li></ul></div><p>In addition, <code>endOfMonth</code> is a factor that judges monthly standards.</p><div class="danger custom-block"><p class="custom-block-title">endOfMonth</p><ul><li><p><code>endOfMonth</code> is a factor that determines the end-of-month basis, and if this value is <code>True</code>, it plays a role in adjusting each interest payment date to the end-of-month business date when creating the schedule if the effective date is the end-of-month business day.</p></li><li><p>If this value is <code>False</code>, the schedule is created using the general number of days calculation method regardless of the effective date.</p></li><li><p>If <code>February 28</code> is the end-of-month business day and the value of <code>endOfMonth</code> is <code>True</code>, the interest payment date after three months will be <code>April 30</code> (if it is the end-of-month business day), not <code>April 28</code>.</p></li></ul></div><p>The source code below is an example of the <code>input variables</code> required to implement the <code>Schedule</code> class.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QuantLib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                       endOfMonth)</span></span></code></pre></div><h2 id="schedule-class-functions" tabindex="-1">Schedule Class Functions <a class="header-anchor" href="#schedule-class-functions" aria-label="Permalink to &quot;Schedule Class Functions&quot;">​</a></h2><p>The purpose of the <code>schedule class</code> is to create an <code>interest payment schedule</code> based on market conventions and hand it over to a <code>financial product object</code> that uses it</p><div class="tip custom-block"><p class="custom-block-title">Schedule Class Purpose</p><ul><li><p>For example, when <code>Korean government bonds</code> are implemented using <code>QuantLib</code>, an <code>interest payment schedule</code> is required in the process of creating an object called <code>Korean government bonds</code>, and this class called <code>Schedule</code> performs this.</p></li><li><p>Due to the nature of this schedule class, there are no explicit methods that can be used in practical implementation in this class. This is because the schedule class plays a role by handing over its own result to the product we actually want to make.</p></li></ul></div><p>However, let&#39;s check the methods <code>nextDate</code> and <code>previousDate</code>, which are often used in actual implementations, and move on.</p><div class="warning custom-block"><p class="custom-block-title">Schedule Class Functions</p><ul><li><code>nextDate(Date)</code> : Return the interest payment date immediately following the date entered (Date)</li><li><code>previousDate(Date)</code> : Return the interest payment date immediately before the date entered (Date)</li></ul></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QuantLib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schedule </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.MakeSchedule(effectiveDate, terminationDate, frequency)</span></span></code></pre></div>`,21))])}const g=a(p,[["render",d]]);export{y as __pageData,g as default};
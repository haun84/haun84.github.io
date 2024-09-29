import{_ as s,c as a,a3 as n,o as t}from"./chunks/framework.BRvtVtzd.js";const E=JSON.parse('{"title":"QuantLib: Python Examples","description":"","frontmatter":{"meta":[{"name":"title","content":"QuantLib-Python Examples"},{"name":"description","content":"QuantLib-Python Simple Examples"},{"name":"keywords","content":"Quant, QuantLib, Simple Examples, Modules, European Call Option, Pricing a Fixed Income Bond, Pricing an Interest Rate Swap, Pricing a Currency Option, Pricing a Commodity Forward"},{"property":"og:title","content":"QuantLib-Python Examples"},{"property":"og:description","content":"QuantLib-Python Simple Examples"},{"property":"og:type","content":"website"},{"property":"og:image","content":"/images/QuantLib.jpg"},{"property":"og:url","content":"https://haun84.github.io/quantlib/examples.html"}],"tags":["QuantLib","quantlib","QuantLib-Python","Examples","Modules","European Call Option","Fixed Income Bond","Interest Rate Swap","Currency Option","Commodity Forward","QuantLib Python Examples"]},"headers":[],"relativePath":"quantlib/examples.md","filePath":"en/quantlib/examples.md","lastUpdated":null}'),e={name:"quantlib/examples.md"};function l(h,i,p,k,r,d){return t(),a("div",null,i[0]||(i[0]=[n(`<h1 id="quantlib-python-examples" tabindex="-1">QuantLib: Python Examples <a class="header-anchor" href="#quantlib-python-examples" aria-label="Permalink to &quot;QuantLib: Python Examples&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">Language</p><ul><li><a href="/ko/quantlib/examples">한국어 페이지: Korean Page</a></li></ul></div><div class="tip custom-block"><p class="custom-block-title">QuantLib</p><ul><li><p><code>QuantLib</code> is a powerful open-source library for <code>quantitative finance</code> and <code>financial instrument pricing</code> and <code>analysis</code>.</p></li><li><p>It is written in <code>C++</code>, but it also provides <code>Python</code> bindings, making it accessible to Python developers.</p></li><li><p><code>QuantLib</code> is widely used in the finance industry for tasks such as <code>pricing derivatives</code>, <code>risk management</code> and <code>financial instrument modeling</code>.</p></li><li><p>Let&#39;s break down the structure of the <code>QuantLib library</code> in <code>Python</code>.</p></li></ul></div><h2 id="quantlib-modules" tabindex="-1">QuantLib Modules <a class="header-anchor" href="#quantlib-modules" aria-label="Permalink to &quot;QuantLib Modules&quot;">​</a></h2><p><code>QuantLib</code> is organized into various modules, each of which focuses on a specific aspect of <code>quantitative finance</code>. Some of the core modules include:</p><h3 id="quantlib" tabindex="-1">QuantLib <a class="header-anchor" href="#quantlib" aria-label="Permalink to &quot;QuantLib&quot;">​</a></h3><ul><li>This is the main module that provides the core functionality of the QuantLib library. It contains classes and functions for <code>modeling financial instruments</code>, <code>term structures</code>, and various <code>financial calculations</code>.</li></ul><h3 id="quantlib-pricingengines" tabindex="-1">QuantLib.PricingEngines <a class="header-anchor" href="#quantlib-pricingengines" aria-label="Permalink to &quot;QuantLib.PricingEngines&quot;">​</a></h3><ul><li>This module contains <code>pricing engines</code> for different types of <code>financial instruments</code> such as <code>options</code>, <code>bonds</code>, and <code>swaps</code>. These <code>engines</code> are used to calculate the <code>fair value</code> of these instruments.</li></ul><h3 id="quantlib-instruments" tabindex="-1">QuantLib.Instruments <a class="header-anchor" href="#quantlib-instruments" aria-label="Permalink to &quot;QuantLib.Instruments&quot;">​</a></h3><ul><li>Here, you&#39;ll find classes that represent various <code>financial instruments</code>, including <code>options</code> (e.g., <code>EuropeanOption</code>), <code>bonds</code> (e.g., <code>FixedRateBond</code>), and <code>swaps</code> (e.g., <code>InterestRateSwap</code>).</li></ul><h3 id="quantlib-calendars" tabindex="-1">QuantLib.Calendars <a class="header-anchor" href="#quantlib-calendars" aria-label="Permalink to &quot;QuantLib.Calendars&quot;">​</a></h3><ul><li>This module deals with <code>financial calendars</code>, which are essential for calculating dates related to <code>financial instruments</code>. It includes classes for different <code>financial calendars</code>, <code>holidays</code>, and <code>business day conventions</code>.</li></ul><h3 id="quantlib-currencies" tabindex="-1">QuantLib.Currencies <a class="header-anchor" href="#quantlib-currencies" aria-label="Permalink to &quot;QuantLib.Currencies&quot;">​</a></h3><ul><li>This module provides classes to work with different <code>currencies</code>, including <code>currency codes</code>, <code>exchange rates</code>, and <code>conversion functions</code>.</li></ul><h3 id="quantlib-marketdata" tabindex="-1">QuantLib.MarketData <a class="header-anchor" href="#quantlib-marketdata" aria-label="Permalink to &quot;QuantLib.MarketData&quot;">​</a></h3><ul><li>This module deals with market data such as <code>interest rates</code>, <code>yield curves</code>, and <code>volatility surfaces</code>. It provides tools to manage and <code>interpolate market data</code>.</li></ul><h3 id="quantlib-time" tabindex="-1">QuantLib.Time <a class="header-anchor" href="#quantlib-time" aria-label="Permalink to &quot;QuantLib.Time&quot;">​</a></h3><ul><li>Time-related calculations are crucial in finance. This module contains classes and functions for managing <code>dates</code>, <code>time periods</code>, and <code>day counting conventions</code>.</li></ul><h3 id="quantlib-solvers" tabindex="-1">QuantLib.Solvers <a class="header-anchor" href="#quantlib-solvers" aria-label="Permalink to &quot;QuantLib.Solvers&quot;">​</a></h3><ul><li><code>Solvers</code> are used to find solutions to various <code>mathematical problems</code>, such as <code>root finding</code> and <code>optimization</code>. This module provides tools for solving <code>financial equations</code>.</li></ul><h2 id="understanding-quantlib-design-structure" tabindex="-1">Understanding QuantLib Design Structure <a class="header-anchor" href="#understanding-quantlib-design-structure" aria-label="Permalink to &quot;Understanding QuantLib Design Structure&quot;">​</a></h2><p>Let&#39;s find out the overall framework of <code>QuantLib</code>.</p><h3 id="derivatives" tabindex="-1">Derivatives <a class="header-anchor" href="#derivatives" aria-label="Permalink to &quot;Derivatives&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Derivatives Object: <code>Instrument Class</code></p><ul><li><p>QuantLib is a tool for easily pricing derivatives. In addition, since the QuantLib has an object-oriented structure, everything is an object.</p></li><li><p>The most important object in a QuantLib is the derivatives itself because it is a tool for pricing derivatives.</p></li><li><p>QuantLib manages these derivatives in a group of instrument class. Each individual derivatives object can be implemented through the subclasses of this instrument class.</p></li></ul></div><h3 id="pricing-engine" tabindex="-1">Pricing Engine <a class="header-anchor" href="#pricing-engine" aria-label="Permalink to &quot;Pricing Engine&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">Pricing Engine Object: <code>PricingEngine Class</code></p><ul><li><p>The subject of derivatives pricing is the derivatives object. Next is how to pricing the derivatives.</p></li><li><p>A tool for derivatives pricing is needed, and in QuantLib, the tool for this very pricing is implemented in a class called PricingEngine.</p></li><li><p>The PricingEngine class can also determine how to pricing through the subclasses.</p></li></ul></div><h3 id="underlying-assets" tabindex="-1">Underlying Assets <a class="header-anchor" href="#underlying-assets" aria-label="Permalink to &quot;Underlying Assets&quot;">​</a></h3><div class="danger custom-block"><p class="custom-block-title">Underlying Assets Object: <code>Quote Class</code>, <code>TermStructure Class</code></p><ul><li><p>By definition, a financial product called a derivatives is bound to be affected by changes in its underlying assets, so it is essential to implement an underlying asset when implementing a derivatives pricing.</p></li><li><p>In order to implement the underlying asset object, there are Quote class and TermStructure class in QuantLib.</p></li></ul></div><h3 id="performing-a-pricing" tabindex="-1">Performing a pricing <a class="header-anchor" href="#performing-a-pricing" aria-label="Permalink to &quot;Performing a pricing&quot;">​</a></h3><p>In order for the QuantLib to function properly, these three objects are necessary: <code>derivatives</code>, <code>pricing engine</code>, and <code>underlying assets</code>. If there is no one of these three main objects, the QuantLib cannot perform pricing normally.</p><p>QuantLib is to perform pricing by handing over information about underlying assets to the pricing engine and then handing this pricing engine back to the derivatives.</p><blockquote><ul><li>Underlying Asset -&gt; PricingEngine -&gt; Derivatives -&gt; Pricing Result</li></ul></blockquote><h2 id="sample-codes-of-pricing" tabindex="-1">Sample Codes of Pricing <a class="header-anchor" href="#sample-codes-of-pricing" aria-label="Permalink to &quot;Sample Codes of Pricing&quot;">​</a></h2><p>To use <code>QuantLib</code> in <code>Python</code>, you typically start by importing the necessary <code>modules</code> and <code>classes</code>.</p><p>You can create <code>financial instruments</code>, set up <code>pricing engines</code>, and perform <code>calculations</code> based on your specific needs.</p><p>Here&#39;s a simple example of how to use <code>QuantLib</code> in <code>Python</code> to calculate the price of a <code>financial instruments</code>.</p><h3 id="pricing-a-european-call-option" tabindex="-1">Pricing a European Call Option <a class="header-anchor" href="#pricing-a-european-call-option" aria-label="Permalink to &quot;Pricing a European Call Option&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QuantLib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Set Date</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">valuationDate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Date(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">28</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ql.Settings.instance().evaluationDate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> valuationDate</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">calendar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.NullCalendar()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dayCount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Actual360()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Define Option Parameters</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">option_type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Option.Call</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">underlying_price </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">strike_price </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 105</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">maturity_date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Date(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2025</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">volatility </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">risk_free_rate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.05</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dividend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.01</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Simple Quote Objects</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">underlying_qt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.SimpleQuote(underlying_price)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dividend_qt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.SimpleQuote(dividend)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">risk_free_rate_qt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.SimpleQuote(risk_free_rate)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">volatility_qt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.SimpleQuote(volatility)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Quote Handle Objects</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">u_qhd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.QuoteHandle(underlying_qt)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d_qhd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.QuoteHandle(dividend_qt)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r_qhd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.QuoteHandle(risk_free_rate_qt)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v_qhd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.QuoteHandle(volatility_qt)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Term-Structure Objects</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d_ts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.FlatForward(valuationDate, d_qhd, dayCount)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r_ts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.FlatForward(valuationDate, r_qhd, dayCount)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v_ts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.BlackConstantVol(valuationDate, calendar, v_qhd, dayCount)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Term-Structure Handle Objects</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d_thd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.YieldTermStructureHandle(d_ts)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r_thd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.YieldTermStructureHandle(r_ts)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v_thd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.BlackVolTermStructureHandle(v_ts)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Process &amp; Engine</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">process </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.BlackScholesMertonProcess(u_qhd, d_thd, r_thd, v_thd)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">engine </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.AnalyticEuropeanEngine(process)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Option Objects</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">exercise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.EuropeanExercise(maturity_date)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">payoff </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.PlainVanillaPayoff(option_type, strike_price)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">option </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.VanillaOption(payoff, exercise)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Set the pricing engine for the option</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">option.setPricingEngine(engine)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Price &amp; Greeks Results</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option Price:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option.NPV(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option Delta:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option.delta(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option Gamma:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option.gamma(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option Theta:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option.thetaPerDay(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option Vega:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option.vega() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option Rho:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option.rho() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Automatic Re-Pricing</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">underlying_qt.setValue(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">103</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Automatic Re-Pricing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option Price:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option.NPV(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option Delta:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option.delta(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option Gamma:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option.gamma(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option Theta:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option.thetaPerDay(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option Vega:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option.vega() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Option Rho:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(option.rho() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Output</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Option Price: 7.85</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Option Delta: 0.5235</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Option Gamma: 0.0191</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Option Theta: -0.0151</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Option Vega: 0.4061</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Option Rho: 0.4734</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># # Automatic Re-Pricing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Option Price: 9.5</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Option Delta: 0.5794</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Option Gamma: 0.0181</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Option Theta: -0.0158</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Option Vega: 0.4097</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Option Rho: 0.5338</span></span></code></pre></div><h3 id="pricing-a-fixed-income-bond" tabindex="-1">Pricing a Fixed Income Bond <a class="header-anchor" href="#pricing-a-fixed-income-bond" aria-label="Permalink to &quot;Pricing a Fixed Income Bond&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QuantLib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Define bond parametes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">face_value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">issue_date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Date(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2021</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">maturity_date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Date(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2031</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">coupon_rate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.05</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">settlement_date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Date(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2023</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Create QuantLib objects</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schedule </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.MakeSchedule(issue_date, maturity_date, ql.Period(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;6M&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">interest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.FixedRateLeg(schedule, ql.Actual360(), [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.05</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bond </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Bond(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ql.TARGET(), issue_date, interest)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Set Pricing Engine</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">crv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.FlatForward(settlement_date, coupon_rate, ql.Actual360())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.YieldTermStructureHandle(crv)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">engine </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.DiscountingBondEngine(yts)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bond.setPricingEngine(engine)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Calculate bond price</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bond_price </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bond.cleanPrice()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Fixed Income Bond Price:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">round</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bond_price, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Output</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Fixed Income Bond Price: 99.6176</span></span></code></pre></div>`,41)]))}const c=s(e,[["render",l]]);export{E as __pageData,c as default};

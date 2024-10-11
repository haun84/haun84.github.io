import{_ as e,B as l,c as n,a2 as i,G as t,o as p}from"./chunks/framework.rTf5PlzF.js";const g=JSON.parse('{"title":"QuantLib Quote Class","description":"Quote 클래스와 SimpleQuote 클래스 같은 이의 하위 클래스들은 시장 기초자산을 관찰자 패턴에 따른 관찰대상(Observable)으로 객체화 시켜주는 역할을 한다.","frontmatter":{"title":"QuantLib Quote Class","description":"Quote 클래스와 SimpleQuote 클래스 같은 이의 하위 클래스들은 시장 기초자산을 관찰자 패턴에 따른 관찰대상(Observable)으로 객체화 시켜주는 역할을 한다.","head":[["meta",{"property":"og:title","content":"QuantLib Quote Class"}],["meta",{"property":"og:description","content":"Quote 클래스와 SimpleQuote 클래스 같은 이의 하위 클래스들은 시장 기초자산을 관찰자 패턴에 따른 관찰대상(Observable)으로 객체화 시켜주는 역할을 한다."}],["meta",{"property":"og:image","content":"/images/QuantLib.jpg"}],["meta",{"property":"og:url","content":"https://haun84.github.io/ko/quantlib/quote"}]]},"headers":[],"relativePath":"ko/quantlib/quote.md","filePath":"ko/quantlib/quote.md","lastUpdated":null}'),h={name:"ko/quantlib/quote.md"};function o(k,s,d,c,r,E){const a=l("AdsInarticle");return p(),n("div",null,[s[0]||(s[0]=i(`<h1 id="quantlib-quote-class" tabindex="-1">QuantLib: Quote Class <a class="header-anchor" href="#quantlib-quote-class" aria-label="Permalink to &quot;QuantLib: Quote Class&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">Language</p><ul><li><a href="/quantlib/quote">English Page: 영어 페이지</a></li></ul></div><p><code>Quote 클래스</code>와 <code>SimpleQuote 클래스</code> 같은 이의 하위 클래스들은 시장 <code>기초자산</code>을 <code>관찰자 패턴</code>에 따른 <code>관찰대상(Observable)</code>으로 객체화 시켜주는 역할을 한다.</p><h2 id="파생상품과-프라이싱" tabindex="-1">파생상품과 프라이싱 <a class="header-anchor" href="#파생상품과-프라이싱" aria-label="Permalink to &quot;파생상품과 프라이싱&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">파생상품(Derivatives)과 프라이싱(Pricing)</p><ul><li><p>금융공학의 본질적인 목적은 <code>파생상품을 프라이싱 하는 것</code>이다.</p></li><li><p><code>파생상품(Derivatives)</code>이란 단어의 의미 그대로 <code>기초자산의 가격 변화</code>에 의해 그것의 가치가 <code>파생돼(Derived)</code> 나오는 상품을 의미한다.</p></li><li><p>그렇기 때문에 기초자산과 파생상품의 관계는 마치 함수에서의 입력과 출력으로 대비될 수 있다.</p></li><li><p>입력 변수가 달라지면 그에 따른 출력값이 달라지듯 기초자산의 가격이 바뀜에 따라 파생상품의 이론적 가치도 자동적으로 변하기 때문이다.</p><blockquote><p>입력: 기초자산 -&gt; 함수: 프라이상 메커니즘 -&gt; 출력: 파생상품 가치</p></blockquote></li><li><p>그리고 <code>프라이싱(Pricing)</code>이란 현재의 시장 상황 하에서 파생상품의 이론적 가치가 과연 얼마가 될 것인가를 합리적인 방식으로 측정하는 작업을 의미한다.</p></li><li><p>다시 말해, 프라이싱이란 파생상품에 영향을 미치는 <code>기초자산의 변화를 인지</code>하고, 그 상황에 맞게 <code>파생상품의 가치를 계산</code>해 보는 것이다.</p></li><li><p>결국 파생상품을 프라이싱하기 위해 중요한 것은 시장의 변화를 바로바로 인지하여 실시간으로 그것을 프라이싱 과정에 반영하는 것이라고 할 수 있다.</p></li></ul></div><h2 id="퀀트립-설계구조의-특징-관찰자-패턴-observer-pattern" tabindex="-1">퀀트립 설계구조의 특징: 관찰자 패턴(Observer Pattern) <a class="header-anchor" href="#퀀트립-설계구조의-특징-관찰자-패턴-observer-pattern" aria-label="Permalink to &quot;퀀트립 설계구조의 특징: 관찰자 패턴(Observer Pattern)&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">관찰자 패턴(Observer Pattern)</p><ul><li><p>퀀트립은 설계 당시 이러한 프라이싱의 본질을 퀀트립의 프레임워크 안에 충실히 녹여내고자 소프트웨어 공학에서 자주 사용되는 <code>디자인 패턴(Desing Pattern)</code> 중 하나인 <code>관찰자 패턴</code>을 퀀트립 설계구조의 주요 뼈대 중 하나로 채택하였다.</p></li><li><p><code>관찰자 패턴(Observer Pattern)</code>이란 외부에 어떤 변화가 발생했을 때 <code>그 변화를 자동적으로 감지</code>하고 <code>그것을 반영</code>하기 위한 소프트웨어 공학적 구현 스타일을 의미한다. 기술적으로는 객체의 상태 변화를 관찰하는 <code>관찰자들(Observers)</code>, 즉 옵저버들의 목록을 객체에 등록하여 상태 변화가 있을 때마다 메서드 등을 통해 객체가 직접 목록의 각 옵저버에게 통지하도록 하는 디자인 패턴이다.</p></li><li><p>이러한 관찰자 패턴은 여러 가지 소프트웨어에서 쉽게 찾아볼 수 있다. 엑셀에서 그래프를 그렸을 때 그 그래프가 보고 있는 데이터 자체를 바꿔주면 해당 그래프가 자동으로 데이터에 맞게 바뀌는 현상이 바로 관찰자 패턴의 대표적인 예시이다.</p></li><li><p>즉, 관찰자 패턴은 관찰 대상을 계속 예의주시하고 있다가 그것에 변화가 생기면 실시간으로 이와 관련 있는 모든 요소들을 적절히 바꿔주는 역할을 담당한다.</p></li><li><p>관찰자 패턴은 프라이싱 매커니즘에 매우 최적화된 디자인 패턴이다. 그 이유는 프라이싱의 본질이 앞에서도 언급했듯이 기초자산의 변화를 감지하고 이를 실시간으로 파생상품 가격에 적절히 반영하는 것이기 때문이다. 퀀트립의 설계자들은 이러한 소프트웨어 공학과 금융공학의 공통분모를 제대로 파악하여 퀀트립의 뼈대를 세웠다.</p></li></ul></div><div class="danger custom-block"><p class="custom-block-title">관찰자(Observer)와 관찰대상(Observable)</p><ul><li><p>퀀트립의 관찰자 패턴은 기본적으로 변화를 관찰하는 <code>관찰자(Observer)</code>와 관찰을 당하는 <code>관찰대상(Observable)</code>, 두 가지로 구성되어 있다.</p></li><li><p>퀀트립에서 <code>관찰자</code>와 <code>관찰대상</code>은 각각 <code>프라이싱엔진</code>과 <code>기초자산</code>에 대비된다. 결국 파생상품의 가격에 영향을 미치는 것은 기초자산이므로 <code>기초자산의 변화</code>가 트리거로 작용해 <code>파생상품 평가</code>를 위한 프라이싱 엔진에 새로운 업데이트를 인지시켜주어야 하기 때문이다.</p></li><li><p><code>프라이상엔진은 관찰자</code>로서 <code>관찰대상인 기초자산</code>을 예의주시하고 있다가 어느 순간 그것에 변화가 발생하면 그 즉시 이를 반영하여 파생상품을 새롭게 프라이상해야 한다.</p></li><li><p>퀀트립에서는 파생상품 평가를 위한 프라이싱엔진 자체를 <code>PricingEngine</code> 이라는 클래스로 한데 묶어 관리하고 있으며 각각의 기초자산은 <code>Quote</code> 라는 클래스로부 시작하여 빌드업을 해나가는 구조이다.</p></li><li><p>퀀트립이 금융공학 프라이상을 위한 최적의 도구로 자리매김할 수 있었던 이유는 바로 이 퀀트립 구조에 내재되어 있는 관찰자 패턴의 위력 덕분이라고 해도 과언이 아니다.</p></li></ul></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 관찰자 패턴 예시</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QuantLib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> raiseFlag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    global</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flag</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    flag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">me </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.SimpleQuote(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.Observer(raiseFlag)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obs.registerWith(me)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">me.setValue(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flag:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Case 1: Observer was not notified of market element change&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obs.unregisterWith(me)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">me.setValue(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flag:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Case 2: Observer was not notified of market element change&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,9)),t(a),s[1]||(s[1]=i(`<h2 id="quote-클래스-개요" tabindex="-1">Quote 클래스 개요 <a class="header-anchor" href="#quote-클래스-개요" aria-label="Permalink to &quot;Quote 클래스 개요&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">기초자산 구현의 시작, Quote 클래스</p><ul><li><p><code>파생상품</code>에는 반드시 그 파생상품의 기초가 되는 <code>기초자산들</code>이 필요하다. <code>주가</code>, <code>금리</code>, <code>환율</code>, <code>변동성</code>과 같은 것들이 바로 이러한 기초자산이다.</p></li><li><p>퀀트립에서는 기초자산을 구현하기에 앞서 항상 특정한 실숫값을 받아 이를 바탕으로 기초자산 객체를 만들어 나가는데, 여기서 필요한 것이 바로 퀀트립의 <code>Quote 클래스</code>이다.</p></li><li><p><code>Quote</code> 클래스에는 여러 가지 하위 클래스들이 있지만 그 중에서 가장 보편적으로 널리 사용되는 클래스는 바로 <code>SimpleQuote</code> 클래스이다. 이 <code>SimpleQuote</code> 클래스는 어떤 특정 <code>실숫값(Real Number)</code>을 인자로 받아 그것을 객체로 만들어 주는 역할을 담당한다.</p></li><li><p>쉽게 말해 <code>SimpleQuote</code> 클래스는 어떤 숫자 값이 담겨 있는 작은 그릇이라고 보면 이해하기가 편하다. 어떤 숫자들이 기초자산으로써의 역할을 하기 위해서는 이 <code>SimpleQuote</code> 클래스라는 그릇에 담겨 있어야 한다.</p></li></ul></div><h2 id="quote-클래스-구조" tabindex="-1">Quote 클래스 구조 <a class="header-anchor" href="#quote-클래스-구조" aria-label="Permalink to &quot;Quote 클래스 구조&quot;">​</a></h2><h3 id="simplequote-class" tabindex="-1">SimpleQuote Class <a class="header-anchor" href="#simplequote-class" aria-label="Permalink to &quot;SimpleQuote Class&quot;">​</a></h3><p><code>SimpleQuote</code> 클래스의 구조는 말그대로 매우 심플하다. 아래의 소스코드와 같이 <code>ql.SimpleQuote()</code>에 원하는 특정 숫자를 입력해 주기만 하면 되기 때문이다.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QuantLib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Construction</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ql.SimpleQuote(value)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">underlying_asset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.SimpleQuote(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">250.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="derivedquote-class" tabindex="-1">DerivedQuote Class <a class="header-anchor" href="#derivedquote-class" aria-label="Permalink to &quot;DerivedQuote Class&quot;">​</a></h3><p><code>DerivedQuote</code> 클래스를 통해 입력받은 값에 간단한 연산 적용이 가능하다.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QuantLib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.SimpleQuote(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.06</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ql.DerivedQuote(quoteHandle, function)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql.DerivedQuote(ql.QuoteHandle(s), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d.value()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 0.6</span></span></code></pre></div><h2 id="quote-클래스-기능" tabindex="-1">Quote 클래스 기능 <a class="header-anchor" href="#quote-클래스-기능" aria-label="Permalink to &quot;Quote 클래스 기능&quot;">​</a></h2><p><code>SimpleQuote</code> 클래스의 기능 또한 매우 단순하다.</p><ul><li><code>value()</code> 메서드: 현재 안에 들어있는 값을 출력해 주는 기능</li><li><code>setValue()</code> 메서드: 해당 객체에 들어있는 값을 입력받은 값으로 변경해주는 기능</li><li><code>isValid()</code> 메서드: Quoto 클래스가 값을 가지고 있으면 True 반환</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QuantLib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Functions</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(underlying_asset.value())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 250.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">underlying_asset.setValue(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">260.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(underlying_asset.value())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 260.2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(underlying_asset.isValid()) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># True</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">setValue() 메서드</p><ul><li><p>단순히 값을 새로 변경해 주는 <code>setValue()</code> 메서드는 관찰자 패턴과 매우 긴밀한 관계를 맺고 있다. 앞서 말한대로 관찰자 패턴은 <code>관찰대상에 변화가 생기면</code> 이것을 바로 관찰자에게 알려주는 기능을 하는 소프트웨어 공학적 도구이다.</p></li><li><p>그런데 관찰자 패턴이 제대로 작동하기 위해서는 그러한 변화를 변화와 동시에 <code>관찰자에게 알려주는 트리거</code>가 필요하다. 바로 이 <code>setValue()</code>라는 메서드가 그 트리거로써 작용을 하는 것이다.</p></li><li><p>이것을 사용하면 따로 말하지 않아도 기초자산에 변화가 생겼다는 것을 파생상품이 바로 인지할 수 있다.</p></li><li><p>이처럼 퀀트립은 우리가 굳이 명시적으로 변화가 발생했다는 것을 따로 알려주지 않아도 이러한 관찰자 패턴을 통해 프라이싱의 효율성을 꾀하고 있다. 이어지는 클래스 소개를 통해 그 효용성을 이해할 수 있을 것이다.</p></li></ul></div>`,14))])}const y=e(h,[["render",o]]);export{g as __pageData,y as default};

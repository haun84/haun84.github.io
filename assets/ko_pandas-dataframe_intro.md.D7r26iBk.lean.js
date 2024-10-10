import{_ as i}from"./chunks/dataframe-structure.CljK7BeW.js";import{_ as a,c as n,a2 as l,o as h}from"./chunks/framework.wtg6z0M2.js";const o=JSON.parse('{"title":"Pandas DataFrame 기본 가이드","description":"Pandas 는 파이썬에서 사용할 수 있는 데이터분석 라이브러리이다. 데이터프레임을 통해 행과 열로 이루어진 데이터 객체를 만들어 다룰 수 있으며, 안정적으로 대용량의 데이터들을 처리하는데 매우 편리한 도구이다.","frontmatter":{"title":"Pandas DataFrame 기본 가이드","description":"Pandas 는 파이썬에서 사용할 수 있는 데이터분석 라이브러리이다. 데이터프레임을 통해 행과 열로 이루어진 데이터 객체를 만들어 다룰 수 있으며, 안정적으로 대용량의 데이터들을 처리하는데 매우 편리한 도구이다.","head":[["meta",{"property":"og:title","content":"Pandas DataFrame 기본 가이드"}],["meta",{"property":"og:description","content":"Pandas 는 파이썬에서 사용할 수 있는 데이터분석 라이브러리이다. 데이터프레임을 통해 행과 열로 이루어진 데이터 객체를 만들어 다룰 수 있으며, 안정적으로 대용량의 데이터들을 처리하는데 매우 편리한 도구이다."}],["meta",{"property":"og:image","content":"/images/haunblog.png"}],["meta",{"property":"og:url","content":"https://haun84.github.io/ko/pandas-dataframe/intro"}]]},"headers":[],"relativePath":"ko/pandas-dataframe/intro.md","filePath":"ko/pandas-dataframe/intro.md","lastUpdated":null}'),t={name:"ko/pandas-dataframe/intro.md"};function p(k,s,e,d,E,r){return h(),n("div",null,s[0]||(s[0]=[l(`<h1 id="pandas-dataframe" tabindex="-1">Pandas DataFrame <a class="header-anchor" href="#pandas-dataframe" aria-label="Permalink to &quot;Pandas DataFrame&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">Language</p><ul><li><a href="/pandas-dataframe/intro">English Page: 영어 페이지</a></li></ul></div><h2 id="pandas" tabindex="-1">Pandas <a class="header-anchor" href="#pandas" aria-label="Permalink to &quot;Pandas&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Pandas 란?</p><ul><li><code>Pandas</code> 는 <code>파이썬</code>에서 사용할 수 있는 <code>데이터분석</code> 오픈소스 라이브러리이다.</li><li><code>행과 열</code>로 이루어진 <code>데이터 객체</code>를 만들어 다룰 수 있으며, 안정적으로 대용량의 데이터들을 처리하는데 매우 편리한 도구이다.</li></ul></div><h3 id="pandas-데이터구조" tabindex="-1">Pandas 데이터구조 <a class="header-anchor" href="#pandas-데이터구조" aria-label="Permalink to &quot;Pandas 데이터구조&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">Pandas 데이터구조</p><ul><li>Pandas 는 아래의 3가지 데이터 구조를 제공한다. <ul><li>Series : 1차원</li><li>DataFrame : 2차원</li><li>Panel : 3차원</li></ul></li><li>주로 <code>Series(1차원)</code>와 <code>DataFrame(2차원)</code>을 사용한다.</li></ul></div><h3 id="pandas-로딩" tabindex="-1">Pandas 로딩 <a class="header-anchor" href="#pandas-로딩" aria-label="Permalink to &quot;Pandas 로딩&quot;">​</a></h3><div class="danger custom-block"><p class="custom-block-title">Pandas import</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> numpy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> np    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 보통 numpy 와 함께 import</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pandas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 관행적으로 pd 로 약칭</span></span></code></pre></div></div><h2 id="pandas-dataframe-클래스" tabindex="-1">Pandas DataFrame 클래스 <a class="header-anchor" href="#pandas-dataframe-클래스" aria-label="Permalink to &quot;Pandas DataFrame 클래스&quot;">​</a></h2><h3 id="dataframe-구조" tabindex="-1">DataFrame 구조 <a class="header-anchor" href="#dataframe-구조" aria-label="Permalink to &quot;DataFrame 구조&quot;">​</a></h3><p><img src="`+i+`" alt="dataframe-structure"></p><div class="tip custom-block"><p class="custom-block-title">DataFrame 구조</p><ul><li>DataFrame은 위 그림과 같이 Row, Column, Series 들로 구성되어 있다.</li><li>여기서, Series는 각 Column에 있는 데이터들을 의미한다.</li></ul></div><h3 id="dataframe-기본-형태" tabindex="-1">DataFrame 기본 형태 <a class="header-anchor" href="#dataframe-기본-형태" aria-label="Permalink to &quot;DataFrame 기본 형태&quot;">​</a></h3><p>Pandas DataFrame 객체는 기본적으로 아래와 같은 클래스로 생성된다.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pandas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd.DataFrame(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">columns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dtype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">copy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>pd.DataFrame 으로 생성된 인스턴스는 크기의 변경이 가능한 2차원 배열이다.<br> 데이터 구조에는 레이블이 지정된 축인 행과 열까지 포함되며, 클래스 메서드를 통해 레이블의 수정이 가능하다.</p><div class="warning custom-block"><p class="custom-block-title">Parameter</p><ul><li><p>data : DataFrame을 생성할 데이터 (옵션)</p><ul><li>ndarray, Iterable, dict, FataFrame</li><li>dict에는 Series, 배열 등등 list와 유사한 오브젝트가 올 수 있다.</li><li>데이터가 dict인 경우 열(Columns)의 순서는 삽입 순서에 따른다.</li></ul></li><li><p>index : 각 Row 에 대해 Label 을 추가 (옵션)</p><ul><li>인덱스 또는 배열 형태의 객체, 입력하지 않으면 기본 인덱스가 설정 (0, 1, 2, ...)</li></ul></li><li><p>columns : 각 Column 에 대해 Label 을 추가 (옵션)</p><ul><li>인덱스 또는 배열 형태의 객체, 입력하지 않으면 기본 인덱스가 설정 (0, 1, 2, ...)</li></ul></li><li><p>dtype : 각 Column 의 데이터 타입 명시 (옵션)</p><ul><li>dtype 데이터 유형을 강제하고자 할 때 사용, 기본값은 None이며 None일 경우 type이 자동으로 추론되어 설정</li></ul></li></ul></div><h3 id="dataframe-생성-예" tabindex="-1">DataFrame 생성 예 <a class="header-anchor" href="#dataframe-생성-예" aria-label="Permalink to &quot;DataFrame 생성 예&quot;">​</a></h3><ol><li>List를 사용한 DataFrame 생성<div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pandas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Kim&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Choi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hwang&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">39</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># List</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd.DataFrame(data, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">columns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(df)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #   Name   Age</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 0 Kim    23</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 1 Choi   40</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 2 Hwang  39</span></span></code></pre></div></li><li>Dictionary를 사용한 DataFrame 생성<div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pandas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Kim&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Choi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hwang&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         &#39;Age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">39</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]}  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># dictionary</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd.DataFrame(data)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(df)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #   Name   Age</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 0 Kim    23</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 1 Choi   40</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 2 Hwang  39</span></span></code></pre></div></li><li>index와 columns을 사용한 DataFrame 생성<div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pandas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd.DataFrame(data, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;first&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;second&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">columns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(df1)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #         a   b</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # first   1   2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # second  5  10</span></span></code></pre></div></li><li>numpy를 사용한 DataFrame 생성<div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> numpy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> np</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> np.array([[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                 [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]])  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ndarray</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd.DataFrame(data, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">columns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;col1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;col2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;col3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(df)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #    col1  col2  col3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 0   1     2     3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 1   4     5     6</span></span></code></pre></div></li></ol>`,19)]))}const c=a(t,[["render",p]]);export{o as __pageData,c as default};
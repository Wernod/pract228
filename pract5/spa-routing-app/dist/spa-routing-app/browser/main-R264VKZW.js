import{a as l,b as a,c as m,d as s,e as b,f as y,g as o,h as i,i as k,j as e,k as P,l as _,n as O,o as A,p as w,q as S,r as I,s as D,t as x}from"./chunk-QZJYCZXQ.js";var d=class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=a({type:t,selectors:[["app-home"]],decls:2,vars:0,template:function(n,p){n&1&&(o(0,"p"),e(1,"home works!"),i())}})};var u=class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=a({type:t,selectors:[["app-about"]],decls:2,vars:0,template:function(n,p){n&1&&(o(0,"p"),e(1,"about works!"),i())}})};var f=class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=a({type:t,selectors:[["app-contact"]],decls:2,vars:0,template:function(n,p){n&1&&(o(0,"p"),e(1,"contact works!"),i())}})};var C=class t{constructor(r){this.route=r}id=null;ngOnInit(){this.id=this.route.snapshot.paramMap.get("id")}static \u0275fac=function(n){return new(n||t)(b(w))};static \u0275cmp=a({type:t,selectors:[["app-product"]],decls:4,vars:1,template:function(n,p){n&1&&(o(0,"h2"),e(1,"Product details"),i(),o(2,"p"),e(3),i()),n&2&&(s(3),P("Product ID: ",p.id,""))}})};var L=[{path:"",component:d},{path:"about",component:u},{path:"contact",component:f},{path:"product/:id",component:C},{path:"admin",loadChildren:()=>import("./chunk-DVUNPP2I.js").then(t=>t.AdminModule)},{path:"**",redirectTo:""}],v=class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=m({type:t});static \u0275inj=l({imports:[x.forRoot(L),x]})};var R=()=>({exact:!0}),h=class t{title="spa-routing-app";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=a({type:t,selectors:[["app-root"]],decls:19,vars:2,consts:[["routerLink","","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/about","routerLinkActive","active"],["routerLink","/contact","routerLinkActive","active"],["routerLink","/admin","routerLinkActive","active"],[2,"margin-top","1rem"],["routerLink","/product/1"],["routerLink","/product/2"]],template:function(n,p){n&1&&(o(0,"nav")(1,"a",0),e(2,"Home"),i(),e(3," | "),o(4,"a",1),e(5,"About"),i(),e(6," | "),o(7,"a",2),e(8,"Contact"),i(),e(9," | "),o(10,"a",3),e(11,"Admin (lazy)"),i()(),o(12,"div",4)(13,"a",5),e(14,"Open product 1"),i(),e(15," | "),o(16,"a",6),e(17,"Open product 2"),i()(),k(18,"router-outlet")),n&2&&(s(),y("routerLinkActiveOptions",_(1,R)))},dependencies:[S,I,D],styles:[`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1[_ngcontent-%COMP%] {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  main[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .angular-logo[_ngcontent-%COMP%] {
    max-width: 9.2rem;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  .divider[_ngcontent-%COMP%] {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill[_ngcontent-%COMP%]:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), 
   .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), 
   .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    margin-inline-start: 0.25rem;
  }

  .social-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }

    .divider[_ngcontent-%COMP%] {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }`]})};var M=class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=m({type:t,bootstrap:[h]});static \u0275inj=l({imports:[A,v]})};O().bootstrapModule(M,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));

var J=Object.defineProperty,Z=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var B=(n,e,t)=>e in n?J(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,i=(n,e)=>{for(var t in e||(e={}))A.call(e,t)&&B(n,t,e[t]);if(N)for(var t of N(e))E.call(e,t)&&B(n,t,e[t]);return n},d=(n,e)=>Z(n,W(e));var T=(n,e)=>{var t={};for(var a in n)A.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(n!=null&&N)for(var a of N(n))e.indexOf(a)<0&&E.call(n,a)&&(t[a]=n[a]);return t};import{e as X,r as h,j as C,c as v,a as I,b as k,d as Y,f as K,g as ee,h as te,l as ne,i as ae,k as le,m as re,n as ie,o as se,p as de,q as oe,s as ce,t as ue,u as he,v as pe}from"./vendor.97c26244.js";const be=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}};be();const ge={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:ge});const L=X.createContext({stateMap:{},focused:!1}),me="_treeItem_ryne9_23",Ie="_treeItemHighlighted_ryne9_28",Se="_treeItemSelected_ryne9_32",xe="_treeItemLeaf_ryne9_37";var D={treeItem:me,treeItemHighlighted:Ie,treeItemSelected:Se,treeItemLeaf:xe};const ye=(b,c)=>{var g=b,{highlighted:n,selected:e,expanded:t,hasChild:a,depth:r,data:l,treeFocused:s}=g,o=T(g,["highlighted","selected","expanded","hasChild","depth","data","treeFocused"]);var f;const u=!((f=l.children)==null?void 0:f.length),m=u?null:t?"\u25BC":"\u25B6";return C("div",d(i({className:v(D.treeItem,{[D.treeItemHighlighted]:n&&s,[D.treeItemSelected]:e,[D.treeItemLeaf]:u})},o),{ref:c,children:[m,l.label]}))},O=h.exports.forwardRef(ye);O.displayName="BasicTreeItemNode";const F=a=>{var r=a,{data:n,path:e}=r,t=T(r,["data","path"]);const{stateMap:l,focused:s,TreeItemNode:o=O,onItemSelected:c}=h.exports.useContext(L),b=l[e],{expanded:g,selected:u,depth:m=0,highlighted:f}=b||{},x=h.exports.useRef(null);return h.exports.useEffect(()=>{s&&f&&x.current&&(console.log("focus item",e),x.current.focus())},[f,e,s]),h.exports.useEffect(()=>{u&&(c==null||c(n.id))},[n.id,c,u]),b===void 0?(console.warn("item null",b,e),null):C("div",d(i({role:"group"},t),{children:[I(o,d(i({treeFocused:s,data:n},b),{role:"treeitem","data-treeitem-path":e,"data-treeitem-depth":m,"data-treeitem-id":n.id,tabIndex:f?0:-1,ref:x})),g&&n.children?n.children.map((y,M)=>I(F,{data:y,path:`${e}-${M}`},`${y.label}-${M}`)):null]}))},Ce="_tree_1b6a4_1";var Te={tree:Ce};function we(n,e){const t={},a=(l,s,o,c)=>{var m;const b=c+"-"+s.toString(),g=o+1,u=Array.isArray(l.children)&&l.children.length>0;t[b]={highlighted:!1,selected:!1,expanded:u&&e,hasChild:u,depth:g},(m=l.children)==null||m.forEach((f,x)=>a(f,x,g,b))},r=(l,s)=>{var b,g;const o=s.toString(),c=!!((b=l.children)==null?void 0:b.length);t[o]={highlighted:s===0,selected:!1,expanded:c&&e,hasChild:c,depth:0},(g=l.children)==null||g.forEach((u,m)=>a(u,m,0,s.toString()))};return n.forEach(r),{stateMap:t}}const j=(n,e)=>{const t={};return Object.keys(n).forEach(a=>{if(a===e){const r=n[a],l=i({},r);l.hasChild&&(l.expanded=!l.expanded),l.selected=!0,l.highlighted=!0,t[a]=l}else{const r=n[a],l=d(i({},r),{selected:!1,highlighted:!1});t[a]=l}}),t},Me=(n,e)=>{if(n[e].expanded)return e+"-0";{const t=e.split("-").map(a=>Number.parseInt(a));for(;t.length>0;){const a=t.splice(t.length-1,1)[0],r=[...t,a+1].join("-");if(n[r])return r}}return e},Ne=(n,e)=>{const t=i({},n),a=Object.keys(n).sort();if(e===a[a.length-1])return n;if(a.indexOf(e)<0)return console.error(e,"cannot be found in",a),t;const l=Me(n,e);return t[e]=d(i({},t[e]),{highlighted:!1}),t[l]=d(i({},t[l]),{highlighted:!0}),t},De=(n,e,t)=>{if(t==="0")return"0";const a=e.indexOf(t);if(a<0)return t;const r=e[a-1],l=r.split("-").map(o=>Number.parseInt(o));let s=l[0].toString();for(let o=0;o<l.length-1;o++){if(!n[s].expanded)return s;s=`${s}-${l[o+1]}`}return r},_e=(n,e)=>{const t=i({},n),a=Object.keys(n).sort();if(e===a[0])return n;if(a.indexOf(e)<0)return console.error(e,"cannot be found in",a),t;const l=De(n,a,e);return t[e]=d(i({},t[e]),{highlighted:!1}),t[l]=d(i({},t[l]),{highlighted:!0}),t},ve=(n,e)=>{const t=i({},n);return t[e]=d(i({},t[e]),{expanded:!1}),t},Ae=(n,e)=>{const t=i({},n);return t[e]=d(i({},t[e]),{expanded:!0}),t},Ee=n=>{const e=n.split("-").map(t=>Number.parseInt(t));return e.length===1?n:(e.splice(e.length-1,1)[0],[...e].join("-"))},Be=(n,e)=>{const t=i({},n),a=Ee(e);return t[e]=d(i({},t[e]),{highlighted:!1}),t[a]=d(i({},t[a]),{highlighted:!0}),t},ke=(n,e)=>{const t=i({},n),a=e+"-0";return t[a]!==void 0&&(t[e]=d(i({},t[e]),{highlighted:!1}),t[a]=d(i({},t[a]),{highlighted:!0})),t},Le=(n,e)=>{const t={},a=(r,l,s,o)=>{var u;const c=s<0?l.toString():o+"-"+l.toString(),b=s+1,g=Array.isArray(r.children)&&r.children.length>0;t[c]=d(i({},n[c]),{hasChild:g,depth:b}),(u=r.children)==null||u.forEach((m,f)=>a(m,f,b,c))};return e.forEach((r,l)=>a(r,l,-1,"")),t};function Oe(n,e){switch(e.type){case"click":{const t=j(n.stateMap,e.path);return console.log("click reducer",{newStateMap:t}),{stateMap:t}}case"keydown":return e.key==="Enter"||e.key===" "?{stateMap:j(n.stateMap,e.path)}:e.key==="ArrowDown"?{stateMap:Ne(n.stateMap,e.path)}:e.key==="ArrowUp"?{stateMap:_e(n.stateMap,e.path)}:e.key==="ArrowLeft"?n.stateMap[e.path].expanded?{stateMap:ve(n.stateMap,e.path)}:{stateMap:Be(n.stateMap,e.path)}:e.key==="ArrowRight"&&n.stateMap[e.path].hasChild?n.stateMap[e.path].expanded?{stateMap:ke(n.stateMap,e.path)}:{stateMap:Ae(n.stateMap,e.path)}:n;case"updateData":return{stateMap:Le(n.stateMap,e.data)}}}const w=g=>{var u=g,{className:n,data:e,defaultExpanded:t,onClick:a,onKeyDown:r,onFocus:l,onBlur:s,TreeItemNode:o,onItemSelected:c}=u,b=T(u,["className","data","defaultExpanded","onClick","onKeyDown","onFocus","onBlur","TreeItemNode","onItemSelected"]);const[m,f]=h.exports.useState(!1),[{stateMap:x},y]=h.exports.useReducer(Oe,we(e,t));h.exports.useEffect(()=>{y({type:"updateData",data:e})},[e,t]);const M=h.exports.useCallback(p=>{console.log("click",p.target.dataset);const S=p.target.dataset.treeitemPath;S&&y({type:"click",path:S}),a==null||a(p,p.target.dataset.treeitemId)},[a]),U=h.exports.useCallback(p=>{p.key!=="Tab"&&p.preventDefault();const S=p.target.dataset;console.log("keydown",S),S.treeitemPath&&y({type:"keydown",path:S.treeitemPath,key:p.key}),r==null||r(p,p.target.dataset.treeitemId)},[r]),q=h.exports.useCallback(p=>{f(!0),l==null||l(p)},[l]),Q=h.exports.useCallback(p=>{f(!1),s==null||s(p)},[s]);return console.log({stateMap:x}),I("div",d(i({className:v(n,Te.tree),role:"tree",onClick:M,onKeyDown:U,onFocus:q,onBlur:Q},b),{children:I(L.Provider,{value:{stateMap:x,focused:m,TreeItemNode:o,onItemSelected:c},children:e.map((p,S)=>I(F,{data:p,path:S.toString()},`${p.label}-${S}`))})}))},Fe="_treeItem_1xv1p_23",je="_treeItemHighlighted_1xv1p_28",Re="_treeItemSelected_1xv1p_32",$e="_treeItemLeaf_1xv1p_37";var _={treeItem:Fe,treeItemHighlighted:je,treeItemSelected:Re,treeItemLeaf:$e},Pe={parameters:{storySource:{source:`import cn from "classnames";
import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tree } from "./Tree";
import { BasicTreeItemNodeProps, TreeItem, TreeItemData } from "./TreeItem";

import styles from "./Tree.stories.module.css";

export default {
  title: "Tree",
  component: Tree,
  argTypes: { onItemSelected: { action: "item selected" } },
} as ComponentMeta<typeof Tree>;

const exampleData: TreeItemData[] = [
  {
    label: "Item A",
    id: "a",
    children: [
      {
        label: "Child A1",
        id: "a1",
        children: [
          { label: "Child A11", id: "a11" },
          { label: "Child A12", id: "a12" },
        ],
      },
      { label: "Child A2", id: "a2" },
    ],
  },
  { label: "Item B", id: "b" },
  {
    label: "Item C",
    id: "c",
    children: [
      { label: "Child C1", id: "c1" },
      { label: "Child C2", id: "c2" },
    ],
  },
];

const exampleData2: TreeItemData[] = [
  {
    label: "Fruits",
    id: "a",
    children: [
      {
        label: "Orange",
        id: "a1",
      },
      {
        label: "Pineapple",
        id: "a2",
      },
      {
        label: "Apples",
        id: "a3",
        children: [
          { label: "Macintosh", id: "a31" },
          { label: "Granny Smith", id: "a32" },
          { label: "Fuji", id: "a33" },
        ],
      },
      {
        label: "Bananas",
        id: "a4",
      },
      {
        label: "Pears",
        id: "a5",
        children: [
          { label: "Anjou", id: "a51" },
          { label: "Bartlett", id: "a52" },
          { label: "Bosc", id: "a53" },
          { label: "Concorde", id: "a54" },
          { label: "Seckel", id: "a55" },
          { label: "Starkrimson", id: "a56" },
        ],
      },
    ],
  },
  {
    label: "Vegetables",
    id: "b",
    children: [
      {
        label: "Podded Vegetables",
        id: "b1",
        children: [
          { label: "Lentil", id: "b11" },
          { label: "Pea", id: "b12" },
          { label: "Peanut", id: "b13" },
        ],
      },
      {
        label: "Bulb and Stem Vegetables",
        id: "b2",
        children: [
          { label: "Asparagus", id: "b21" },
          { label: "Celery", id: "b22" },
          { label: "Leek", id: "b23" },
          { label: "Onion", id: "b24" },
        ],
      },
      {
        label: "Root and Tuberous Vegetables",
        id: "b3",
        children: [
          { label: "Carrot", id: "b31" },
          { label: "Ginger", id: "b32" },
          { label: "Parsnip", id: "b33" },
          { label: "Potato", id: "b34" },
        ],
      },
    ],
  },
  {
    label: "Grains",
    id: "c",
    children: [
      {
        label: "Cereal Grains",
        id: "c1",
        children: [
          { label: "Barley", id: "c11" },
          { label: "Oats", id: "c12" },
          { label: "Rice", id: "c13" },
        ],
      },
      {
        label: "Pseudocereal Grains",
        id: "c2",
        children: [
          { label: "Amaranth", id: "c21" },
          { label: "Bucketwheat", id: "c22" },
          { label: "Chia", id: "c23" },
          { label: "Quinoa", id: "c24" },
        ],
      },
      {
        label: "Oliseeds",
        id: "c3",
        children: [
          { label: "India Mustard", id: "c31" },
          { label: "Safflower", id: "c32" },
          { label: "Flax Seed", id: "c33" },
          { label: "Poppy Seed", id: "c34" },
        ],
      },
    ],
  },
];

interface CustomTreeItemData extends TreeItemData {
  loading?: boolean;
}

const customTypeData: CustomTreeItemData[] = [
  {
    label: "Item A",
    id: "a",
    loading: true,
    children: [
      {
        label: "Child A1",
        id: "a1",
        loading: false,

        children: [
          { label: "Child A11", id: "a11", loading: true },
          { label: "Child A12", id: "a12", loading: false },
        ],
      },
      { label: "Child A2", id: "a2" },
    ],
  },
  { label: "Item B", id: "b", loading: true },
  {
    label: "Item C",
    id: "c",
    children: [
      { label: "Child C1", id: "c1" },
      { label: "Child C2", id: "c2" },
    ],
  },
];

export const Example: ComponentStory<typeof Tree> = (args) => {
  return <Tree {...args} data={exampleData} />;
};

Example.args = {
  defaultExpanded: true,
};

export const ToggleData: ComponentStory<typeof Tree> = (args) => {
  const [dataSetNumber, setDataSetNumber] = useState(1);
  const dataSet = useMemo(() => {
    if (dataSetNumber === 1) {
      return exampleData;
    } else {
      return exampleData2;
    }
  }, [dataSetNumber]);
  return (
    <div>
      <button onClick={() => setDataSetNumber((x) => (x === 1 ? 2 : 1))}>
        toggle data
      </button>
      <Tree
        {...args}
        data={dataSet}
        key={dataSetNumber} // Use different key to rerender a new instance
      />
    </div>
  );
};

ToggleData.args = {
  defaultExpanded: true,
};

const fileterTest = (label: string, filter: string): boolean => {
  const regex = new RegExp(filter, "ig");
  return regex.test(label);
};

// Based on https://stackoverflow.com/a/45290208/2710486
const filterTreeData = (data: TreeItemData[], text: string): TreeItemData[] => {
  const getNodes = (result: TreeItemData[], item: TreeItemData) => {
    if (fileterTest(item.label, text)) {
      result.push(item);
      return result;
    }
    if (Array.isArray(item.children)) {
      const children = item.children.reduce(getNodes, []);
      if (children.length) result.push({ ...item, children });
    }
    return result;
  };

  return data.reduce(getNodes, []);
};

export const FilterData: ComponentStory<typeof Tree> = (args) => {
  const [filterString, setFilterString] = useState("");
  const filteredData = useMemo(
    () => filterTreeData(exampleData2, filterString),
    [filterString]
  );
  return (
    <div>
      <label>
        Filter{" "}
        <input
          value={filterString}
          onChange={(e) => setFilterString(e.currentTarget.value)}
        />
      </label>
      <Tree
        {...args}
        key={filterString} // Use different key to rerender a new instance
        defaultExpanded={filterString ? true : args.defaultExpanded}
        data={filteredData}
      />
    </div>
  );
};

FilterData.args = {
  defaultExpanded: false,
};

const CustomTreeItemNodeBase = (
  {
    highlighted,
    selected,
    expanded,
    hasChild,
    depth,
    data,
    treeFocused,
    ...restProps
  }: BasicTreeItemNodeProps<CustomTreeItemData>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const leafNode = !data.children?.length;
  const icon = !leafNode ? (expanded ? "\u25BC" : "\u25B6") : null;

  return (
    <div
      className={cn(styles.treeItem, {
        [styles.treeItemHighlighted]: highlighted && treeFocused,
        [styles.treeItemSelected]: selected,
        [styles.treeItemLeaf]: leafNode,
      })}
      {...restProps}
      ref={ref}
    >
      {icon}
      {data.label}
      {data.loading ? "\u231B" : null}
    </div>
  );
};

const CustomTreeItem = forwardRef(CustomTreeItemNodeBase);

export const CustomTreeItemNode: ComponentStory<typeof Tree> = (args) => {
  return (
    <div>
      <Tree {...args} data={customTypeData} TreeItemNode={CustomTreeItem} />
    </div>
  );
};

CustomTreeItemNode.args = {
  defaultExpanded: true,
};
`,locationsMap:{example:{startLoc:{col:52,line:196},endLoc:{col:1,line:198},startBody:{col:52,line:196},endBody:{col:1,line:198}},"toggle-data":{startLoc:{col:55,line:204},endLoc:{col:1,line:225},startBody:{col:55,line:204},endBody:{col:1,line:225}},"filter-data":{startLoc:{col:55,line:253},endLoc:{col:1,line:276},startBody:{col:55,line:253},endBody:{col:1,line:276}},"custom-tree-item-node":{startLoc:{col:63,line:317},endLoc:{col:1,line:323},startBody:{col:63,line:317},endBody:{col:1,line:323}}}}},title:"Tree",component:w,argTypes:{onItemSelected:{action:"item selected"}}};const R=[{label:"Item A",id:"a",children:[{label:"Child A1",id:"a1",children:[{label:"Child A11",id:"a11"},{label:"Child A12",id:"a12"}]},{label:"Child A2",id:"a2"}]},{label:"Item B",id:"b"},{label:"Item C",id:"c",children:[{label:"Child C1",id:"c1"},{label:"Child C2",id:"c2"}]}],$=[{label:"Fruits",id:"a",children:[{label:"Orange",id:"a1"},{label:"Pineapple",id:"a2"},{label:"Apples",id:"a3",children:[{label:"Macintosh",id:"a31"},{label:"Granny Smith",id:"a32"},{label:"Fuji",id:"a33"}]},{label:"Bananas",id:"a4"},{label:"Pears",id:"a5",children:[{label:"Anjou",id:"a51"},{label:"Bartlett",id:"a52"},{label:"Bosc",id:"a53"},{label:"Concorde",id:"a54"},{label:"Seckel",id:"a55"},{label:"Starkrimson",id:"a56"}]}]},{label:"Vegetables",id:"b",children:[{label:"Podded Vegetables",id:"b1",children:[{label:"Lentil",id:"b11"},{label:"Pea",id:"b12"},{label:"Peanut",id:"b13"}]},{label:"Bulb and Stem Vegetables",id:"b2",children:[{label:"Asparagus",id:"b21"},{label:"Celery",id:"b22"},{label:"Leek",id:"b23"},{label:"Onion",id:"b24"}]},{label:"Root and Tuberous Vegetables",id:"b3",children:[{label:"Carrot",id:"b31"},{label:"Ginger",id:"b32"},{label:"Parsnip",id:"b33"},{label:"Potato",id:"b34"}]}]},{label:"Grains",id:"c",children:[{label:"Cereal Grains",id:"c1",children:[{label:"Barley",id:"c11"},{label:"Oats",id:"c12"},{label:"Rice",id:"c13"}]},{label:"Pseudocereal Grains",id:"c2",children:[{label:"Amaranth",id:"c21"},{label:"Bucketwheat",id:"c22"},{label:"Chia",id:"c23"},{label:"Quinoa",id:"c24"}]},{label:"Oliseeds",id:"c3",children:[{label:"India Mustard",id:"c31"},{label:"Safflower",id:"c32"},{label:"Flax Seed",id:"c33"},{label:"Poppy Seed",id:"c34"}]}]}],Ge=[{label:"Item A",id:"a",loading:!0,children:[{label:"Child A1",id:"a1",loading:!1,children:[{label:"Child A11",id:"a11",loading:!0},{label:"Child A12",id:"a12",loading:!1}]},{label:"Child A2",id:"a2"}]},{label:"Item B",id:"b",loading:!0},{label:"Item C",id:"c",children:[{label:"Child C1",id:"c1"},{label:"Child C2",id:"c2"}]}],P=n=>I(w,d(i({},n),{data:R}));P.args={defaultExpanded:!0};const G=n=>{const[e,t]=h.exports.useState(1),a=h.exports.useMemo(()=>e===1?R:$,[e]);return C("div",{children:[I("button",{onClick:()=>t(r=>r===1?2:1),children:"toggle data"}),h.exports.createElement(w,d(i({},n),{data:a,key:e}))]})};G.args={defaultExpanded:!0};const He=(n,e)=>new RegExp(e,"ig").test(n),Ve=(n,e)=>{const t=(a,r)=>{if(He(r.label,e))return a.push(r),a;if(Array.isArray(r.children)){const l=r.children.reduce(t,[]);l.length&&a.push(d(i({},r),{children:l}))}return a};return n.reduce(t,[])},H=n=>{const[e,t]=h.exports.useState(""),a=h.exports.useMemo(()=>Ve($,e),[e]);return C("div",{children:[C("label",{children:["Filter"," ",I("input",{value:e,onChange:r=>t(r.currentTarget.value)})]}),h.exports.createElement(w,d(i({},n),{key:e,defaultExpanded:e?!0:n.defaultExpanded,data:a}))]})};H.args={defaultExpanded:!1};const ze=(b,c)=>{var g=b,{highlighted:n,selected:e,expanded:t,hasChild:a,depth:r,data:l,treeFocused:s}=g,o=T(g,["highlighted","selected","expanded","hasChild","depth","data","treeFocused"]);var f;const u=!((f=l.children)==null?void 0:f.length),m=u?null:t?"\u25BC":"\u25B6";return C("div",d(i({className:v(_.treeItem,{[_.treeItemHighlighted]:n&&s,[_.treeItemSelected]:e,[_.treeItemLeaf]:u})},o),{ref:c,children:[m,l.label,l.loading?"\u231B":null]}))},Ue=h.exports.forwardRef(ze),V=n=>I("div",{children:I(w,d(i({},n),{data:Ge,TreeItemNode:Ue}))});V.args={defaultExpanded:!0};const qe=["Example","ToggleData","FilterData","CustomTreeItemNode"];var Qe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pe,Example:P,ToggleData:G,FilterData:H,CustomTreeItemNode:V,__namedExportsOrder:qe});const Je=[le,re,ie,se,de,oe,ce,ue,he,pe,fe];Je.forEach(n=>{Object.keys(n).forEach(e=>{const t=n[e];switch(e){case"args":case"argTypes":return ne.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(t));case"decorators":return t.forEach(a=>te(a,!1));case"loaders":return t.forEach(a=>ee(a,!1));case"parameters":return k(i({},t),!1);case"argTypesEnhancers":return t.forEach(a=>K(a));case"argsEnhancers":return t.forEach(a=>Y(a));case"globals":case"globalTypes":{const a={};return a[e]=t,k(a,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(e+" was not supported :( !")}})});function z(n){return{"/Users/zhihaocui/Projects/zc-tree/src/Tree.stories.tsx":Qe}[n]}Object.assign(z,{keys:()=>["/Users/zhihaocui/Projects/zc-tree/src/Tree.stories.tsx"],resolve:n=>({"/Users/zhihaocui/Projects/zc-tree/src/Tree.stories.tsx":"./src/Tree.stories.tsx"})[n]});ae(z,{hot:!1},!1);
//# sourceMappingURL=iframe.4abb6ec3.js.map

import{_ as d,p as o,c as m,a as u,a2 as _,t as f,a3 as b,q as n,O as x,a4 as V,o as g}from"./CnENCE-U.js";const v={class:"ui-input"},y={for:"proce_from",class:"ui-input__label"},k={__name:"UiInput",props:{label:{type:String,default:""},modelValue:{type:[Number,String],default:""},size:{type:String,validator(e){return["medium","large"].indexOf(e)!==-1},default:"medium"}},emits:["update:modelValue"],setup(e,{emit:i}){const t=e,r=i,a=o({get(){return t.modelValue},set(s){r("update:modelValue",s)}}),c=o(()=>({block:t.block,[`s-${t.size}`]:!0}));return(s,l)=>(g(),m("div",v,[u("label",y,f(e.label),1),_(u("input",{"onUpdate:modelValue":l[0]||(l[0]=p=>V(a)?a.value=p:null),type:"text",class:x(["ui-input__input",n(c)])},null,2),[[b,n(a)]])]))}},z=d(k,[["__scopeId","data-v-7743c39c"]]);export{z as default};

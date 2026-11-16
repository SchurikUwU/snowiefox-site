var Sg=0,_p=1,Eg=2;var Hm=1,xd=2,Xi=3,jn=0,on=1,Bt=2,nn=0,Br=1,Ei=2,yp=3,Mp=4,vd=5,Wn=100,Tg=101,wg=102,Ag=103,Rg=104,la=200,Cg=201,Pg=202,Ig=203,Jh=204,Qh=205,gc=206,Lg=207,bc=208,Dg=209,Ug=210,Ng=211,Fg=212,Og=213,kg=214,$h=0,eu=1,tu=2,Vr=3,nu=4,iu=5,su=6,ru=7,zm=0,Bg=1,Hg=2,ms=0,_d=1,yd=2,Md=3,ho=4,zg=5,Sd=6,Ed=7,Sp="attached",Gg="detached",Gm=300,Wr=301,Xr=302,au=303,ou=304,xc=306,xn=1e3,Mn=1001,Ka=1002,tn=1003,Td=1004;var Ur=1005;var An=1006,Va=1007;var Xn=1008;var bi=1009,Vm=1010,Wm=1011,Za=1012,wd=1013,Ks=1014,gi=1015,vn=1016,Ad=1017,Rd=1018,bs=1020,Xm=35902,qm=1021,jm=1022,Rn=1023,Ym=1024,Km=1025,Hr=1026,xs=1027,Cd=1028,Pd=1029,Zm=1030,Id=1031;var Ld=1033,Al=33776,Rl=33777,Cl=33778,Pl=33779,lu=35840,cu=35841,hu=35842,uu=35843,du=36196,fu=37492,pu=37496,mu=37808,gu=37809,bu=37810,xu=37811,vu=37812,_u=37813,yu=37814,Mu=37815,Su=37816,Eu=37817,Tu=37818,wu=37819,Au=37820,Ru=37821,Il=36492,Cu=36494,Pu=36495,Jm=36283,Iu=36284,Lu=36285,Du=36286,Vg=2200,Wg=2201,Xg=2202,qr=2300,jr=2301,ph=2302,Nr=2400,Fr=2401,Dl=2402,Dd=2500,qg=2501,Qm=0,vc=1,uo=2,jg=3200,Yg=3201;var Ud=0,Kg=1,pi="",zt="srgb",cn="srgb-linear",Nd="display-p3",_c="display-p3-linear",Ul="linear",It="srgb",Nl="rec709",Fl="p3";var mr=7680;var Ep=519,Zg=512,Jg=513,Qg=514,$m=515,$g=516,eb=517,tb=518,nb=519,Uu=35044;var Tp="300 es",ji=2e3,Ol=2001,Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wp=1234567,Wa=Math.PI/180,Yr=180/Math.PI;function qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function $t(i,e,t){return Math.max(e,Math.min(t,i))}function Fd(i,e){return(i%e+e)%e}function ib(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function sb(i,e,t){return i!==e?(t-i)/(e-i):0}function Xa(i,e,t){return(1-t)*i+t*e}function rb(i,e,t,n){return Xa(i,e,1-Math.exp(-t*n))}function ab(i,e=1){return e-Math.abs(Fd(i,e*2)-e)}function ob(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function cb(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hb(i,e){return i+Math.random()*(e-i)}function ub(i){return i*(.5-Math.random())}function db(i){i!==void 0&&(wp=i);let e=wp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fb(i){return i*Wa}function pb(i){return i*Yr}function mb(i){return(i&i-1)===0&&i!==0}function gb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xb(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ci={DEG2RAD:Wa,RAD2DEG:Yr,generateUUID:qn,clamp:$t,euclideanModulo:Fd,mapLinear:ib,inverseLerp:sb,lerp:Xa,damp:rb,pingpong:ab,smoothstep:ob,smootherstep:lb,randInt:cb,randFloat:hb,randFloatSpread:ub,seededRandom:db,degToRad:fb,radToDeg:pb,isPowerOfTwo:mb,ceilPowerOfTwo:gb,floorPowerOfTwo:bb,setQuaternionFromProperEuler:xb,normalize:At,denormalize:mi},ie=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},at=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],v=s[1],_=s[4],y=s[7],C=s[2],A=s[5],S=s[8];return r[0]=a*x+o*v+l*C,r[3]=a*g+o*_+l*A,r[6]=a*p+o*y+l*S,r[1]=c*x+h*v+u*C,r[4]=c*g+h*_+u*A,r[7]=c*p+h*y+u*S,r[2]=f*x+d*v+m*C,r[5]=f*g+d*_+m*A,r[8]=f*p+d*y+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=t*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mh.makeScale(e,t)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mh=new at;function e0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vb(){let i=Ja("canvas");return i.style.display="block",i}var Ap={};function Ll(i){i in Ap||(Ap[i]=!0,console.warn(i))}function _b(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function yb(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mb(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Rp=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cp=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pa={[cn]:{transfer:Ul,primaries:Nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[zt]:{transfer:It,primaries:Nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_c]:{transfer:Ul,primaries:Fl,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Cp),fromReference:i=>i.applyMatrix3(Rp)},[Nd]:{transfer:It,primaries:Fl,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Cp),fromReference:i=>i.applyMatrix3(Rp).convertLinearToSRGB()}},Sb=new Set([cn,_c]),ft={enabled:!0,_workingColorSpace:cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Sb.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Pa[e].toReference,s=Pa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Pa[i].primaries},getTransfer:function(i){return i===pi?Ul:Pa[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Pa[e].luminanceCoefficients)}};function zr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gh(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gr,Nu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gr===void 0&&(gr=Ja("canvas")),gr.width=e.width,gr.height=e.height;let n=gr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ja("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zr(t[n]/255)*255):t[n]=zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Eb=0,kl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bh(s[a].image)):r.push(bh(s[a]))}else r=bh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tb=0,ln=class i extends Yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=An,a=Xn,o=Rn,l=bi,c=i.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=qn(),this.name="",this.source=new kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xn:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xn:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Gm;ln.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(d+1)/2,C=(p+1)/2,A=(h+f)/4,S=(u+x)/4,R=(m+g)/4;return _>y&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=S/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=S/r,s=R/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fu=class extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new kl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends Fu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Bl=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ou=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-o,p=l*f+c*d+h*m+u*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let C=Math.sqrt(_),A=Math.atan2(C,p*v);g=Math.sin(g*A)/C,o=Math.sin(o*A)/C}let y=o*v;if(l=l*g+f*y,c=c*g+d*y,h=h*g+m*y,u=u*g+x*y,g===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-o*d,e[t+2]=c*m+h*d+o*f-l*u,e[t+3]=h*m-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xh=new L,Pp=new Cn,un=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(r,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),Ko.subVectors(this.max,Ia),br.subVectors(e.a,Ia),xr.subVectors(e.b,Ia),vr.subVectors(e.c,Ia),os.subVectors(xr,br),ls.subVectors(vr,xr),zs.subVectors(br,vr);let t=[0,-os.z,os.y,0,-ls.z,ls.y,0,-zs.z,zs.y,os.z,0,-os.x,ls.z,0,-ls.x,zs.z,0,-zs.x,-os.y,os.x,0,-ls.y,ls.x,0,-zs.y,zs.x,0];return!vh(t,br,xr,vr,Ko)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,br,xr,vr,Ko))?!1:(Zo.crossVectors(os,ls),t=[Zo.x,Zo.y,Zo.z],vh(t,br,xr,vr,Ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new L,new L,new L,new L,new L,new L,new L,new L],ui=new L,Yo=new un,br=new L,xr=new L,vr=new L,os=new L,ls=new L,zs=new L,Ia=new L,Ko=new L,Zo=new L,Gs=new L;function vh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gs.fromArray(i,r);let o=s.x*Math.abs(Gs.x)+s.y*Math.abs(Gs.y)+s.z*Math.abs(Gs.z),l=e.dot(Gs),c=t.dot(Gs),h=n.dot(Gs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wb=new un,La=new L,_h=new L,On=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;La.subVectors(e,this.center);let t=La.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(La,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(La.copy(e.center).add(_h)),this.expandByPoint(La.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hi=new L,yh=new L,Jo=new L,cs=new L,Mh=new L,Qo=new L,Sh=new L,Zs=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yh.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(yh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Jo),o=cs.dot(this.direction),l=-cs.dot(Jo),c=cs.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yh).addScaledVector(Jo,f),d}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){Mh.subVectors(t,e),Qo.subVectors(n,e),Sh.crossVectors(Mh,Qo);let a=this.direction.dot(Sh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cs.subVectors(this.origin,e);let l=o*this.direction.dot(Qo.crossVectors(cs,Qo));if(l<0)return null;let c=o*this.direction.dot(Mh.cross(cs));if(c<0||l+c>a)return null;let h=-o*cs.dot(Sh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,f,d,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,d,m,x,g)}set(e,t,n,s,r,a,o,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/_r.setFromMatrixColumn(e,0).length(),r=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f+x*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ab,e,Rb)}lookAt(e,t,n){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),hs.crossVectors(n,Nn),hs.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),hs.crossVectors(n,Nn)),hs.normalize(),$o.crossVectors(Nn,hs),s[0]=hs.x,s[4]=$o.x,s[8]=Nn.x,s[1]=hs.y,s[5]=$o.y,s[9]=Nn.y,s[2]=hs.z,s[6]=$o.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],_=n[7],y=n[11],C=n[15],A=s[0],S=s[4],R=s[8],P=s[12],b=s[1],M=s[5],D=s[9],U=s[13],O=s[2],Z=s[6],H=s[10],se=s[14],X=s[3],ce=s[7],me=s[11],xe=s[15];return r[0]=a*A+o*b+l*O+c*X,r[4]=a*S+o*M+l*Z+c*ce,r[8]=a*R+o*D+l*H+c*me,r[12]=a*P+o*U+l*se+c*xe,r[1]=h*A+u*b+f*O+d*X,r[5]=h*S+u*M+f*Z+d*ce,r[9]=h*R+u*D+f*H+d*me,r[13]=h*P+u*U+f*se+d*xe,r[2]=m*A+x*b+g*O+p*X,r[6]=m*S+x*M+g*Z+p*ce,r[10]=m*R+x*D+g*H+p*me,r[14]=m*P+x*U+g*se+p*xe,r[3]=v*A+_*b+y*O+C*X,r[7]=v*S+_*M+y*Z+C*ce,r[11]=v*R+_*D+y*H+C*me,r[15]=v*P+_*U+y*se+C*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+x*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+g*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=u*g*c-x*f*c+x*l*d-o*g*d-u*l*p+o*f*p,_=m*f*c-h*g*c-m*l*d+a*g*d+h*l*p-a*f*p,y=h*x*c-m*u*c+m*o*d-a*x*d-h*o*p+a*u*p,C=m*u*l-h*x*l-m*o*f+a*x*f+h*o*g-a*u*g,A=t*v+n*_+s*y+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/A;return e[0]=v*S,e[1]=(x*f*r-u*g*r-x*s*d+n*g*d+u*s*p-n*f*p)*S,e[2]=(o*g*r-x*l*r+x*s*c-n*g*c-o*s*p+n*l*p)*S,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*S,e[4]=_*S,e[5]=(h*g*r-m*f*r+m*s*d-t*g*d-h*s*p+t*f*p)*S,e[6]=(m*l*r-a*g*r-m*s*c+t*g*c+a*s*p-t*l*p)*S,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*S,e[8]=y*S,e[9]=(m*u*r-h*x*r-m*n*d+t*x*d+h*n*p-t*u*p)*S,e[10]=(a*x*r-m*o*r+m*n*c-t*x*c-a*n*p+t*o*p)*S,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*S,e[12]=C*S,e[13]=(h*x*s-m*u*s+m*n*f-t*x*f-h*n*g+t*u*g)*S,e[14]=(m*o*s-a*x*s-m*n*l+t*x*l+a*n*g-t*o*g)*S,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*S,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,x=a*h,g=a*u,p=o*u,v=l*c,_=l*h,y=l*u,C=n.x,A=n.y,S=n.z;return s[0]=(1-(x+p))*C,s[1]=(d+y)*C,s[2]=(m-_)*C,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(f+p))*A,s[6]=(g+v)*A,s[7]=0,s[8]=(m+_)*S,s[9]=(g-v)*S,s[10]=(1-(f+x))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=_r.set(s[0],s[1],s[2]).length(),a=_r.set(s[4],s[5],s[6]).length(),o=_r.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],di.copy(this);let c=1/r,h=1/a,u=1/o;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ji){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,m;if(o===ji)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ol)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ji){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*c,d=(n+s)*h,m,x;if(o===ji)m=(a+r)*u,x=-2*u;else if(o===Ol)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_r=new L,di=new qe,Ab=new L(0,0,0),Rb=new L(1,1,1),hs=new L,$o=new L,Nn=new L,Ip=new qe,Lp=new Cn,Ti=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var Qa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cb=0,Dp=new L,yr=new Cn,zi=new qe,el=new L,Da=new L,Pb=new L,Ib=new Cn,Up=new L(1,0,0),Np=new L(0,1,0),Fp=new L(0,0,1),Op={type:"added"},Lb={type:"removed"},Mr={type:"childadded",child:null},Eh={type:"childremoved",child:null},Ut=class i extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Ti,n=new Cn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new at}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Up,e)}rotateY(e){return this.rotateOnAxis(Np,e)}rotateZ(e){return this.rotateOnAxis(Fp,e)}translateOnAxis(e,t){return Dp.copy(e).applyQuaternion(this.quaternion),this.position.add(Dp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Up,e)}translateY(e){return this.translateOnAxis(Np,e)}translateZ(e){return this.translateOnAxis(Fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?el.copy(e):el.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Da,el,this.up):zi.lookAt(el,Da,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(zi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Op),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lb),Eh.child=e,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Op),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,e,Pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,Ib,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new L(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new L,Gi=new L,Th=new L,Vi=new L,Sr=new L,Er=new L,kp=new L,wh=new L,Ah=new L,Rh=new L,Ch=new yt,Ph=new yt,Ih=new yt,fs=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fi.subVectors(s,t),Gi.subVectors(n,t),Th.subVectors(e,t);let a=fi.dot(fi),o=fi.dot(Gi),l=fi.dot(Th),c=Gi.dot(Gi),h=Gi.dot(Th),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ch.setScalar(0),Ph.setScalar(0),Ih.setScalar(0),Ch.fromBufferAttribute(e,t),Ph.fromBufferAttribute(e,n),Ih.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ch,r.x),a.addScaledVector(Ph,r.y),a.addScaledVector(Ih,r.z),a}static isFrontFacing(e,t,n,s){return fi.subVectors(n,t),Gi.subVectors(e,t),fi.cross(Gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),fi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Sr.subVectors(s,n),Er.subVectors(r,n),wh.subVectors(e,n);let l=Sr.dot(wh),c=Er.dot(wh);if(l<=0&&c<=0)return t.copy(n);Ah.subVectors(e,s);let h=Sr.dot(Ah),u=Er.dot(Ah);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Sr,a);Rh.subVectors(e,r);let d=Sr.dot(Rh),m=Er.dot(Rh);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Er,o);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return kp.subVectors(r,s),o=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(kp,o);let p=1/(g+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(Sr,a).addScaledVector(Er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},t0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Lh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Fd(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Lh(a,r,e+1/3),this.g=Lh(a,r,e),this.b=Lh(a,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=t0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=gh(e.r),this.g=gh(e.g),this.b=gh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ft.fromWorkingColorSpace(bn.copy(this),e),Math.round($t(bn.r*255,0,255))*65536+Math.round($t(bn.g*255,0,255))*256+Math.round($t(bn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(bn.copy(this),t);let n=bn.r,s=bn.g,r=bn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=zt){ft.fromWorkingColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,s=bn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(tl);let n=Xa(us.h,tl.h,t),s=Xa(us.s,tl.s,t),r=Xa(us.l,tl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Le;Le.NAMES=t0;var Db=0,Sn=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Br,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=Qh,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jh&&(n.blendSrc=this.blendSrc),this.blendDst!==Qh&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ep&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ht=class extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new L,nl=new ie,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uu,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uu&&(e.usage=this.usage),e}};var Hl=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var zl=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ub=0,Vn=new qe,Dh=new Ut,Tr=new L,Fn=new un,Ua=new un,an=new L,Mt=class i extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e0(e)?zl:Hl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ua.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Fn.min,Ua.min),Fn.expandByPoint(an),an.addVectors(Fn.max,Ua.max),Fn.expandByPoint(an)):(Fn.expandByPoint(Ua.min),Fn.expandByPoint(Ua.max))}Fn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)an.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(e,c),an.add(Tr)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;let c=new L,h=new L,u=new L,f=new ie,d=new ie,m=new ie,x=new L,g=new L;function p(R,P,b){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,P),m.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let M=1/(d.x*m.y-m.x*d.y);isFinite(M)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(M),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(M),o[R].add(x),o[P].add(x),o[b].add(x),l[R].add(g),l[P].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,P=v.length;R<P;++R){let b=v[R],M=b.start,D=b.count;for(let U=M,O=M+D;U<O;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let _=new L,y=new L,C=new L,A=new L;function S(R){C.fromBufferAttribute(s,R),A.copy(C);let P=o[R];_.copy(P),_.sub(C.multiplyScalar(C.dot(P))).normalize(),y.crossVectors(A,P);let M=y.dot(l[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,M)}for(let R=0,P=v.length;R<P;++R){let b=v[R],M=b.start,D=b.count;for(let U=M,O=M+D;U<O;U+=3)S(e.getX(U+0)),S(e.getX(U+1)),S(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Dt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bp=new qe,Vs=new Zs,il=new On,Hp=new L,sl=new L,rl=new L,al=new L,Uh=new L,ol=new L,zp=new L,ll=new L,k=class extends Ut{constructor(e=new Mt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ol.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Uh.fromBufferAttribute(u,e),a?ol.addScaledVector(Uh,h):ol.addScaledVector(Uh.sub(t),h))}t.add(ol)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(r),Vs.copy(e.ray).recast(e.near),!(il.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(il,Hp)===null||Vs.origin.distanceToSquared(Hp)>(e.far-e.near)**2))&&(Bp.copy(r).invert(),Vs.copy(e.ray).applyMatrix4(Bp),!(n.boundingBox!==null&&Vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],v=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,C=_;y<C;y+=3){let A=o.getX(y),S=o.getX(y+1),R=o.getX(y+2);s=cl(this,p,e,n,c,h,u,A,S,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let v=o.getX(g),_=o.getX(g+1),y=o.getX(g+2);s=cl(this,a,e,n,c,h,u,v,_,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],v=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,C=_;y<C;y+=3){let A=y,S=y+1,R=y+2;s=cl(this,p,e,n,c,h,u,A,S,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let v=g,_=g+1,y=g+2;s=cl(this,a,e,n,c,h,u,v,_,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Nb(i,e,t,n,s,r,a,o){let l;if(e.side===on?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===jn,o),l===null)return null;ll.copy(o),ll.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ll);return c<t.near||c>t.far?null:{distance:c,point:ll.clone(),object:i}}function cl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,sl),i.getVertexPosition(l,rl),i.getVertexPosition(c,al);let h=Nb(i,e,t,n,sl,rl,al,zp);if(h){let u=new L;fs.getBarycoord(zp,sl,rl,al,u),s&&(h.uv=fs.getInterpolatedAttribute(s,o,l,c,u,new ie)),r&&(h.uv1=fs.getInterpolatedAttribute(r,o,l,c,u,new ie)),a&&(h.normal=fs.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new L,materialIndex:0};fs.getNormal(sl,rl,al,f.normal),h.face=f,h.barycoord=u}return h}var pt=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function m(x,g,p,v,_,y,C,A,S,R,P){let b=y/S,M=C/R,D=y/2,U=C/2,O=A/2,Z=S+1,H=R+1,se=0,X=0,ce=new L;for(let me=0;me<H;me++){let xe=me*M-U;for(let je=0;je<Z;je++){let Xe=je*b-D;ce[x]=Xe*v,ce[g]=xe*_,ce[p]=O,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[g]=0,ce[p]=A>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(je/S),u.push(1-me/R),se+=1}}for(let me=0;me<R;me++)for(let xe=0;xe<S;xe++){let je=f+xe+Z*me,Xe=f+xe+Z*(me+1),Q=f+(xe+1)+Z*(me+1),he=f+(xe+1)+Z*me;l.push(je,Xe,he),l.push(Xe,Q,he),X+=6}o.addGroup(d,X,P),d+=X,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Kr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=Kr(i[t]);for(let s in n)e[s]=n[s]}return e}function Fb(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function n0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Pn={clone:Kr,merge:yn},Ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tt=class extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ob,this.fragmentShader=kb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=Fb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Gl=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ds=new L,Gp=new ie,Vp=new ie,en=class extends Gl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,Gp,Vp),t.subVectors(Vp,Gp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Wa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wr=-90,Ar=1,ku=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(wr,Ar,e,t);s.layers=this.layers,this.add(s);let r=new en(wr,Ar,e,t);r.layers=this.layers,this.add(r);let a=new en(wr,Ar,e,t);a.layers=this.layers,this.add(a);let o=new en(wr,Ar,e,t);o.layers=this.layers,this.add(o);let l=new en(wr,Ar,e,t);l.layers=this.layers,this.add(l);let c=new en(wr,Ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ji)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Vl=class extends ln{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bu=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Vl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pt(5,5,5),r=new Tt({name:"CubemapFromEquirect",uniforms:Kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:nn});r.uniforms.tEquirect.value=t;let a=new k(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=An),new ku(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Nh=new L,Bb=new L,Hb=new at,qi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Nh.subVectors(n,t).cross(Bb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Nh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hb.getNormalMatrix(e),s=this.coplanarPoint(Nh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ws=new On,hl=new L,$a=class{constructor(e=new qi,t=new qi,n=new qi,s=new qi,r=new qi,a=new qi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ji){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],x=s[10],g=s[11],p=s[12],v=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,g-d,y-p).normalize(),n[1].setComponents(l+r,f+c,g+d,y+p).normalize(),n[2].setComponents(l+a,f+h,g+m,y+v).normalize(),n[3].setComponents(l-a,f-h,g-m,y-v).normalize(),n[4].setComponents(l-o,f-u,g-x,y-_).normalize(),t===ji)n[5].setComponents(l+o,f+u,g+x,y+_).normalize();else if(t===Ol)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){return Ws.center.set(0,0,0),Ws.radius=.7071067811865476,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(hl.x=s.normal.x>0?e.max.x:e.min.x,hl.y=s.normal.y>0?e.max.y:e.min.y,hl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function i0(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zb(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ct=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*f-a;for(let _=0;_<c;_++){let y=_*u-r;m.push(y,-v,0),x.push(0,0,1),g.push(_/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let _=v+c*p,y=v+c*(p+1),C=v+1+c*(p+1),A=v+1+c*p;d.push(_,y,A),d.push(y,C,A)}this.setIndex(d),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Gb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ex=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ux=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",vx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ux=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$x=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ev=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,av=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Iv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Gb,alphahash_pars_fragment:Vb,alphamap_fragment:Wb,alphamap_pars_fragment:Xb,alphatest_fragment:qb,alphatest_pars_fragment:jb,aomap_fragment:Yb,aomap_pars_fragment:Kb,batching_pars_vertex:Zb,batching_vertex:Jb,begin_vertex:Qb,beginnormal_vertex:$b,bsdfs:ex,iridescence_fragment:tx,bumpmap_pars_fragment:nx,clipping_planes_fragment:ix,clipping_planes_pars_fragment:sx,clipping_planes_pars_vertex:rx,clipping_planes_vertex:ax,color_fragment:ox,color_pars_fragment:lx,color_pars_vertex:cx,color_vertex:hx,common:ux,cube_uv_reflection_fragment:dx,defaultnormal_vertex:fx,displacementmap_pars_vertex:px,displacementmap_vertex:mx,emissivemap_fragment:gx,emissivemap_pars_fragment:bx,colorspace_fragment:xx,colorspace_pars_fragment:vx,envmap_fragment:_x,envmap_common_pars_fragment:yx,envmap_pars_fragment:Mx,envmap_pars_vertex:Sx,envmap_physical_pars_fragment:Ux,envmap_vertex:Ex,fog_vertex:Tx,fog_pars_vertex:wx,fog_fragment:Ax,fog_pars_fragment:Rx,gradientmap_pars_fragment:Cx,lightmap_pars_fragment:Px,lights_lambert_fragment:Ix,lights_lambert_pars_fragment:Lx,lights_pars_begin:Dx,lights_toon_fragment:Nx,lights_toon_pars_fragment:Fx,lights_phong_fragment:Ox,lights_phong_pars_fragment:kx,lights_physical_fragment:Bx,lights_physical_pars_fragment:Hx,lights_fragment_begin:zx,lights_fragment_maps:Gx,lights_fragment_end:Vx,logdepthbuf_fragment:Wx,logdepthbuf_pars_fragment:Xx,logdepthbuf_pars_vertex:qx,logdepthbuf_vertex:jx,map_fragment:Yx,map_pars_fragment:Kx,map_particle_fragment:Zx,map_particle_pars_fragment:Jx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:$x,morphinstance_vertex:ev,morphcolor_vertex:tv,morphnormal_vertex:nv,morphtarget_pars_vertex:iv,morphtarget_vertex:sv,normal_fragment_begin:rv,normal_fragment_maps:av,normal_pars_fragment:ov,normal_pars_vertex:lv,normal_vertex:cv,normalmap_pars_fragment:hv,clearcoat_normal_fragment_begin:uv,clearcoat_normal_fragment_maps:dv,clearcoat_pars_fragment:fv,iridescence_pars_fragment:pv,opaque_fragment:mv,packing:gv,premultiplied_alpha_fragment:bv,project_vertex:xv,dithering_fragment:vv,dithering_pars_fragment:_v,roughnessmap_fragment:yv,roughnessmap_pars_fragment:Mv,shadowmap_pars_fragment:Sv,shadowmap_pars_vertex:Ev,shadowmap_vertex:Tv,shadowmask_pars_fragment:wv,skinbase_vertex:Av,skinning_pars_vertex:Rv,skinning_vertex:Cv,skinnormal_vertex:Pv,specularmap_fragment:Iv,specularmap_pars_fragment:Lv,tonemapping_fragment:Dv,tonemapping_pars_fragment:Uv,transmission_fragment:Nv,transmission_pars_fragment:Fv,uv_pars_fragment:Ov,uv_pars_vertex:kv,uv_vertex:Bv,worldpos_vertex:Hv,background_vert:zv,background_frag:Gv,backgroundCube_vert:Vv,backgroundCube_frag:Wv,cube_vert:Xv,cube_frag:qv,depth_vert:jv,depth_frag:Yv,distanceRGBA_vert:Kv,distanceRGBA_frag:Zv,equirect_vert:Jv,equirect_frag:Qv,linedashed_vert:$v,linedashed_frag:e_,meshbasic_vert:t_,meshbasic_frag:n_,meshlambert_vert:i_,meshlambert_frag:s_,meshmatcap_vert:r_,meshmatcap_frag:a_,meshnormal_vert:o_,meshnormal_frag:l_,meshphong_vert:c_,meshphong_frag:h_,meshphysical_vert:u_,meshphysical_frag:d_,meshtoon_vert:f_,meshtoon_frag:p_,points_vert:m_,points_frag:g_,shadow_vert:b_,shadow_frag:x_,sprite_vert:v_,sprite_frag:__},Se={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Si={basic:{uniforms:yn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:yn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Le(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:yn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:yn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:yn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Le(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:yn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:yn([Se.points,Se.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:yn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:yn([Se.common,Se.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:yn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:yn([Se.sprite,Se.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:yn([Se.common,Se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:yn([Se.lights,Se.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Si.physical={uniforms:yn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var ul={r:0,b:0,g:0},Xs=new Ti,y_=new qe;function M_(i,e,t,n,s,r,a){let o=new Le(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function x(v){let _=!1,y=m(v);y===null?p(o,l):y&&y.isColor&&(p(y,1),_=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,_){let y=m(_);y&&(y.isCubeTexture||y.mapping===xc)?(h===void 0&&(h=new k(new pt(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:Kr(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xs.copy(_.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(y_.makeRotationFromEuler(Xs)),h.material.toneMapped=ft.getTransfer(y.colorSpace)!==It,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new k(new ct(2,2),new Tt({name:"BackgroundMaterial",uniforms:Kr(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ft.getTransfer(y.colorSpace)!==It,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(ul,n0(i)),n.buffers.color.setClear(ul.r,ul.g,ul.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:x,addToRenderList:g}}function S_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(b,M,D,U,O){let Z=!1,H=u(U,D,M);r!==H&&(r=H,c(r.object)),Z=d(b,U,D,O),Z&&m(b,U,D,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(b,M,D,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,M,D){let U=D.wireframe===!0,O=n[b.id];O===void 0&&(O={},n[b.id]=O);let Z=O[M.id];Z===void 0&&(Z={},O[M.id]=Z);let H=Z[U];return H===void 0&&(H=f(l()),Z[U]=H),H}function f(b){let M=[],D=[],U=[];for(let O=0;O<t;O++)M[O]=0,D[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:D,attributeDivisors:U,object:b,attributes:{},index:null}}function d(b,M,D,U){let O=r.attributes,Z=M.attributes,H=0,se=D.getAttributes();for(let X in se)if(se[X].location>=0){let me=O[X],xe=Z[X];if(xe===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor)),me===void 0||me.attribute!==xe||xe&&me.data!==xe.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function m(b,M,D,U){let O={},Z=M.attributes,H=0,se=D.getAttributes();for(let X in se)if(se[X].location>=0){let me=Z[X];me===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(me=b.instanceColor));let xe={};xe.attribute=me,me&&me.data&&(xe.data=me.data),O[X]=xe,H++}r.attributes=O,r.attributesNum=H,r.index=U}function x(){let b=r.newAttributes;for(let M=0,D=b.length;M<D;M++)b[M]=0}function g(b){p(b,0)}function p(b,M){let D=r.newAttributes,U=r.enabledAttributes,O=r.attributeDivisors;D[b]=1,U[b]===0&&(i.enableVertexAttribArray(b),U[b]=1),O[b]!==M&&(i.vertexAttribDivisor(b,M),O[b]=M)}function v(){let b=r.newAttributes,M=r.enabledAttributes;for(let D=0,U=M.length;D<U;D++)M[D]!==b[D]&&(i.disableVertexAttribArray(D),M[D]=0)}function _(b,M,D,U,O,Z,H){H===!0?i.vertexAttribIPointer(b,M,D,O,Z):i.vertexAttribPointer(b,M,D,U,O,Z)}function y(b,M,D,U){x();let O=U.attributes,Z=D.getAttributes(),H=M.defaultAttributeValues;for(let se in Z){let X=Z[se];if(X.location>=0){let ce=O[se];if(ce===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ce!==void 0){let me=ce.normalized,xe=ce.itemSize,je=e.get(ce);if(je===void 0)continue;let Xe=je.buffer,Q=je.type,he=je.bytesPerElement,Me=Q===i.INT||Q===i.UNSIGNED_INT||ce.gpuType===wd;if(ce.isInterleavedBufferAttribute){let pe=ce.data,Ne=pe.stride,Ce=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let ze=0;ze<X.locationSize;ze++)p(X.location+ze,pe.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ze=0;ze<X.locationSize;ze++)g(X.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ze=0;ze<X.locationSize;ze++)_(X.location+ze,xe/X.locationSize,Q,me,Ne*he,(Ce+xe/X.locationSize*ze)*he,Me)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<X.locationSize;pe++)p(X.location+pe,ce.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<X.locationSize;pe++)g(X.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let pe=0;pe<X.locationSize;pe++)_(X.location+pe,xe/X.locationSize,Q,me,xe*he,xe/X.locationSize*pe*he,Me)}}else if(H!==void 0){let me=H[se];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(X.location,me);break;case 3:i.vertexAttrib3fv(X.location,me);break;case 4:i.vertexAttrib4fv(X.location,me);break;default:i.vertexAttrib1fv(X.location,me)}}}}v()}function C(){R();for(let b in n){let M=n[b];for(let D in M){let U=M[D];for(let O in U)h(U[O].object),delete U[O];delete M[D]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;let M=n[b.id];for(let D in M){let U=M[D];for(let O in U)h(U[O].object),delete U[O];delete M[D]}delete n[b.id]}function S(b){for(let M in n){let D=n[M];if(D[b.id]===void 0)continue;let U=D[b.id];for(let O in U)h(U[O].object),delete U[O];delete D[b.id]}}function R(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function E_(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x];for(let x=0;x<f.length;x++)t.update(m,n,f[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function T_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==Rn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let R=S===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==bi&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==gi&&!R)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function w_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new qi,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,_=v*4,y=p.clippingState||null;l.value=y,y=h(m,f,_,d);for(let C=0;C!==_;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=d;_!==x;++_,y+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function A_(i){let e=new WeakMap;function t(a,o){return o===au?a.mapping=Wr:o===ou&&(a.mapping=Xr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===au||o===ou)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Bu(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var vs=class extends Gl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Or=4,Wp=[.125,.215,.35,.446,.526,.582],Ys=20,Fh=new vs,Xp=new Le,Oh=null,kh=0,Bh=0,Hh=!1,js=(1+Math.sqrt(5))/2,Rr=1/js,qp=[new L(-js,Rr,0),new L(js,Rr,0),new L(-Rr,0,js),new L(Rr,0,js),new L(0,js,-Rr),new L(0,js,Rr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Oh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,kh,Bh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:vn,format:Rn,colorSpace:cn,depthBuffer:!1},s=jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R_(r)),this._blurMaterial=C_(r,e,t)}return s}_compileMaterial(e){let t=new k(this._lodPlanes[0],e);this._renderer.compile(t,Fh)}_sceneToCubeUV(e,t,n,s){let o=new en(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Xp),h.toneMapping=ms,h.autoClear=!1;let d=new Ht({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new k(new pt,d),x=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,x=!0):(d.color.copy(Xp),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;dl(s,v*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Wr||e.mapping===Xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new k(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;dl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qp[(s-r-1)%qp.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new k(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ys-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Ys;g>Ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ys}`);let p=[],v=0;for(let S=0;S<Ys;++S){let R=S/x,P=Math.exp(-R*R/2);p.push(P),S===0?v+=P:S<g&&(v+=2*P)}for(let S=0;S<p.length;S++)p[S]=p[S]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;let y=this._sizeLods[s],C=3*y*(s>_-Or?s-_+Or:0),A=4*(this._cubeSize-y);dl(t,C,A,3*y,2*y),l.setRenderTarget(t),l.render(u,Fh)}};function R_(i){let e=[],t=[],n=[],s=i,r=i-Or+1+Wp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Or?l=Wp[a-i+Or-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*d),_=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let A=0;A<d;A++){let S=A%3*2/3-1,R=A>2?0:-1,P=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];v.set(P,x*m*A),_.set(f,g*m*A);let b=[A,A,A,A,A,A];y.set(b,p*m*A)}let C=new Mt;C.setAttribute("position",new Dt(v,x)),C.setAttribute("uv",new Dt(_,g)),C.setAttribute("faceIndex",new Dt(y,p)),e.push(C),s>Or&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jp(i,e,t){let n=new Jt(i,e,t);return n.texture.mapping=xc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function C_(i,e,t){let n=new Float32Array(Ys),s=new L(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Yp(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Kp(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Od(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function P_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===au||l===ou,h=l===Wr||l===Xr;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Zr(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Zr(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function I_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ll("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function L_(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)e.update(f[m],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let x=d[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let _=0,y=v.length;_<y;_+=3){let C=v[_+0],A=v[_+1],S=v[_+2];f.push(C,A,A,S,S,C)}}else if(m!==void 0){let v=m.array;x=m.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let C=_+0,A=_+1,S=_+2;f.push(C,A,A,S,S,C)}}else return;let g=new(e0(f)?zl:Hl)(f,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function D_(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*a,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=d[v];for(let v=0;v<x.length;v++)t.update(p,n,x[v])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function U_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function N_(i,e,t){let n=new WeakMap,s=new yt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let P=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let y=o.attributes.position.count*_,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*C*4*u),S=new Bl(A,y,C,u);S.type=gi,S.needsUpdate=!0;let R=_*4;for(let b=0;b<u;b++){let M=g[b],D=p[b],U=v[b],O=y*C*4*b;for(let Z=0;Z<M.count;Z++){let H=Z*R;d===!0&&(s.fromBufferAttribute(M,Z),A[O+H+0]=s.x,A[O+H+1]=s.y,A[O+H+2]=s.z,A[O+H+3]=0),m===!0&&(s.fromBufferAttribute(D,Z),A[O+H+4]=s.x,A[O+H+5]=s.y,A[O+H+6]=s.z,A[O+H+7]=0),x===!0&&(s.fromBufferAttribute(U,Z),A[O+H+8]=s.x,A[O+H+9]=s.y,A[O+H+10]=s.z,A[O+H+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:S,size:new ie(y,C)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function F_(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Jr=class extends ln{constructor(e,t,n,s,r,a,o,l,c,h=Hr){if(h!==Hr&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hr&&(n=Ks),n===void 0&&h===xs&&(n=bs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},s0=new ln,Zp=new Jr(1,1),r0=new Bl,a0=new Ou,o0=new Vl,Jp=[],Qp=[],$p=new Float32Array(16),em=new Float32Array(9),tm=new Float32Array(4);function ca(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Jp[s];if(r===void 0&&(r=new Float32Array(s),Jp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yc(i,e){let t=Qp[e];t===void 0&&(t=new Int32Array(e),Qp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function O_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function k_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function z_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;tm.set(n),i.uniformMatrix2fv(this.addr,!1,tm),rn(t,n)}}function G_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;em.set(n),i.uniformMatrix3fv(this.addr,!1,em),rn(t,n)}}function V_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;$p.set(n),i.uniformMatrix4fv(this.addr,!1,$p),rn(t,n)}}function W_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function X_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function Q_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zp.compareFunction=$m,r=Zp):r=s0,t.setTexture2D(e||r,s)}function $_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||a0,s)}function ey(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||o0,s)}function ty(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||r0,s)}function ny(i){switch(i){case 5126:return O_;case 35664:return k_;case 35665:return B_;case 35666:return H_;case 35674:return z_;case 35675:return G_;case 35676:return V_;case 5124:case 35670:return W_;case 35667:case 35671:return X_;case 35668:case 35672:return q_;case 35669:case 35673:return j_;case 5125:return Y_;case 36294:return K_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}function iy(i,e){i.uniform1fv(this.addr,e)}function sy(i,e){let t=ca(e,this.size,2);i.uniform2fv(this.addr,t)}function ry(i,e){let t=ca(e,this.size,3);i.uniform3fv(this.addr,t)}function ay(i,e){let t=ca(e,this.size,4);i.uniform4fv(this.addr,t)}function oy(i,e){let t=ca(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ly(i,e){let t=ca(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cy(i,e){let t=ca(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hy(i,e){i.uniform1iv(this.addr,e)}function uy(i,e){i.uniform2iv(this.addr,e)}function dy(i,e){i.uniform3iv(this.addr,e)}function fy(i,e){i.uniform4iv(this.addr,e)}function py(i,e){i.uniform1uiv(this.addr,e)}function my(i,e){i.uniform2uiv(this.addr,e)}function gy(i,e){i.uniform3uiv(this.addr,e)}function by(i,e){i.uniform4uiv(this.addr,e)}function xy(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||s0,r[a])}function vy(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||a0,r[a])}function _y(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o0,r[a])}function yy(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||r0,r[a])}function My(i){switch(i){case 5126:return iy;case 35664:return sy;case 35665:return ry;case 35666:return ay;case 35674:return oy;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return hy;case 35667:case 35671:return uy;case 35668:case 35672:return dy;case 35669:case 35673:return fy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return yy}}var Hu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ny(t.type)}},zu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=My(t.type)}},Gu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},zh=/(\w+)(\])?(\[|\.)?/g;function nm(i,e){i.seq.push(e),i.map[e.id]=e}function Sy(i,e,t){let n=i.name,s=n.length;for(zh.lastIndex=0;;){let r=zh.exec(n),a=zh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nm(t,c===void 0?new Hu(o,i,e):new zu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Gu(o),nm(t,u)),t=u}}}var Gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Sy(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function im(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ey=37297,Ty=0;function wy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ay(i){let e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(i),n;switch(e===t?n="":e===Fl&&t===Nl?n="LinearDisplayP3ToLinearSRGB":e===Nl&&t===Fl&&(n="LinearSRGBToLinearDisplayP3"),i){case cn:case _c:return[n,"LinearTransferOETF"];case zt:case Nd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+wy(i.getShaderSource(e),a)}else return s}function Ry(i,e){let t=Ay(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cy(i,e){let t;switch(e){case _d:t="Linear";break;case yd:t="Reinhard";break;case Md:t="Cineon";break;case ho:t="ACESFilmic";break;case Sd:t="AgX";break;case Ed:t="Neutral";break;case zg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fl=new L;function Py(){ft.getLuminanceCoefficients(fl);let i=fl.x.toFixed(4),e=fl.y.toFixed(4),t=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function Ly(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ga(i){return i!==""}function rm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function am(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vu(i){return i.replace(Uy,Fy)}var Ny=new Map;function Fy(i,e){let t=rt[e];if(t===void 0){let n=Ny.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vu(t)}var Oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(i){return i.replace(Oy,ky)}function ky(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function By(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function Hy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zy(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Xr&&(e="ENVMAP_MODE_REFRACTION"),e}function Gy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zm:e="ENVMAP_BLENDING_MULTIPLY";break;case Bg:e="ENVMAP_BLENDING_MIX";break;case Hg:e="ENVMAP_BLENDING_ADD";break}return e}function Vy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=By(t),c=Hy(t),h=zy(t),u=Gy(t),f=Vy(t),d=Iy(t),m=Ly(r),x=s.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ga).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ga).join(`
`),p.length>0&&(p+=`
`)):(g=[lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),p=[lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ms?"#define TONE_MAPPING":"",t.toneMapping!==ms?rt.tonemapping_pars_fragment:"",t.toneMapping!==ms?Cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Ry("linearToOutputTexel",t.outputColorSpace),Py(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),a=Vu(a),a=rm(a,t),a=am(a,t),o=Vu(o),o=rm(o,t),o=am(o,t),a=om(a),o=om(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+g+a,y=v+p+o,C=im(s,s.VERTEX_SHADER,_),A=im(s,s.FRAGMENT_SHADER,y);s.attachShader(x,C),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(M){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(C).trim(),O=s.getShaderInfoLog(A).trim(),Z=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,A);else{let se=sm(s,C,"vertex"),X=sm(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+D+`
`+se+`
`+X)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||O==="")&&(H=!1);H&&(M.diagnostics={runnable:Z,programLog:D,vertexShader:{log:U,prefix:g},fragmentShader:{log:O,prefix:p}})}s.deleteShader(C),s.deleteShader(A),R=new Gr(s,x),P=Dy(s,x)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let P;this.getAttributes=function(){return P===void 0&&S(this),P};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Ey)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ty++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}var Xy=0,Wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xu(e),t.set(e,n)),n}},Xu=class{constructor(e){this.id=Xy++,this.code=e,this.usedTimes=0}};function qy(i,e,t,n,s,r,a){let o=new Qa,l=new Wu,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,M,D,U,O){let Z=U.fog,H=O.geometry,se=b.isMeshStandardMaterial?U.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),ce=X&&X.mapping===xc?X.image.height:null,me=x[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let xe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,je=xe!==void 0?xe.length:0,Xe=0;H.morphAttributes.position!==void 0&&(Xe=1),H.morphAttributes.normal!==void 0&&(Xe=2),H.morphAttributes.color!==void 0&&(Xe=3);let Q,he,Me,pe;if(me){let wn=Si[me];Q=wn.vertexShader,he=wn.fragmentShader}else Q=b.vertexShader,he=b.fragmentShader,l.update(b),Me=l.getVertexShaderID(b),pe=l.getFragmentShaderID(b);let Ne=i.getRenderTarget(),Ce=O.isInstancedMesh===!0,ze=O.isBatchedMesh===!0,Ye=!!b.map,re=!!b.matcap,I=!!X,W=!!b.aoMap,N=!!b.lightMap,V=!!b.bumpMap,q=!!b.normalMap,ne=!!b.displacementMap,Y=!!b.emissiveMap,T=!!b.metalnessMap,E=!!b.roughnessMap,B=b.anisotropy>0,ee=b.clearcoat>0,ae=b.dispersion>0,te=b.iridescence>0,Fe=b.sheen>0,ve=b.transmission>0,we=B&&!!b.anisotropyMap,st=ee&&!!b.clearcoatMap,de=ee&&!!b.clearcoatNormalMap,Ae=ee&&!!b.clearcoatRoughnessMap,Ze=te&&!!b.iridescenceMap,Je=te&&!!b.iridescenceThicknessMap,Ue=Fe&&!!b.sheenColorMap,ut=Fe&&!!b.sheenRoughnessMap,tt=!!b.specularMap,vt=!!b.specularColorMap,F=!!b.specularIntensityMap,Te=ve&&!!b.transmissionMap,J=ve&&!!b.thicknessMap,le=!!b.gradientMap,Pe=!!b.alphaMap,De=b.alphaTest>0,xt=!!b.alphaHash,Kt=!!b.extensions,Tn=ms;b.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Tn=i.toneMapping);let _t={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:Q,fragmentShader:he,defines:b.defines,customVertexShaderID:Me,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:ze,batchingColor:ze&&O._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,instancingMorph:Ce&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ne===null?i.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:cn,alphaToCoverage:!!b.alphaToCoverage,map:Ye,matcap:re,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:ce,aoMap:W,lightMap:N,bumpMap:V,normalMap:q,displacementMap:d&&ne,emissiveMap:Y,normalMapObjectSpace:q&&b.normalMapType===Kg,normalMapTangentSpace:q&&b.normalMapType===Ud,metalnessMap:T,roughnessMap:E,anisotropy:B,anisotropyMap:we,clearcoat:ee,clearcoatMap:st,clearcoatNormalMap:de,clearcoatRoughnessMap:Ae,dispersion:ae,iridescence:te,iridescenceMap:Ze,iridescenceThicknessMap:Je,sheen:Fe,sheenColorMap:Ue,sheenRoughnessMap:ut,specularMap:tt,specularColorMap:vt,specularIntensityMap:F,transmission:ve,transmissionMap:Te,thicknessMap:J,gradientMap:le,opaque:b.transparent===!1&&b.blending===Br&&b.alphaToCoverage===!1,alphaMap:Pe,alphaTest:De,alphaHash:xt,combine:b.combine,mapUv:Ye&&g(b.map.channel),aoMapUv:W&&g(b.aoMap.channel),lightMapUv:N&&g(b.lightMap.channel),bumpMapUv:V&&g(b.bumpMap.channel),normalMapUv:q&&g(b.normalMap.channel),displacementMapUv:ne&&g(b.displacementMap.channel),emissiveMapUv:Y&&g(b.emissiveMap.channel),metalnessMapUv:T&&g(b.metalnessMap.channel),roughnessMapUv:E&&g(b.roughnessMap.channel),anisotropyMapUv:we&&g(b.anisotropyMap.channel),clearcoatMapUv:st&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(b.sheenRoughnessMap.channel),specularMapUv:tt&&g(b.specularMap.channel),specularColorMapUv:vt&&g(b.specularColorMap.channel),specularIntensityMapUv:F&&g(b.specularIntensityMap.channel),transmissionMapUv:Te&&g(b.transmissionMap.channel),thicknessMapUv:J&&g(b.thicknessMap.channel),alphaMapUv:Pe&&g(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(q||B),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Ye||Pe),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tn,decodeVideoTexture:Ye&&b.map.isVideoTexture===!0&&ft.getTransfer(b.map.colorSpace)===It,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bt,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Kt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&b.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function v(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(_(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),b.push(o.mask)}function C(b){let M=x[b.type],D;if(M){let U=Si[M];D=Pn.clone(U.uniforms)}else D=b.uniforms;return D}function A(b,M){let D;for(let U=0,O=h.length;U<O;U++){let Z=h[U];if(Z.cacheKey===M){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new Wy(i,M,b,r),h.push(D)),D}function S(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:C,acquireProgram:A,releaseProgram:S,releaseShaderCache:R,programs:h,dispose:P}}function jy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Yy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,m,x,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function o(u,f,d,m,x,g){let p=a(u,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,m,x,g){let p=a(u,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||Yy),n.length>1&&n.sort(f||cm),s.length>1&&s.sort(f||cm)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Ky(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new hm,i.set(n,[a])):s>=r.length?(a=new hm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Le};break;case"SpotLight":t={position:new L,direction:new L,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Jy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Qy=0;function $y(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eM(i){let e=new Zy,t=Jy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new qe,a=new qe;function o(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,v=0,_=0,y=0,C=0,A=0,S=0;c.sort($y);for(let P=0,b=c.length;P<b;P++){let M=c[P],D=M.color,U=M.intensity,O=M.distance,Z=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=D.r*U,u+=D.g*U,f+=D.b*U;else if(M.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(M.sh.coefficients[H],U);S++}else if(M.isDirectionalLight){let H=e.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let se=M.shadow,X=t.get(M);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=M.shadow.matrix,v++}n.directional[d]=H,d++}else if(M.isSpotLight){let H=e.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(D).multiplyScalar(U),H.distance=O,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,n.spot[x]=H;let se=M.shadow;if(M.map&&(n.spotLightMap[C]=M.map,C++,se.updateMatrices(M),M.castShadow&&A++),n.spotLightMatrix[x]=se.matrix,M.castShadow){let X=t.get(M);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=Z,y++}x++}else if(M.isRectAreaLight){let H=e.get(M);H.color.copy(D).multiplyScalar(U),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),n.rectArea[g]=H,g++}else if(M.isPointLight){let H=e.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){let se=M.shadow,X=t.get(M);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,X.shadowCameraNear=se.camera.near,X.shadowCameraFar=se.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=M.shadow.matrix,_++}n.point[m]=H,m++}else if(M.isHemisphereLight){let H=e.get(M);H.skyColor.copy(M.color).multiplyScalar(U),H.groundColor.copy(M.groundColor).multiplyScalar(U),n.hemi[p]=H,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==_||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=S,R.directionalLength=d,R.pointLength=m,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=_,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=S,n.version=Qy++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(_.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(_.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function um(i){let e=new eM(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function tM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new um(i),e.set(s,[o])):r>=a.length?(o=new um(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var qu=class extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ju=class extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},nM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sM(i,e,t){let n=new $a,s=new ie,r=new ie,a=new yt,o=new qu({depthPacking:Yg}),l=new ju,c={},h=t.maxTextureSize,u={[jn]:on,[on]:jn,[Bt]:Bt},f=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:nM,fragmentShader:iM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Mt;m.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new k(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hm;let p=this.type;this.render=function(A,S,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let P=i.getRenderTarget(),b=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),D=i.state;D.setBlending(nn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=p!==Xi&&this.type===Xi,O=p===Xi&&this.type!==Xi;for(let Z=0,H=A.length;Z<H;Z++){let se=A[Z],X=se.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ce=X.getFrameExtents();if(s.multiply(ce),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,X.mapSize.y=r.y)),X.map===null||U===!0||O===!0){let xe=this.type!==Xi?{minFilter:tn,magFilter:tn}:{};X.map!==null&&X.map.dispose(),X.map=new Jt(s.x,s.y,xe),X.map.texture.name=se.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let me=X.getViewportCount();for(let xe=0;xe<me;xe++){let je=X.getViewport(xe);a.set(r.x*je.x,r.y*je.y,r.x*je.z,r.y*je.w),D.viewport(a),X.updateMatrices(se,xe),n=X.getFrustum(),y(S,R,X.camera,se,this.type)}X.isPointLightShadow!==!0&&this.type===Xi&&v(X,R),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(P,b,M)};function v(A,S){let R=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jt(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(S,null,R,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(S,null,R,d,x,null)}function _(A,S,R,P){let b=null,M=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)b=M;else if(b=R.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let D=b.uuid,U=S.uuid,O=c[D];O===void 0&&(O={},c[D]=O);let Z=O[U];Z===void 0&&(Z=b.clone(),O[U]=Z,S.addEventListener("dispose",C)),b=Z}if(b.visible=S.visible,b.wireframe=S.wireframe,P===Xi?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:u[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let D=i.properties.get(b);D.light=R}return b}function y(A,S,R,P,b){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Xi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let U=e.update(A),O=A.material;if(Array.isArray(O)){let Z=U.groups;for(let H=0,se=Z.length;H<se;H++){let X=Z[H],ce=O[X.materialIndex];if(ce&&ce.visible){let me=_(A,ce,P,b);A.onBeforeShadow(i,A,S,R,U,me,X),i.renderBufferDirect(R,null,U,me,A,X),A.onAfterShadow(i,A,S,R,U,me,X)}}}else if(O.visible){let Z=_(A,O,P,b);A.onBeforeShadow(i,A,S,R,U,Z,null),i.renderBufferDirect(R,null,U,Z,A,null),A.onAfterShadow(i,A,S,R,U,Z,null)}}let D=A.children;for(let U=0,O=D.length;U<O;U++)y(D[U],S,R,P,b)}function C(A){A.target.removeEventListener("dispose",C);for(let R in c){let P=c[R],b=A.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}var rM={[$h]:eu,[tu]:su,[nu]:ru,[Vr]:iu,[eu]:$h,[su]:tu,[ru]:nu,[iu]:Vr};function aM(i){function e(){let F=!1,Te=new yt,J=null,le=new yt(0,0,0,0);return{setMask:function(Pe){J!==Pe&&!F&&(i.colorMask(Pe,Pe,Pe,Pe),J=Pe)},setLocked:function(Pe){F=Pe},setClear:function(Pe,De,xt,Kt,Tn){Tn===!0&&(Pe*=Kt,De*=Kt,xt*=Kt),Te.set(Pe,De,xt,Kt),le.equals(Te)===!1&&(i.clearColor(Pe,De,xt,Kt),le.copy(Te))},reset:function(){F=!1,J=null,le.set(-1,0,0,0)}}}function t(){let F=!1,Te=!1,J=null,le=null,Pe=null;return{setReversed:function(De){Te=De},setTest:function(De){De?Me(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(De){J!==De&&!F&&(i.depthMask(De),J=De)},setFunc:function(De){if(Te&&(De=rM[De]),le!==De){switch(De){case $h:i.depthFunc(i.NEVER);break;case eu:i.depthFunc(i.ALWAYS);break;case tu:i.depthFunc(i.LESS);break;case Vr:i.depthFunc(i.LEQUAL);break;case nu:i.depthFunc(i.EQUAL);break;case iu:i.depthFunc(i.GEQUAL);break;case su:i.depthFunc(i.GREATER);break;case ru:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=De}},setLocked:function(De){F=De},setClear:function(De){Pe!==De&&(i.clearDepth(De),Pe=De)},reset:function(){F=!1,J=null,le=null,Pe=null}}}function n(){let F=!1,Te=null,J=null,le=null,Pe=null,De=null,xt=null,Kt=null,Tn=null;return{setTest:function(_t){F||(_t?Me(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(_t){Te!==_t&&!F&&(i.stencilMask(_t),Te=_t)},setFunc:function(_t,wn,ki){(J!==_t||le!==wn||Pe!==ki)&&(i.stencilFunc(_t,wn,ki),J=_t,le=wn,Pe=ki)},setOp:function(_t,wn,ki){(De!==_t||xt!==wn||Kt!==ki)&&(i.stencilOp(_t,wn,ki),De=_t,xt=wn,Kt=ki)},setLocked:function(_t){F=_t},setClear:function(_t){Tn!==_t&&(i.clearStencil(_t),Tn=_t)},reset:function(){F=!1,Te=null,J=null,le=null,Pe=null,De=null,xt=null,Kt=null,Tn=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,m=!1,x=null,g=null,p=null,v=null,_=null,y=null,C=null,A=new Le(0,0,0),S=0,R=!1,P=null,b=null,M=null,D=null,U=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,H=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(se)[1]),Z=H>=1):se.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),Z=H>=2);let X=null,ce={},me=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),je=new yt().fromArray(me),Xe=new yt().fromArray(xe);function Q(F,Te,J,le){let Pe=new Uint8Array(4),De=i.createTexture();i.bindTexture(F,De),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<J;xt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Te+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return De}let he={};he[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Me(i.DEPTH_TEST),r.setFunc(Vr),N(!1),V(_p),Me(i.CULL_FACE),I(nn);function Me(F){c[F]!==!0&&(i.enable(F),c[F]=!0)}function pe(F){c[F]!==!1&&(i.disable(F),c[F]=!1)}function Ne(F,Te){return h[F]!==Te?(i.bindFramebuffer(F,Te),h[F]=Te,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Te),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ce(F,Te){let J=f,le=!1;if(F){J=u.get(Te),J===void 0&&(J=[],u.set(Te,J));let Pe=F.textures;if(J.length!==Pe.length||J[0]!==i.COLOR_ATTACHMENT0){for(let De=0,xt=Pe.length;De<xt;De++)J[De]=i.COLOR_ATTACHMENT0+De;J.length=Pe.length,le=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,le=!0);le&&i.drawBuffers(J)}function ze(F){return d!==F?(i.useProgram(F),d=F,!0):!1}let Ye={[Wn]:i.FUNC_ADD,[Tg]:i.FUNC_SUBTRACT,[wg]:i.FUNC_REVERSE_SUBTRACT};Ye[Ag]=i.MIN,Ye[Rg]=i.MAX;let re={[la]:i.ZERO,[Cg]:i.ONE,[Pg]:i.SRC_COLOR,[Jh]:i.SRC_ALPHA,[Ug]:i.SRC_ALPHA_SATURATE,[bc]:i.DST_COLOR,[gc]:i.DST_ALPHA,[Ig]:i.ONE_MINUS_SRC_COLOR,[Qh]:i.ONE_MINUS_SRC_ALPHA,[Dg]:i.ONE_MINUS_DST_COLOR,[Lg]:i.ONE_MINUS_DST_ALPHA,[Ng]:i.CONSTANT_COLOR,[Fg]:i.ONE_MINUS_CONSTANT_COLOR,[Og]:i.CONSTANT_ALPHA,[kg]:i.ONE_MINUS_CONSTANT_ALPHA};function I(F,Te,J,le,Pe,De,xt,Kt,Tn,_t){if(F===nn){m===!0&&(pe(i.BLEND),m=!1);return}if(m===!1&&(Me(i.BLEND),m=!0),F!==vd){if(F!==x||_t!==R){if((g!==Wn||_!==Wn)&&(i.blendEquation(i.FUNC_ADD),g=Wn,_=Wn),_t)switch(F){case Br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFunc(i.ONE,i.ONE);break;case yp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}p=null,v=null,y=null,C=null,A.set(0,0,0),S=0,x=F,R=_t}return}Pe=Pe||Te,De=De||J,xt=xt||le,(Te!==g||Pe!==_)&&(i.blendEquationSeparate(Ye[Te],Ye[Pe]),g=Te,_=Pe),(J!==p||le!==v||De!==y||xt!==C)&&(i.blendFuncSeparate(re[J],re[le],re[De],re[xt]),p=J,v=le,y=De,C=xt),(Kt.equals(A)===!1||Tn!==S)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Tn),A.copy(Kt),S=Tn),x=F,R=!1}function W(F,Te){F.side===Bt?pe(i.CULL_FACE):Me(i.CULL_FACE);let J=F.side===on;Te&&(J=!J),N(J),F.blending===Br&&F.transparent===!1?I(nn):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);let le=F.stencilWrite;a.setTest(le),le&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ne(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function N(F){P!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),P=F)}function V(F){F!==Sg?(Me(i.CULL_FACE),F!==b&&(F===_p?i.cullFace(i.BACK):F===Eg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),b=F}function q(F){F!==M&&(Z&&i.lineWidth(F),M=F)}function ne(F,Te,J){F?(Me(i.POLYGON_OFFSET_FILL),(D!==Te||U!==J)&&(i.polygonOffset(Te,J),D=Te,U=J)):pe(i.POLYGON_OFFSET_FILL)}function Y(F){F?Me(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function T(F){F===void 0&&(F=i.TEXTURE0+O-1),X!==F&&(i.activeTexture(F),X=F)}function E(F,Te,J){J===void 0&&(X===null?J=i.TEXTURE0+O-1:J=X);let le=ce[J];le===void 0&&(le={type:void 0,texture:void 0},ce[J]=le),(le.type!==F||le.texture!==Te)&&(X!==J&&(i.activeTexture(J),X=J),i.bindTexture(F,Te||he[F]),le.type=F,le.texture=Te)}function B(){let F=ce[X];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ze(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Je(F){je.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),je.copy(F))}function Ue(F){Xe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Xe.copy(F))}function ut(F,Te){let J=l.get(Te);J===void 0&&(J=new WeakMap,l.set(Te,J));let le=J.get(F);le===void 0&&(le=i.getUniformBlockIndex(Te,F.name),J.set(F,le))}function tt(F,Te){let le=l.get(Te).get(F);o.get(Te)!==le&&(i.uniformBlockBinding(Te,le,F.__bindingPointIndex),o.set(Te,le))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},X=null,ce={},h={},u=new WeakMap,f=[],d=null,m=!1,x=null,g=null,p=null,v=null,_=null,y=null,C=null,A=new Le(0,0,0),S=0,R=!1,P=null,b=null,M=null,D=null,U=null,je.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Me,disable:pe,bindFramebuffer:Ne,drawBuffers:Ce,useProgram:ze,setBlending:I,setMaterial:W,setFlipSided:N,setCullFace:V,setLineWidth:q,setPolygonOffset:ne,setScissorTest:Y,activeTexture:T,bindTexture:E,unbindTexture:B,compressedTexImage2D:ee,compressedTexImage3D:ae,texImage2D:Ae,texImage3D:Ze,updateUBOMapping:ut,uniformBlockBinding:tt,texStorage2D:st,texStorage3D:de,texSubImage2D:te,texSubImage3D:Fe,compressedTexSubImage2D:ve,compressedTexSubImage3D:we,scissor:Je,viewport:Ue,reset:vt}}function dm(i,e,t,n){let s=oM(n);switch(t){case qm:return i*e;case Ym:return i*e;case Km:return i*e*2;case Cd:return i*e/s.components*s.byteLength;case Pd:return i*e/s.components*s.byteLength;case Zm:return i*e*2/s.components*s.byteLength;case Id:return i*e*2/s.components*s.byteLength;case jm:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case Ld:return i*e*4/s.components*s.byteLength;case Al:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cu:case uu:return Math.max(i,16)*Math.max(e,8)/4;case lu:case hu:return Math.max(i,8)*Math.max(e,8)/2;case du:case fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _u:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Su:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Au:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Il:case Cu:case Pu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jm:case Iu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Lu:case Du:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oM(i){switch(i){case bi:case Vm:return{byteLength:1,components:1};case Za:case Wm:case vn:return{byteLength:2,components:1};case Ad:case Rd:return{byteLength:2,components:4};case Ks:case wd:case gi:return{byteLength:4,components:1};case Xm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,E){return d?new OffscreenCanvas(T,E):Ja("canvas")}function x(T,E,B){let ee=1,ae=Y(T);if((ae.width>B||ae.height>B)&&(ee=B/Math.max(ae.width,ae.height)),ee<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let te=Math.floor(ee*ae.width),Fe=Math.floor(ee*ae.height);u===void 0&&(u=m(te,Fe));let ve=E?m(te,Fe):u;return ve.width=te,ve.height=Fe,ve.getContext("2d").drawImage(T,0,0,te,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+te+"x"+Fe+")."),ve}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),T;return T}function g(T){return T.generateMipmaps&&T.minFilter!==tn&&T.minFilter!==An}function p(T){i.generateMipmap(T)}function v(T,E,B,ee,ae=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let te=E;if(E===i.RED&&(B===i.FLOAT&&(te=i.R32F),B===i.HALF_FLOAT&&(te=i.R16F),B===i.UNSIGNED_BYTE&&(te=i.R8)),E===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(te=i.R8UI),B===i.UNSIGNED_SHORT&&(te=i.R16UI),B===i.UNSIGNED_INT&&(te=i.R32UI),B===i.BYTE&&(te=i.R8I),B===i.SHORT&&(te=i.R16I),B===i.INT&&(te=i.R32I)),E===i.RG&&(B===i.FLOAT&&(te=i.RG32F),B===i.HALF_FLOAT&&(te=i.RG16F),B===i.UNSIGNED_BYTE&&(te=i.RG8)),E===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(te=i.RG8UI),B===i.UNSIGNED_SHORT&&(te=i.RG16UI),B===i.UNSIGNED_INT&&(te=i.RG32UI),B===i.BYTE&&(te=i.RG8I),B===i.SHORT&&(te=i.RG16I),B===i.INT&&(te=i.RG32I)),E===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(te=i.RGB8UI),B===i.UNSIGNED_SHORT&&(te=i.RGB16UI),B===i.UNSIGNED_INT&&(te=i.RGB32UI),B===i.BYTE&&(te=i.RGB8I),B===i.SHORT&&(te=i.RGB16I),B===i.INT&&(te=i.RGB32I)),E===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),B===i.UNSIGNED_INT&&(te=i.RGBA32UI),B===i.BYTE&&(te=i.RGBA8I),B===i.SHORT&&(te=i.RGBA16I),B===i.INT&&(te=i.RGBA32I)),E===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),E===i.RGBA){let Fe=ae?Ul:ft.getTransfer(ee);B===i.FLOAT&&(te=i.RGBA32F),B===i.HALF_FLOAT&&(te=i.RGBA16F),B===i.UNSIGNED_BYTE&&(te=Fe===It?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function _(T,E){let B;return T?E===null||E===Ks||E===bs?B=i.DEPTH24_STENCIL8:E===gi?B=i.DEPTH32F_STENCIL8:E===Za&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ks||E===bs?B=i.DEPTH_COMPONENT24:E===gi?B=i.DEPTH_COMPONENT32F:E===Za&&(B=i.DEPTH_COMPONENT16),B}function y(T,E){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==tn&&T.minFilter!==An?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function C(T){let E=T.target;E.removeEventListener("dispose",C),S(E),E.isVideoTexture&&h.delete(E)}function A(T){let E=T.target;E.removeEventListener("dispose",A),P(E)}function S(T){let E=n.get(T);if(E.__webglInit===void 0)return;let B=T.source,ee=f.get(B);if(ee){let ae=ee[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(T),Object.keys(ee).length===0&&f.delete(B)}n.remove(T)}function R(T){let E=n.get(T);i.deleteTexture(E.__webglTexture);let B=T.source,ee=f.get(B);delete ee[E.__cacheKey],a.memory.textures--}function P(T){let E=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ae=0;ae<E.__webglFramebuffer[ee].length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[ee][ae]);else i.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)i.deleteFramebuffer(E.__webglFramebuffer[ee]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let B=T.textures;for(let ee=0,ae=B.length;ee<ae;ee++){let te=n.get(B[ee]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(B[ee])}n.remove(T)}let b=0;function M(){b=0}function D(){let T=b;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),b+=1,T}function U(T){let E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function O(T,E){let B=n.get(T);if(T.isVideoTexture&&q(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(B,T,E);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+E)}function Z(T,E){let B=n.get(T);if(T.version>0&&B.__version!==T.version){Xe(B,T,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+E)}function H(T,E){let B=n.get(T);if(T.version>0&&B.__version!==T.version){Xe(B,T,E);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+E)}function se(T,E){let B=n.get(T);if(T.version>0&&B.__version!==T.version){Q(B,T,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+E)}let X={[xn]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},ce={[tn]:i.NEAREST,[Td]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[Va]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},me={[Zg]:i.NEVER,[nb]:i.ALWAYS,[Jg]:i.LESS,[$m]:i.LEQUAL,[Qg]:i.EQUAL,[tb]:i.GEQUAL,[$g]:i.GREATER,[eb]:i.NOTEQUAL};function xe(T,E){if(E.type===gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===An||E.magFilter===Va||E.magFilter===Ur||E.magFilter===Xn||E.minFilter===An||E.minFilter===Va||E.minFilter===Ur||E.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,X[E.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,X[E.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,X[E.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[E.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===tn||E.minFilter!==Ur&&E.minFilter!==Xn||E.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function je(T,E){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",C));let ee=E.source,ae=f.get(ee);ae===void 0&&(ae={},f.set(ee,ae));let te=U(E);if(te!==T.__cacheKey){ae[te]===void 0&&(ae[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ae[te].usedTimes++;let Fe=ae[T.__cacheKey];Fe!==void 0&&(ae[T.__cacheKey].usedTimes--,Fe.usedTimes===0&&R(E)),T.__cacheKey=te,T.__webglTexture=ae[te].texture}return B}function Xe(T,E,B){let ee=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=i.TEXTURE_3D);let ae=je(T,E),te=E.source;t.bindTexture(ee,T.__webglTexture,i.TEXTURE0+B);let Fe=n.get(te);if(te.version!==Fe.__version||ae===!0){t.activeTexture(i.TEXTURE0+B);let ve=ft.getPrimaries(ft.workingColorSpace),we=E.colorSpace===pi?null:ft.getPrimaries(E.colorSpace),st=E.colorSpace===pi||ve===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let de=x(E.image,!1,s.maxTextureSize);de=ne(E,de);let Ae=r.convert(E.format,E.colorSpace),Ze=r.convert(E.type),Je=v(E.internalFormat,Ae,Ze,E.colorSpace,E.isVideoTexture);xe(ee,E);let Ue,ut=E.mipmaps,tt=E.isVideoTexture!==!0,vt=Fe.__version===void 0||ae===!0,F=te.dataReady,Te=y(E,de);if(E.isDepthTexture)Je=_(E.format===xs,E.type),vt&&(tt?t.texStorage2D(i.TEXTURE_2D,1,Je,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Je,de.width,de.height,0,Ae,Ze,null));else if(E.isDataTexture)if(ut.length>0){tt&&vt&&t.texStorage2D(i.TEXTURE_2D,Te,Je,ut[0].width,ut[0].height);for(let J=0,le=ut.length;J<le;J++)Ue=ut[J],tt?F&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ue.width,Ue.height,Ae,Ze,Ue.data):t.texImage2D(i.TEXTURE_2D,J,Je,Ue.width,Ue.height,0,Ae,Ze,Ue.data);E.generateMipmaps=!1}else tt?(vt&&t.texStorage2D(i.TEXTURE_2D,Te,Je,de.width,de.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Ae,Ze,de.data)):t.texImage2D(i.TEXTURE_2D,0,Je,de.width,de.height,0,Ae,Ze,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Je,ut[0].width,ut[0].height,de.depth);for(let J=0,le=ut.length;J<le;J++)if(Ue=ut[J],E.format!==Rn)if(Ae!==null)if(tt){if(F)if(E.layerUpdates.size>0){let Pe=dm(Ue.width,Ue.height,E.format,E.type);for(let De of E.layerUpdates){let xt=Ue.data.subarray(De*Pe/Ue.data.BYTES_PER_ELEMENT,(De+1)*Pe/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,De,Ue.width,Ue.height,1,Ae,xt,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ue.width,Ue.height,de.depth,Ae,Ue.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Je,Ue.width,Ue.height,de.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ue.width,Ue.height,de.depth,Ae,Ze,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Je,Ue.width,Ue.height,de.depth,0,Ae,Ze,Ue.data)}else{tt&&vt&&t.texStorage2D(i.TEXTURE_2D,Te,Je,ut[0].width,ut[0].height);for(let J=0,le=ut.length;J<le;J++)Ue=ut[J],E.format!==Rn?Ae!==null?tt?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Ue.width,Ue.height,Ae,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Je,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?F&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ue.width,Ue.height,Ae,Ze,Ue.data):t.texImage2D(i.TEXTURE_2D,J,Je,Ue.width,Ue.height,0,Ae,Ze,Ue.data)}else if(E.isDataArrayTexture)if(tt){if(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Je,de.width,de.height,de.depth),F)if(E.layerUpdates.size>0){let J=dm(de.width,de.height,E.format,E.type);for(let le of E.layerUpdates){let Pe=de.data.subarray(le*J/de.data.BYTES_PER_ELEMENT,(le+1)*J/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,de.width,de.height,1,Ae,Ze,Pe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ae,Ze,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Je,de.width,de.height,de.depth,0,Ae,Ze,de.data);else if(E.isData3DTexture)tt?(vt&&t.texStorage3D(i.TEXTURE_3D,Te,Je,de.width,de.height,de.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ae,Ze,de.data)):t.texImage3D(i.TEXTURE_3D,0,Je,de.width,de.height,de.depth,0,Ae,Ze,de.data);else if(E.isFramebufferTexture){if(vt)if(tt)t.texStorage2D(i.TEXTURE_2D,Te,Je,de.width,de.height);else{let J=de.width,le=de.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Je,J,le,0,Ae,Ze,null),J>>=1,le>>=1}}else if(ut.length>0){if(tt&&vt){let J=Y(ut[0]);t.texStorage2D(i.TEXTURE_2D,Te,Je,J.width,J.height)}for(let J=0,le=ut.length;J<le;J++)Ue=ut[J],tt?F&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ae,Ze,Ue):t.texImage2D(i.TEXTURE_2D,J,Je,Ae,Ze,Ue);E.generateMipmaps=!1}else if(tt){if(vt){let J=Y(de);t.texStorage2D(i.TEXTURE_2D,Te,Je,J.width,J.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Ze,de)}else t.texImage2D(i.TEXTURE_2D,0,Je,Ae,Ze,de);g(E)&&p(ee),Fe.__version=te.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Q(T,E,B){if(E.image.length!==6)return;let ee=je(T,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let te=n.get(ae);if(ae.version!==te.__version||ee===!0){t.activeTexture(i.TEXTURE0+B);let Fe=ft.getPrimaries(ft.workingColorSpace),ve=E.colorSpace===pi?null:ft.getPrimaries(E.colorSpace),we=E.colorSpace===pi||Fe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let st=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let le=0;le<6;le++)!st&&!de?Ae[le]=x(E.image[le],!0,s.maxCubemapSize):Ae[le]=de?E.image[le].image:E.image[le],Ae[le]=ne(E,Ae[le]);let Ze=Ae[0],Je=r.convert(E.format,E.colorSpace),Ue=r.convert(E.type),ut=v(E.internalFormat,Je,Ue,E.colorSpace),tt=E.isVideoTexture!==!0,vt=te.__version===void 0||ee===!0,F=ae.dataReady,Te=y(E,Ze);xe(i.TEXTURE_CUBE_MAP,E);let J;if(st){tt&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ut,Ze.width,Ze.height);for(let le=0;le<6;le++){J=Ae[le].mipmaps;for(let Pe=0;Pe<J.length;Pe++){let De=J[Pe];E.format!==Rn?Je!==null?tt?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,De.width,De.height,Je,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,ut,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,De.width,De.height,Je,Ue,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,ut,De.width,De.height,0,Je,Ue,De.data)}}}else{if(J=E.mipmaps,tt&&vt){J.length>0&&Te++;let le=Y(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ut,le.width,le.height)}for(let le=0;le<6;le++)if(de){tt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ae[le].width,Ae[le].height,Je,Ue,Ae[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ut,Ae[le].width,Ae[le].height,0,Je,Ue,Ae[le].data);for(let Pe=0;Pe<J.length;Pe++){let xt=J[Pe].image[le].image;tt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,xt.width,xt.height,Je,Ue,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,ut,xt.width,xt.height,0,Je,Ue,xt.data)}}else{tt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Je,Ue,Ae[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ut,Je,Ue,Ae[le]);for(let Pe=0;Pe<J.length;Pe++){let De=J[Pe];tt?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,Je,Ue,De.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,ut,Je,Ue,De.image[le])}}}g(E)&&p(i.TEXTURE_CUBE_MAP),te.__version=ae.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function he(T,E,B,ee,ae,te){let Fe=r.convert(B.format,B.colorSpace),ve=r.convert(B.type),we=v(B.internalFormat,Fe,ve,B.colorSpace);if(!n.get(E).__hasExternalTextures){let de=Math.max(1,E.width>>te),Ae=Math.max(1,E.height>>te);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,te,we,de,Ae,E.depth,0,Fe,ve,null):t.texImage2D(ae,te,we,de,Ae,0,Fe,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),V(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ae,n.get(B).__webglTexture,0,N(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ae,n.get(B).__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(T,E,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),E.depthBuffer){let ee=E.depthTexture,ae=ee&&ee.isDepthTexture?ee.type:null,te=_(E.stencilBuffer,ae),Fe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=N(E);V(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,te,E.width,E.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,te,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,te,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,T)}else{let ee=E.textures;for(let ae=0;ae<ee.length;ae++){let te=ee[ae],Fe=r.convert(te.format,te.colorSpace),ve=r.convert(te.type),we=v(te.internalFormat,Fe,ve,te.colorSpace),st=N(E);B&&V(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,we,E.width,E.height):V(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,we,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,we,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);let ee=n.get(E.depthTexture).__webglTexture,ae=N(E);if(E.depthTexture.format===Hr)V(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(E.depthTexture.format===xs)V(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ne(T){let E=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==T.depthTexture){let ee=T.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){let ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",ae)};ee.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=ee}if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,T)}else if(B){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=i.createRenderbuffer(),Me(E.__webglDepthbuffer[ee],T,!1);else{let ae=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Me(E.__webglDepthbuffer,T,!1);else{let ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(T,E,B){let ee=n.get(T);E!==void 0&&he(ee.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ne(T)}function ze(T){let E=T.texture,B=n.get(T),ee=n.get(E);T.addEventListener("dispose",A);let ae=T.textures,te=T.isWebGLCubeRenderTarget===!0,Fe=ae.length>1;if(Fe||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=E.version,a.memory.textures++),te){B.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[ve]=[];for(let we=0;we<E.mipmaps.length;we++)B.__webglFramebuffer[ve][we]=i.createFramebuffer()}else B.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)B.__webglFramebuffer[ve]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let ve=0,we=ae.length;ve<we;ve++){let st=n.get(ae[ve]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&V(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ve=0;ve<ae.length;ve++){let we=ae[ve];B.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ve]);let st=r.convert(we.format,we.colorSpace),de=r.convert(we.type),Ae=v(we.internalFormat,st,de,we.colorSpace,T.isXRRenderTarget===!0),Ze=N(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,Ae,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,B.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),xe(i.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)he(B.__webglFramebuffer[ve][we],T,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we);else he(B.__webglFramebuffer[ve],T,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let ve=0,we=ae.length;ve<we;ve++){let st=ae[ve],de=n.get(st);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),xe(i.TEXTURE_2D,st),he(B.__webglFramebuffer,T,st,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),g(st)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ee.__webglTexture),xe(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)he(B.__webglFramebuffer[we],T,E,i.COLOR_ATTACHMENT0,ve,we);else he(B.__webglFramebuffer,T,E,i.COLOR_ATTACHMENT0,ve,0);g(E)&&p(ve),t.unbindTexture()}T.depthBuffer&&Ne(T)}function Ye(T){let E=T.textures;for(let B=0,ee=E.length;B<ee;B++){let ae=E[B];if(g(ae)){let te=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Fe=n.get(ae).__webglTexture;t.bindTexture(te,Fe),p(te),t.unbindTexture()}}}let re=[],I=[];function W(T){if(T.samples>0){if(V(T)===!1){let E=T.textures,B=T.width,ee=T.height,ae=i.COLOR_BUFFER_BIT,te=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(T),ve=E.length>1;if(ve)for(let we=0;we<E.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let we=0;we<E.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[we]);let st=n.get(E[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,B,ee,0,0,B,ee,ae,i.NEAREST),l===!0&&(re.length=0,I.length=0,re.push(i.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(re.push(te),I.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let we=0;we<E.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[we]);let st=n.get(E[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let E=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function N(T){return Math.min(s.maxSamples,T.samples)}function V(T){let E=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function q(T){let E=a.render.frame;h.get(T)!==E&&(h.set(T,E),T.update())}function ne(T,E){let B=T.colorSpace,ee=T.format,ae=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==cn&&B!==pi&&(ft.getTransfer(B)===It?(ee!==Rn||ae!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function Y(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=M,this.setTexture2D=O,this.setTexture2DArray=Z,this.setTexture3D=H,this.setTextureCube=se,this.rebindTextures=Ce,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=he,this.useMultisampledRTT=V}function cM(i,e){function t(n,s=pi){let r,a=ft.getTransfer(s);if(n===bi)return i.UNSIGNED_BYTE;if(n===Ad)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vm)return i.BYTE;if(n===Wm)return i.SHORT;if(n===Za)return i.UNSIGNED_SHORT;if(n===wd)return i.INT;if(n===Ks)return i.UNSIGNED_INT;if(n===gi)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===qm)return i.ALPHA;if(n===jm)return i.RGB;if(n===Rn)return i.RGBA;if(n===Ym)return i.LUMINANCE;if(n===Km)return i.LUMINANCE_ALPHA;if(n===Hr)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Cd)return i.RED;if(n===Pd)return i.RED_INTEGER;if(n===Zm)return i.RG;if(n===Id)return i.RG_INTEGER;if(n===Ld)return i.RGBA_INTEGER;if(n===Al||n===Rl||n===Cl||n===Pl)if(a===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Al)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Al)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lu||n===cu||n===hu||n===uu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===du||n===fu||n===pu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===du||n===fu)return a===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pu)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mu||n===gu||n===bu||n===xu||n===vu||n===_u||n===yu||n===Mu||n===Su||n===Eu||n===Tu||n===wu||n===Au||n===Ru)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mu)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gu)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bu)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xu)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vu)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_u)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yu)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mu)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Su)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eu)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tu)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wu)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Au)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ru)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Il||n===Cu||n===Pu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Il)return a===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jm||n===Iu||n===Lu||n===Du)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Iu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Du)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Yu=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},mt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},hM={type:"move"},qa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},uM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ku=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new ln,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tt({vertexShader:uM,fragmentShader:dM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new k(new ct(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zu=class extends Yi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=new Ku,g=t.getContextAttributes(),p=null,v=null,_=[],y=[],C=new ie,A=null,S=new en;S.layers.enable(1),S.viewport=new yt;let R=new en;R.layers.enable(2),R.viewport=new yt;let P=[S,R],b=new Yu;b.layers.enable(1),b.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=_[Q];return he===void 0&&(he=new qa,_[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=_[Q];return he===void 0&&(he=new qa,_[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=_[Q];return he===void 0&&(he=new qa,_[Q]=he),he.getHandSpace()};function U(Q){let he=y.indexOf(Q.inputSource);if(he===-1)return;let Me=_[he];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,c||a),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Z);for(let Q=0;Q<_.length;Q++){let he=y[Q];he!==null&&(y[Q]=null,_[Q].disconnect(he))}M=null,D=null,x.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Jt(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,Me=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?xs:Hr,Me=g.stencil?bs:Ks);let Ne={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Jt(f.textureWidth,f.textureHeight,{format:Rn,type:bi,depthTexture:new Jr(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(Q){for(let he=0;he<Q.removed.length;he++){let Me=Q.removed[he],pe=y.indexOf(Me);pe>=0&&(y[pe]=null,_[pe].disconnect(Me))}for(let he=0;he<Q.added.length;he++){let Me=Q.added[he],pe=y.indexOf(Me);if(pe===-1){for(let Ce=0;Ce<_.length;Ce++)if(Ce>=y.length){y.push(Me),pe=Ce;break}else if(y[Ce]===null){y[Ce]=Me,pe=Ce;break}if(pe===-1)break}let Ne=_[pe];Ne&&Ne.connect(Me)}}let H=new L,se=new L;function X(Q,he,Me){H.setFromMatrixPosition(he.matrixWorld),se.setFromMatrixPosition(Me.matrixWorld);let pe=H.distanceTo(se),Ne=he.projectionMatrix.elements,Ce=Me.projectionMatrix.elements,ze=Ne[14]/(Ne[10]-1),Ye=Ne[14]/(Ne[10]+1),re=(Ne[9]+1)/Ne[5],I=(Ne[9]-1)/Ne[5],W=(Ne[8]-1)/Ne[0],N=(Ce[8]+1)/Ce[0],V=ze*W,q=ze*N,ne=pe/(-W+N),Y=ne*-W;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Y),Q.translateZ(ne),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ne[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let T=ze+ne,E=Ye+ne,B=V-Y,ee=q+(pe-Y),ae=re*Ye/E*T,te=I*Ye/E*T;Q.projectionMatrix.makePerspective(B,ee,ae,te,T,E),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let he=Q.near,Me=Q.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),b.near=R.near=S.near=he,b.far=R.far=S.far=Me,(M!==b.near||D!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,D=b.far);let pe=Q.parent,Ne=b.cameras;ce(b,pe);for(let Ce=0;Ce<Ne.length;Ce++)ce(Ne[Ce],pe);Ne.length===2?X(b,S,R):b.projectionMatrix.copy(S.projectionMatrix),me(Q,b,pe)};function me(Q,he,Me){Me===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Yr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let xe=null;function je(Q,he){if(h=he.getViewerPose(c||a),m=he,h!==null){let Me=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let pe=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,pe=!0);for(let Ce=0;Ce<Me.length;Ce++){let ze=Me[Ce],Ye=null;if(d!==null)Ye=d.getViewport(ze);else{let I=u.getViewSubImage(f,ze);Ye=I.viewport,Ce===0&&(e.setRenderTargetTextures(v,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(v))}let re=P[Ce];re===void 0&&(re=new en,re.layers.enable(Ce),re.viewport=new yt,P[Ce]=re),re.matrix.fromArray(ze.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ze.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ce===0&&(b.matrix.copy(re.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),pe===!0&&b.cameras.push(re)}let Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){let Ce=u.getDepthInformation(Me[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,s.renderState)}}for(let Me=0;Me<_.length;Me++){let pe=y[Me],Ne=_[Me];pe!==null&&Ne!==void 0&&Ne.update(pe,he,c||a)}xe&&xe(Q,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),m=null}let Xe=new i0;Xe.setAnimationLoop(je),this.setAnimationLoop=function(Q){xe=Q},this.dispose=function(){}}},qs=new Ti,fM=new qe;function pM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,n0(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,y=v.envMapRotation;_&&(g.envMap.value=_,qs.copy(y),qs.x*=-1,qs.y*=-1,qs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),g.envMapRotation.value.setFromMatrix4(fM.makeRotationFromEuler(qs)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(m(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",g));let C=_.program;n.updateUBOMapping(v,C);let A=e.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function h(v){let _=u();v.__bindingPointIndex=_;let y=i.createBuffer(),C=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=s[v.id],y=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,S=y.length;A<S;A++){let R=Array.isArray(y[A])?y[A]:[y[A]];for(let P=0,b=R.length;P<b;P++){let M=R[P];if(d(M,A,P,C)===!0){let D=M.__offset,U=Array.isArray(M.value)?M.value:[M.value],O=0;for(let Z=0;Z<U.length;Z++){let H=U[Z],se=x(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,D+O,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,O),O+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,_,y,C){let A=v.value,S=_+"_"+y;if(C[S]===void 0)return typeof A=="number"||typeof A=="boolean"?C[S]=A:C[S]=A.clone(),!0;{let R=C[S];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[S]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function m(v){let _=v.uniforms,y=0,C=16;for(let S=0,R=_.length;S<R;S++){let P=Array.isArray(_[S])?_[S]:[_[S]];for(let b=0,M=P.length;b<M;b++){let D=P[b],U=Array.isArray(D.value)?D.value:[D.value];for(let O=0,Z=U.length;O<Z;O++){let H=U[O],se=x(H),X=y%C,ce=X%se.boundary,me=X+ce;y+=ce,me!==0&&C-me<se.storage&&(y+=C-me),D.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=se.storage}}}let A=y%C;return A>0&&(y+=C-A),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){let _=v.target;_.removeEventListener("dispose",g);let y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Wl=class{constructor(e={}){let{canvas:t=vb(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let d=new Uint32Array(4),m=new Int32Array(4),x=null,g=null,p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=ms,this.toneMappingExposure=1;let _=this,y=!1,C=0,A=0,S=null,R=-1,P=null,b=new yt,M=new yt,D=null,U=new Le(0),O=0,Z=t.width,H=t.height,se=1,X=null,ce=null,me=new yt(0,0,Z,H),xe=new yt(0,0,Z,H),je=!1,Xe=new $a,Q=!1,he=!1,Me=new qe,pe=new qe,Ne=new L,Ce=new yt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function re(){return S===null?se:1}let I=n;function W(w,z){return t.getContext(w,z)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",De,!1),I===null){let z="webgl2";if(I=W(z,w),I===null)throw W(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let N,V,q,ne,Y,T,E,B,ee,ae,te,Fe,ve,we,st,de,Ae,Ze,Je,Ue,ut,tt,vt,F;function Te(){N=new I_(I),N.init(),tt=new cM(I,N),V=new T_(I,N,e,tt),q=new aM(I),V.reverseDepthBuffer&&q.buffers.depth.setReversed(!0),ne=new U_(I),Y=new jy,T=new lM(I,N,q,Y,V,tt,ne),E=new A_(_),B=new P_(_),ee=new zb(I),vt=new S_(I,ee),ae=new L_(I,ee,ne,vt),te=new F_(I,ae,ee,ne),Je=new N_(I,V,T),de=new w_(Y),Fe=new qy(_,E,B,N,V,vt,de),ve=new pM(_,Y),we=new Ky,st=new tM(N),Ze=new M_(_,E,B,q,te,f,l),Ae=new sM(_,te,V),F=new mM(I,ne,V,q),Ue=new E_(I,N,ne),ut=new D_(I,N,ne),ne.programs=Fe.programs,_.capabilities=V,_.extensions=N,_.properties=Y,_.renderLists=we,_.shadowMap=Ae,_.state=q,_.info=ne}Te();let J=new Zu(_,I);this.xr=J,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=N.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=N.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(w){w!==void 0&&(se=w,this.setSize(Z,H,!1))},this.getSize=function(w){return w.set(Z,H)},this.setSize=function(w,z,j=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,H=z,t.width=Math.floor(w*se),t.height=Math.floor(z*se),j===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(Z*se,H*se).floor()},this.setDrawingBufferSize=function(w,z,j){Z=w,H=z,se=j,t.width=Math.floor(w*j),t.height=Math.floor(z*j),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,z,j,K){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,z,j,K),q.viewport(b.copy(me).multiplyScalar(se).round())},this.getScissor=function(w){return w.copy(xe)},this.setScissor=function(w,z,j,K){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,z,j,K),q.scissor(M.copy(xe).multiplyScalar(se).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(w){q.setScissorTest(je=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){ce=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(w=!0,z=!0,j=!0){let K=0;if(w){let G=!1;if(S!==null){let ge=S.texture.format;G=ge===Ld||ge===Id||ge===Pd}if(G){let ge=S.texture.type,Ie=ge===bi||ge===Ks||ge===Za||ge===bs||ge===Ad||ge===Rd,ke=Ze.getClearColor(),Be=Ze.getClearAlpha(),Qe=ke.r,$e=ke.g,Ve=ke.b;Ie?(d[0]=Qe,d[1]=$e,d[2]=Ve,d[3]=Be,I.clearBufferuiv(I.COLOR,0,d)):(m[0]=Qe,m[1]=$e,m[2]=Ve,m[3]=Be,I.clearBufferiv(I.COLOR,0,m))}else K|=I.COLOR_BUFFER_BIT}z&&(K|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",De,!1),we.dispose(),st.dispose(),Y.dispose(),E.dispose(),B.dispose(),te.dispose(),vt.dispose(),F.dispose(),Fe.dispose(),J.dispose(),J.removeEventListener("sessionstart",dp),J.removeEventListener("sessionend",fp),Hs.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let w=ne.autoReset,z=Ae.enabled,j=Ae.autoUpdate,K=Ae.needsUpdate,G=Ae.type;Te(),ne.autoReset=w,Ae.enabled=z,Ae.autoUpdate=j,Ae.needsUpdate=K,Ae.type=G}function De(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xt(w){let z=w.target;z.removeEventListener("dispose",xt),Kt(z)}function Kt(w){Tn(w),Y.remove(w)}function Tn(w){let z=Y.get(w).programs;z!==void 0&&(z.forEach(function(j){Fe.releaseProgram(j)}),w.isShaderMaterial&&Fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,j,K,G,ge){z===null&&(z=ze);let Ie=G.isMesh&&G.matrixWorld.determinant()<0,ke=vg(w,z,j,K,G);q.setMaterial(K,Ie);let Be=j.index,Qe=1;if(K.wireframe===!0){if(Be=ae.getWireframeAttribute(j),Be===void 0)return;Qe=2}let $e=j.drawRange,Ve=j.attributes.position,wt=$e.start*Qe,kt=($e.start+$e.count)*Qe;ge!==null&&(wt=Math.max(wt,ge.start*Qe),kt=Math.min(kt,(ge.start+ge.count)*Qe)),Be!==null?(wt=Math.max(wt,0),kt=Math.min(kt,Be.count)):Ve!=null&&(wt=Math.max(wt,0),kt=Math.min(kt,Ve.count));let Xt=kt-wt;if(Xt<0||Xt===1/0)return;vt.setup(G,K,ke,j,Be);let Dn,St=Ue;if(Be!==null&&(Dn=ee.get(Be),St=ut,St.setIndex(Dn)),G.isMesh)K.wireframe===!0?(q.setLineWidth(K.wireframeLinewidth*re()),St.setMode(I.LINES)):St.setMode(I.TRIANGLES);else if(G.isLine){let We=K.linewidth;We===void 0&&(We=1),q.setLineWidth(We*re()),G.isLineSegments?St.setMode(I.LINES):G.isLineLoop?St.setMode(I.LINE_LOOP):St.setMode(I.LINE_STRIP)}else G.isPoints?St.setMode(I.POINTS):G.isSprite&&St.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)St.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(N.get("WEBGL_multi_draw"))St.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let We=G._multiDrawStarts,hn=G._multiDrawCounts,Et=G._multiDrawCount,hi=Be?ee.get(Be).bytesPerElement:1,pr=Y.get(K).currentProgram.getUniforms();for(let Un=0;Un<Et;Un++)pr.setValue(I,"_gl_DrawID",Un),St.render(We[Un]/hi,hn[Un])}else if(G.isInstancedMesh)St.renderInstances(wt,Xt,G.count);else if(j.isInstancedBufferGeometry){let We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,hn=Math.min(j.instanceCount,We);St.renderInstances(wt,Xt,hn)}else St.render(wt,Xt)};function _t(w,z,j){w.transparent===!0&&w.side===Bt&&w.forceSinglePass===!1?(w.side=on,w.needsUpdate=!0,jo(w,z,j),w.side=jn,w.needsUpdate=!0,jo(w,z,j),w.side=Bt):jo(w,z,j)}this.compile=function(w,z,j=null){j===null&&(j=w),g=st.get(j),g.init(z),v.push(g),j.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),w!==j&&w.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();let K=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ge=G.material;if(ge)if(Array.isArray(ge))for(let Ie=0;Ie<ge.length;Ie++){let ke=ge[Ie];_t(ke,j,G),K.add(ke)}else _t(ge,j,G),K.add(ge)}),v.pop(),g=null,K},this.compileAsync=function(w,z,j=null){let K=this.compile(w,z,j);return new Promise(G=>{function ge(){if(K.forEach(function(Ie){Y.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){G(w);return}setTimeout(ge,10)}N.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let wn=null;function ki(w){wn&&wn(w)}function dp(){Hs.stop()}function fp(){Hs.start()}let Hs=new i0;Hs.setAnimationLoop(ki),typeof self<"u"&&Hs.setContext(self),this.setAnimationLoop=function(w){wn=w,J.setAnimationLoop(w),w===null?Hs.stop():Hs.start()},J.addEventListener("sessionstart",dp),J.addEventListener("sessionend",fp),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(z),z=J.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,z,S),g=st.get(w,v.length),g.init(z),v.push(g),pe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Xe.setFromProjectionMatrix(pe),he=this.localClippingEnabled,Q=de.init(this.clippingPlanes,he),x=we.get(w,p.length),x.init(),p.push(x),J.enabled===!0&&J.isPresenting===!0){let ge=_.xr.getDepthSensingMesh();ge!==null&&hh(ge,z,-1/0,_.sortObjects)}hh(w,z,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(X,ce),Ye=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ye&&Ze.addToRenderList(x,w),this.info.render.frame++,Q===!0&&de.beginShadows();let j=g.state.shadowsArray;Ae.render(j,w,z),Q===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=x.opaque,G=x.transmissive;if(g.setupLights(),z.isArrayCamera){let ge=z.cameras;if(G.length>0)for(let Ie=0,ke=ge.length;Ie<ke;Ie++){let Be=ge[Ie];mp(K,G,w,Be)}Ye&&Ze.render(w);for(let Ie=0,ke=ge.length;Ie<ke;Ie++){let Be=ge[Ie];pp(x,w,Be,Be.viewport)}}else G.length>0&&mp(K,G,w,z),Ye&&Ze.render(w),pp(x,w,z);S!==null&&(T.updateMultisampleRenderTarget(S),T.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(_,w,z),vt.resetDefaultState(),R=-1,P=null,v.pop(),v.length>0?(g=v[v.length-1],Q===!0&&de.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function hh(w,z,j,K){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Xe.intersectsSprite(w)){K&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pe);let Ie=te.update(w),ke=w.material;ke.visible&&x.push(w,Ie,ke,j,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Xe.intersectsObject(w))){let Ie=te.update(w),ke=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ce.copy(Ie.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4(pe)),Array.isArray(ke)){let Be=Ie.groups;for(let Qe=0,$e=Be.length;Qe<$e;Qe++){let Ve=Be[Qe],wt=ke[Ve.materialIndex];wt&&wt.visible&&x.push(w,Ie,wt,j,Ce.z,Ve)}}else ke.visible&&x.push(w,Ie,ke,j,Ce.z,null)}}let ge=w.children;for(let Ie=0,ke=ge.length;Ie<ke;Ie++)hh(ge[Ie],z,j,K)}function pp(w,z,j,K){let G=w.opaque,ge=w.transmissive,Ie=w.transparent;g.setupLightsView(j),Q===!0&&de.setGlobalState(_.clippingPlanes,j),K&&q.viewport(b.copy(K)),G.length>0&&qo(G,z,j),ge.length>0&&qo(ge,z,j),Ie.length>0&&qo(Ie,z,j),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function mp(w,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new Jt(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float")?vn:bi,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let ge=g.state.transmissionRenderTarget[K.id],Ie=K.viewport||b;ge.setSize(Ie.z,Ie.w);let ke=_.getRenderTarget();_.setRenderTarget(ge),_.getClearColor(U),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),Ye&&Ze.render(j);let Be=_.toneMapping;_.toneMapping=ms;let Qe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),Q===!0&&de.setGlobalState(_.clippingPlanes,K),qo(w,j,K),T.updateMultisampleRenderTarget(ge),T.updateRenderTargetMipmap(ge),N.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ve=0,wt=z.length;Ve<wt;Ve++){let kt=z[Ve],Xt=kt.object,Dn=kt.geometry,St=kt.material,We=kt.group;if(St.side===Bt&&Xt.layers.test(K.layers)){let hn=St.side;St.side=on,St.needsUpdate=!0,gp(Xt,j,K,Dn,St,We),St.side=hn,St.needsUpdate=!0,$e=!0}}$e===!0&&(T.updateMultisampleRenderTarget(ge),T.updateRenderTargetMipmap(ge))}_.setRenderTarget(ke),_.setClearColor(U,O),Qe!==void 0&&(K.viewport=Qe),_.toneMapping=Be}function qo(w,z,j){let K=z.isScene===!0?z.overrideMaterial:null;for(let G=0,ge=w.length;G<ge;G++){let Ie=w[G],ke=Ie.object,Be=Ie.geometry,Qe=K===null?Ie.material:K,$e=Ie.group;ke.layers.test(j.layers)&&gp(ke,z,j,Be,Qe,$e)}}function gp(w,z,j,K,G,ge){w.onBeforeRender(_,z,j,K,G,ge),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(_,z,j,K,w,ge),G.transparent===!0&&G.side===Bt&&G.forceSinglePass===!1?(G.side=on,G.needsUpdate=!0,_.renderBufferDirect(j,z,K,G,w,ge),G.side=jn,G.needsUpdate=!0,_.renderBufferDirect(j,z,K,G,w,ge),G.side=Bt):_.renderBufferDirect(j,z,K,G,w,ge),w.onAfterRender(_,z,j,K,G,ge)}function jo(w,z,j){z.isScene!==!0&&(z=ze);let K=Y.get(w),G=g.state.lights,ge=g.state.shadowsArray,Ie=G.state.version,ke=Fe.getParameters(w,G.state,ge,z,j),Be=Fe.getProgramCacheKey(ke),Qe=K.programs;K.environment=w.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(w.isMeshStandardMaterial?B:E).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Qe===void 0&&(w.addEventListener("dispose",xt),Qe=new Map,K.programs=Qe);let $e=Qe.get(Be);if($e!==void 0){if(K.currentProgram===$e&&K.lightsStateVersion===Ie)return xp(w,ke),$e}else ke.uniforms=Fe.getUniforms(w),w.onBeforeCompile(ke,_),$e=Fe.acquireProgram(ke,Be),Qe.set(Be,$e),K.uniforms=ke.uniforms;let Ve=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ve.clippingPlanes=de.uniform),xp(w,ke),K.needsLights=yg(w),K.lightsStateVersion=Ie,K.needsLights&&(Ve.ambientLightColor.value=G.state.ambient,Ve.lightProbe.value=G.state.probe,Ve.directionalLights.value=G.state.directional,Ve.directionalLightShadows.value=G.state.directionalShadow,Ve.spotLights.value=G.state.spot,Ve.spotLightShadows.value=G.state.spotShadow,Ve.rectAreaLights.value=G.state.rectArea,Ve.ltc_1.value=G.state.rectAreaLTC1,Ve.ltc_2.value=G.state.rectAreaLTC2,Ve.pointLights.value=G.state.point,Ve.pointLightShadows.value=G.state.pointShadow,Ve.hemisphereLights.value=G.state.hemi,Ve.directionalShadowMap.value=G.state.directionalShadowMap,Ve.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ve.spotShadowMap.value=G.state.spotShadowMap,Ve.spotLightMatrix.value=G.state.spotLightMatrix,Ve.spotLightMap.value=G.state.spotLightMap,Ve.pointShadowMap.value=G.state.pointShadowMap,Ve.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=$e,K.uniformsList=null,$e}function bp(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=Gr.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function xp(w,z){let j=Y.get(w);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function vg(w,z,j,K,G){z.isScene!==!0&&(z=ze),T.resetTextureUnits();let ge=z.fog,Ie=K.isMeshStandardMaterial?z.environment:null,ke=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:cn,Be=(K.isMeshStandardMaterial?B:E).get(K.envMap||Ie),Qe=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,$e=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!j.morphAttributes.position,wt=!!j.morphAttributes.normal,kt=!!j.morphAttributes.color,Xt=ms;K.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Xt=_.toneMapping);let Dn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,St=Dn!==void 0?Dn.length:0,We=Y.get(K),hn=g.state.lights;if(Q===!0&&(he===!0||w!==P)){let Gn=w===P&&K.id===R;de.setState(K,w,Gn)}let Et=!1;K.version===We.__version?(We.needsLights&&We.lightsStateVersion!==hn.state.version||We.outputColorSpace!==ke||G.isBatchedMesh&&We.batching===!1||!G.isBatchedMesh&&We.batching===!0||G.isBatchedMesh&&We.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&We.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&We.instancing===!1||!G.isInstancedMesh&&We.instancing===!0||G.isSkinnedMesh&&We.skinning===!1||!G.isSkinnedMesh&&We.skinning===!0||G.isInstancedMesh&&We.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&We.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&We.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&We.instancingMorph===!1&&G.morphTexture!==null||We.envMap!==Be||K.fog===!0&&We.fog!==ge||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==de.numPlanes||We.numIntersection!==de.numIntersection)||We.vertexAlphas!==Qe||We.vertexTangents!==$e||We.morphTargets!==Ve||We.morphNormals!==wt||We.morphColors!==kt||We.toneMapping!==Xt||We.morphTargetsCount!==St)&&(Et=!0):(Et=!0,We.__version=K.version);let hi=We.currentProgram;Et===!0&&(hi=jo(K,z,G));let pr=!1,Un=!1,uh=!1,jt=hi.getUniforms(),as=We.uniforms;if(q.useProgram(hi.program)&&(pr=!0,Un=!0,uh=!0),K.id!==R&&(R=K.id,Un=!0),pr||P!==w){V.reverseDepthBuffer?(Me.copy(w.projectionMatrix),yb(Me),Mb(Me),jt.setValue(I,"projectionMatrix",Me)):jt.setValue(I,"projectionMatrix",w.projectionMatrix),jt.setValue(I,"viewMatrix",w.matrixWorldInverse);let Gn=jt.map.cameraPosition;Gn!==void 0&&Gn.setValue(I,Ne.setFromMatrixPosition(w.matrixWorld)),V.logarithmicDepthBuffer&&jt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&jt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),P!==w&&(P=w,Un=!0,uh=!0)}if(G.isSkinnedMesh){jt.setOptional(I,G,"bindMatrix"),jt.setOptional(I,G,"bindMatrixInverse");let Gn=G.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),jt.setValue(I,"boneTexture",Gn.boneTexture,T))}G.isBatchedMesh&&(jt.setOptional(I,G,"batchingTexture"),jt.setValue(I,"batchingTexture",G._matricesTexture,T),jt.setOptional(I,G,"batchingIdTexture"),jt.setValue(I,"batchingIdTexture",G._indirectTexture,T),jt.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&jt.setValue(I,"batchingColorTexture",G._colorsTexture,T));let dh=j.morphAttributes;if((dh.position!==void 0||dh.normal!==void 0||dh.color!==void 0)&&Je.update(G,j,hi),(Un||We.receiveShadow!==G.receiveShadow)&&(We.receiveShadow=G.receiveShadow,jt.setValue(I,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(as.envMap.value=Be,as.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(as.envMapIntensity.value=z.environmentIntensity),Un&&(jt.setValue(I,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&_g(as,uh),ge&&K.fog===!0&&ve.refreshFogUniforms(as,ge),ve.refreshMaterialUniforms(as,K,se,H,g.state.transmissionRenderTarget[w.id]),Gr.upload(I,bp(We),as,T)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Gr.upload(I,bp(We),as,T),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&jt.setValue(I,"center",G.center),jt.setValue(I,"modelViewMatrix",G.modelViewMatrix),jt.setValue(I,"normalMatrix",G.normalMatrix),jt.setValue(I,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Gn=K.uniformsGroups;for(let fh=0,Mg=Gn.length;fh<Mg;fh++){let vp=Gn[fh];F.update(vp,hi),F.bind(vp,hi)}}return hi}function _g(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function yg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,z,j){Y.get(w.texture).__webglTexture=z,Y.get(w.depthTexture).__webglTexture=j;let K=Y.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){let j=Y.get(w);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,j=0){S=w,C=z,A=j;let K=!0,G=null,ge=!1,Ie=!1;if(w){let Be=Y.get(w);if(Be.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(I.FRAMEBUFFER,null),K=!1;else if(Be.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Be.__hasExternalTextures)T.rebindTextures(w,Y.get(w.texture).__webglTexture,Y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ve=w.depthTexture;if(Be.__boundDepthTexture!==Ve){if(Ve!==null&&Y.has(Ve)&&(w.width!==Ve.image.width||w.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ie=!0);let $e=Y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($e[z])?G=$e[z][j]:G=$e[z],ge=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?G=Y.get(w).__webglMultisampledFramebuffer:Array.isArray($e)?G=$e[j]:G=$e,b.copy(w.viewport),M.copy(w.scissor),D=w.scissorTest}else b.copy(me).multiplyScalar(se).floor(),M.copy(xe).multiplyScalar(se).floor(),D=je;if(q.bindFramebuffer(I.FRAMEBUFFER,G)&&K&&q.drawBuffers(w,G),q.viewport(b),q.scissor(M),q.setScissorTest(D),ge){let Be=Y.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Be.__webglTexture,j)}else if(Ie){let Be=Y.get(w.texture),Qe=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Be.__webglTexture,j||0,Qe)}R=-1},this.readRenderTargetPixels=function(w,z,j,K,G,ge,Ie){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke){q.bindFramebuffer(I.FRAMEBUFFER,ke);try{let Be=w.texture,Qe=Be.format,$e=Be.type;if(!V.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-K&&j>=0&&j<=w.height-G&&I.readPixels(z,j,K,G,tt.convert(Qe),tt.convert($e),ge)}finally{let Be=S!==null?Y.get(S).__webglFramebuffer:null;q.bindFramebuffer(I.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,z,j,K,G,ge,Ie){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke){let Be=w.texture,Qe=Be.format,$e=Be.type;if(!V.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-K&&j>=0&&j<=w.height-G){q.bindFramebuffer(I.FRAMEBUFFER,ke);let Ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.bufferData(I.PIXEL_PACK_BUFFER,ge.byteLength,I.STREAM_READ),I.readPixels(z,j,K,G,tt.convert(Qe),tt.convert($e),0);let wt=S!==null?Y.get(S).__webglFramebuffer:null;q.bindFramebuffer(I.FRAMEBUFFER,wt);let kt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await _b(I,kt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ge),I.deleteBuffer(Ve),I.deleteSync(kt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,j=0){w.isTexture!==!0&&(Ll("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);let K=Math.pow(2,-j),G=Math.floor(w.image.width*K),ge=Math.floor(w.image.height*K),Ie=z!==null?z.x:0,ke=z!==null?z.y:0;T.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,Ie,ke,G,ge),q.unbindTexture()},this.copyTextureToTexture=function(w,z,j=null,K=null,G=0){w.isTexture!==!0&&(Ll("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],z=arguments[2],G=arguments[3]||0,j=null);let ge,Ie,ke,Be,Qe,$e;j!==null?(ge=j.max.x-j.min.x,Ie=j.max.y-j.min.y,ke=j.min.x,Be=j.min.y):(ge=w.image.width,Ie=w.image.height,ke=0,Be=0),K!==null?(Qe=K.x,$e=K.y):(Qe=0,$e=0);let Ve=tt.convert(z.format),wt=tt.convert(z.type);T.setTexture2D(z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);let kt=I.getParameter(I.UNPACK_ROW_LENGTH),Xt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Dn=I.getParameter(I.UNPACK_SKIP_PIXELS),St=I.getParameter(I.UNPACK_SKIP_ROWS),We=I.getParameter(I.UNPACK_SKIP_IMAGES),hn=w.isCompressedTexture?w.mipmaps[G]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,hn.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,hn.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ke),I.pixelStorei(I.UNPACK_SKIP_ROWS,Be),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,Qe,$e,ge,Ie,Ve,wt,hn.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,Qe,$e,hn.width,hn.height,Ve,hn.data):I.texSubImage2D(I.TEXTURE_2D,G,Qe,$e,ge,Ie,Ve,wt,hn),I.pixelStorei(I.UNPACK_ROW_LENGTH,kt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dn),I.pixelStorei(I.UNPACK_SKIP_ROWS,St),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We),G===0&&z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(w,z,j=null,K=null,G=0){w.isTexture!==!0&&(Ll("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,w=arguments[2],z=arguments[3],G=arguments[4]||0);let ge,Ie,ke,Be,Qe,$e,Ve,wt,kt,Xt=w.isCompressedTexture?w.mipmaps[G]:w.image;j!==null?(ge=j.max.x-j.min.x,Ie=j.max.y-j.min.y,ke=j.max.z-j.min.z,Be=j.min.x,Qe=j.min.y,$e=j.min.z):(ge=Xt.width,Ie=Xt.height,ke=Xt.depth,Be=0,Qe=0,$e=0),K!==null?(Ve=K.x,wt=K.y,kt=K.z):(Ve=0,wt=0,kt=0);let Dn=tt.convert(z.format),St=tt.convert(z.type),We;if(z.isData3DTexture)T.setTexture3D(z,0),We=I.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)T.setTexture2DArray(z,0),We=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);let hn=I.getParameter(I.UNPACK_ROW_LENGTH),Et=I.getParameter(I.UNPACK_IMAGE_HEIGHT),hi=I.getParameter(I.UNPACK_SKIP_PIXELS),pr=I.getParameter(I.UNPACK_SKIP_ROWS),Un=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Be),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$e),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(We,G,Ve,wt,kt,ge,Ie,ke,Dn,St,Xt.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(We,G,Ve,wt,kt,ge,Ie,ke,Dn,Xt.data):I.texSubImage3D(We,G,Ve,wt,kt,ge,Ie,ke,Dn,St,Xt),I.pixelStorei(I.UNPACK_ROW_LENGTH,hn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et),I.pixelStorei(I.UNPACK_SKIP_PIXELS,hi),I.pixelStorei(I.UNPACK_SKIP_ROWS,pr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Un),G===0&&z.generateMipmaps&&I.generateMipmap(We),q.unbindTexture()},this.initRenderTarget=function(w){Y.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),q.unbindTexture()},this.resetState=function(){C=0,A=0,S=null,q.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Nd?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===_c?"display-p3":"srgb"}},Xl=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Qr=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},$r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uu,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new L,Js=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},eo=class extends Sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cr,Na=new L,Pr=new L,Ir=new L,Lr=new ie,Fa=new ie,l0=new qe,pl=new L,Oa=new L,ml=new L,fm=new ie,Gh=new ie,pm=new ie,ql=class extends Ut{constructor(e=new eo){if(super(),this.isSprite=!0,this.type="Sprite",Cr===void 0){Cr=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $r(t,5);Cr.setIndex([0,1,2,0,2,3]),Cr.setAttribute("position",new Js(n,3,0,!1)),Cr.setAttribute("uv",new Js(n,2,3,!1))}this.geometry=Cr,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pr.setFromMatrixScale(this.matrixWorld),l0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pr.multiplyScalar(-Ir.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;gl(pl.set(-.5,-.5,0),Ir,a,Pr,s,r),gl(Oa.set(.5,-.5,0),Ir,a,Pr,s,r),gl(ml.set(.5,.5,0),Ir,a,Pr,s,r),fm.set(0,0),Gh.set(1,0),pm.set(1,1);let o=e.ray.intersectTriangle(pl,Oa,ml,!1,Na);if(o===null&&(gl(Oa.set(-.5,.5,0),Ir,a,Pr,s,r),Gh.set(0,1),o=e.ray.intersectTriangle(pl,ml,Oa,!1,Na),o===null))return;let l=e.ray.origin.distanceTo(Na);l<e.near||l>e.far||t.push({distance:l,point:Na.clone(),uv:fs.getInterpolation(Na,pl,Oa,ml,fm,Gh,pm,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function gl(i,e,t,n,s,r){Lr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Fa.x=r*Lr.x-s*Lr.y,Fa.y=s*Lr.x+r*Lr.y):Fa.copy(Lr),i.copy(e),i.x+=Fa.x,i.y+=Fa.y,i.applyMatrix4(l0)}var mm=new L,gm=new yt,bm=new yt,gM=new L,xm=new qe,bl=new L,Vh=new On,vm=new qe,Wh=new Zs,jl=class extends k{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sp,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bl),this.boundingBox.expandByPoint(bl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bl),this.boundingSphere.expandByPoint(bl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vh.copy(this.boundingSphere),Vh.applyMatrix4(s),e.ray.intersectsSphere(Vh)!==!1&&(vm.copy(s).invert(),Wh.copy(e.ray).applyMatrix4(vm),!(this.boundingBox!==null&&Wh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;gm.fromBufferAttribute(s.attributes.skinIndex,e),bm.fromBufferAttribute(s.attributes.skinWeight,e),mm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=bm.getComponent(r);if(a!==0){let o=gm.getComponent(r);xm.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(gM.copy(mm).applyMatrix4(xm),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},to=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},_s=class extends ln{constructor(e=null,t=1,n=1,s,r,a,o,l,c=tn,h=tn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_m=new qe,bM=new qe,Yl=class i{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:bM;_m.multiplyMatrices(o,t[r]),_m.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _s(t,e,e,Rn,gi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new to),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Qs=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Dr=new qe,ym=new qe,xl=[],Mm=new un,xM=new qe,ka=new k,Ba=new On,ys=class extends k{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Dr),Mm.copy(e.boundingBox).applyMatrix4(Dr),this.boundingBox.union(Mm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Dr),Ba.copy(e.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(Ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ka.geometry=this.geometry,ka.material=this.material,ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(n),e.ray.intersectsSphere(Ba)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dr),ym.multiplyMatrices(n,Dr),ka.matrixWorld=ym,ka.raycast(e,xl);for(let a=0,o=xl.length;a<o;a++){let l=xl[a];l.instanceId=r,l.object=this,t.push(l)}xl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _s(new Float32Array(s*this.count),s,this.count,Cd,gi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var no=class extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kl=new L,Zl=new L,Sm=new qe,Ha=new Zs,vl=new On,Xh=new L,Em=new L,ea=class extends Ut{constructor(e=new Mt,t=new no){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Kl.fromBufferAttribute(t,s-1),Zl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Kl.distanceTo(Zl);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(s),vl.radius+=r,e.ray.intersectsSphere(vl)===!1)return;Sm.copy(s).invert(),Ha.copy(e.ray).applyMatrix4(Sm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),v=h.getX(x+1),_=_l(this,e,Ha,l,p,v);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=_l(this,e,Ha,l,x,g);p&&t.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=_l(this,e,Ha,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=_l(this,e,Ha,l,m-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _l(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(Kl.fromBufferAttribute(a,s),Zl.fromBufferAttribute(a,r),t.distanceSqToSegment(Kl,Zl,Xh,Em)>n)return;Xh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Xh);if(!(l<e.near||l>e.far))return{distance:l,point:Em.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Tm=new L,wm=new L,Jl=class extends ea{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Tm.fromBufferAttribute(t,s),wm.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tm.distanceTo(wm);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ql=class extends ea{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xi=class extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Am=new qe,Ju=new Zs,yl=new On,Ml=new L,wi=class extends Ut{constructor(e=new Mt,t=new xi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(s),yl.radius+=r,e.ray.intersectsSphere(yl)===!1)return;Am.copy(s).invert(),Ju.copy(e.ray).applyMatrix4(Am);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);Ml.fromBufferAttribute(u,g),Rm(Ml,g,l,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,x=d;m<x;m++)Ml.fromBufferAttribute(u,m),Rm(Ml,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Rm(i,e,t,n,s,r,a){let o=Ju.distanceSqToPoint(i);if(o<t){let l=new L;Ju.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ta=class extends ln{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ie:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],a=[],o=new L,l=new qe;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos($t(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos($t(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},io=class extends Yn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qu=class extends io{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function kd(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Sl=new L,qh=new kd,jh=new kd,Yh=new kd,Ms=class extends Yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Sl.subVectors(s[0],s[1]).add(s[0]),c=Sl);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),qh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),jh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),Yh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(qh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),jh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Yh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(qh.calc(l),jh.calc(l),Yh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Cm(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function vM(i,e){let t=1-i;return t*t*e}function _M(i,e){return 2*(1-i)*i*e}function yM(i,e){return i*i*e}function ja(i,e,t,n){return vM(i,e)+_M(i,t)+yM(i,n)}function MM(i,e){let t=1-i;return t*t*t*e}function SM(i,e){let t=1-i;return 3*t*t*i*e}function EM(i,e){return 3*(1-i)*i*i*e}function TM(i,e){return i*i*i*e}function Ya(i,e,t,n,s){return MM(i,e)+SM(i,t)+EM(i,n)+TM(i,s)}var $l=class extends Yn{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ya(e,s.x,r.x,a.x,o.x),Ya(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$u=class extends Yn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ya(e,s.x,r.x,a.x,o.x),Ya(e,s.y,r.y,a.y,o.y),Ya(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends Yn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ed=class extends Yn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Yn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ja(e,s.x,r.x,a.x),ja(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends Yn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ja(e,s.x,r.x,a.x),ja(e,s.y,r.y,a.y),ja(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Cm(o,l.x,c.x,h.x,u.x),Cm(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},sc=Object.freeze({__proto__:null,ArcCurve:Qu,CatmullRomCurve3:Ms,CubicBezierCurve:$l,CubicBezierCurve3:$u,EllipseCurve:io,LineCurve:ec,LineCurve3:ed,QuadraticBezierCurve:tc,QuadraticBezierCurve3:nc,SplineCurve:ic}),td=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new sc[s.type]().fromJSON(s))}return this}},Ss=class extends td{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ec(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new tc(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new $l(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ic(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new io(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},nd=class i extends Mt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=$t(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new L,f=new ie,d=new L,m=new L,x=new L,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let v=0;v<=t;v++){let _=n+v*h*s,y=Math.sin(_),C=Math.cos(_);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*y,u.y=e[A].y,u.z=e[A].x*C,a.push(u.x,u.y,u.z),f.x=v/t,f.y=A/(e.length-1),o.push(f.x,f.y);let S=l[3*A+0]*y,R=l[3*A+1],P=l[3*A+0]*C;c.push(S,R,P)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,C=y,A=y+e.length,S=y+e.length+1,R=y+1;r.push(C,A,R),r.push(S,R,A)}this.setIndex(r),this.setAttribute("position",new it(a,3)),this.setAttribute("uv",new it(o,2)),this.setAttribute("normal",new it(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ki=class i extends nd{constructor(e=1,t=1,n=4,s=8){let r=new Ss;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},$s=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},et=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=n/2,p=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(d,2));function v(){let y=new L,C=new L,A=0,S=(t-e)/n;for(let R=0;R<=r;R++){let P=[],b=R/r,M=b*(t-e)+e;for(let D=0;D<=s;D++){let U=D/s,O=U*l+o,Z=Math.sin(O),H=Math.cos(O);C.x=M*Z,C.y=-b*n+g,C.z=M*H,u.push(C.x,C.y,C.z),y.set(Z,S,H).normalize(),f.push(y.x,y.y,y.z),d.push(U,1-b),P.push(m++)}x.push(P)}for(let R=0;R<s;R++)for(let P=0;P<r;P++){let b=x[P][R],M=x[P+1][R],D=x[P+1][R+1],U=x[P][R+1];e>0&&(h.push(b,M,U),A+=3),t>0&&(h.push(M,D,U),A+=3)}c.addGroup(p,A,0),p+=A}function _(y){let C=m,A=new ie,S=new L,R=0,P=y===!0?e:t,b=y===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),m++;let M=m;for(let D=0;D<=s;D++){let O=D/s*l+o,Z=Math.cos(O),H=Math.sin(O);S.x=P*H,S.y=g*b,S.z=P*Z,u.push(S.x,S.y,S.z),f.push(0,b,0),A.x=Z*.5+.5,A.y=H*.5*b+.5,d.push(A.x,A.y),m++}for(let D=0;D<s;D++){let U=C+D,O=M+D;y===!0?h.push(O,O+1,U):h.push(O+1,O,U),R+=3}c.addGroup(p,R,y===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ai=class i extends et{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},id=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new L,y=new L,C=new L;for(let A=0;A<t.length;A+=3)d(t[A+0],_),d(t[A+1],y),d(t[A+2],C),l(_,y,C,v)}function l(v,_,y,C){let A=C+1,S=[];for(let R=0;R<=A;R++){S[R]=[];let P=v.clone().lerp(y,R/A),b=_.clone().lerp(y,R/A),M=A-R;for(let D=0;D<=M;D++)D===0&&R===A?S[R][D]=P:S[R][D]=P.clone().lerp(b,D/M)}for(let R=0;R<A;R++)for(let P=0;P<2*(A-R)-1;P++){let b=Math.floor(P/2);P%2===0?(f(S[R][b+1]),f(S[R+1][b]),f(S[R][b])):(f(S[R][b+1]),f(S[R+1][b+1]),f(S[R+1][b]))}}function c(v){let _=new L;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new L;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=g(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;a.push(y,1-C)}m(),u()}function u(){for(let v=0;v<a.length;v+=6){let _=a[v+0],y=a[v+2],C=a[v+4],A=Math.max(_,y,C),S=Math.min(_,y,C);A>.9&&S<.1&&(_<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function m(){let v=new L,_=new L,y=new L,C=new L,A=new ie,S=new ie,R=new ie;for(let P=0,b=0;P<r.length;P+=9,b+=6){v.set(r[P+0],r[P+1],r[P+2]),_.set(r[P+3],r[P+4],r[P+5]),y.set(r[P+6],r[P+7],r[P+8]),A.set(a[b+0],a[b+1]),S.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),C.copy(v).add(_).add(y).divideScalar(3);let M=g(C);x(A,b+0,v,M),x(S,b+2,_,M),x(R,b+4,y,M)}}function x(v,_,y,C){C<0&&v.x===1&&(a[_]=v.x-1),y.x===0&&y.z===0&&(a[_]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var er=class extends Ss{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ss().fromJSON(s))}return this}},wM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=c0(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=IM(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let m=t;m<s;m+=t)u=i[m],f=i[m+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return so(r,a,t,o,l,d,0),a}};function c0(i,e,t,n,s){let r,a;if(s===GM(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Pm(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Pm(r,i[r],i[r+1],a);return a&&Mc(a,a.next)&&(ao(a),a=a.next),a}function tr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Mc(t,t.next)||Gt(t.prev,t,t.next)===0)){if(ao(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function so(i,e,t,n,s,r,a){if(!i)return;!a&&r&&FM(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?RM(i,n,s,r):AM(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ao(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=CM(tr(i),e,t),so(i,e,t,n,s,r,2)):a===2&&PM(i,e,t,n,s,r):so(tr(i),e,t,n,s,r,1);break}}}function AM(i){let e=i.prev,t=i,n=i.next;if(Gt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&kr(s,o,r,l,a,c,m.x,m.y)&&Gt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function RM(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Gt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=sd(d,m,e,t,n),v=sd(x,g,e,t,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&kr(o,h,l,u,c,f,_.x,_.y)&&Gt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&kr(o,h,l,u,c,f,y.x,y.y)&&Gt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&kr(o,h,l,u,c,f,_.x,_.y)&&Gt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&kr(o,h,l,u,c,f,y.x,y.y)&&Gt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function CM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Mc(s,r)&&h0(s,n,n.next,r)&&ro(s,r)&&ro(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ao(n),ao(n.next),n=i=r),n=n.next}while(n!==i);return tr(n)}function PM(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&BM(a,o)){let l=u0(a,o);a=tr(a,a.next),l=tr(l,l.next),so(a,e,t,n,s,r,0),so(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function IM(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=c0(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(kM(c));for(s.sort(LM),r=0;r<s.length;r++)t=DM(s[r],t);return t}function LM(i,e){return i.x-e.x}function DM(i,e){let t=UM(i,e);if(!t)return e;let n=u0(t,i);return tr(n,n.next),tr(t,t.next)}function UM(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&kr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),ro(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&NM(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function NM(i,e){return Gt(i.prev,i,e.prev)<0&&Gt(e.next,i,i.next)<0}function FM(i,e,t,n){let s=i;do s.z===0&&(s.z=sd(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,OM(s)}function OM(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function sd(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function kM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function kr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function BM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!HM(i,e)&&(ro(i,e)&&ro(e,i)&&zM(i,e)&&(Gt(i.prev,i,e.prev)||Gt(i,e.prev,e))||Mc(i,e)&&Gt(i.prev,i,i.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Mc(i,e){return i.x===e.x&&i.y===e.y}function h0(i,e,t,n){let s=Tl(Gt(i,e,t)),r=Tl(Gt(i,e,n)),a=Tl(Gt(t,n,i)),o=Tl(Gt(t,n,e));return!!(s!==r&&a!==o||s===0&&El(i,t,e)||r===0&&El(i,n,e)||a===0&&El(t,i,n)||o===0&&El(t,e,n))}function El(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Tl(i){return i>0?1:i<0?-1:0}function HM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&h0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ro(i,e){return Gt(i.prev,i,i.next)<0?Gt(i,e,i.next)>=0&&Gt(i,i.prev,e)>=0:Gt(i,e,i.prev)<0||Gt(i,i.next,e)<0}function zM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function u0(i,e){let t=new rd(i.i,i.x,i.y),n=new rd(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pm(i,e,t,n){let s=new rd(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rd(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function GM(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var gs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Im(e),Lm(n,e);let a=e.length;t.forEach(Im);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Lm(n,t[l]);let o=wM.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Im(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Lm(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var rc=class i extends Mt{constructor(e=new er([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new it(s,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:VM,_,y=!1,C,A,S,R;p&&(_=p.getSpacedPoints(h),y=!0,f=!1,C=p.computeFrenetFrames(h,!1),A=new L,S=new L,R=new L),f||(g=0,d=0,m=0,x=0);let P=o.extractPoints(c),b=P.shape,M=P.holes;if(!gs.isClockWise(b)){b=b.reverse();for(let re=0,I=M.length;re<I;re++){let W=M[re];gs.isClockWise(W)&&(M[re]=W.reverse())}}let U=gs.triangulateShape(b,M),O=b;for(let re=0,I=M.length;re<I;re++){let W=M[re];b=b.concat(W)}function Z(re,I,W){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(I,W)}let H=b.length,se=U.length;function X(re,I,W){let N,V,q,ne=re.x-I.x,Y=re.y-I.y,T=W.x-re.x,E=W.y-re.y,B=ne*ne+Y*Y,ee=ne*E-Y*T;if(Math.abs(ee)>Number.EPSILON){let ae=Math.sqrt(B),te=Math.sqrt(T*T+E*E),Fe=I.x-Y/ae,ve=I.y+ne/ae,we=W.x-E/te,st=W.y+T/te,de=((we-Fe)*E-(st-ve)*T)/(ne*E-Y*T);N=Fe+ne*de-re.x,V=ve+Y*de-re.y;let Ae=N*N+V*V;if(Ae<=2)return new ie(N,V);q=Math.sqrt(Ae/2)}else{let ae=!1;ne>Number.EPSILON?T>Number.EPSILON&&(ae=!0):ne<-Number.EPSILON?T<-Number.EPSILON&&(ae=!0):Math.sign(Y)===Math.sign(E)&&(ae=!0),ae?(N=-Y,V=ne,q=Math.sqrt(B)):(N=ne,V=Y,q=Math.sqrt(B/2))}return new ie(N/q,V/q)}let ce=[];for(let re=0,I=O.length,W=I-1,N=re+1;re<I;re++,W++,N++)W===I&&(W=0),N===I&&(N=0),ce[re]=X(O[re],O[W],O[N]);let me=[],xe,je=ce.concat();for(let re=0,I=M.length;re<I;re++){let W=M[re];xe=[];for(let N=0,V=W.length,q=V-1,ne=N+1;N<V;N++,q++,ne++)q===V&&(q=0),ne===V&&(ne=0),xe[N]=X(W[N],W[q],W[ne]);me.push(xe),je=je.concat(xe)}for(let re=0;re<g;re++){let I=re/g,W=d*Math.cos(I*Math.PI/2),N=m*Math.sin(I*Math.PI/2)+x;for(let V=0,q=O.length;V<q;V++){let ne=Z(O[V],ce[V],N);pe(ne.x,ne.y,-W)}for(let V=0,q=M.length;V<q;V++){let ne=M[V];xe=me[V];for(let Y=0,T=ne.length;Y<T;Y++){let E=Z(ne[Y],xe[Y],N);pe(E.x,E.y,-W)}}}let Xe=m+x;for(let re=0;re<H;re++){let I=f?Z(b[re],je[re],Xe):b[re];y?(S.copy(C.normals[0]).multiplyScalar(I.x),A.copy(C.binormals[0]).multiplyScalar(I.y),R.copy(_[0]).add(S).add(A),pe(R.x,R.y,R.z)):pe(I.x,I.y,0)}for(let re=1;re<=h;re++)for(let I=0;I<H;I++){let W=f?Z(b[I],je[I],Xe):b[I];y?(S.copy(C.normals[re]).multiplyScalar(W.x),A.copy(C.binormals[re]).multiplyScalar(W.y),R.copy(_[re]).add(S).add(A),pe(R.x,R.y,R.z)):pe(W.x,W.y,u/h*re)}for(let re=g-1;re>=0;re--){let I=re/g,W=d*Math.cos(I*Math.PI/2),N=m*Math.sin(I*Math.PI/2)+x;for(let V=0,q=O.length;V<q;V++){let ne=Z(O[V],ce[V],N);pe(ne.x,ne.y,u+W)}for(let V=0,q=M.length;V<q;V++){let ne=M[V];xe=me[V];for(let Y=0,T=ne.length;Y<T;Y++){let E=Z(ne[Y],xe[Y],N);y?pe(E.x,E.y+_[h-1].y,_[h-1].x+W):pe(E.x,E.y,u+W)}}}Q(),he();function Q(){let re=s.length/3;if(f){let I=0,W=H*I;for(let N=0;N<se;N++){let V=U[N];Ne(V[2]+W,V[1]+W,V[0]+W)}I=h+g*2,W=H*I;for(let N=0;N<se;N++){let V=U[N];Ne(V[0]+W,V[1]+W,V[2]+W)}}else{for(let I=0;I<se;I++){let W=U[I];Ne(W[2],W[1],W[0])}for(let I=0;I<se;I++){let W=U[I];Ne(W[0]+H*h,W[1]+H*h,W[2]+H*h)}}n.addGroup(re,s.length/3-re,0)}function he(){let re=s.length/3,I=0;Me(O,I),I+=O.length;for(let W=0,N=M.length;W<N;W++){let V=M[W];Me(V,I),I+=V.length}n.addGroup(re,s.length/3-re,1)}function Me(re,I){let W=re.length;for(;--W>=0;){let N=W,V=W-1;V<0&&(V=re.length-1);for(let q=0,ne=h+g*2;q<ne;q++){let Y=H*q,T=H*(q+1),E=I+N+Y,B=I+V+Y,ee=I+V+T,ae=I+N+T;Ce(E,B,ee,ae)}}}function pe(re,I,W){l.push(re),l.push(I),l.push(W)}function Ne(re,I,W){ze(re),ze(I),ze(W);let N=s.length/3,V=v.generateTopUV(n,s,N-3,N-2,N-1);Ye(V[0]),Ye(V[1]),Ye(V[2])}function Ce(re,I,W,N){ze(re),ze(I),ze(N),ze(I),ze(W),ze(N);let V=s.length/3,q=v.generateSideWallUV(n,s,V-6,V-3,V-2,V-1);Ye(q[0]),Ye(q[1]),Ye(q[3]),Ye(q[1]),Ye(q[2]),Ye(q[3])}function ze(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function Ye(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return WM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new sc[s.type]().fromJSON(s)),new i(n,e.options)}},VM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ie(r,a),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-u),new ie(f,1-m),new ie(x,1-p)]:[new ie(o,1-l),new ie(h,1-u),new ie(d,1-m),new ie(g,1-p)]}};function WM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ac=class i extends id{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var oc=class i extends Mt{constructor(e=new er([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(r,3)),this.setAttribute("uv",new it(a,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,m=f.holes;gs.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let v=m[g];gs.isClockWise(v)===!0&&(m[g]=v.reverse())}let x=gs.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let v=m[g];d=d.concat(v)}for(let g=0,p=d.length;g<p;g++){let v=d[g];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,p=x.length;g<p;g++){let v=x[g],_=v[0]+u,y=v[1]+u,C=v[2]+u;n.push(_,y,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return XM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function XM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Nt=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,f=new L,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],_=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){let A=C/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(A+y,1-_),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let _=h[p][v+1],y=h[p][v],C=h[p+1][v],A=h[p+1][v+1];(p!==0||a>0)&&d.push(_,y,A),(p!==n-1||l<Math.PI)&&d.push(y,C,A)}this.setIndex(d),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ri=class i extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){let x=m/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){let x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,v=(s+1)*d+m;a.push(x,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var na=class i extends Mt{constructor(e=new nc(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new ie,h=new L,u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(d,2));function x(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),v(),p()}function g(_){h=e.getPointAt(_/t,h);let y=a.normals[_],C=a.binormals[_];for(let A=0;A<=s;A++){let S=A/s*Math.PI*2,R=Math.sin(S),P=-Math.cos(S);l.x=P*y.x+R*C.x,l.y=P*y.y+R*C.y,l.z=P*y.z+R*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let C=(s+1)*(_-1)+(y-1),A=(s+1)*_+(y-1),S=(s+1)*_+y,R=(s+1)*(_-1)+y;m.push(C,A,R),m.push(A,S,R)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new sc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var lc=class extends Tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},oe=class extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ud,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kn=class extends oe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var cc=class extends Sn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ud,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function wl(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function jM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Dm(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function d0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Es=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ad=class extends Es{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nr,endingEnd:Nr}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fr:r=e,o=2*t-n;break;case Dl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fr:a=e,l=2*n-t;break;case Dl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,v=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,_=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+v*a[c+C]+_*a[l+C]+y*a[u+C];return r}},hc=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},od=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wl(t,this.TimeBufferType),this.values=wl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wl(e.times,Array),values:wl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new od(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ad(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case ph:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return ph}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&qM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ph,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=jr;var Ts=class extends Kn{constructor(e,t,n){super(e,t,n)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=qr;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var uc=class extends Kn{};uc.prototype.ValueTypeName="color";var Zi=class extends Kn{};Zi.prototype.ValueTypeName="number";var ld=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ji=class extends Kn{InterpolantFactoryMethodLinear(e){return new ld(this.times,this.values,this.getValueSize(),e)}};Ji.prototype.ValueTypeName="quaternion";Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends Kn{constructor(e,t,n){super(e,t,n)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=qr;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Kn{};Qi.prototype.ValueTypeName="vector";var ia=class{constructor(e="",t=-1,n=[],s=Dd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(KM(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=jM(l);l=Dm(l,1,h),c=Dm(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Zi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,m,x){if(d.length!==0){let g=[],p=[];d0(d,g,p,m),g.length!==0&&x.push(new u(f,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let x=0;x<f[m].morphTargets.length;x++)d[f[m].morphTargets[x]]=-1;for(let x in d){let g=[],p=[];for(let v=0;v!==f[m].morphTargets.length;++v){let _=f[m];g.push(_.time),p.push(_.morphTarget===x?1:0)}s.push(new Zi(".morphTargetInfluence["+x+"]",g,p))}l=d.length*a}else{let d=".bones["+t[u].name+"]";n(Qi,d+".position",f,"pos",s),n(Ji,d+".quaternion",f,"rot",s),n(Qi,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function YM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zi;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return uc;case"quaternion":return Ji;case"bool":case"boolean":return Ts;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function KM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=YM(i.type);if(i.times===void 0){let t=[],n=[];d0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ps={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},oo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},ZM=new oo,$i=class{constructor(e){this.manager=e!==void 0?e:ZM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wi={},cd=class extends Error{constructor(e,t){super(e),this.response=t}},lo=class extends $i{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ps.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:n,onError:s});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Wi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){v();function v(){u.read().then(({done:_,value:y})=>{if(_)p.close();else{x+=y.byteLength;let C=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let A=0,S=h.length;A<S;A++){let R=h[A];R.onProgress&&R.onProgress(C)}p.enqueue(y),v()}},_=>{p.error(_)})}}});return new Response(g)}else throw new cd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{ps.add(e,c);let h=Wi[e];delete Wi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Wi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Wi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var hd=class extends $i{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ps.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ja("img");function l(){h(),ps.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var sa=class extends $i{constructor(e){super(e)}load(e,t,n,s){let r=new ln,a=new hd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ra=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},dc=class extends ra{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Kh=new qe,Um=new L,Nm=new L,co=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Um.setFromMatrixPosition(e.matrixWorld),t.position.copy(Um),Nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nm),t.updateMatrixWorld(),Kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ud=class extends co{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Yr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},nr=class extends ra{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ud}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Fm=new qe,za=new L,Zh=new L,dd=class extends co{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),za.setFromMatrixPosition(e.matrixWorld),n.position.copy(za),Zh.copy(n.position),Zh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zh),n.updateMatrixWorld(),s.makeTranslation(-za.x,-za.y,-za.z),Fm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fm)}},Qt=class extends ra{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},fd=class extends co{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},aa=class extends ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new fd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var As=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var fc=class extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ps.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ps.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ps.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ps.add(e,l),r.manager.itemStart(e)}};var oa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Om(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Om();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Om(){return performance.now()}var pd=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Cn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;Cn.multiplyQuaternionsFlat(e,a,e,t,e,n),Cn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},Bd="\\[\\]\\.:\\/",JM=new RegExp("["+Bd+"]","g"),Hd="[^"+Bd+"]",QM="[^"+Bd.replace("\\.","")+"]",$M=/((?:WC+[\/:])*)/.source.replace("WC",Hd),e1=/(WCOD+)?/.source.replace("WCOD",QM),t1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hd),n1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hd),i1=new RegExp("^"+$M+e1+t1+n1+"$"),s1=["material","materials","bones","map"],md=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(JM,"")}static parseTrackName(e){let t=i1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);s1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=md;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gd=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Nr,endingEnd:Nr};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Wg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case qg:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Dd:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===Xg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Vg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Fr,s.endingEnd=Fr):(e?s.endingStart=this.zeroSlopeAtStart?Fr:Nr:s.endingStart=Dl,t?s.endingEnd=this.zeroSlopeAtEnd?Fr:Nr:s.endingEnd=Dl)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},r1=new Float32Array(1),pc=class extends Yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let f=s[u],d=f.name,m=h[d];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;m=new pd(Lt.create(n,d,x),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new hc(new Float32Array(2),new Float32Array(2),1,r1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?ia.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Dd),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new gd(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?ia.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var km=new qe,mc=class{constructor(e,t,n=0,s=1/0){this.ray=new Zs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return km.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(km),this}intersectObject(e,t=!0,n=[]){return bd(e,this,n,t),n.sort(Bm),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)bd(e[s],this,n,t);return n.sort(Bm),n}};function Bm(i,e){return i.distance-e.distance}function bd(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)bd(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function p0(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Mt,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=f0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);let m=f0(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function f0(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Dt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){let x=h.getComponent(f,m);o.setComponent(f+u,m,x)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function zd(i,e){if(e===Qm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===uo||e===vc){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===uo)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Sc=class extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yd(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=As.extractUrlBase(e);a=As.resolveURL(c,this.path)}else a=As.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new lo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===v0){try{a[ht.KHR_BINARY_GLTF]=new hf(e)}catch(u){s&&s(u);return}r=JSON.parse(a[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new bf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ht.KHR_MATERIALS_UNLIT:a[u]=new qd;break;case ht.KHR_DRACO_MESH_COMPRESSION:a[u]=new uf(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:a[u]=new df;break;case ht.KHR_MESH_QUANTIZATION:a[u]=new ff;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function o1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Xd=class{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],cn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new aa(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qt(h),c.distance=u;break;case"spot":c=new nr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,es(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},qd=class{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Ht}extendParams(e,t,n){let s=[];e.color=new Le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],cn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(s)}},jd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Yd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(o,o)}return Promise.all(r)}},Kd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Zd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Jd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],cn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,zt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Qd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},$d=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(o[0],o[1],o[2],cn),Promise.all(r)}},ef=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},tf=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(o[0],o[1],o[2],cn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,zt)),Promise.all(r)}},nf=class{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},sf=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},rf=class{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},af=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},of=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},lf=class{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},cf=class{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Zn.TRIANGLES&&c.mode!==Zn.TRIANGLE_STRIP&&c.mode!==Zn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let m of u){let x=new qe,g=new L,p=new Cn,v=new L(1,1,1),_=new ys(m.geometry,m.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,x.compose(g,p,v));for(let y in l)if(y==="_COLOR_0"){let C=l[y];_.instanceColor=new Qs(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);Ut.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},v0="glTF",fo=12,m0={JSON:1313821514,BIN:5130562},hf=class{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,fo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==v0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-fo,r=new DataView(e,fo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===m0.JSON){let c=new Uint8Array(e,fo+a,o);this.content=n.decode(c)}else if(l===m0.BIN){let c=fo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},uf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=mf[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=mf[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=ha[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(d)},o,c,cn,f)})})}},df=class{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ff=class{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}},Ec=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,v=1-g,_=p-f+u;for(let y=0;y!==o;y++){let C=a[x+y+o],A=a[x+y+l]*h,S=a[m+y+o],R=a[m+y]*h;r[y]=v*C+_*A+g*S+p*R}return r}},l1=new Cn,pf=class extends Ec{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return l1.fromArray(r).normalize().toArray(r),r}},Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ha={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},g0={9728:tn,9729:An,9984:Td,9985:Va,9986:Ur,9987:Xn},b0={33071:Mn,33648:Ka,10497:xn},Gd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},c1={CUBICSPLINE:void 0,LINEAR:jr,STEP:qr},Vd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function h1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new oe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),i.DefaultMaterial}function ir(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function es(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function u1(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function d1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function f1(i){let e,t=i.extensions&&i.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wd(t.attributes):e=i.indices+":"+Wd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Wd(i.targets[n]);return e}function Wd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function gf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function p1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var m1=new qe,bf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new o1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new sa(this.options.manager):this.textureLoader=new fc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ir(r,o,s),es(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(As.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Gd[s.type],o=ha[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Dt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Gd[s.type],c=ha[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(d&&d!==u){let p=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(v);_||(x=new c(o,p*d,s.count*d/h),_=new $r(x,d/h),t.cache.add(v,_)),g=new Js(_,l,f%d/h,m)}else o===null?x=new c(s.count*l):x=new c(o,f,s.count*l),g=new Dt(x,l,m);if(s.sparse!==void 0){let p=Gd.SCALAR,v=ha[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,C=new v(a[1],_,s.sparse.count*p),A=new c(a[2],y,s.sparse.count*l);o!==null&&(g=new Dt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let S=0,R=C.length;S<R;S++){let P=C[S];if(g.setX(P,A[S*l]),l>=2&&g.setY(P,A[S*l+1]),l>=3&&g.setZ(P,A[S*l+2]),l>=4&&g.setW(P,A[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=g0[f.magFilter]||An,h.minFilter=g0[f.minFilter]||Xn,h.wrapS=b0[f.wrapS]||xn,h.wrapT=b0[f.wrapT]||xn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new ln(x);g.needsUpdate=!0,f(g)}),t.load(As.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),es(u,a),u.userData.mimeType=a.mimeType||p1(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new xi,Sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new no,Sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return oe}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){let u=s[ht.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],cn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,zt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Bt);let h=r.alphaMode||Vd.OPAQUE;if(h===Vd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Vd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ht&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ht&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ht){let u=r.emissiveFactor;o.emissive=new Le().setRGB(u[0],u[1],u[2],cn)}return r.emissiveTexture!==void 0&&a!==Ht&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,zt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),es(u,r),t.associations.set(u,{materials:e}),r.extensions&&ir(s,u,r),u})}createUniqueName(e){let t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return x0(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=f1(c),u=s[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=x0(new Mt,c,t),s[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?h1(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let x=h[d],g=a[d],p,v=c[d];if(g.mode===Zn.TRIANGLES||g.mode===Zn.TRIANGLE_STRIP||g.mode===Zn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new jl(x,v):new k(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Zn.TRIANGLE_STRIP?p.geometry=zd(p.geometry,vc):g.mode===Zn.TRIANGLE_FAN&&(p.geometry=zd(p.geometry,uo));else if(g.mode===Zn.LINES)p=new Jl(x,v);else if(g.mode===Zn.LINE_STRIP)p=new ea(x,v);else if(g.mode===Zn.LINE_LOOP)p=new Ql(x,v);else if(g.mode===Zn.POINTS)p=new wi(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&d1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),es(p,r),g.extensions&&ir(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ir(s,u[0],r),u[0];let f=new mt;r.extensions&&ir(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(Ci.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new vs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),es(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Yl(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],m=s.samplers[d.sampler],x=d.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,v=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let v=0,_=f.length;v<_;v++){let y=f[v],C=d[v],A=m[v],S=x[v],R=g[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let P=n._createAnimationTracks(y,C,A,S,R);if(P)for(let b=0;b<P.length;b++)p.push(P[b])}return new ia(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,m1)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new to:c.length>1?h=new mt:c.length===1?h=c[0]:h=new Ut,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),es(h,r),r.extensions&&ir(n,h,r),r.matrix!==void 0){let u=new qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new mt;n.name&&(r.name=s.createUniqueName(n.name)),es(r,n),n.extensions&&ir(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Sn||f instanceof ln)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Rs[r.path]===Rs.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Rs[r.path]){case Rs.weights:c=Zi;break;case Rs.rotation:c=Ji;break;case Rs.position:case Rs.scale:c=Qi;break;default:n.itemSize===1?c=Zi:c=Qi;break}let h=s.interpolation!==void 0?c1[s.interpolation]:jr,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let m=new c(l[f]+"."+Rs[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=gf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ji?pf:Ec;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function g1(i,e,t){let n=e.attributes,s=new un;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let h=gf(ha[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=gf(ha[f.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new On;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function x0(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=mf[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ft.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),es(i,e),g1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?u1(i,e.targets,t):i})}var _0=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),_=0;_<p.length;++_){var y=p.charCodeAt(_);v[_]=y>96?y-97:y>64?y-39:y+4}for(var C=0,_=0;_<p.length;++_)v[C++]=v[_]<60?n[v[_]]:(v[_]-60)*64+v[++_];return v.buffer.slice(0,C)}function l(p,v,_,y,C,A){var S=r.exports.sbrk,R=_+3&-4,P=S(R*y),b=S(C.length),M=new Uint8Array(r.exports.memory.buffer);M.set(C,b);var D=p(P,_,y,b,C.length);if(D==0&&A&&A(P,R,y),v.set(M.subarray(P,P+_*y)),S(P-S(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(_){var y=_.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function m(p){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+g.toString(),_=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(_),C=0;C<p;++C)u[C]=d(y);URL.revokeObjectURL(y)}function x(p,v,_,y,C){for(var A=u[0],S=1;S<u.length;++S)u[S].pending<A.pending&&(A=u[S]);return new Promise(function(R,P){var b=new Uint8Array(_),M=f++;A.pending+=p,A.requests[M]={resolve:R,reject:P},A.object.postMessage({id:M,count:p,size:v,source:b,mode:y,filter:C},[b.buffer])})}function g(p){a.then(function(){var v=p.data;try{var _=new Uint8Array(v.count*v.size);l(r.exports[v.mode],_,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:_},[_.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,_,y,C){l(r.exports.meshopt_decodeVertexBuffer,p,v,_,y,r.exports[c[C]])},decodeIndexBuffer:function(p,v,_,y){l(r.exports.meshopt_decodeIndexBuffer,p,v,_,y)},decodeIndexSequence:function(p,v,_,y){l(r.exports.meshopt_decodeIndexSequence,p,v,_,y)},decodeGltfBuffer:function(p,v,_,y,C,A){l(r.exports[h[C]],p,v,_,y,r.exports[c[A]])},decodeGltfBufferAsync:function(p,v,_,y,C){return u.length>0?x(p,v,_,h[y],c[C]):a.then(function(){var A=new Uint8Array(p*v);return l(r.exports[h[y]],A,p,v,_,r.exports[c[C]]),A})}}})();var Tc=class extends Qr{constructor(){super();let e=new pt;e.deleteAttribute("uv");let t=new oe({side:on}),n=new oe,s=new Qt(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new k(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new k(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new k(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new k(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new k(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new k(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new k(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new k(e,ua(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new k(e,ua(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let m=new k(e,ua(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let x=new k(e,ua(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new k(e,ua(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new k(e,ua(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ua(i){let e=new Ht;return e.color.setScalar(i),e}var Cs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},b1=new vs(-1,1,1,-1,0,1),xf=class extends Mt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},x1=new xf,Pi=class{constructor(e){this._mesh=new k(x1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,b1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var da=class extends En{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pn.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var po=class extends En{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},wc=class extends En{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ac=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new da(Cs),this.copyPass.material.blending=nn,this.clock=new oa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}po!==void 0&&(a instanceof po?n=!0:a instanceof wc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Rc=class extends En{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var y0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var fa=class i extends En{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new Le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(r,a,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Jt(r,a,{type:vn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Jt(r,a,{type:vn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=y0;this.highPassUniforms=Pn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ie(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Cs;this.copyUniforms=Pn.clone(h.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ei,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Le,this.oldClearAlpha=1,this.basic=new Ht,this.fsQuad=new Pi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Tt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};fa.BlurDirectionX=new ie(1,0);fa.BlurDirectionY=new ie(0,1);var mo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ie},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new qe},cameraProjectionMatrixInverse:{value:new qe},cameraWorldMatrix:{value:new qe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},go={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Cc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function M0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=v1(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new _s(s,e,e);return r.wrapS=xn,r.wrapT=xn,r.needsUpdate=!0,r}function v1(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var bo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:vf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ie},cameraProjectionMatrixInverse:{value:new qe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function vf(i,e,t){let n=_1(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function _1(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new L(Math.cos(r),Math.sin(r),a))}return n}var Pc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,m=e-f,x=t-d,g,p;m>x?(g=1,p=0):(g=0,p=1);let v=m-g+h,_=x-p+h,y=m-1+2*h,C=x-1+2*h,A=l&255,S=c&255,R=this.perm[A+this.perm[S]]%12,P=this.perm[A+g+this.perm[S+p]]%12,b=this.perm[A+1+this.perm[S+1]]%12,M=.5-m*m-x*x;M<0?n=0:(M*=M,n=M*M*this.dot(this.grad3[R],m,x));let D=.5-v*v-_*_;D<0?s=0:(D*=D,s=D*D*this.dot(this.grad3[P],v,_));let U=.5-y*y-C*C;return U<0?r=0:(U*=U,r=U*U*this.dot(this.grad3[b],y,C)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,m=(h+u+f)*d,x=h-m,g=u-m,p=f-m,v=e-x,_=t-g,y=n-p,C,A,S,R,P,b;v>=_?_>=y?(C=1,A=0,S=0,R=1,P=1,b=0):v>=y?(C=1,A=0,S=0,R=1,P=0,b=1):(C=0,A=0,S=1,R=1,P=0,b=1):_<y?(C=0,A=0,S=1,R=0,P=1,b=1):v<y?(C=0,A=1,S=0,R=0,P=1,b=1):(C=0,A=1,S=0,R=1,P=1,b=0);let M=v-C+d,D=_-A+d,U=y-S+d,O=v-R+2*d,Z=_-P+2*d,H=y-b+2*d,se=v-1+3*d,X=_-1+3*d,ce=y-1+3*d,me=h&255,xe=u&255,je=f&255,Xe=this.perm[me+this.perm[xe+this.perm[je]]]%12,Q=this.perm[me+C+this.perm[xe+A+this.perm[je+S]]]%12,he=this.perm[me+R+this.perm[xe+P+this.perm[je+b]]]%12,Me=this.perm[me+1+this.perm[xe+1+this.perm[je+1]]]%12,pe=.6-v*v-_*_-y*y;pe<0?s=0:(pe*=pe,s=pe*pe*this.dot3(this.grad3[Xe],v,_,y));let Ne=.6-M*M-D*D-U*U;Ne<0?r=0:(Ne*=Ne,r=Ne*Ne*this.dot3(this.grad3[Q],M,D,U));let Ce=.6-O*O-Z*Z-H*H;Ce<0?a=0:(Ce*=Ce,a=Ce*Ce*this.dot3(this.grad3[he],O,Z,H));let ze=.6-se*se-X*X-ce*ce;return ze<0?o=0:(ze*=ze,o=ze*ze*this.dot3(this.grad3[Me],se,X,ce)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,m,x=(e+t+n+s)*l,g=Math.floor(e+x),p=Math.floor(t+x),v=Math.floor(n+x),_=Math.floor(s+x),y=(g+p+v+_)*c,C=g-y,A=p-y,S=v-y,R=_-y,P=e-C,b=t-A,M=n-S,D=s-R,U=P>b?32:0,O=P>M?16:0,Z=b>M?8:0,H=P>D?4:0,se=b>D?2:0,X=M>D?1:0,ce=U+O+Z+H+se+X,me=a[ce][0]>=3?1:0,xe=a[ce][1]>=3?1:0,je=a[ce][2]>=3?1:0,Xe=a[ce][3]>=3?1:0,Q=a[ce][0]>=2?1:0,he=a[ce][1]>=2?1:0,Me=a[ce][2]>=2?1:0,pe=a[ce][3]>=2?1:0,Ne=a[ce][0]>=1?1:0,Ce=a[ce][1]>=1?1:0,ze=a[ce][2]>=1?1:0,Ye=a[ce][3]>=1?1:0,re=P-me+c,I=b-xe+c,W=M-je+c,N=D-Xe+c,V=P-Q+2*c,q=b-he+2*c,ne=M-Me+2*c,Y=D-pe+2*c,T=P-Ne+3*c,E=b-Ce+3*c,B=M-ze+3*c,ee=D-Ye+3*c,ae=P-1+4*c,te=b-1+4*c,Fe=M-1+4*c,ve=D-1+4*c,we=g&255,st=p&255,de=v&255,Ae=_&255,Ze=o[we+o[st+o[de+o[Ae]]]]%32,Je=o[we+me+o[st+xe+o[de+je+o[Ae+Xe]]]]%32,Ue=o[we+Q+o[st+he+o[de+Me+o[Ae+pe]]]]%32,ut=o[we+Ne+o[st+Ce+o[de+ze+o[Ae+Ye]]]]%32,tt=o[we+1+o[st+1+o[de+1+o[Ae+1]]]]%32,vt=.6-P*P-b*b-M*M-D*D;vt<0?h=0:(vt*=vt,h=vt*vt*this.dot4(r[Ze],P,b,M,D));let F=.6-re*re-I*I-W*W-N*N;F<0?u=0:(F*=F,u=F*F*this.dot4(r[Je],re,I,W,N));let Te=.6-V*V-q*q-ne*ne-Y*Y;Te<0?f=0:(Te*=Te,f=Te*Te*this.dot4(r[Ue],V,q,ne,Y));let J=.6-T*T-E*E-B*B-ee*ee;J<0?d=0:(J*=J,d=J*J*this.dot4(r[ut],T,E,B,ee));let le=.6-ae*ae-te*te-Fe*Fe-ve*ve;return le<0?m=0:(le*=le,m=le*le*this.dot4(r[tt],ae,te,Fe,ve)),27*(h+u+f+d+m)}};var xo=class i extends En{constructor(e,t,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=M0(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Jt(this.width,this.height,{type:vn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Tt({defines:Object.assign({},mo.defines),uniforms:Pn.clone(mo.uniforms),vertexShader:mo.vertexShader,fragmentShader:mo.fragmentShader,blending:nn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new cc,this.normalMaterial.blending=nn,this.pdMaterial=new Tt({defines:Object.assign({},bo.defines),uniforms:Pn.clone(bo.uniforms),vertexShader:bo.vertexShader,fragmentShader:bo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Tt({defines:Object.assign({},go.defines),uniforms:Pn.clone(go.uniforms),vertexShader:go.vertexShader,fragmentShader:go.fragmentShader,blending:nn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Tt({uniforms:Pn.clone(Cs.uniforms),vertexShader:Cs.vertexShader,fragmentShader:Cs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:bc,blendDst:la,blendEquation:Wn,blendSrcAlpha:gc,blendDstAlpha:la,blendEquationAlpha:Wn}),this.blendMaterial=new Tt({uniforms:Pn.clone(Cc.uniforms),vertexShader:Cc.vertexShader,fragmentShader:Cc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:vd,blendSrc:bc,blendDst:la,blendEquation:Wn,blendSrcAlpha:gc,blendDstAlpha:la,blendEquationAlpha:Wn}),this.fsQuad=new Pi(null),this.originalClearColor=new Le,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Jr,this.depthTexture.format=xs,this.depthTexture.type=bs,this.normalRenderTarget=new Jt(this.width,this.height,{minFilter:tn,magFilter:tn,type:vn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=vf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new Pc,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new _s(s,e,e,Rn,bi);return r.wrapS=xn,r.wrapT=xn,r.needsUpdate=!0,r}};xo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var S0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ic=class extends En{constructor(){super();let e=S0;this.uniforms=Pn.clone(e.uniforms),this.material=new lc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===It&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_d?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Md?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ed&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ct=window.SNOWIE_CONFIG||{},ya=(Ct.links||[]).filter(i=>i&&i.url),B0={enterTitle:"PRESS TO ENTER THE CABIN",enterSub:"sound on \xB7 headphones recommended",liteLink:"just here for the links? open the lightweight version \u2192",liteBack:"\u2190 enter the cabin instead",prompt:"click the computer",hintDesktop:"look around \xB7 click things",hintTouch:"drag to look \xB7 tap things",sliderLeft:"TONIGHT",sliderRight:"YEARS LATER",bootTitle:"SNOWIE_OS",bootSub:"v4.1  //  FrostPaw Interactive",bootLines:["> memory test .......... 640K ok","> keyboard ............. ok","> drive C: ............. ok","> mounting /void ...... ??","> 1 unread note"],login:"schurik",welcome:"WELCOME BACK, schurik",welcomeSub:"last login: yesterday",welcomeSubLate:"last login: 2,191 days ago",footer:"SNOWIE_OS v4.1  \xB7  FrostPaw Interactive",idleLines:["SNOWIE_OS v4.1","last login: 2,191 days ago","battery: ??",""],readme:["SNOWIE_OS v4.1","type help for commands."],fragments:[`day 12
snow is up to the second log outside. wood for maybe four more days if i stop wasting it.
the fox sleeps by the fire. the little white one sleeps on the fox.`,`day 19
only tape left for the boombox is the scientello one. playing it slow so it lasts longer.
radio did the numbers again at 3:14. 4 7 2. same as tuesday.`,`day 31
power has been out for a week. the computer still turns on.
i dont know what its running on and im not opening it.`,`day 40
the tower light came back on last night. nobody is out there to fix it.
leaving tomorrow with the fox and the little one. if you find this, check the computer. type void.`],allFound:"> 4 of 4 notes. check the computer.",signalFull:"> the radio is louder over here.",signalPartial:"> something out there is still transmitting.",voidLocked:"/void locked",voidLines:["LOG 41","","left at first light. took the fox and the little one.","the fire wont last but this thing will.","the links still work. somebody should use them.","","see you when it stops snowing.","  - s"],radioNumbers:"four. seven. two. ... four. seven. two. ... three. one. four.",lateHint:"turn the radio off to go back",radioHelp:"body: power \xB7 left knob: band \xB7 right knob: station \xB7 scroll: tune",radioHelpTouch:"tap body: power \xB7 knobs: band / station \xB7 drag: tune",bookHelp:"click a page to flip",bookEmpty:`nothing here yet
gonna add more soon`,bookHelpTouch:"tap a page to flip",labels:{radio:"radio",screenOff:"power on",screenOn:"open",note:"read",radioOn:"turn on",radioOff:"turn off",fire:"stoke",fox:"pet",slug:"pet",plush:"squeeze",book:"sketchbook",bookNext:"next",bookPrev:"back",play:"play",stop:"stop",window:"look outside"}},Ge=Object.assign({},B0,Ct.text||{});Ge.labels=Object.assign({},B0.labels,(Ct.text||{}).labels||{});var Wf=[["fox","PixelMannen (CC0), rig by tomkranis, glTF by AsoboStudio + scurest","CC BY 4.0"],["potted plant","Darmstadt Graphics Group","CC BY 4.0"],["barn lamp, candle holder","Wayfair","CC BY 4.0"],["boombox, street lantern","Microsoft","CC0"],["armchair","Wayfair / Eric Chadwick","CC0"],["teacup","Poly Haven / Eric Chadwick","CC0"],["tiger shark plush","fan model via The Models Resource, Changed by DragonSnow","fan work"]],Xf="https://creativecommons.org/licenses/by/4.0/",qf="https://github.com/KhronosGroup/glTF-Sample-Assets",dt=i=>document.getElementById(i),fr=new URLSearchParams(location.search),y1=document.querySelector("meta[name=version]")?.content||"0.0.0",Oi=matchMedia("(hover: none)").matches&&"ontouchstart"in window||fr.has("touch"),ri=Oi||/Mobi|Android/i.test(navigator.userAgent)||fr.has("low"),E0=matchMedia("(prefers-reduced-motion: reduce)").matches;Oi&&document.body.classList.add("touch");var Ma=dt("c"),zn=new Wl({canvas:Ma,antialias:!1,powerPreference:"high-performance"}),Ls=Math.min(devicePixelRatio||1,ri?1.25:1.75);zn.setPixelRatio(Ls);zn.setSize(innerWidth,innerHeight);zn.shadowMap.enabled=!ri;zn.shadowMap.type=xd;zn.toneMapping=ho;zn.toneMappingExposure=1;zn.outputColorSpace=zt;var $=new Qr;$.background=new Le(197639);$.fog=new Xl(657158,.045);var M1=new Zr(zn);$.environment=M1.fromScene(new Tc,.04).texture;$.environmentIntensity=.06;var Pt=new en(52,innerWidth/innerHeight,.03,120),xa=new oo;xa.onProgress=(i,e,t)=>{let n=Math.round(e/t*100);dt("loadpct").textContent=" "+n+"%",dt("loadbar").style.width=n+"%"};var Rf=new Sc(xa);Rf.setMeshoptDecoder(_0);var H0=new sa(xa),S1=i=>{let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer},E1=i=>new Promise(e=>{let t=s=>{console.warn(`
-----------------------------------------------
Snowie_Site failed to load a model!
Model: `+i+`
Error: `+(s&&s.message||s)+`
-----------------------------------------------`),e(null)},n=window.__MODELS&&window.__MODELS[i];n?(xa.itemStart(i),Rf.parse(S1(n),"",s=>{xa.itemEnd(i),e(s)},s=>{xa.itemEnd(i),t(s)})):Rf.load("assets/models/"+i+".glb",e,void 0,t)});function va(i,{srgb:e=!0,rep:t=[1,1],rot:n=0}={}){let s=H0.load(i);return s.colorSpace=e?zt:pi,s.wrapS=s.wrapT=xn,s.repeat.set(t[0],t[1]),s.rotation=n,s.anisotropy=8,s}function Vt(i,e,t,{srgb:n=!0,rep:s=[1,1]}={}){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let a=new ta(r);return a.colorSpace=n?zt:pi,a.wrapS=a.wrapT=xn,a.repeat.set(s[0],s[1]),a.anisotropy=8,a}var nt=(i,e)=>i+Math.random()*(e-i);function mn(i){return()=>(i=i*16807%2147483647,(i-1)/2147483646)}function ai({rep:i=[1,1],color:e=16777215,rough:t=.85,rot:n=0}={}){return new oe({map:va("assets/tex/wood_diff.jpg",{rep:i,rot:n}),roughnessMap:va("assets/tex/wood_rough.jpg",{srgb:!1,rep:i,rot:n}),bumpMap:va("assets/tex/wood_bump.jpg",{srgb:!1,rep:i,rot:n}),bumpScale:1.6,color:e,roughness:t})}var Ho=Vt(256,1024,(i,e,t)=>{let n=mn(7);i.fillStyle="#7a5a3e",i.fillRect(0,0,e,t);for(let s=0;s<520;s++){let r=n()*e,a=n()*.16,o=.6+n()*2.4;i.strokeStyle=n()<.5?`rgba(40,24,12,${a})`:`rgba(190,150,105,${a*.7})`,i.lineWidth=o,i.beginPath(),i.moveTo(r,0);let l=r;for(let c=0;c<=t;c+=32)l+=(n()-.5)*3,i.lineTo(l,c);i.stroke()}for(let s=0;s<7;s++){let r=n()*e,a=n()*t,o=4+n()*7,l=i.createRadialGradient(r,a,0,r,a,o*2.4);l.addColorStop(0,"rgba(35,20,10,.85)"),l.addColorStop(.4,"rgba(60,35,18,.45)"),l.addColorStop(1,"rgba(60,35,18,0)"),i.fillStyle=l,i.beginPath(),i.ellipse(r,a,o*1.4,o*2.6,0,0,7),i.fill()}},{rep:[1,1]}),jf=Vt(256,1024,(i,e,t)=>{let n=mn(11);i.fillStyle="#808080",i.fillRect(0,0,e,t);for(let s=0;s<300;s++){let r=n()*e;i.strokeStyle=`rgba(0,0,0,${n()*.35})`,i.lineWidth=.5+n()*2,i.beginPath(),i.moveTo(r,0),i.lineTo(r+(n()-.5)*8,t),i.stroke()}},{srgb:!1}),T1=new oe({map:Ho,bumpMap:jf,bumpScale:2.2,color:11569768,roughness:.82}),w1=Vt(256,256,(i,e,t)=>{let n=i.createImageData(e,t);for(let s=0;s<n.data.length;s+=4){let r=150+Math.random()*40;n.data[s]=r,n.data[s+1]=r*.93,n.data[s+2]=r*.82,n.data[s+3]=255}i.putImageData(n,0,0)},{rep:[8,4]}),_f=new oe({map:w1,color:9207144,roughness:1});function Lc(i){let e=va("assets/tex/brick.jpg",{rep:i});return new oe({map:e,bumpMap:va("assets/tex/brick.jpg",{srgb:!1,rep:i}),bumpScale:3,color:8020570,roughness:.95})}var Dc=new oe({color:394244,roughness:1}),Ns=new oe({color:1841949,roughness:.55,metalness:.7}),T0=new oe({map:Ho,color:5914672,roughness:.95,bumpMap:jf,bumpScale:3}),A1=new oe({color:5064772,roughness:.92}),z0=[];function oi(i,e,t={}){return i.traverse(n=>{n.isMesh&&(n.userData.kind=e,n.userData.root=i,Object.assign(n.userData,t),z0.push(n))}),i}function ii(i,e=!0,t=!0){return i.traverse(n=>{n.isMesh&&(n.castShadow=e,n.receiveShadow=t)}),i}function ot(i,e,t,n,s,r,a,o=$){let l=new k(new pt(i,e,t),n);return l.position.set(s,r,a),l.castShadow=l.receiveShadow=!0,o.add(l),l}function R1(i,e,t){let n=new er,s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r),n}function C1(i,e,t){let n=new Ss,s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r),n}var Sa=Vt(128,128,i=>{let e=i.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,.3)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,128,128)});Sa.wrapS=Sa.wrapT=Mn;function Yf(i,e,t,n=.5){let s=new ql(new eo({map:Sa,color:i,transparent:!0,opacity:n,blending:Ei,depthWrite:!1,fog:!1}));return s.scale.setScalar(e),s.position.copy(t),$.add(s),s}var Ln=[],ue={x0:-3,x1:3,z0:-2.6,z1:3.6,h:2.85},fe={x:-1.55,y:1.7,w:1.3,h:1.05},Ui=new L(-2.66,.1,.3),Ke={x:.62,z:-2.08,top:.76,w:1.75,d:.8},yi={x:.78,z:-2.05},Mo={x:1.36,z:-1.97};function P1(){let t=v=>{let _=new et(.135,.135,v,16,1);return _.rotateZ(Math.PI/2),_},n=(v,_,y,C,A)=>{let S=new et(.135*nt(.94,1.06),.135*nt(.94,1.06),v,16,1);S.rotateY(nt(0,Math.PI*2)),A?S.rotateX(Math.PI/2):S.rotateZ(Math.PI/2);let R=new k(S,T1);return R.position.set(_,y,C),R.castShadow=R.receiveShadow=!0,$.add(R),R};Ho.repeat.set(1,3);let s=fe.x-fe.w/2-.1,r=fe.x+fe.w/2+.1,a=fe.y-fe.h/2-.12,o=fe.y+fe.h/2+.12;for(let v=.12;v<ue.h;v+=.25)v>a&&v<o?(n(s-(ue.x0-.18),(ue.x0-.18+s)/2,v,ue.z0,!1),n(ue.x1+.18-r,(r+ue.x1+.18)/2,v,ue.z0,!1)):n(ue.x1-ue.x0+.36,0,v,ue.z0,!1);for(let v=.12+.25/2;v<ue.h;v+=.25)n(ue.z1-ue.z0+.36,ue.x0,v,(ue.z0+ue.z1)/2,!0),n(ue.z1-ue.z0+.36,ue.x1,v,(ue.z0+ue.z1)/2,!0);let l=new er;l.moveTo(ue.x0,0),l.lineTo(ue.x1,0),l.lineTo(ue.x1,ue.h),l.lineTo(ue.x0,ue.h),l.lineTo(ue.x0,0);let c=new Ss;c.moveTo(fe.x-fe.w/2,fe.y-fe.h/2),c.lineTo(fe.x+fe.w/2,fe.y-fe.h/2),c.lineTo(fe.x+fe.w/2,fe.y+fe.h/2),c.lineTo(fe.x-fe.w/2,fe.y+fe.h/2),l.holes.push(c);let h=new k(new oc(l),_f);h.position.z=ue.z0-.05,h.receiveShadow=!0,h.castShadow=!0,$.add(h);let u=new ct(ue.z1-ue.z0,ue.h),f=new k(u,_f);f.rotation.y=Math.PI/2,f.position.set(ue.x0-.05,ue.h/2,(ue.z0+ue.z1)/2),f.receiveShadow=!0,$.add(f);let d=new k(u,_f);d.rotation.y=-Math.PI/2,d.position.set(ue.x1+.05,ue.h/2,(ue.z0+ue.z1)/2),d.receiveShadow=!0,$.add(d);let m=new k(new ct(ue.x1-ue.x0,ue.h),ai({rep:[2,2],color:5914672}));m.rotation.y=Math.PI,m.position.set(0,ue.h/2,ue.z1),$.add(m);let x=new k(new ct(ue.x1-ue.x0+.4,ue.z1-ue.z0+.4),ai({rep:[2.2,4.4],color:8018498,rough:1}));x.rotation.x=-Math.PI/2,x.position.set(0,0,(ue.z0+ue.z1)/2),x.receiveShadow=!0,$.add(x);let g=new k(new ct(ue.x1-ue.x0+.4,ue.z1-ue.z0+.4),ai({rep:[2,4],color:4863012}));g.rotation.x=Math.PI/2,g.position.set(0,ue.h,(ue.z0+ue.z1)/2),g.receiveShadow=!0,$.add(g);let p=new oe({map:Ho,color:6965812,roughness:.9,bumpMap:jf,bumpScale:2});for(let v=-2.2;v<=2.21;v+=1.1){let _=ot(.16,.2,ue.z1-ue.z0,p,v,ue.h-.1,(ue.z0+ue.z1)/2);_.castShadow=!1}}var vo,yf,Co,qc,Uc,ah=[];function I1(){let i=ai({rep:[.5,.25],color:7031860}),e=.34,t=.075,n=ue.z0,s=fe.x-fe.w/2,r=fe.x+fe.w/2,a=fe.y-fe.h/2,o=fe.y+fe.h/2;ot(fe.w+2*t,t,e,i,fe.x,o+t/2,n),ot(t,fe.h,e,i,s-t/2,fe.y,n),ot(t,fe.h,e,i,r+t/2,fe.y,n),ot(fe.w+2*t+.12,.05,e+.12,i,fe.x,a-.025,n+.04),ot(.035,fe.h,.04,i,fe.x,fe.y,n-.05),ot(fe.w,.035,.04,i,fe.x,fe.y,n-.05);let l=Vt(256,256,(R,P,b)=>{R.fillStyle="rgba(0,0,0,0)",R.fillRect(0,0,P,b);for(let[D,U]of[[0,0],[P,0],[0,b],[P,b]]){let O=R.createRadialGradient(D,U,0,D,U,P*.42);O.addColorStop(0,"rgba(255,255,255,.55)"),O.addColorStop(1,"rgba(255,255,255,0)"),R.fillStyle=O,R.fillRect(0,0,P,b)}let M=mn(3);for(let D=0;D<600;D++){let U=M()*P,O=M()*b,Z=Math.min(U,P-U,O,b-O)/P;M()>Z*4&&(R.fillStyle=`rgba(255,255,255,${.15*M()})`,R.fillRect(U,O,1+M()*2,1+M()*2))}});l.wrapS=l.wrapT=Mn,vo=new k(new ct(fe.w,fe.h),new oe({color:12111072,map:l,transparent:!0,opacity:.32,roughness:.08,metalness:0,depthWrite:!1,envMapIntensity:3})),vo.position.set(fe.x,fe.y,n-.045),$.add(vo),Ln.push(vo),oi(vo,"window");let c=new k(new Ki(.06,fe.w+.05,4,10),new oe({color:14673650,roughness:.9}));c.rotation.z=Math.PI/2,c.scale.set(1,1,1.8),c.position.set(fe.x,a+.01,n-.22),$.add(c);let h=(R,P={})=>{let b=new oe({color:R,roughness:.95,fog:!1,...P});return ah.push(b),b},u=Vt(512,512,(R,P,b)=>{let M=R.createLinearGradient(0,0,0,b);M.addColorStop(0,"#02030a"),M.addColorStop(.55,"#0a1226"),M.addColorStop(1,"#1b2640"),R.fillStyle=M,R.fillRect(0,0,P,b);let D=mn(21);for(let U=0;U<420;U++){let O=D()*b*.75;R.fillStyle=`rgba(220,230,255,${D()*.8*(1-O/b)})`,R.fillRect(D()*P,O,D()<.06?2:1,D()<.06?2:1)}}),f=new k(new ct(120,50),new Ht({map:u,fog:!1}));f.position.set(-6,14,-42),$.add(f);let d=new k(new $s(1.1,40),new Ht({color:new Le(14673653).multiplyScalar(2.2),fog:!1}));d.position.set(-10.5,6.2,-40),$.add(d);let m=Yf(9414880,9,d.position,.25);m.material.fog=!1;let x=new k(new ct(120,60,40,20),h(12109016,{roughness:1}));{let R=x.geometry.attributes.position;for(let P=0;P<R.count;P++)R.setZ(P,(Math.sin(R.getX(P)*.35)+Math.cos(R.getY(P)*.5))*.18);x.geometry.computeVertexNormals()}x.rotation.x=-Math.PI/2,x.position.set(-4,-.35,-32),x.receiveShadow=!0,$.add(x);let g=[],p=mn(99),v=new Le,_=(R,P,b)=>{let M=R.attributes.position.count,D=new Float32Array(M*3);v.set(P).multiplyScalar(b);for(let U=0;U<M;U++)D[U*3]=v.r,D[U*3+1]=v.g,D[U*3+2]=v.b;R.setAttribute("color",new Dt(D,3)),g.push(R.toNonIndexed&&R.index?R.toNonIndexed():R)};for(let R=0;R<70;R++){let P=-5-p()*30,b=-26+p()*40;if(P>-7&&b>-4&&b<1.5)continue;let M=.7+p()*1.3+-P*.03,D=Math.max(.18,1-(-P-5)/34),U=new et(.06*M,.09*M,.6*M,6);U.translate(b,-.35+.3*M,P),_(U,1708556,D);for(let O=0;O<4;O++){let Z=(1-O*.2)*.75*M,H=1*M,se=-.35+.45*M+O*.55*M,X=new Ai(Z,H,8);X.rotateY(p()*3),X.translate(b,se+H/2,P),_(X,1385502,D);let ce=new Ai(Z*.82,H*.45,8);ce.rotateY(p()*3),ce.translate(b,se+H*.78,P),_(ce,13227238,D)}}let y=new k(p0(g),h(16777215,{vertexColors:!0,flatShading:!0}));y.castShadow=!0,y.receiveShadow=!0,$.add(y);let C=ri?700:1600,A=new Float32Array(C*3);qc=new Float32Array(C);for(let R=0;R<C;R++)A[R*3]=nt(-14,6),A[R*3+1]=nt(-.3,7),A[R*3+2]=nt(-2.9,-16),qc[R]=nt(.25,.7);Co=new Mt,Co.setAttribute("position",new Dt(A,3));let S=H0.load("assets/tex/snowflake.png");S.colorSpace=zt,yf=new wi(Co,new xi({map:S,size:.07,color:10135744,transparent:!0,depthWrite:!1,fog:!1,opacity:.9})),$.add(yf),Ln.push(yf)}var be={};function L1(){be.amb=new dc(2761792,1182214,.35),$.add(be.amb),be.moon=new aa(10335464,ri?.12:.55),be.moon.position.set(-7.5,7.5,-14),be.moon.target.position.set(-.5,0,1.5),$.add(be.moon,be.moon.target),ri||(be.moon.castShadow=!0,Object.assign(be.moon.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:40}),be.moon.shadow.mapSize.set(1024,1024),be.moon.shadow.bias=-8e-4,be.moon.shadow.normalBias=.02),be.fire=new Qt(16742960,9,0,2),be.fire.position.set(-2.3,.42,.3),ri||(be.fire.castShadow=!0,be.fire.shadow.mapSize.set(512,512),be.fire.shadow.bias=-.003,be.fire.shadow.normalBias=.03,be.fire.shadow.camera.near=.08,be.fire.shadow.radius=4),$.add(be.fire),be.fireFill=new Qt(16747072,2.2,0,2),be.fireFill.position.set(-1.6,.9,.4),$.add(be.fireFill),be.sconce=new nr(16761466,4.5,0,.85,.65,2),be.sconce.position.set(1.32,1.5,-2.22),be.sconce.target.position.set(.95,.7,-1.7),$.add(be.sconce,be.sconce.target),ri||(be.sconce.castShadow=!0,be.sconce.shadow.mapSize.set(512,512),be.sconce.shadow.bias=-.002,be.sconce.shadow.radius=5),be.fairy=new Qt(16763034,.9,0,2),be.fairy.position.set(0,2.35,-2.1),$.add(be.fairy),be.candle=new Qt(16754768,.6,0,2),be.candle.position.set(-2.4,1.48,.95),$.add(be.candle),be.screen=new Qt(9089279,0,0,2),be.screen.position.set(yi.x,1.02,-1.35),$.add(be.screen)}var G0=[],jc,Bc,Po,Yc,Vo="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",Kf=`float h1(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h1(i),h1(i+vec2(1,0)),f.x),mix(h1(i+vec2(0,1)),h1(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n2(p);p*=2.03;a*=.5;}return v;}`;function Zf(i,e=1){return new Tt({uniforms:{uTime:{value:0},uInt:{value:e},uSeed:{value:i}},transparent:!0,depthWrite:!1,blending:Ei,side:Bt,fog:!1,vertexShader:Vo,fragmentShader:`uniform float uTime,uInt,uSeed;varying vec2 vUv;${Kf}
    void main(){vec2 uv=vUv;float t=uTime*1.35+uSeed*7.0;
      float x=(uv.x-.5)*2.;
      float n=fbm(vec2(uv.x*3.2+uSeed,uv.y*2.4-t));
      float n2v=fbm(vec2(uv.x*6.0-uSeed,uv.y*4.0-t*1.7));
      float shape=1.0-abs(x+ (n-0.5)*0.5*uv.y)*(1.15+uv.y*1.9);
      float f=shape-uv.y*1.1+n*0.85+n2v*0.25-0.42;
      f=clamp(f*2.4,0.,1.);
      f*=smoothstep(0.0,0.12,uv.y)*0.7+0.3;
      vec3 c=mix(vec3(0.5,0.05,0.0),vec3(1.0,0.32,0.03),smoothstep(0.05,0.5,f));
      c=mix(c,vec3(1.0,0.66,0.26),smoothstep(0.65,1.0,f));
      gl_FragColor=vec4(c*f*1.35*uInt,1.0);}`})}function D1(){let i=ue.x0,e=-2.42,t=.3,n=e-i,s=(i+e)/2;ot(n,.92,.32,Lc([1,1.4]),s,.46,t-.61),ot(n,.92,.32,Lc([1,1.4]),s,.46,t+.61),ot(n,.26,1.54,Lc([2.4,.4]),s,1.05,t),ot(n-.12,ue.h-1.18,1.25,Lc([1.9,2.6]),s-.06,1.18+(ue.h-1.18)/2,t),ot(.06,.9,.92,Dc,i+.16,.46,t),ot(n,.06,.92,Dc,s,.89,t),ot(n,.9,.04,Dc,s,.46,t-.45),ot(n,.9,.04,Dc,s,.46,t+.45),ot(n,.04,.92,new oe({color:1708557,roughness:1}),s,.02,t);let r=ot(.55,.07,1.9,A1,e+.27,.035,t);r.material=new oe({map:va("assets/tex/brick.jpg",{rep:[.6,2]}),color:5919826,roughness:.9}),ot(.36,.11,1.85,ai({rep:[.6,.12],color:5913124}),e+.12,1.235,t);for(let m of[-.2,.2])ot(.4,.025,.025,Ns,Ui.x,.1,t+m);let a=new mt,o=(m,x,g,p,v,_,y)=>{let C=new k(new et(x,x*1.05,m,10),T0);C.rotation.set(0,_,y),C.position.set(g,p,v),C.castShadow=!0,a.add(C)};o(.62,.06,Ui.x,.16,t-.06,.15,Math.PI/2),o(.58,.055,Ui.x+.04,.16,t+.1,-.2,Math.PI/2),o(.5,.05,Ui.x,.25,t,Math.PI/2+.3,Math.PI/2-.25),$.add(a),oi(a,"fire"),jc=new Tt({uniforms:{uTime:{value:0},uInt:{value:1}},vertexShader:Vo,fog:!1,fragmentShader:`uniform float uTime,uInt;varying vec2 vUv;${Kf}
    void main(){vec2 c=vUv-.5;float r=length(c*vec2(1.,1.4));float n=fbm(vUv*9.0+vec2(uTime*.15,0.));float p=0.6+0.4*sin(uTime*1.3+n*6.0);
      float g=smoothstep(.5,.05,r)*smoothstep(.35,.75,n)*p;vec3 col=mix(vec3(.06,.02,.01),vec3(1.0,.32,.05)*2.2,g);gl_FragColor=vec4(col*uInt+vec3(.02,.01,.0),1.);}`});let l=new k(new ct(.6,.62),jc);l.rotation.x=-Math.PI/2,l.position.set(Ui.x,.045,t),$.add(l),oi(l,"fire");for(let m=0;m<3;m++){let x=new k(new ct(.5,.56),Zf(m*1.7,1));x.position.set(Ui.x+.02,.13+.28,t+(m-1)*.07),x.rotation.y=Math.PI/2+(m-1)*.55,$.add(x),G0.push(x),Ln.push(x)}let c=50,h=new Float32Array(c*3);Yc=new Float32Array(c);for(let m=0;m<c;m++)h[m*3]=Ui.x+nt(-.15,.15),h[m*3+1]=nt(.2,.85),h[m*3+2]=t+nt(-.25,.25),Yc[m]=nt(.2,.55);Po=new Mt,Po.setAttribute("position",new Dt(h,3)),Bc=new wi(Po,new xi({color:new Le(1,.5,.15).multiplyScalar(3),size:.012,transparent:!0,depthWrite:!1,fog:!1,blending:Ei})),$.add(Bc),Ln.push(Bc);let u=new mt,f=mn(5);[3,2,1].forEach((m,x)=>{for(let g=0;g<m;g++){let p=new k(new et(.065,.07,.48,9),T0);p.rotation.x=Math.PI/2,p.rotation.y=(f()-.5)*.15,p.position.set((g-(m-1)/2)*.14,.07+x*.12,0),p.castShadow=p.receiveShadow=!0,u.add(p)}}),u.position.set(-2.62,0,1.55),u.rotation.y=.1,$.add(u)}var ga,_o,ci,sr,Kc,Nc,V0=[],pn=1024,Ot=768;function U1(){let i=ai({rep:[1.2,.5],color:9069640,rough:.6}),e=ai({rep:[.2,.6],color:6965812});ot(Ke.w,.045,Ke.d,i,Ke.x,Ke.top-.022,Ke.z);for(let y of[-1,1])for(let C of[-1,1])ot(.055,Ke.top-.045,.055,e,Ke.x+y*(Ke.w/2-.06),(Ke.top-.045)/2,Ke.z+C*(Ke.d/2-.06));ot(Ke.w-.12,.09,.02,e,Ke.x,Ke.top-.09,Ke.z+Ke.d/2-.05),ot(.42,.13,Ke.d-.1,i,Ke.x-Ke.w/2+.27,Ke.top-.13,Ke.z),ot(.05,.025,.015,Ns,Ke.x-Ke.w/2+.27,Ke.top-.13,Ke.z+Ke.d/2-.04);let t=new oe({color:11906460,roughness:.55,metalness:0}),n=new mt;n.position.set(yi.x,Ke.top,yi.z);let s=new k(new et(.15,.17,.035,32),t);s.position.y=.018,n.add(s);let r=new rc(Object.assign(R1(.44,.38,.03),{holes:[C1(.352,.268,.02)]}),{depth:.05,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:3,curveSegments:8}),a=new k(r,t);a.position.set(0,.04+.19,-.02),n.add(a);let o=new pt(.4,.34,.34);{let y=o.attributes.position;for(let C=0;C<y.count;C++)y.getZ(C)<0&&(y.setX(C,y.getX(C)*.6),y.setY(C,y.getY(C)*.62+.015));o.computeVertexNormals()}let l=new k(o,t);l.position.set(0,.04+.19,-.02-.17),n.add(l);let c=new k(new ct(.2,.1),new oe({color:2762272,roughness:1}));c.position.set(0,.34,-.25),c.rotation.x=-Math.PI/2+.35,n.add(c);let h=new k(new pt(.36,.28,.05),new Ht({color:328965}));h.position.set(0,.23,0),n.add(h);let u=new ct(.352,.268,28,22);{let y=u.attributes.position;for(let C=0;C<y.count;C++){let A=y.getX(C)/.176,S=y.getY(C)/.134;y.setZ(C,.011*(1-.5*(A*A+S*S)))}u.computeVertexNormals()}_o=document.createElement("canvas"),_o.width=pn,_o.height=Ot,ci=_o.getContext("2d");let f=new ta(_o);f.colorSpace=zt,f.anisotropy=8,f.minFilter=Xn,ga=new Tt({uniforms:{map:{value:f},uTime:{value:0},uOn:{value:0},uBright:{value:1.15}},fog:!1,vertexShader:Vo,fragmentShader:`uniform sampler2D map;uniform float uTime,uOn,uBright;varying vec2 vUv;
    float hh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
    vec2 barrel(vec2 uv){vec2 c=uv-.5;float r2=dot(c,c);return .5+c*(1.0+.09*r2);}
    void main(){vec2 uv=barrel(vUv);vec3 col=vec3(0.);
      if(uv.x>0.&&uv.x<1.&&uv.y>0.&&uv.y<1.){
        float ca=0.0011;col.r=texture2D(map,uv+vec2(ca,0.)).r;col.g=texture2D(map,uv).g;col.b=texture2D(map,uv-vec2(ca,0.)).b;
        col+=texture2D(map,uv+vec2(0.0035,0.)).rgb*0.12;
        col*=0.80+0.20*sin(uv.y*768.*3.14159);
        col*=0.95+0.05*sin(uv.x*1024.*2.0);
        float band=smoothstep(0.,.12,abs(fract(uv.y+uTime*.05)-.5));col*=.975+.025*band;
        col+=(hh(uv*vec2(1024.,768.)+fract(uTime))-.5)*.03;
        vec2 c=uv-.5;col*=1.-dot(c,c)*1.3;
        col*=uBright;}
      vec2 c2=vUv-.5;vec3 glass=vec3(.008,.01,.009)+vec3(.035,.04,.045)*smoothstep(.45,0.,length(c2-vec2(-.2,.17)))+vec3(.012)*smoothstep(.5,.0,length(c2));
      vec3 o=mix(glass,col+glass*0.4,uOn);gl_FragColor=vec4(o,1.);}`}),sr=new k(u,ga),sr.position.set(0,.04+.19,.022),n.add(sr),Kc=new oe({color:2228224,emissive:16724e3,emissiveIntensity:.6});let d=new k(new Nt(.005,10,8),Kc);d.position.set(.17,.065,.045),n.add(d);let m=new k(new et(.008,.008,.01,12),t);m.rotation.x=Math.PI/2,m.position.set(.14,.065,.045),n.add(m),ii(n),sr.castShadow=!1,$.add(n),oi(sr,"screen"),oi(a,"screen");let x=Vt(512,170,(y,C,A)=>{y.fillStyle="#a69e8c",y.fillRect(0,0,C,A);let S=[14,14,13,12],R=12;S.forEach((P,b)=>{let M=(C-24)/14.6,D=b*M*.3+12;for(let U=0;U<P;U++)y.fillStyle="#cfc7b4",y.fillRect(D+U*M+2,R,M-4,30),y.fillStyle="rgba(0,0,0,.18)",y.fillRect(D+U*M+2,R+26,M-4,4);R+=36}),y.fillStyle="#cfc7b4",y.fillRect(C*.27,R,C*.42,26),y.fillStyle="rgba(0,0,0,.18)",y.fillRect(C*.27,R+22,C*.42,4)}),g=new k(new pt(.44,.022,.15),[t,t,new oe({map:x,roughness:.6}),t,t,t]);g.position.set(yi.x,Ke.top+.011,-1.8),g.rotation.x=.05,g.castShadow=g.receiveShadow=!0,$.add(g);let p=new k(new Ki(.025,.04,4,10),t);p.rotation.x=Math.PI/2,p.scale.set(1,1,.55),p.position.set(yi.x+.33,Ke.top+.012,-1.82),p.castShadow=!0,$.add(p);let v=[[.24,.035,.17,3820122],[.22,.03,.16,5909034],[.2,.028,.15,3099194]],_=Ke.top;v.forEach(([y,C,A,S],R)=>{let P=ot(y,C,A,new oe({color:S,roughness:.8}),1.32+R*.01,_+C/2,-2.33);P.rotation.y=(R-1)*.12,_+=C})}var Io;function N1(){let i=ai({rep:[.6,.3],color:6177069}),e=2.38,t=-2.3,n=.96,s=1.86,r=.3;ot(.035,s,r,i,e-n/2,s/2,t),ot(.035,s,r,i,e+n/2,s/2,t),ot(n,.02,r,i,e,s,t),ot(n,s,.012,i,e,s/2,t-r/2+.006);let a=mn(42),o=[6958890,3031638,4086330,8020024,4862032,9075290,2763312,6965802,3496538];for(let S=0;S<4;S++){let R=.06+S*.45;ot(n-.04,.025,r-.02,i,e,R,t);let P=e-n/2+.05,b=e+n/2-.05-(S===1?.24:0);for(;P<b-.03;){let M=.025+a()*.035,D=.2+a()*.14,U=.17+a()*.07;if(a()<.08){P+=.05;continue}let O=ot(M,D,U,new oe({color:o[Math.floor(a()*o.length)],roughness:.75}),P+M/2,R+.0125+D/2,t+.02-(.24-U)/2);a()<.07&&(O.rotation.z=-.25,O.position.x+=.03,P+=.06),P+=M+.003}if(S===1)for(let M=0;M<3;M++)ot(.18,.03,.14,new oe({color:o[M*3%9],roughness:.8}),e+n/2-.15,R+.03+M*.03,t+.02)}let l=Vt(360,480,(S,R,P)=>{let b=S.createLinearGradient(0,0,0,P);b.addColorStop(0,"#0b1222"),b.addColorStop(1,"#1d2a3c"),S.fillStyle=b,S.fillRect(0,0,R,P);for(let M=0;M<4;M++)S.strokeStyle=`rgba(110,230,190,${.18-M*.03})`,S.lineWidth=18-M*3,S.beginPath(),S.moveTo(-20,120+M*22),S.bezierCurveTo(100,40+M*30,240,200-M*20,400,90+M*15),S.stroke();S.fillStyle="#0a0f18",S.beginPath(),S.moveTo(0,360),S.lineTo(90,250),S.lineTo(150,310),S.lineTo(230,210),S.lineTo(360,340),S.lineTo(360,480),S.lineTo(0,480),S.fill(),S.fillStyle="#e8eef8",S.beginPath(),S.moveTo(90,250),S.lineTo(110,275),S.lineTo(70,274),S.fill(),S.beginPath(),S.moveTo(230,210),S.lineTo(258,245),S.lineTo(205,243),S.fill(),S.fillStyle="#05070c",S.fillRect(0,420,R,60)}),c=Vt(480,300,(S,R,P)=>{S.fillStyle="#e9e0cc",S.fillRect(0,0,R,P),S.fillStyle="#c86a32",S.beginPath(),S.moveTo(170,230),S.quadraticCurveTo(140,140,200,110),S.lineTo(215,70),S.lineTo(232,108),S.lineTo(262,108),S.lineTo(280,70),S.lineTo(290,112),S.quadraticCurveTo(340,150,300,230),S.closePath(),S.fill(),S.beginPath(),S.moveTo(300,225),S.quadraticCurveTo(400,240,380,160),S.quadraticCurveTo(360,200,300,200),S.fill(),S.fillStyle="#f6efe2",S.beginPath(),S.moveTo(222,150),S.lineTo(245,185),S.lineTo(268,150),S.lineTo(245,160),S.fill(),S.beginPath(),S.arc(378,168,14,0,7),S.fill(),S.fillStyle="#2a1d14",S.fillRect(232,136,6,6),S.fillRect(256,136,6,6)}),h=(S,R,P,b,M,D,U=0)=>{let O=new mt;O.position.set(b,M,D),O.rotation.y=U;let Z=new oe({color:2759698,roughness:.6});ot(R+.05,P+.05,.025,Z,0,0,0,O);let H=new k(new ct(R,P),new oe({map:S,roughness:.7}));return H.position.z=.0135,O.add(H),$.add(O),O};h(l,.36,.48,-.42,1.72,ue.z0+.17),h(c,.44,.27,2.38,2.28,ue.z0+.17),h(c,.2,.125,-2.45,1.38,.05,Math.PI/2-.12);let u=[],f=2.62,d=ue.z0+.2,m=[-2.85,-1,.85,2.85];for(let S=0;S<m.length-1;S++){let R=m[S],P=m[S+1];for(let b=0;b<=24;b++){let M=b/24;u.push(new L(R+(P-R)*M,f-Math.sin(Math.PI*M)*.22,d))}}let x=new Ms(u),g=new k(new na(x,200,.0035,5),new oe({color:1381135,roughness:.8}));$.add(g);let p=34;Io=new ys(new Nt(.014,10,8),new oe({color:3348992,emissive:16757610,emissiveIntensity:5}),p);let v=new Ut;for(let S=0;S<p;S++){let R=x.getPointAt((S+.5)/p);v.position.set(R.x,R.y-.02,R.z),v.updateMatrix(),Io.setMatrixAt(S,v.matrix)}$.add(Io);let _=Vt(1024,1024,(S,R,P)=>{let b=["#5a1e22","#7a3a2a","#c9b08a","#2a3448","#6a2a2e","#8a6a4a","#3a2a24"];for(let M=0;M<46;M++){let D=1-M/46;S.fillStyle=b[M%b.length],S.beginPath(),S.ellipse(R/2,P/2,R/2*D,P/2*D,0,0,7),S.fill(),S.strokeStyle="rgba(0,0,0,.28)",S.lineWidth=2,S.stroke(),S.save(),S.setLineDash([6,8]),S.strokeStyle="rgba(255,240,220,.08)",S.lineWidth=4,S.beginPath(),S.ellipse(R/2,P/2,R/2*D-5,P/2*D-5,0,0,7),S.stroke(),S.restore()}});_.wrapS=_.wrapT=Mn;let y=new k(new $s(1,64),new oe({map:_,roughness:1,transparent:!1}));y.scale.set(.88,.76,1),y.rotation.x=-Math.PI/2,y.position.set(-1.2,.006,.45),y.receiveShadow=!0,$.add(y);let C=ai({rep:[.3,.2],color:5914154}),A=new mt;ot(.44,.04,.42,C,0,.46,0,A);for(let S of[-1,1])for(let R of[-1,1])ot(.035,.46,.035,C,S*.19,.23,R*.18,A);for(let S of[-1,1])ot(.035,.42,.035,C,S*.19,.69,.18,A);ot(.42,.08,.025,C,0,.84,.18,A),ot(.42,.05,.02,C,0,.66,.18,A),A.position.set(yi.x-.12,0,-1.28),A.rotation.y=.35,$.add(A)}var W0=[],Ii=null,Mf=null,_a=null,Zc=null;function w0(i,e,t=256,n=[1,1]){return Vt(t,t,(s,r,a)=>{s.fillStyle=i,s.fillRect(0,0,r,a),s.fillStyle=e,s.globalAlpha=.55,s.fillRect(0,0,r/2,a),s.fillRect(0,0,r,a/2),s.globalAlpha=.35,s.fillRect(0,0,r/2,a/2),s.globalAlpha=1,s.strokeStyle="rgba(0,0,0,.18)",s.lineWidth=1;for(let o=0;o<r;o+=4)s.beginPath(),s.moveTo(o,0),s.lineTo(o,a),s.stroke()},{rep:n})}function F1(i,e=[3,3]){return Vt(128,128,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s);for(let r=0;r<s;r+=16)for(let a=0;a<n;a+=16)t.strokeStyle="rgba(0,0,0,.22)",t.lineWidth=2,t.beginPath(),t.moveTo(a,r),t.lineTo(a+8,r+14),t.lineTo(a+16,r),t.stroke(),t.strokeStyle="rgba(255,255,255,.08)",t.beginPath(),t.moveTo(a+2,r+2),t.lineTo(a+8,r+11),t.stroke()},{rep:e})}function Cf(i,e,t,n=.1,s=.024){let r=new k(new et(s,s,n,18),new oe({color:15721676,roughness:.55,emissive:16751168,emissiveIntensity:.06}));r.position.set(i,e+n/2,t),r.castShadow=!0,$.add(r);let a=new k(new et(.002,.002,.012,4),new Ht({color:1118481}));a.position.set(i,e+n+.006,t),$.add(a);let o=new k(new ct(.026,.055),Zf(i*3.1,1.2));return o.position.set(i,e+n+.03,t),$.add(o),Ln.push(o),W0.push(o),o}function O1(){let i=ai({rep:[.4,.2],color:6965812,rough:.7}),e=new k(new et(.012,.012,1.95,10),Ns);e.rotation.z=Math.PI/2,e.position.set(fe.x,2.36,ue.z0+.25),$.add(e);for(let N of[-1,1]){let V=new k(new Nt(.022,12,10),Ns);V.position.set(fe.x+N*.98,2.36,ue.z0+.25),$.add(V)}let t=w0("#7a1c1c","#1a1414",256,[2,4]),n=new oe({map:t,roughness:1,side:Bt});for(let N of[-1,1]){let ne=new ct(.46,1.38,30,12),Y=ne.attributes.position;for(let E=0;E<Y.count;E++){let B=Y.getX(E),ee=Y.getY(E),ae=(1.38/2-ee)/1.38,te=1-ae*.25*(N<0,1);Y.setX(E,B*te+N*ae*.05),Y.setZ(E,Math.sin((B+.3)*42)*.028*(.7+ae*.6))}ne.computeVertexNormals();let T=new k(ne,n);T.position.set(fe.x+N*(fe.w/2+.12),2.34-1.38/2,ue.z0+.22),T.castShadow=T.receiveShadow=!0,$.add(T)}Cf(fe.x+.42,fe.y-fe.h/2,ue.z0+.13,.11),Cf(fe.x+.52,fe.y-fe.h/2,ue.z0+.16,.07,.02),be.sill=new Qt(16754768,.35,0,2),be.sill.position.set(fe.x+.47,fe.y-fe.h/2+.2,ue.z0+.3),$.add(be.sill);let s=Vt(512,768,(N,V,q)=>{let ne=["#d8c8a8","#2f5a5a","#a4542c","#d8c8a8","#3a2a24","#c9b48e"],Y=0,T=0;for(;Y<q;){let B=18+T*37%40;N.fillStyle=ne[T%ne.length],N.fillRect(0,Y,V,B),Y+=B,T++}let E=mn(8);for(let B=0;B<4e3;B++)N.fillStyle=`rgba(0,0,0,${E()*.12})`,N.fillRect(E()*V,E()*q,2,1);N.strokeStyle="#d8c8a8",N.lineWidth=14,N.strokeRect(7,7,V-14,q-14)}),r=new k(new ct(1.25,1.85),new oe({map:s,roughness:1}));r.rotation.x=-Math.PI/2,r.rotation.z=.35,r.position.set(1.75,.005,-.3),r.receiveShadow=!0,$.add(r);let a=new mt;a.position.set(1.85,0,-.08);let o=new k(new et(.24,.24,.035,32),i);o.position.y=.56,a.add(o);let l=new k(new et(.035,.05,.54,12),i);l.position.y=.28,a.add(l);let c=new k(new et(.17,.19,.03,24),i);c.position.y=.015,a.add(c);let h=new k(new et(.05,.065,.16,20),new oe({color:3033674,roughness:.35}));h.position.set(-.06,.66,-.04),a.add(h);let u=new k(new et(.008,.008,.12,8),Ns);u.position.set(-.06,.8,-.04),a.add(u);let f=new k(new et(.075,.13,.15,28,1,!0),new oe({color:15259316,roughness:.9,side:Bt,emissive:16756832,emissiveIntensity:.35}));f.position.set(-.06,.89,-.04),a.add(f);let d=new k(new Nt(.025,12,10),new oe({color:3348992,emissive:16761466,emissiveIntensity:5}));d.position.set(-.06,.86,-.04),a.add(d);for(let N=0;N<2;N++){let V=new k(new pt(.17,.028,.12),new oe({color:[4086330,8010282][N],roughness:.8}));V.position.set(.09,.592+N*.028,.06),V.rotation.y=N*.3,a.add(V)}let m=new k(new et(.03,.028,.075,18),new oe({color:13148272,roughness:.4}));m.position.set(.1,.65,-.1),a.add(m),ii(a),f.castShadow=!1,d.castShadow=!1,$.add(a),be.table=new Qt(16756838,1.5,0,2),be.table.position.set(1.79,.86,-.12),$.add(be.table),be.tableShade=f,be.tableBulb=d;let x=(N,V,q,ne,Y=1)=>{let T=new k(new Nt(.26,28,16),new oe({map:F1(N,[4,2]),roughness:1}));T.scale.set(1*Y,.32*Y,.85*Y),T.position.set(V,.075*Y,q),T.rotation.y=ne,T.castShadow=T.receiveShadow=!0,$.add(T);let E=new k(new Nt(.018,10,8),new oe({color:2760728}));E.position.set(V,.155*Y,q),$.add(E)};x("#c4922e",-.98,-.16,.4),x("#4a8a86",-.66,.16,-.3,.82);let g=new k(new pt(.42,.07,.3),new oe({map:w0("#d8cfbe","#8a2424",128,[2,2]),roughness:1}));g.position.set(-.98,.04,.98),g.rotation.y=.5,g.castShadow=g.receiveShadow=!0,$.add(g);let p=g.clone();p.scale.set(.95,.9,.95),p.position.y=.105,p.rotation.y=.62,$.add(p);let v=new mt,_=new oe({color:1710622,roughness:.45}),y=new oe({color:2763312,roughness:.9}),C=new k(new Ri(.085,.01,8,28,Math.PI),_);C.rotation.x=-Math.PI/2,v.add(C);for(let N of[-1,1]){let V=new k(new et(.045,.045,.03,22),_);V.position.set(N*.085,.015,0),v.add(V);let q=new k(new Ri(.035,.012,8,20),y);q.rotation.x=Math.PI/2,q.position.set(N*.085,.032,0),v.add(q)}v.position.set(.33,Ke.top+.01,-1.86),v.rotation.y=.5,ii(v),$.add(v),[14209216,2763310,11550768].forEach((N,V)=>{let q=new k(new pt(.105,.016,.068),new oe({color:N,roughness:.5}));q.position.set(.36,Ke.top+.008+V*.017,-2.25),q.rotation.y=(V-1)*.15,q.castShadow=!0,$.add(q);let ne=new k(new ct(.07,.04),new oe({color:15788240,roughness:.8}));ne.rotation.x=-Math.PI/2,ne.rotation.z=-q.rotation.y,ne.position.set(.36,Ke.top+.0165+V*.017,-2.25),$.add(ne)});let S=new k(new et(.035,.032,.1,18,1,!0),new oe({color:4876906,roughness:.5,side:Bt}));S.position.set(1.12,Ke.top+.05,-2.33),S.castShadow=!0,$.add(S),[14725168,3170496,12595248,3186768].forEach((N,V)=>{let q=new k(new et(.004,.004,.16,6),new oe({color:N,roughness:.5}));q.position.set(1.12+Math.cos(V*1.6)*.014,Ke.top+.1,-2.33+Math.sin(V*1.6)*.014),q.rotation.set(Math.sin(V)*.15,0,Math.cos(V*2)*.15),$.add(q)});let R=(N,V,q,ne)=>{let Y=new k(new ct(.05,.05),new oe({color:N,roughness:.9,side:Bt}));Y.position.set(V,q,yi.z+.045),Y.rotation.z=ne,$.add(Y)};R(15914586,yi.x+.205,Ke.top+.36,-.12),R(15899312,yi.x+.2,Ke.top+.3,.08);let P=Vt(256,256,(N,V,q)=>{N.fillStyle="#efe6d2",N.beginPath(),N.arc(128,128,126,0,7),N.fill(),N.fillStyle="#2a1d14",N.font="600 28px Georgia, serif",N.textAlign="center",N.textBaseline="middle";for(let ne=1;ne<=12;ne++){let Y=ne/12*Math.PI*2;N.fillText(String(ne),128+Math.sin(Y)*96,128-Math.cos(Y)*96)}for(let ne=0;ne<60;ne++){let Y=ne/60*Math.PI*2,T=ne%5?116:110;N.strokeStyle="#2a1d14",N.lineWidth=ne%5?1:3,N.beginPath(),N.moveTo(128+Math.sin(Y)*T,128-Math.cos(Y)*T),N.lineTo(128+Math.sin(Y)*122,128-Math.cos(Y)*122),N.stroke()}}),b=new mt;b.position.set(.3,1.98,ue.z0+.17);let M=new k(new et(.15,.15,.035,40),i);M.rotation.x=Math.PI/2,b.add(M);let D=new k(new $s(.13,40),new oe({map:P,roughness:.7}));D.position.z=.018,b.add(D);let U=new oe({color:1708556}),O=(N,V)=>{let q=new pt(V,N,.003);q.translate(0,N/2-.01,0);let ne=new k(q,U);return ne.position.z=.022,b.add(ne),ne};Ii={h:O(.07,.008),m:O(.105,.005),s:O(.11,.0022)},Ii.s.material=new oe({color:9052192}),ii(b),$.add(b);let Z=(N,V,q,ne)=>{let Y=new k(new et(.003,.003,q-ne,4),new oe({color:9075290}));Y.position.set(N,(q+ne)/2,V),$.add(Y)},H=-.05,se=-1.05,X=2.2;Z(H,se,ue.h-.2,X+.1);let ce=new k(new Nt(.13,24,12,0,Math.PI*2,Math.PI/2,Math.PI/2),new oe({color:11561540,roughness:.8,side:Bt}));ce.position.set(H,X+.1,se),ce.castShadow=!0,$.add(ce);let me=new oe({color:4155962,roughness:.7,side:Bt}),xe=mn(17);for(let N=0;N<9;N++){let V=N/9*Math.PI*2,q=.25+xe()*.45,ne=[];for(let T=0;T<=6;T++){let E=T/6;ne.push(new L(H+Math.cos(V)*(.1+E*.06),X+.08-E*q,se+Math.sin(V)*(.1+E*.06)))}let Y=new Ms(ne);$.add(new k(new na(Y,12,.0035,4),me));for(let T=1;T<=6;T++){let E=Y.getPoint(T/6.5),B=new k(new $s(.022,8),me);B.scale.set(1,1.5,1),B.position.copy(E),B.rotation.set(xe()*3,xe()*3,0),$.add(B)}}let je=[6974010,9067066,5925450];[[-1.1,-1.7],[-1.1,-1.25],[-1.1,-.8]].forEach(([N,V],q)=>{Z(N,V,ue.h-.2,2.42);let ne=new oe({color:je[q],roughness:1}),Y=mn(30+q);for(let E=0;E<11;E++){let B=new k(new Ai(.012+Y()*.008,.2+Y()*.08,5),ne);B.rotation.set(Math.PI+(Y()-.5)*.6,0,(Y()-.5)*.6),B.position.set(N+(Y()-.5)*.04,2.31,V+(Y()-.5)*.04),B.castShadow=!0,$.add(B)}let T=new k(new Ri(.018,.005,6,12),new oe({color:9054762}));T.rotation.x=Math.PI/2,T.position.set(N,2.43,V),$.add(T)});let Xe=new mt,Q=new oe({color:1973276,roughness:.5,metalness:.6}),he=new k(new Nt(.11,24,16),Q);he.scale.set(1,.75,1),he.position.y=.08,Xe.add(he);let Me=new k(new et(.045,.06,.03,16),Q);Me.position.y=.165,Xe.add(Me);let pe=new k(new et(.012,.022,.12,10),Q);pe.position.set(.12,.11,0),pe.rotation.z=-.9,Xe.add(pe);let Ne=new k(new Ri(.08,.008,8,24,Math.PI),Q);Ne.position.y=.16,Xe.add(Ne),Xe.position.set(-2.1,.07,1),Xe.rotation.y=.9,ii(Xe),$.add(Xe);let Ce=new mt,ze=new k(new et(.008,.008,.72,8),Q);ze.position.y=.36,Ce.add(ze);let Ye=new k(new et(.09,.1,.02,20),Q);Ye.position.y=.01,Ce.add(Ye);for(let N=0;N<3;N++){let V=N/3*Math.PI*2,q=new k(new et(.005,.005,.6,6),Q);q.position.set(Math.cos(V)*.035,.36,Math.sin(V)*.035),q.rotation.set(Math.sin(V)*.06,0,-Math.cos(V)*.06),Ce.add(q);let ne=new k(new Ri(.018,.005,6,12),Q);ne.position.set(Math.cos(V)*.05,.68,Math.sin(V)*.05),Ce.add(ne)}Ce.position.set(-2.22,.07,-.56),ii(Ce),$.add(Ce),[5909034,3031638,8020024,4086330,4862032].forEach((N,V)=>{let q=new k(new pt(.26-V*.015,.045,.19-V*.008),new oe({color:N,roughness:.8}));q.position.set(1.68,.0225+V*.045,-1.95),q.rotation.y=Math.sin(V*2.3)*.25,q.castShadow=q.receiveShadow=!0,$.add(q)});let I=ri?80:160,W=new Float32Array(I*3);Zc=new Float32Array(I);for(let N=0;N<I;N++)W[N*3]=nt(-2.6,2.6),W[N*3+1]=nt(.3,2.6),W[N*3+2]=nt(-2.3,2.2),Zc[N]=nt(.004,.02);_a=new Mt,_a.setAttribute("position",new Dt(W,3)),Mf=new wi(_a,new xi({map:Sa,color:16767144,size:.018,transparent:!0,opacity:.55,depthWrite:!1,blending:Ei})),$.add(Mf),Ln.push(Mf)}var Lo=null,Jc=null,k1=[];function Pf(i,e,t=1){return Vt(256*t,320*t,(n,s,r)=>{n.scale(t,t),s=256,r=320;let a=mn(i);n.fillStyle="#ece4d2",n.fillRect(0,0,s,r);for(let l=0;l<900;l++)n.fillStyle=`rgba(110,90,60,${a()*.05})`,n.fillRect(a()*s,a()*r,2,2);n.strokeStyle="#2b2622",n.lineWidth=3,n.lineCap="round",n.lineJoin="round";let o=l=>{n.beginPath(),n.moveTo(l[0][0]+(a()-.5)*2,l[0][1]);for(let c=1;c<l.length;c++)n.lineTo(l[c][0]+(a()-.5)*2,l[c][1]+(a()-.5)*2);n.stroke()};if(e==="fox"){o([[70,120],[60,50],[105,95],[150,95],[196,50],[186,120]]),o([[70,120],[80,170],[128,215],[176,170],[186,120]]),o([[100,150],[110,158]]),o([[156,150],[146,158]]),o([[120,196],[128,204],[136,196]]),n.lineWidth=1.5;for(let l=0;l<9;l++)o([[200+a()*30,230+a()*50],[210+a()*30,240+a()*50]])}else if(e==="shark"){o([[30,170],[80,140],[150,132],[205,150],[230,168],[200,182],[140,195],[80,192],[30,170]]),o([[120,133],[140,95],[160,134]]),o([[30,170],[12,140]]),o([[30,170],[14,200]]),o([[185,160],[188,161]]),n.lineWidth=2;for(let l=0;l<4;l++)o([[80+l*26,142],[88+l*26,175]]);o([[100,192],[92,215]]),o([[150,194],[160,214]])}else if(e==="head")n.strokeStyle="rgba(43,38,34,.4)",n.lineWidth=1.5,n.beginPath(),n.arc(128,150,62,0,7),n.stroke(),o([[128,80],[128,225]]),o([[62,155],[194,150]]),n.beginPath(),n.ellipse(128,190,30,20,0,0,7),n.stroke(),n.strokeStyle="#2b2622",n.lineWidth=2.5,o([[78,110],[70,40],[112,92]]),o([[178,110],[186,40],[144,92]]),o([[96,150],[112,146]]),o([[160,150],[144,146]]),o([[120,200],[128,206],[136,200]]);else if(e==="cabin"){o([[20,250],[236,246]]),o([[70,250],[70,175],[186,175],[186,248]]),o([[58,180],[128,120],[198,180]]),o([[160,150],[160,122],[174,122],[174,162]]),o([[110,248],[110,205],[134,205],[134,248]]),o([[146,190],[172,190],[172,212],[146,212],[146,190]]),n.lineWidth=2,o([[167,112],[160,98],[172,86],[164,72],[176,60]]);for(let l of[32,222])o([[l-16,248],[l,196],[l+16,248]]);n.fillStyle="#2b2622";for(let l=0;l<26;l++)n.beginPath(),n.arc(a()*s,a()*170,1.6,0,7),n.fill()}else if(e==="name"){n.fillStyle="#2b2622",n.font='44px "Caveat", "Comic Sans MS", cursive',n.textAlign="center",n.fillText((Ct.name||"schurik").toLowerCase(),s/2,140),n.lineWidth=2,o([[80,156],[176,152]]),n.beginPath(),n.ellipse(128,222,14,11,0,0,7),n.stroke();for(let l=0;l<4;l++)n.beginPath(),n.ellipse(112+l*11,202-(l===1||l===2?5:0),4,5.5,0,0,7),n.stroke()}else if(e==="text"){n.fillStyle="#2b2622",n.font='30px "Caveat", "Comic Sans MS", cursive',n.textAlign="left";let l=92;String(Ge.bookEmpty||"").split(`
`).forEach(c=>{let h="";c.split(" ").forEach(u=>{n.measureText(h+u).width>s-60&&(n.save(),n.translate(32,l),n.rotate((a()-.5)*.03),n.fillText(h.trim(),0,0),n.restore(),l+=34,h=""),h+=u+" "}),n.save(),n.translate(32,l),n.rotate((a()-.5)*.03),n.fillText(h.trim(),0,0),n.restore(),l+=34})}else if(e!=="blank")for(let l=0;l<4;l++){let c=60+l%2*120+a()*20,h=80+Math.floor(l/2)*140+a()*20;n.beginPath(),n.ellipse(c,h+20,24,18,0,0,7),n.stroke();for(let u=0;u<4;u++)n.beginPath(),n.ellipse(c-27+u*18,h-14-(u===1||u===2?8:0),7,9,0,0,7),n.stroke()}})}function B1(){let i=ai({rep:[.5,.25],color:6964784,rough:.7}),e=Vt(768,512,(W,N,V)=>{W.fillStyle="#5a2422",W.fillRect(0,0,N,V);let q=(Y,T,E)=>{W.strokeStyle=T,W.lineWidth=E,W.strokeRect(Y,Y,N-2*Y,V-2*Y)};q(14,"#c9b08a",10),q(34,"#2a3448",14),q(52,"#c9b08a",4),W.fillStyle="#7a3a2a";for(let Y=90;Y<V-80;Y+=60)for(let T=100;T<N-90;T+=70)W.save(),W.translate(T,Y),W.rotate(Math.PI/4),W.fillRect(-14,-14,28,28),W.restore();W.fillStyle="#c9b08a";for(let Y=90;Y<V-80;Y+=60)for(let T=100;T<N-90;T+=70)W.save(),W.translate(T,Y),W.rotate(Math.PI/4),W.fillRect(-5,-5,10,10),W.restore();let ne=mn(6);for(let Y=0;Y<9e3;Y++)W.fillStyle=`rgba(0,0,0,${ne()*.1})`,W.fillRect(ne()*N,ne()*V,2,1)}),t=new k(new ct(2.9,1.95),new oe({map:e,roughness:1}));t.rotation.x=-Math.PI/2,t.rotation.z=-.08,t.position.set(-.75,.003,.5),t.receiveShadow=!0,$.add(t);let n=new mt;n.position.set(-.3,0,-.42),n.rotation.y=.35,n.scale.setScalar(.9);let s=new k(new pt(.66,.32,.4),i);s.position.y=.16,n.add(s);let r=new k(new pt(.69,.06,.43),i);r.position.y=.35,n.add(r);for(let W of[-.24,.24]){let N=new k(new pt(.03,.39,.435),Ns);N.position.set(W,.19,0),n.add(N)}let a=new k(new pt(.06,.07,.01),new oe({color:9071152,metalness:.7,roughness:.4}));a.position.set(0,.29,.206),n.add(a);let o=new k(new et(.035,.032,.085,18),new oe({color:3824234,roughness:.45}));o.position.set(.18,.42,.05),n.add(o);let l=new k(new Ri(.022,.006,6,14),o.material);l.position.set(.218,.42,.05),l.rotation.y=Math.PI/2,n.add(l);let c=new k(new pt(.2,.025,.14),new oe({color:6957610,roughness:.8}));c.position.set(-.12,.392,-.02),c.rotation.y=.3,n.add(c);let h=new k(new pt(.17,.006,.12),new oe({color:15261640,roughness:.9}));h.position.set(-.12,.407,-.02),h.rotation.y=.3,n.add(h),ii(n),$.add(n),n.updateMatrixWorld(!0);let u=new L(0,.38,0).applyMatrix4(n.matrixWorld);Cf(u.x,u.y,u.z,.09,.028),be.chest=new Qt(16754768,.35,0,2),be.chest.position.set(u.x,u.y+.25,u.z),$.add(be.chest);let f=[],d=-2.12,m=1.29;for(let W=0;W<=40;W++){let N=W/40,V=-.58+N*1.76,q=Math.abs(Math.sin(N*Math.PI*2))*.1;f.push(new L(d,m-q,V))}let x=new Ms(f),g=new oe({color:2046502,roughness:.9,flatShading:!0}),p=new ac(.045,0),v=60,_=new ys(p,g,v),y=new Ut,C=mn(14);for(let W=0;W<v;W++){let N=x.getPointAt(W/(v-1));y.position.set(N.x+(C()-.5)*.03,N.y+(C()-.5)*.03,N.z),y.rotation.set(C()*3,C()*3,C()*3),y.scale.setScalar(.8+C()*.6),y.updateMatrix(),_.setMatrixAt(W,y.matrix)}_.castShadow=!0,$.add(_);let A=18;Lo=new ys(new Nt(.01,8,6),new oe({color:3348992,emissive:16760944,emissiveIntensity:4}),A);for(let W=0;W<A;W++){let N=x.getPointAt((W+.5)/A);y.position.set(N.x+.035,N.y-.01,N.z),y.rotation.set(0,0,0),y.scale.setScalar(1),y.updateMatrix(),Lo.setMatrixAt(W,y.matrix)}$.add(Lo),[["fox",-.06,1.36,.06,31],["shark",.15,1.27,-.07,32],["paws",.05,1.5,.12,33]].forEach(([W,N,V,q,ne])=>{let Y=new k(new ct(.14,.175),new oe({map:Pf(ne,W),roughness:.9}));Y.position.set(N,V,ue.z0+.15+(W==="paws"?.003:0)),Y.rotation.z=q,Y.receiveShadow=!0,$.add(Y);let T=new k(new Nt(.006,8,6),new oe({color:[2779824,12623904,3186768][ne%3]}));T.position.set(N,V+.075,ue.z0+.157),$.add(T)});let S=Vt(260,360,(W,N,V)=>{W.fillStyle="#121a26",W.fillRect(0,0,N,V),W.strokeStyle="#3a5a7a",W.lineWidth=6,W.strokeRect(10,10,N-20,V-20),W.fillStyle="#bcd6f0";let q=N/2,ne=140;W.beginPath(),W.ellipse(q,ne+28,44,34,0,0,7),W.fill(),[[-46,-18],[-18,-40],[18,-40],[46,-18]].forEach(([Y,T])=>{W.beginPath(),W.ellipse(q+Y,ne+T,15,19,0,0,7),W.fill()}),W.fillStyle="#e8f2fb",W.font='700 34px "Space Grotesk", Arial',W.textAlign="center",W.fillText("FROSTPAW",q,262),W.fillStyle="#7aa0c4",W.font='400 18px "JetBrains Mono", monospace',W.fillText("interactive",q,292)}),R=new mt;R.position.set(-2.7,2.02,ue.z0+.155),ot(.27,.36,.015,new oe({color:1708556,roughness:.6}),0,0,0,R);let P=new k(new ct(.24,.33),new oe({map:S,roughness:.7}));P.position.z=.009,R.add(P),$.add(R);let b=new k(new pt(.26,.008,.17),new oe({color:1579036,roughness:.35}));b.position.set(0,Ke.top+.004,-1.86),b.rotation.y=.15,b.castShadow=b.receiveShadow=!0,$.add(b);let M=new k(new ct(.19,.12),new oe({color:2368554,roughness:.6}));M.rotation.x=-Math.PI/2,M.rotation.z=.15,M.position.set(.01,Ke.top+.0085,-1.86),$.add(M);let D=new k(new et(.004,.003,.14,8),new oe({color:2763312,roughness:.3}));D.rotation.z=Math.PI/2,D.rotation.y=.6,D.position.set(.04,Ke.top+.014,-1.82),$.add(D);let U=new mt,O=new oe({color:15263458,roughness:.4}),Z=new oe({color:1710622,roughness:.3}),H=new k(new pt(.19,.1,.09),O);H.position.y=.05,U.add(H);let se=new k(new pt(.18,.085,.005),Z);se.position.set(0,.05,.047),U.add(se);let X=new k(new Ri(.1,.012,6,24,Math.PI),Z);X.rotation.x=-Math.PI/2,X.position.set(0,.012,-.045),U.add(X),U.position.set(2.62,1.876,-2.26),U.rotation.y=-.5,ii(U),$.add(U);let ce=new mt,me=fe.x-.38,xe=fe.y-fe.h/2,je=ue.z0+.14,Xe=new k(new et(.055,.055,.15,24,1,!0),new oe({color:13623528,transparent:!0,opacity:.18,roughness:.05,side:Bt,depthWrite:!1}));Xe.position.y=.075,ce.add(Xe),Ln.push(Xe);let Q=new k(new et(.045,.042,.03,16),new oe({color:10123858,roughness:.9}));Q.position.y=.165,ce.add(Q);let he=new k(new et(.052,.052,.03,20),new oe({color:3099174,roughness:1}));he.position.y=.015,ce.add(he),[[0,0,.06,4186320],[.022,.012,.045,7008448],[-.02,-.015,.038,4245759],[.01,-.025,.03,8388560]].forEach(([W,N,V,q])=>{let ne=new k(new et(.003,.004,V,6),new oe({color:14215392,emissive:q,emissiveIntensity:.6}));ne.position.set(W,.03+V/2,N),ce.add(ne);let Y=new k(new Nt(.012,12,8,0,Math.PI*2,0,Math.PI/2),new oe({color:662040,emissive:q,emissiveIntensity:3}));Y.position.set(W,.03+V,N),ce.add(Y),k1.push(Y.material)}),ce.position.set(me,xe,je),$.add(ce),be.jar=new Qt(5300432,.25,0,2),be.jar.position.set(me,xe+.12,je+.12),$.add(be.jar);let Me=W=>{let N=new oe({color:W,roughness:.95,fog:!1});return ah.push(N),N},pe=Me(2760214),Ne=Me(13161186);for(let W=0;W<9;W++){let N=-5.6+W*.95,V=-6.2+Math.sin(W*1.3)*.15,q=1+Math.sin(W*2.1)*.08,ne=new k(new pt(.09,q,.09),pe);ne.position.set(N,-.35+q/2,V),ne.rotation.z=Math.sin(W*3.7)*.05,ne.castShadow=!0,$.add(ne);let Y=new k(new Nt(.07,10,6,0,Math.PI*2,0,Math.PI/2),Ne);if(Y.scale.set(1,.6,1),Y.position.set(N,-.35+q,V),$.add(Y),W<8)for(let T of[.35,.7]){let E=new k(new pt(.97,.05,.04),pe);E.position.set(N+.475,-.35+T,V+.04),$.add(E);let B=new k(new pt(.95,.03,.06),Ne);B.position.set(N+.475,-.35+T+.04,V+.04),$.add(B)}}let Ce=new k(new et(.22,.26,.42,14),Me(3811868));Ce.position.set(-2.4,-.35+.21,-4.2),Ce.castShadow=!0,$.add(Ce);let ze=new k(new et(.22,.22,.06,14),Ne);ze.position.set(-2.4,.1,-4.2),$.add(ze);let Ye=new k(new et(.02,.022,.6,8),Me(6965802));Ye.position.set(-2.32,.32,-4.2),Ye.rotation.z=-.5,$.add(Ye);let re=new k(new pt(.16,.1,.02),Me(4869202));re.position.set(-2.24,.14,-4.2),re.rotation.z=-.5,$.add(re),Jc=new Tt({uniforms:{uTime:{value:0},uInt:{value:1}},transparent:!0,depthWrite:!1,blending:Ei,fog:!1,side:Bt,vertexShader:Vo,fragmentShader:`uniform float uTime,uInt;varying vec2 vUv;${Kf}
    void main(){vec2 uv=vUv;float t=uTime*0.03;float band=0.;
      for(int i=0;i<3;i++){float fi=float(i);float y=0.45+0.18*sin(uv.x*3.0+t*6.0+fi*2.1)+0.1*fbm(vec2(uv.x*2.0+t+fi,fi));
        float d=uv.y-y;band+=smoothstep(0.22,0.0,abs(d))*(0.6+0.4*fbm(vec2(uv.x*14.0-t*8.0,fi)))*smoothstep(-0.25,0.15,d);}
      float fade=smoothstep(0.0,0.2,uv.x)*smoothstep(1.0,0.8,uv.x)*smoothstep(0.0,0.3,uv.y);
      vec3 c=mix(vec3(0.1,0.9,0.5),vec3(0.3,0.5,1.0),uv.y);gl_FragColor=vec4(c*band*fade*0.22*uInt,1.);}`});let I=new k(new ct(70,16),Jc);I.position.set(-8,11,-40.5),$.add(I),Ln.push(I)}function H1(){let i=Vt(256,128,(h,u,f)=>{h.fillStyle="#6f8396",h.fillRect(0,0,u,f),h.fillStyle="rgba(40,52,64,.28)";for(let d=20;d<u;d+=34)h.beginPath(),h.moveTo(d,0),h.quadraticCurveTo(d+8,f*.3,d-2,f*.55),h.lineTo(d+10,f*.55),h.quadraticCurveTo(d+18,f*.3,d+12,0),h.fill()}),e=new oe({map:i,roughness:.9}),t=new oe({color:15131354,roughness:.9}),n=new oe({color:789518,roughness:.3}),s=new mt,r=new k(new Ki(.075,.2,8,20),e);r.rotation.z=Math.PI/2,r.scale.set(1,1,.85),s.add(r);let a=new k(new Ki(.06,.17,6,16),t);a.rotation.z=Math.PI/2,a.position.y=-.03,a.scale.set(1,1,.75),s.add(a);let o=new k(new Ai(.04,.09,10),e);o.position.set(0,.1,0),o.rotation.z=-.3,o.scale.set(1,1,.35),s.add(o);let l=new k(new Ai(.05,.12,10),e);l.position.set(-.2,.03,0),l.rotation.z=.9,l.scale.set(1,1,.3),s.add(l);let c=l.clone();c.position.set(-.19,-.04,0),c.rotation.z=2.3,c.scale.set(.8,.8,.3),s.add(c);for(let h of[-1,1]){let u=new k(new Ai(.035,.09,8),e);u.position.set(.05,-.06,h*.06),u.rotation.set(h*1.1,0,.6),u.scale.set(1,1,.35),s.add(u);let f=new k(new Nt(.011,10,8),n);f.position.set(.15,.02,h*.05),s.add(f)}s.position.set(-.98,.2,-.13),s.rotation.set(0,.6,.12),ii(s),$.add(s)}var Oe={pos:new L(-.1,0,.36),rot:.17,W:.2,H:.25,spread:0,flip:null,pages:[],tex:[],left:null,right:null,sheet:null,front:null,back:null,grp:null,light:null};function z1(){let i=(Ct.sketchbook||[]).filter(Boolean),e=[{kind:"name"}];return e.push({kind:"fox"}),i.length?i.forEach(t=>e.push({src:t})):e.push({kind:"text"}),e.push({kind:"blank"}),e.length%2&&e.push({kind:"blank"}),e}function Ni(i){if(Oe.tex[i])return Oe.tex[i];let e=Oe.pages[i]||{kind:"blank"},t;if(e.src){t=Pf(70+i,"blank",2);let n=new Image;n.crossOrigin="anonymous",n.onload=()=>{let s=t.image,r=s.getContext("2d");r.setTransform(1,0,0,1,0,0);let a=28,o=s.width-a*2,l=s.height-a*2,c=Math.min(o/n.width,l/n.height),h=n.width*c,u=n.height*c;r.drawImage(n,(s.width-h)/2,(s.height-u)/2,h,u),t.needsUpdate=!0},n.src=e.src}else t=Pf(70+i,e.kind,2);return t.wrapS=t.wrapT=Mn,Oe.tex[i]=t,t}function G1(){Oe.pages=z1();let{W:i,H:e}=Oe,t=new mt;t.position.copy(Oe.pos),t.rotation.y=Oe.rot,Oe.grp=t;let n=new k(new pt(i*2+.014,.004,e+.014),new oe({color:2371644,roughness:.8}));n.position.y=.002,t.add(n);let s=new oe({color:15129798,roughness:.95});for(let d of[-1,1]){let m=new k(new pt(i-.004,.01,e-.004),s);m.position.set(d*(i/2+.001),.009,0),t.add(m)}let r=d=>{let m=d.attributes.position;for(let x=0;x<m.count;x++){let g=Math.abs(m.getX(x))/i;m.setY(x,.007*(1-Math.pow(1-g,3)))}return d.computeVertexNormals(),d},a=new ct(i,e,16,1);a.translate(i/2,0,0),a.rotateX(-Math.PI/2),r(a);let o=d=>{let m=d.attributes.uv;for(let x=0;x<m.count;x++)m.setX(x,1-m.getX(x));return d},l=a.clone();l.scale(-1,1,1),o(l),l.computeVertexNormals(),Oe.left=new k(l,new oe({map:Ni(0),roughness:.92,side:Bt})),Oe.left.position.y=.0145,Oe.left.userData.part="left",Oe.right=new k(a,new oe({map:Ni(1),roughness:.92,side:Bt})),Oe.right.position.y=.0145,Oe.right.userData.part="right",t.add(Oe.left,Oe.right);let c=new mt,h=new k(new et(.0035,.0035,.15,6),new oe({color:14198832,roughness:.6}));c.add(h);let u=new k(new Ai(.0035,.014,6),new oe({color:14203024,roughness:.8}));u.position.y=.082,c.add(u),c.rotation.set(0,0,Math.PI/2),c.rotation.y=.5,c.position.set(i+.06,.0035,.04),t.add(c),ii(t),Oe.left.castShadow=Oe.right.castShadow=!1,$.add(t),oi(t,"book");let f=new mt;f.position.y=.016,f.visible=!1,Oe.front=new k(a,new oe({roughness:.92,side:jn})),Oe.back=new k(o(a.clone()),new oe({roughness:.92,side:on})),f.add(Oe.front,Oe.back),t.add(f),Oe.sheet=f,document.fonts&&document.fonts.load("44px Caveat").then(()=>{Oe.pages.forEach((d,m)=>{(d.kind==="name"||d.kind==="text")&&(Oe.tex[m]=null)}),Oe.flip||X0()}).catch(()=>{}),Oe.light=new Qt(16763024,0,0,2),Oe.light.position.copy(Oe.pos).add(qt(.05,.45,.25)),$.add(Oe.light)}function X0(){Oe.left.material.map=Ni(Oe.spread*2),Oe.right.material.map=Ni(Oe.spread*2+1),Oe.left.material.needsUpdate=Oe.right.material.needsUpdate=!0}function Qc(i){if(Oe.flip)return;let e=Oe.spread,t=Oe.pages.length/2;if(i>0&&e>=t-1||i<0&&e<=0)return Wt(180,.06,"sine",.03);let n=Oe.front.material,s=Oe.back.material;i>0?(n.map=Ni(e*2+1),s.map=Ni(e*2+2),Oe.right.material.map=Ni(e*2+3)):(n.map=Ni(e*2-1),s.map=Ni(e*2),Oe.left.material.map=Ni(e*2-2)),n.needsUpdate=s.needsUpdate=Oe.right.material.needsUpdate=Oe.left.material.needsUpdate=!0,Oe.flip={dir:i,t:0},Oe.sheet.visible=!0,Oe.sheet.rotation.z=i>0?0:Math.PI,dS()}function V1(i){let e=Oe.flip;if(!e)return;e.t=Math.min(1,e.t+i/.6);let t=e.t<.5?2*e.t*e.t:1-Math.pow(-2*e.t+2,2)/2;Oe.sheet.rotation.z=e.dir>0?t*Math.PI:(1-t)*Math.PI,Oe.sheet.position.y=.016+Math.sin(t*Math.PI)*.01,e.t>=1&&(Oe.spread+=e.dir,X0(),Oe.sheet.visible=!1,Oe.flip=null)}var dn,Fc;function W1(){let i=new oe({color:15525596,roughness:.75}),e=new oe({color:789262,roughness:.35});dn=new mt,Fc=new k(new Ki(.075,.13,8,20),i),Fc.rotation.z=Math.PI/2,Fc.position.set(0,.075,0),dn.add(Fc);let t=new k(new Nt(.085,28,20),i);t.scale.set(1,.95,1),t.position.set(.15,.095,.02),dn.add(t);for(let s of[-1,1]){let r=new k(new Nt(.014,14,10),e);r.scale.set(.9,1.25,.6),r.position.set(.215,.11,.036*s+.01),dn.add(r);let a=new k(new Nt(.0035,8,6),new Ht({color:16777215}));a.position.set(.226,.118,.036*s+.016),dn.add(a)}let n=new k(new na(new Ms([new L(-.1,.05,0),new L(-.17,.03,.06),new L(-.12,.02,.13),new L(-.02,.02,.14)]),20,.022,10),i);dn.add(n);for(let s of[-1,1]){let r=new k(new Nt(.028,14,10),i);r.scale.set(1.5,.6,.9),r.position.set(.12,.018,.06*s),dn.add(r)}dn.position.set(-1.42,0,.72),dn.rotation.y=2.4,dn.scale.setScalar(1.15),ii(dn),$.add(dn),oi(dn,"slug")}var _i,$c,q0=0,j0,X1,q1,is,So=1,Y0=0,ei={geo:null,v:null};function ts(i,{scale:e=1,pos:t=[0,0,0],rotY:n=0,ground:s=!0,cast:r=!0}={}){if(!i)return null;let a=i.scene;a.scale.setScalar(e),a.rotation.y=n,a.updateMatrixWorld(!0);let o=new un().setFromObject(a);return a.position.set(t[0],t[1]-(s?o.min.y:0),t[2]),a.traverse(l=>{l.isLight&&(l.visible=!1),l.isMesh&&(l.castShadow=r,l.receiveShadow=!0)}),$.add(a),a}async function j1(){let[i,e,t,n,s,r,a,o,l]=await Promise.all(["Fox","BoomBox","DiffuseTransmissionPlant","DiffuseTransmissionTeacup","AnisotropyBarnLamp","GlassHurricaneCandleHolder","SheenChair","Lantern","SharkPlush"].map(E1));if(_i=ts(i,{scale:.0042,pos:[-1.82,.006,.25],rotY:-2.25}),_i){q0=_i.position.y,$c=new pc(_i);let m=i.animations.find(x=>x.name==="Survey")||i.animations[0];if(m){let x=$c.clipAction(m);x.timeScale=.55,x.play()}oi(_i,"fox"),_i.traverse(x=>{x.isMesh&&(x.frustumCulled=!1)})}Nc=ts(e,{scale:19,pos:[Ke.x-Ke.w/2+.3,Ke.top,-2.27],rotY:.25}),Nc&&(Nc.traverse(m=>{m.isMesh&&m.material.emissiveMap&&(V0.push(m.material),m.material.emissiveIntensity=.15)}),oi(Nc,"boombox")),j0=ts(t,{scale:.95,pos:[-.62,0,-2.2],rotY:.6}),X1=ts(n,{scale:.75,pos:[Mo.x,Ke.top,Mo.z],rotY:1.2}),ts(s,{scale:1.5,pos:[1.32,1.86,ue.z0+.14],rotY:0,ground:!1}),q1=ts(r,{scale:.7,pos:[-2.42,1.29,.95],rotY:0});let c=ts(a,{scale:1.12,pos:[2.05,0,-.55],rotY:-1.15});c&&(c.userData.isArmchair=!0),l&&(is=ts(l,{scale:.1,pos:[-.66,.105,.17],rotY:.55}),is&&(is.traverse(m=>{m.isMesh&&(m.material.roughness=.95,m.material.metalness=0,m.material.specularIntensity=.2)}),So=is.scale.x,Y0=is.position.y,oi(is,"plush")));let h=ts(o,{scale:.11,pos:[-8.5,-.35,-13],rotY:.6,cast:!1});if(h){h.traverse(p=>{p.isMesh&&(p.material=p.material.clone(),p.material.fog=!1)});let m=new un().setFromObject(h);Uc=new Qt(16757611,14,0,1.6);let x=new L;m.getCenter(x),Uc.position.set(x.x+.25,m.max.y-.55,x.z),$.add(Uc);let g=Yf(16757611,2.2,Uc.position,.55);g.material.fog=!1}let u=22,f=new Float32Array(u*3);ei.v=new Float32Array(u);for(let m=0;m<u;m++)f[m*3]=Mo.x+nt(-.02,.02),f[m*3+1]=Ke.top+nt(.07,.3),f[m*3+2]=Mo.z+nt(-.02,.02),ei.v[m]=nt(.04,.09);ei.geo=new Mt,ei.geo.setAttribute("position",new Dt(f,3));let d=new wi(ei.geo,new xi({map:Sa,color:10131600,size:.05,transparent:!0,opacity:.12,depthWrite:!1}));$.add(d),Ln.push(d),ei.points=d}var Fi,Do;function Y1(){Fi=new k(new ct(.035,.07),Zf(3.3,1.2)),Fi.position.set(-2.42,1.42,.95),$.add(Fi),Ln.push(Fi),Do=new k(new Nt(.03,16,12),new oe({color:3348992,emissive:16761466,emissiveIntensity:6})),Do.position.set(1.32,1.55,-2.32),$.add(Do)}var In=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Ps={fades:[],frostMats:[],deadMats:[],lastAge:-1};function Li(i,e,t,n=!0){return i.traverse(s=>{(s.isMesh||s.isPoints)&&(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{a.transparent=!0,a.opacity=0})}),i.visible=!1,Ps.fades.push({obj:i,from:e,to:t,cast:n}),$.add(i),i}var Ee={on:!1,band:"FM",f:{FM:88.4,SW:52},lock:0,triggered:!1,nextBleed:0,cv:null,ctx:null,tex:null,needle:null},K0={FM:[87.5,108],SW:[40,60]},Uo=[{f:88.4,kind:"music"},{f:95.1,kind:"dead"},{f:103.7,kind:"ambient"}],Z0=47.2;function Jf(){if(!Ee.ctx)return;let i=Ee.ctx,e=256,t=112,n=Ee.f[Ee.band],[s,r]=K0[Ee.band];i.fillStyle=Ee.on?"#2a1606":"#120a04",i.fillRect(0,0,e,t),i.strokeStyle=Ee.on?"#d08a3a":"#3a2410",i.lineWidth=2;for(let a=0;a<=20;a++){let o=14+a/20*(e-28);i.beginPath(),i.moveTo(o,70),i.lineTo(o,a%5?82:90),i.stroke()}Ee.on&&(i.fillStyle="#ffb860",i.font='700 40px "JetBrains Mono", monospace',i.textAlign="center",i.fillText(Ee.band+" "+n.toFixed(1),e/2,50)),Ee.tex.needsUpdate=!0,Ee.needle.position.x=.04+(n-s)/(r-s)*.08}function Qf(i){let[e,t]=K0[Ee.band];Ee.f[Ee.band]=Math.round(Ci.clamp(Ee.f[Ee.band]+i,e,t)*10)/10,Ee.lock=0,Jf()}var $n,K1,Hc,Oc,Eo,No,zc,Fo,eh;var Os=[];function Z1(i,e){return Vt(400,500,(t,n,s)=>{let r=mn(e);t.fillStyle="#e9e0c9",t.fillRect(0,0,n,s);for(let l=0;l<2600;l++)t.fillStyle=`rgba(110,90,60,${r()*.06})`,t.fillRect(r()*n,r()*s,2,2);t.strokeStyle="rgba(120,140,170,.35)",t.lineWidth=1;for(let l=70;l<s;l+=34)t.beginPath(),t.moveTo(0,l),t.lineTo(n,l),t.stroke();t.strokeStyle="rgba(120,70,40,.18)",t.lineWidth=9,t.beginPath(),t.arc(n*(.6+r()*.3),s*(.7+r()*.2),44,.4,5.4),t.stroke(),t.fillStyle="#2a2420",t.font='34px "Caveat", "Comic Sans MS", cursive',t.textBaseline="alphabetic";let a=60,o=[];i.split(`
`).forEach(l=>{let c="";l.split(" ").forEach(h=>{t.measureText(c+h).width>n-50&&(o.push(c),c=""),c+=h+" "}),o.push(c)}),o.forEach((l,c)=>{t.save(),t.translate(26,a),t.rotate((r()-.5)*.025),t.fillText(l.trim(),0,0),t.restore(),a+=34})})}function J1(){let i=ai({rep:[.6,.12],color:5916214,rough:.95}),e=new mt;[[.25,.14],[-.18,-.09],[0,-.33]].forEach(([P,b],M)=>{let D=new k(new pt(fe.w+.32,.13,.03),i.clone());D.position.set(fe.x+(M-1)*.04,fe.y+P,ue.z0+.2),D.rotation.z=b,D.castShadow=!0,e.add(D);for(let U of[-1,1]){let O=new k(new et(.008,.008,.01,8),Ns.clone());O.rotation.x=Math.PI/2,O.position.set(fe.x+(M-1)*.04+U*(fe.w/2+.08)*Math.cos(b),fe.y+P+U*(fe.w/2+.08)*Math.sin(b),ue.z0+.218),e.add(O)}}),Li(e,.35,.65);let t=Vt(512,410,(P,b,M)=>{let D=mn(77),U=b*.28,O=M*.7;P.fillStyle="rgba(210,225,240,.22)",P.fillRect(0,0,b,M),P.globalCompositeOperation="destination-out",P.beginPath(),P.moveTo(U-40,O-20);for(let Z=0;Z<9;Z++){let H=Z/9*Math.PI*2;P.lineTo(U+Math.cos(H)*(30+D()*60),O+Math.sin(H)*(25+D()*50))}P.closePath(),P.fill(),P.globalCompositeOperation="source-over",P.strokeStyle="rgba(235,245,255,.75)",P.lineWidth=1.4;for(let Z=0;Z<14;Z++){let H=U,se=O,X=D()*Math.PI*2;P.beginPath(),P.moveTo(H,se);for(let ce=0;ce<8;ce++){X+=(D()-.5)*.7;let me=18+D()*40;H+=Math.cos(X)*me,se+=Math.sin(X)*me,P.lineTo(H,se)}P.stroke()}for(let[Z,H]of[[0,0],[b,0],[0,M],[b,M]]){let se=P.createRadialGradient(Z,H,0,Z,H,b*.55);se.addColorStop(0,"rgba(240,248,255,.75)"),se.addColorStop(1,"rgba(240,248,255,0)"),P.fillStyle=se,P.fillRect(0,0,b,M)}});t.wrapS=t.wrapT=Mn;let n=new k(new ct(fe.w,fe.h),new Ht({map:t,color:5660794,transparent:!0,depthWrite:!1,fog:!1}));n.material.userData.noDepth=!0,n.position.set(fe.x,fe.y,ue.z0-.04),Ln.push(n),Li(n,.3,.6,!1);let s=new oe({color:15134198,roughness:.92});s.userData.noFrost=!0;let r=new ct(2,2,48,48);r.rotateX(-Math.PI/2);{let P=r.attributes.position;for(let b=0;b<P.count;b++){let M=P.getX(b),D=P.getZ(b),U=Math.atan2(D,M),O=.62+Math.sin(U*3+1)*.16+Math.sin(U*7)*.07,Z=Math.sqrt(M*M+D*D)/O,H=Z<1?Math.pow(1-Z,1.6)*.13*(1+Math.sin(M*9)*.15+Math.cos(D*11)*.12)*(D<0?1.6:1):-.02;P.setY(b,H)}r.computeVertexNormals()}let a=new k(r,s);a.scale.set(1,1,1.1),a.position.set(fe.x-.2,0,ue.z0+.5),a.receiveShadow=!0,Li(a,.4,.75,!1);let o=new k(new Ki(.035,fe.w*.8,4,10),s.clone());o.material.userData.noFrost=!0,o.rotation.z=Math.PI/2,o.scale.set(1,1,1.6),o.position.set(fe.x-.1,fe.y-fe.h/2+.02,ue.z0+.12),Li(o,.4,.75,!1);let l=140,c=new Float32Array(l*3);eh=new Float32Array(l);for(let P=0;P<l;P++)c[P*3]=fe.x-.35+nt(-.25,.4),c[P*3+1]=nt(0,1.5),c[P*3+2]=ue.z0+nt(.1,1.4),eh[P]=nt(.2,.45);Fo=new Mt,Fo.setAttribute("position",new Dt(c,3)),zc=new wi(Fo,new xi({map:Sa,color:13621480,size:.022,depthWrite:!1})),Ln.push(zc),Li(zc,.45,.75,!1),Oc=new k(new Nt(.26,24,10),new oe({color:4867908,roughness:1})),Oc.scale.set(1,.18,1.2),Oc.position.set(Ui.x,.05,Ui.z),Li(Oc,.35,.6,!1);let h=Vt(256,256,(P,b,M)=>{P.fillStyle="#8f897e",P.fillRect(0,0,b,M);let D=mn(12);for(let U=0;U<1600;U++)P.fillStyle=`rgba(80,70,55,${D()*.08})`,P.fillRect(D()*b,D()*M,3,3)},{rep:[2,2]}),u=new oe({map:h,roughness:1,side:Bt}),f=new ct(1.06,1.7,30,20);{let P=f.attributes.position;for(let b=0;b<P.count;b++){let M=P.getX(b),D=P.getY(b),U=(.85-D)/1.7;P.setZ(b,Math.sin(M*26+D*3)*.03*U+Math.sin(M*9)*.02)}f.computeVertexNormals()}let d=new k(f,u);d.position.set(2.38,1.92-.85,-2.12),d.castShadow=!0,Li(d,.45,.8);let m=new k(new ct(1.06,.34,10,4),u.clone());m.rotation.x=-Math.PI/2,m.position.set(2.38,1.873,-2.3),Li(m,.45,.8),Eo=new k(new Nt(.016,10,8),new oe({color:3348992,emissive:16757610,emissiveIntensity:0})),Eo.position.set(-.55,2.43,ue.z0+.2),$.add(Eo),be.flicker=new Qt(16757610,0,0,2),be.flicker.position.copy(Eo.position),be.flicker.position.z+=.1,$.add(be.flicker);let x=new oe({color:790294,roughness:1,fog:!1});ah.push(x);let g=new mt,p=7.5;for(let[P,b]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let M=new k(new et(.04,.06,p,5),x);M.position.set(P*.32,p/2,b*.32),M.rotation.set(-b*.04,0,P*.04),g.add(M)}for(let P=.6;P<p;P+=.75){let b=1-P/p*.6,M=new k(new pt(.75*b,.03,.03),x);M.position.y=P,M.rotation.z=.6,g.add(M);let D=M.clone();D.rotation.set(0,Math.PI/2,-.6),g.add(D)}No=new k(new Nt(.09,12,8),new Ht({color:new Le(1,.08,.05).multiplyScalar(3),fog:!1})),No.position.y=p+.1,g.add(No),g.position.set(-15.5,-.35,-31),$.add(g),$n=new nr(16773336,0,0,.27,.55,2),$.add($n,$n.target),ri||($n.castShadow=!0,$n.shadow.mapSize.set(512,512),$n.shadow.bias=-.002,$n.shadow.camera.near=.1);let v=new mt,_=new oe({map:Ho,color:10119744,roughness:.45}),y=new k(new pt(.3,.17,.13),_);y.position.y=.085,v.add(y);let C=Vt(128,96,(P,b,M)=>{P.fillStyle="#c8b894",P.fillRect(0,0,b,M),P.fillStyle="#3a2c1c";for(let D=6;D<M;D+=8)for(let U=6+D/8%2*4;U<b;U+=8)P.beginPath(),P.arc(U,D,2.2,0,7),P.fill()}),A=new k(new ct(.13,.11),new oe({map:C,roughness:.9}));A.position.set(-.06,.085,.066),v.add(A),Ee.cv=document.createElement("canvas"),Ee.cv.width=256,Ee.cv.height=112,Ee.ctx=Ee.cv.getContext("2d"),Ee.tex=new ta(Ee.cv),Ee.tex.colorSpace=zt,Hc=new k(new ct(.1,.045),new oe({color:1708038,map:Ee.tex,emissive:16777215,emissiveMap:Ee.tex,emissiveIntensity:0})),Hc.position.set(.08,.11,.066),v.add(Hc),Ee.needle=new k(new ct(.0025,.036),new Ht({color:12591136})),Ee.needle.position.set(.04,.11,.067),v.add(Ee.needle);let S=[];for(let P of[.05,.11]){let b=new k(new et(.016,.016,.018,18),new oe({color:14207140,roughness:.35}));b.rotation.x=Math.PI/2,b.position.set(P,.045,.07),v.add(b),S.push(b);let M=new k(new Nt(.03,8,6),new Ht({visible:!1}));M.position.copy(b.position),M.position.z+=.01,v.add(M),S.push(M)}let R=new k(new et(.003,.003,.32,5),Ns);R.position.set(.11,.3,-.03),R.rotation.z=-.5,v.add(R),v.position.set(2.18,1.876,-2.3),v.rotation.y=-.2,ii(v),$.add(v),oi(v,"radio"),K1=v,v.traverse(P=>{P.isMesh&&(P.userData.part="power")}),S[0].userData.part=S[1].userData.part="band",S[2].userData.part=S[3].userData.part="station",Jf(),be.radioFill=new Qt(16765088,0,0,2),be.radioFill.position.set(2.05,2.05,-1.95),$.add(be.radioFill)}function Q1(){let i=$.children.find(o=>o.userData.isArmchair);if(!i)return;let e=new un().setFromObject(i),t=e.getCenter(new L),n=e.getSize(new L),s=new Nt(1,40,24),r=s.attributes.position;for(let o=0;o<r.count;o++){let l=r.getX(o),c=r.getY(o),h=r.getZ(o),u=Math.hypot(l,h),f=u<1e-4?1:Math.max(.7,Math.pow(Math.max(Math.abs(l),Math.abs(h))/u,.9));l/=f,h/=f,c<-.2&&(c=-1,l*=1.04,h*=1.04),l+=Math.sin(c*9+h*6)*.04,h+=Math.cos(c*8+l*5)*.04,r.setXYZ(o,l,c,h)}s.computeVertexNormals();let a=new k(s,new oe({color:9406846,roughness:1,map:Vt(128,128,(o,l,c)=>{o.fillStyle="#fff",o.fillRect(0,0,l,c);let h=mn(9);for(let u=0;u<900;u++)o.fillStyle=`rgba(60,50,40,${h()*.1})`,o.fillRect(h()*l,h()*c,3,2)})}));a.scale.set(n.x*.43,n.y*.53,n.z*.43),a.position.set(t.x,t.y+n.y*.05,t.z),a.rotation.y=i.rotation.y,a.castShadow=a.receiveShadow=!0,Li(a,.45,.8)}function $1(){[[-2.7,1.5,ue.z0+.15,0,.06],[.8,2.08,ue.z0+.15,0,-.08],[-2.535,1.78,.62,Math.PI/2,.05],[ue.x1-.14,1.42,-.85,-Math.PI/2,-.04]].forEach(([e,t,n,s,r],a)=>{let o=new mt;o.position.set(e,t,n),o.rotation.set(0,s,r);let l=new k(new ct(.17,.212),new oe({map:Z1(Ge.fragments[a%Ge.fragments.length],50+a),roughness:.9,side:Bt}));l.position.z=.002,o.add(l);let c=new k(new Nt(.008,10,8),new oe({color:10491928,roughness:.3}));c.position.set(0,.09,.01),o.add(c),o.userData.pid=a,o.userData.found=!1,Li(o,.5,.75,!1),oi(o,"note",{pid:a}),l.userData.note=o,c.userData.note=o,Os.push(o)})}function eS(){let i=new Set,e=new Set;(n=>n&&n.traverse(s=>{s.isMesh&&(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>e.add(r))}))(j0),$.traverse(n=>{n.isMesh&&n.material&&n.material.color&&n.material.color.getHex()===4155962&&e.add(n.material)}),$.traverse(n=>{if(!n.isMesh||n===sr)return;(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{!r||!r.isMeshStandardMaterial||i.has(r)||ah.includes(r)||r.userData.noFrost||(i.add(r),r.userData.base=r.color.clone(),(e.has(r)?Ps.deadMats:Ps.frostMats).push(r))})})}var A0=new Le,tS=new Le(.78,.86,1),nS=new Le(5917234);function J0(i){if(Math.abs(i-Ps.lastAge)<.002)return;Ps.lastAge=i;let e=In(.3,.85,i);Ps.frostMats.forEach(t=>{let n=t.userData.base,s=n.r*.3+n.g*.59+n.b*.11;A0.setRGB(s,s,s).multiply(tS),t.color.copy(n).lerp(A0,e*.7).multiplyScalar(1-e*.12)}),Ps.deadMats.forEach(t=>{t.color.copy(t.userData.base).lerp(nS,In(.3,.8,i))}),Ps.fades.forEach(t=>{let n=In(t.from,t.to,i);t.obj.visible=n>.005,t.last!==n&&(t.last=n,t.obj.traverse(s=>{(s.isMesh||s.isPoints)&&((Array.isArray(s.material)?s.material:[s.material]).forEach(r=>{r.opacity=n,r.depthWrite=!s.isPoints&&n>.99&&!r.userData.noDepth}),t.cast&&s.isMesh&&(s.castShadow=n>.6))}))}),_i&&(_i.visible=i<.5),dn&&(dn.visible=i<.5),Bc.visible=i<.55}var Jn,th,Di,Fs;function iS(){let i=new Jt(innerWidth*Ls,innerHeight*Ls,{type:vn,samples:ri?0:4});if(Jn=new Ac(zn,i),Jn.setPixelRatio(Ls),Jn.setSize(innerWidth,innerHeight),Jn.addPass(new Rc($,Pt)),!ri&&!fr.has("noao")){Di=new xo($,Pt,innerWidth,innerHeight),Di.updateGtaoMaterial({radius:.32,distanceExponent:1.4,thickness:1,scale:1.25,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),Di.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),Di.blendIntensity=.85;let e=Di.render.bind(Di);Di.render=(...t)=>{Ln.forEach(s=>s.visible=!1);let n=[vi.hover];n.forEach(s=>s&&(s.userData.v=s.visible,s.visible=!1)),e(...t),Ln.forEach(s=>s.visible=!0),n.forEach(s=>s&&(s.visible=s.userData.v))},Jn.addPass(Di)}th=new fa(new ie(innerWidth,innerHeight),.55,.62,.92),Jn.addPass(th),Jn.addPass(new Ic),Fs=new da({uniforms:{tDiffuse:{value:null},uTime:{value:0},uVoid:{value:0},uVig:{value:.6},uGrain:{value:.035},uGlitch:{value:0},uRes:{value:new ie(innerWidth,innerHeight)}},vertexShader:Vo,fragmentShader:`uniform sampler2D tDiffuse;uniform float uTime,uVoid,uVig,uGrain,uGlitch;uniform vec2 uRes;varying vec2 vUv;
    float hh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    void main(){vec2 uv=vUv;
      if(uGlitch>0.){float row=floor(uv.y*48.);float r=hh(vec2(row,floor(uTime*18.)));if(r<uGlitch*.22)uv.x+=(hh(vec2(row,uTime))-.5)*.035*uGlitch;}
      vec2 c=uv-.5;float d=dot(c,c);float ca=.004*d;
      vec3 col;col.r=texture2D(tDiffuse,uv+c*ca).r;col.g=texture2D(tDiffuse,uv).g;col.b=texture2D(tDiffuse,uv-c*ca).b;
      float l=dot(col,vec3(.299,.587,.114));
      col+=mix(vec3(.012,.014,.03),vec3(.03,.012,.06),uVoid)*(1.-smoothstep(0.,.3,l));
      col=mix(col,col*vec3(1.05,1.,.93),smoothstep(.25,.85,l)*(1.-uVoid));
      col=mix(col,vec3(l)*vec3(.82,.86,1.18),uVoid*.38);
      col*=1.-uVig*smoothstep(.12,.7,d*2.1);
      col+=(hh(uv*uRes+fract(uTime*7.31))-.5)*uGrain;
      gl_FragColor=vec4(col,1.);}`}),Jn.addPass(Fs)}var vi={};function sS(){vi.hover=Yf(16777215,.5,new L,0),vi.hover.visible=!1}var Re=1,Rt=(i,e=400,t="JetBrains Mono")=>`${e} ${Math.round(i*Re)}px "${t}", "Courier New", monospace`,ns=null,ti=0,ba=Ot,If=[],Lf=[],rr=[],Hn="",zo=!1,Ds=0,lt="off",lr=!1,Q0=0,Mi=!0,ni=4700;function pa(i,e,t,n,s){let r=ci;r.beginPath(),r.moveTo(i+s,e),r.arcTo(i+t,e,i+t,e+n,s),r.arcTo(i+t,e+n,i,e+n,s),r.arcTo(i,e+n,i,e,s),r.arcTo(i,e,i+t,e,s),r.closePath()}function $f(){let i=ci;i.fillStyle="#000",i.fillRect(0,0,pn,Ot),Mi=!0}function rS(i){let e=ci,t=64;if(e.fillStyle="rgba(3,4,8,0.62)",e.fillRect(0,0,pn,Ot),e.textBaseline="top",i<320){let h=1-i/320;e.fillStyle=`rgba(200,212,255,${h*.7})`,e.fillRect(0,Ot/2-(2+h*260),pn,4+h*520);return}let n=i-320,s=n<500?Math.sin(n*.09)*(1-n/500)*6:0,r=t+s,a=34*Re;e.font=Rt(64,700),n>120&&(e.fillStyle="#a98bff",e.fillText(Ge.bootTitle,r,60)),e.font=Rt(20),n>520&&(e.fillStyle="#6a7a8a",e.fillText(Ge.bootSub,r,60+76*Re));let o=Ge.bootLines.slice(0,6).map((h,u)=>[1e3+u*400,h.includes("/void")?"#c06aff":"#cfe0d0",h]),l=60+120*Re;e.font=Rt(22);for(let h of o){if(n>h[0]){let u=Math.min(h[2].length,Math.floor((n-h[0])/11));e.fillStyle=h[1],e.fillText(h[2].slice(0,u),r,l)}l+=a}if(o.forEach((h,u)=>{h[2].includes("/void")&&n>h[0]+60&&n<h[0]+480&&Math.random()<.45&&(e.fillStyle="#ff465f",e.fillText(h[2].replace(/\S+$/,["D0","N0","\u2593\u2593","??"][Math.floor(Math.random()*4)]),r,60+120*Re+u*a))}),n>2900){let h=Math.min(1,(n-2900)/1300);e.fillStyle="#6a7a8a",e.fillText("loading environment",r,l+14);let u=pn-2*t,f=l+14+34*Re;e.strokeStyle="#34465a",e.lineWidth=2,e.strokeRect(t,f,u,18*Re),e.fillStyle="#7fe0a0",e.fillRect(t+2,f+2,(u-4)*h,18*Re-4)}let c=l+14+70*Re;if(n>4300){e.fillStyle="#ffcf9e";let h="LOGIN: "+Ge.login;e.fillText(h.slice(0,Math.min(h.length,Math.floor((n-4300)/40))),t,c)}if(n>=ni){if(!lr)e.fillStyle="#ffcf9e",e.fillText("PASSWORD: "+(Math.floor(i/420)%2?"_":" "),t,c+a),Math.floor(i/520)%2&&(e.fillStyle="#7fe0a0",e.font=Rt(19),e.fillText(Oi?"[ tap to log in ]":"[ click to log in ]",t,c+a*2.3));else if(e.fillStyle="#ffcf9e",e.fillText("PASSWORD: "+"*".repeat(Math.min(10,Math.floor((n-ni)/70))),t,c+a),n>ni+900&&Math.floor(n/240)%2&&(e.fillStyle="#7fe0a0",e.font=Rt(30,700),e.fillText("ACCESS GRANTED",t,c+a*2.3)),n>ni+1500){let h=Math.min(1,(n-ni-1500)/420);e.fillStyle=`rgba(210,225,255,${.55*(1-h)})`,e.fillRect(0,0,pn,Ot)}}n<ni&&Math.floor(i/430)%2===0&&(e.fillStyle="#7fe0a0",e.fillRect(t,l+10,12,20*Re)),Mi=!0}function aS(i){let e=ci,t=64;e.fillStyle="#05070a",e.fillRect(0,0,pn,Ot),e.textBaseline="top",e.font=Rt(24),Ge.idleLines.forEach((n,s)=>{e.fillStyle=s===0?"#7fe0a0":"#5f7a6a",e.fillText(n,t,80+s*40*Re)}),i&&(e.fillStyle="#7fe0a0",e.fillRect(t,80+Ge.idleLines.length*40*Re+6,14,24*Re)),Mi=!0}function oS(i){let e=ci,t=64;e.fillStyle="#080a0e",e.fillRect(0,0,pn,Ot),e.textBaseline="top",e.fillStyle="#7fe0a0",e.font=Rt(30);let n=Ge.welcome;e.fillText(n.slice(0,Math.min(n.length,Math.floor(i/35))),t,Ot/2-40*Re),i>1100&&(e.fillStyle="#6a7a8a",e.font=Rt(20),e.fillText(Ft>.55?Ge.welcomeSubLate:Ge.welcomeSub,t,Ot/2+12*Re)),Mi=!0}function lS(i,e,t){let n=ci;n.fillStyle="#1a1410",n.beginPath(),n.arc(i,e,t,0,7),n.fill(),n.fillStyle="#d9823f",n.beginPath(),n.moveTo(i-t*.5,e-t*.15),n.lineTo(i-t*.72,e-t*.82),n.lineTo(i-t*.12,e-t*.45),n.closePath(),n.fill(),n.beginPath(),n.moveTo(i+t*.5,e-t*.15),n.lineTo(i+t*.72,e-t*.82),n.lineTo(i+t*.12,e-t*.45),n.closePath(),n.fill(),n.beginPath(),n.arc(i,e+t*.06,t*.6,0,7),n.fill(),n.fillStyle="#f3e6d8",n.beginPath(),n.arc(i,e+t*.3,t*.3,0,7),n.fill(),n.fillStyle="#140f10",n.beginPath(),n.arc(i-t*.22,e-t*.02,t*.08,0,7),n.fill(),n.beginPath(),n.arc(i+t*.22,e-t*.02,t*.08,0,7),n.fill(),n.beginPath(),n.arc(i,e+t*.22,t*.07,0,7),n.fill()}function Wo(){let i=ci;If=[],Lf=[];let e=56,t=pn,n=i.createLinearGradient(0,0,0,Ot);n.addColorStop(0,"#0e1019"),n.addColorStop(1,"#090a10"),i.fillStyle=n,i.fillRect(0,0,pn,Ot),i.textBaseline="top";let s=36-ti;i.fillStyle="#11141d",pa(e-20,s,t-2*(e-20),44*Re,10),i.fill(),i.fillStyle="#a98bff",i.font=Rt(18,700),i.fillText("\u25D6 SNOWIE_OS",e,s+12*Re);let r=new Date,a=("0"+r.getHours()).slice(-2),o=("0"+r.getMinutes()).slice(-2);i.textAlign="right",i.fillStyle="#7fe0a0",i.font=Rt(15),i.fillText((Re>1?"":"den \u2593\u2593\u2593\u2591    ")+a+":"+o,t-e+20,s+14*Re),i.textAlign="left",s+=62*Re;let l=124*Re;if(i.fillStyle="#12151f",pa(e-20,s,t-2*(e-20),l,14),i.fill(),i.strokeStyle="#262a38",i.lineWidth=1.5,i.stroke(),lS(e+28*Re,s+l/2,36*Re),i.fillStyle="#fff",i.font=Rt(44,700,"Space Grotesk"),i.fillText(Ct.name||"Schurik",e+82*Re,s+20*Re),i.fillStyle="#ffcf9e",i.font=Rt(18),i.fillText([Ct.handle,Ct.pronouns,Ct.location].filter(Boolean).join(" \xB7 "),e+84*Re,s+72*Re),Ct.status){i.font=Rt(14);let g=i.measureText(Ct.status).width+34*Re;i.fillStyle="rgba(127,224,160,0.13)",pa(e+82*Re,s+98*Re,g,22*Re,11*Re),i.fill(),i.fillStyle="#7fe0a0",i.beginPath(),i.arc(e+96*Re,s+109*Re,4.5*Re,0,7),i.fill(),i.fillText(Ct.status,e+108*Re,s+102*Re)}if(s+=l+24*Re,Ct.tagline){i.fillStyle="#9aa3b0",i.font=Rt(17);let g=Ct.tagline.split(" "),p="";for(let v of g)i.measureText(p+v).width>t-2*e&&(i.fillText(p,e,s),s+=26*Re,p=""),p+=v+" ";i.fillText(p,e,s),s+=38*Re}if(ns=null,Ct.business){i.fillStyle="#6a7a8a",i.font=Rt(15);let g="business: "+Ct.business;i.fillText(g,e,s);let p=i.measureText(g).width;i.fillStyle="#ffcf9e",i.fillText("  [copy]",e+p,s),ns={x:e,y:s+ti,w:p+i.measureText("  [copy]").width,h:22*Re},s+=36*Re}i.fillStyle="#6a8aff",i.font=Rt(15,700),i.fillText("LINKS",e,s),s+=28*Re;let c=Re>1?1:2,h=14,u=e-20,f=(t-2*(e-20)-h*(c-1))/c,d=54*Re;ya.forEach((g,p)=>{let v=u+p%c*(f+h),_=s+Math.floor(p/c)*(d+h);i.fillStyle="#10131c",pa(v,_,f,d,10),i.fill(),i.strokeStyle=g.color||"#888",i.lineWidth=1.5,i.stroke(),i.fillStyle=g.color||"#888",i.beginPath(),i.arc(v+24*Re,_+d/2,5.5*Re,0,7),i.fill(),i.fillStyle="#ece4f0",i.font=Rt(21),i.fillText(g.label,v+44*Re,_+d/2-12*Re),i.fillStyle="#55606e",i.textAlign="right",i.fillText("\u2197",v+f-18,_+d/2-12*Re),i.textAlign="left",If.push({link:g,x:v,y:_+ti,w:f,h:d})}),s+=Math.ceil(ya.length/c)*(d+h)+18*Re;let m=[["terminal","terminal"],["about","about"],["/void","void"],["credits","credits"]],x=e;if(m.forEach(([g,p])=>{i.font=Rt(17);let v=i.measureText(g).width+32*Re;i.fillStyle="#11141d",pa(x,s,v,38*Re,9),i.fill(),i.strokeStyle="#2a2f3c",i.lineWidth=1.5,i.stroke(),i.fillStyle=p==="void"?"#c06aff":"#8a93a0",i.fillText(g,x+16*Re,s+9*Re),Lf.push({id:p,x,y:s+ti,w:v,h:38*Re}),x+=v+12}),s+=56*Re,i.fillStyle="#2e3440",i.font=Rt(15),i.fillText(Ge.footer,e,s),s+=34*Re,ba=s+ti+20,ba>Ot){let g=Ot*Ot/ba,p=ti/(ba-Ot)*(Ot-g);i.fillStyle="rgba(169,139,255,.25)",pa(pn-10,p+4,5,g-8,3),i.fill()}Mi=!0}var Gc={"about.txt":Ct.about||["just a fox on the internet."],"links.txt":ya.map(i=>i.label+"  "+i.url.replace(/^https?:\/\//,"")),"readme.txt":Ge.readme,"credits.txt":Wf.map(i=>i[0]+": "+i[1]+" ("+i[2]+")").concat(["license: "+Xf,"source: "+qf.replace("https://",""),"models + textures compressed for web (modified)."])},ep=()=>Os.filter(i=>i.userData.found).length,tp=()=>Os.length>0&&Os.every(i=>i.userData.found),Bn=i=>{rr.push(i),rr.length>80&&(rr=rr.slice(-80))};function $0(i){let e=i.trim(),t=e.split(/\s+/),n=(t[0]||"").toLowerCase(),s=t.slice(1).join(" ");if(Bn("schurik@snowie:~$ "+i),n!=="")if(n==="help")Bn("help  ls  cat <file>  open <link>  links  whoami  about  credits  void  clear  exit");else if(n==="credits"){lt="credits",sp();return}else if(n==="ls")Bn(Object.keys(Gc).join("  ")+"  void/"+(/-\w*a/.test(s)?"  .radio":""));else if(n==="whoami")Bn((Ct.name||"schurik").toLowerCase());else if(n==="links")ya.forEach(r=>Bn(r.label.padEnd(12)+r.url.replace(/^https?:\/\//,"")));else if(n==="open"){let r=ya.find(a=>a.label===s.toLowerCase());r?(Bn("opening "+r.label+" ..."),ng(r)):Bn("open: no link called "+s)}else if(n==="about"){lt="about",np();return}else if(n==="cat")s===".radio"?["band: SW","freq: 47.2","hold it."].forEach(Bn):Gc[s]?Gc[s].forEach(Bn):s.startsWith("void")?Bn("permission denied."):Bn("cat: "+s+": no such file");else if(n==="void"||n==="cd"&&s.startsWith("void")){if(tp()){lt="void",ip();return}Bn("access denied. notes read ["+ep()+"/"+Os.length+"]")}else if(n==="clear")rr=[];else if(n==="exit"||n==="back"){ks();return}else Bn("command not found: "+n);cr(!0)}function cr(i){let e=ci;e.fillStyle="#07090d",e.fillRect(0,0,pn,Ot),e.textBaseline="top",e.font=Rt(21);let t=44,n=29*Re,s=Math.floor((pn-2*t)/(12.6*Re)),r=34,a=[];for(let c of rr)if(c.length<=s)a.push(c);else for(let h=0;h<c.length;h+=s)a.push((h?"  ":"")+c.slice(h,h+s));let o=a.slice(-Math.floor((Ot-80)/n));for(let c of o)e.fillStyle=c.startsWith("schurik@")?"#6a8aff":/denied|not found|no such/.test(c)?"#ff6a6a":"#cfe0d0",e.fillText(c,t,r),r+=n;e.fillStyle="#7fe0a0";let l=(Re>1?"$ ":"schurik@snowie:~$ ")+Hn;e.fillText(l+(i?"\u2588":""),t,r),Mi=!0}function np(){let i=ci;i.fillStyle="#0b0d12",i.fillRect(0,0,pn,Ot),i.textBaseline="top",i.fillStyle="#a98bff",i.font=Rt(34,700),i.fillText("about",56,50),i.fillStyle="#d8cfe0",i.font=Rt(23);let e=50+70*Re;Gc["about.txt"].forEach(t=>{i.fillText(t,56,e),e+=40*Re}),i.fillStyle="#5a6472",i.font=Rt(17),i.fillText("[ click / back to close ]",56,e+24),Mi=!0}function ip(){let i=ci;i.fillStyle="#040207",i.fillRect(0,0,pn,Ot),i.textBaseline="top",i.fillStyle="#c06aff",i.font=Rt(38,700),i.fillText("/void",56,48),i.font=Rt(21);let e=Ge.voidLines.concat(["","[ click / back to close ]"]),t=48+78*Re;for(let n of e)i.fillStyle=/\d+(\.\d+)?\s*\u00b0?N\b/.test(n)?"#ff465f":n.startsWith("[")?"#5a6472":"#9a8aaa",i.fillText(n,56,t),t+=33*Re;Mi=!0}function sp(){let i=ci;i.fillStyle="#0b0d12",i.fillRect(0,0,pn,Ot),i.textBaseline="top",i.fillStyle="#a98bff",i.font=Rt(32,700),i.fillText("credits",56,44);let e=44+62*Re,t=26*Re;Wf.forEach(([n,s,r])=>{i.fillStyle="#ffcf9e",i.font=Rt(16),i.fillText(n,56,e),i.fillStyle="#d8cfe0",i.font=Rt(Re>1?13:15),i.fillText(s+"  ("+r+")",56,e+t*.8),e+=t*2}),i.fillStyle="#8a93a0",i.font=Rt(14),i.fillText("CC BY 4.0: "+Xf.replace("https://",""),56,e+4),i.fillText("via "+qf.replace("https://",""),56,e+4+t),i.fillText("compressed for web (modified)",56,e+4+t*2),i.fillStyle="#5a6472",i.fillText("[ click / back to close ]",56,e+4+t*3.4),Mi=!0}function ks(){lt="desktop",ti=0,Wo(),pg()}function eg(){zo=!0,document.body.classList.remove("cine"),ks()}function tg(i){i==="terminal"?(lt="terminal",rr=["SNOWIE_OS terminal. type help.",""],Hn="",cr(!0),fg()):i==="about"?(lt="about",np()):i==="void"?tp()?(lt="void",ip()):oh(Ge.voidLocked+" \u2014 notes read ["+ep()+"/"+Os.length+"]"):i==="credits"&&(lt="credits",sp())}function ng(i){Wt(660,.08,"sine",.06);let e=document.createElement("a");e.href=i.url,e.target="_blank",e.rel="noopener",document.body.appendChild(e),e.click(),e.remove()}var _e,Qn,ig,sg,rs,ma,rg,To,wo,Ao,li=!1,si=!1,Df=0,Ea=1,R0=dt("mute");function nh(){if(li)return;li=!0;try{_e=new(window.AudioContext||window.webkitAudioContext)}catch{li=!1;return}let i=_e.sampleRate*2,e=_e.createBuffer(1,i,_e.sampleRate),t=e.getChannelData(0);for(let m=0;m<i;m++)t[m]=Math.random()*2-1;_e.noise=e,Qn=_e.createGain(),Qn.gain.value=si?0:.8,Qn.connect(_e.destination);let n=(m,x,g,p)=>{let v=_e.createBufferSource();v.buffer=e,v.loop=!0;let _=_e.createBiquadFilter();_.type=m,_.frequency.value=x,g&&(_.Q.value=g);let y=_e.createGain();return y.gain.value=p,v.connect(_),_.connect(y),y.connect(Qn),v.start(),y};ig=n("lowpass",380,0,.04),sg=n("lowpass",110,0,0);let s=_e.sampleRate*4,r=_e.createBuffer(1,s,_e.sampleRate),a=r.getChannelData(0),o=0;for(let m=0;m<s;m++)o=(o+.02*(Math.random()*2-1))/1.02,a[m]=o*3.5;gt.pan=_e.createStereoPanner?_e.createStereoPanner():_e.createGain(),gt.pan.pan&&(gt.pan.pan.value=-.55),gt.bus=_e.createGain(),gt.bus.gain.value=1,gt.bus.connect(gt.pan),gt.pan.connect(Qn);let l=_e.createBufferSource();l.buffer=r,l.loop=!0;let c=_e.createBiquadFilter();c.type="lowpass",c.frequency.value=420,gt.roar=_e.createGain(),gt.roar.gain.value=0,l.connect(c),c.connect(gt.roar),gt.roar.connect(gt.bus),l.start();let h=_e.createBufferSource();h.buffer=e,h.loop=!0;let u=_e.createBiquadFilter();u.type="highpass",u.frequency.value=5200,gt.hiss=_e.createGain(),gt.hiss.gain.value=0,h.connect(u),u.connect(gt.hiss),gt.hiss.connect(gt.bus),h.start(),gt.next=_e.currentTime+.2,rg=n("bandpass",2400,.7,0),ma=_e.createBiquadFilter(),ma.type="lowpass",ma.frequency.value=18e3,ma.connect(Qn),rs=_e.createGain(),rs.gain.value=.55,To=_e.createGain(),To.gain.value=0,rs.connect(To),To.connect(ma);let f=_e.createBiquadFilter();f.type="bandpass",f.frequency.value=1300,f.Q.value=.6,wo=_e.createGain(),wo.gain.value=0,rs.connect(f),f.connect(wo),wo.connect(Qn),Ao=_e.createGain(),Ao.gain.value=0;let d=_e.createBiquadFilter();d.type="lowpass",d.frequency.value=700,Ao.connect(Qn),[110,164.8,220.4,277.2].forEach((m,x)=>{let g=_e.createOscillator();g.type=x%2?"triangle":"sine",g.frequency.value=m,g.detune.value=(x-1.5)*4;let p=_e.createOscillator(),v=_e.createGain();p.frequency.value=.07+x*.03,v.gain.value=.25;let _=_e.createGain();_.gain.value=.35,p.connect(v),v.connect(_.gain),p.start(),g.connect(_),_.connect(d),g.start()}),d.connect(Ao)}R0.addEventListener("click",i=>{i.stopPropagation(),si=!si,li&&Qn.gain.setTargetAtTime(si?0:.8,_e.currentTime,.05),He.el&&(He.el.muted=si),R0.innerHTML="&#9834; sound: "+(si?"off":"on")});function Wt(i,e,t,n,s=0,r){if(!li||si)return;let a=_e.currentTime+s,o=_e.createOscillator(),l=_e.createGain();o.type=t||"sine",o.frequency.setValueAtTime(i,a),r&&o.frequency.exponentialRampToValueAtTime(r,a+e),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n||.15,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l),l.connect(Qn),o.start(a),o.stop(a+e+.05)}var cS=()=>{Wt(90,.6,"sine",.22,0,180),Wt(520,.5,"triangle",.07,.04),[1,1.38,1.76,2.14,2.62].forEach(i=>Wt(1300,.03,"square",.035,i))},hS=()=>{Wt(70,.7,"sine",.3),Wt(140,.5,"sine",.15,.02)},uS=()=>{Wt(330,.4,"sine",.1),Wt(495,.4,"sine",.06,.06)},dS=()=>{if(!li||si||!_e.noise)return;let i=_e.currentTime,e=_e.createBufferSource();e.buffer=_e.noise;let t=_e.createBiquadFilter();t.type="bandpass",t.frequency.setValueAtTime(1800,i),t.frequency.linearRampToValueAtTime(4200,i+.25),t.Q.value=.7;let n=_e.createGain();n.gain.setValueAtTime(1e-4,i),n.gain.linearRampToValueAtTime(.09,i+.08),n.gain.exponentialRampToValueAtTime(1e-4,i+.32),e.connect(t),t.connect(n),n.connect(Qn),e.start(i,Math.random()),e.stop(i+.4)},fS=()=>{Wt(620,.12,"sine",.05,0,1400),Wt(1400,.14,"sine",.035,.1,700)},C0=()=>{Wt(880,.09,"sine",.05,0,1250),Wt(1250,.1,"sine",.04,.08,990)},gt={next:0,burst:0};function Vc(i,e,t){let n=_e.createBufferSource();n.buffer=_e.noise;let s=t?nt(.02,.05):nt(.002,.014),r=_e.createBiquadFilter();r.type=t?"lowpass":"bandpass",r.frequency.value=t?nt(500,1100):nt(1400,6500),r.Q.value=t?.7:nt(.8,3);let a=_e.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(e,i+7e-4),a.gain.exponentialRampToValueAtTime(1e-4,i+s),n.connect(r),r.connect(a),a.connect(gt.bus),n.start(i,Math.random()*1.5),n.stop(i+s+.02)}function pS(i,e){let t=ye==="zoom"?.45:1,n=.75+Math.sin(e*.7)*.12+Math.sin(e*1.9)*.08+Math.random()*.05;if(gt.roar.gain.setTargetAtTime(.32*i*n*t*(1+gt.burst*.8),e,.15),gt.hiss.gain.setTargetAtTime(.012*i*t*(.8+Math.random()*.4),e,.1),gt.burst=Math.max(0,gt.burst-.02),i<.02){gt.next=e+.2;return}for(gt.next<e&&(gt.next=e);gt.next<e+.15;){let s=gt.next,r=Math.random()<.06;if(Vc(s,nt(.03,.22)*i*t*(1+gt.burst),!1),r&&Vc(s+.004,nt(.15,.35)*i*t,!0),Math.random()<.18){let a=2+Math.floor(Math.random()*5);for(let o=1;o<=a;o++)Vc(s+o*nt(.012,.045),nt(.02,.14)*i*t,!1)}gt.next+=-Math.log(1-Math.random())*(.16/(1+gt.burst*3))}}function mS(){if(!li||si)return;gt.burst=1;let i=_e.currentTime;for(let e=0;e<14;e++)Vc(i+e*nt(.01,.05),nt(.08,.3),Math.random()<.3)}function gS(i){let e=0,t=0,n=0;if(Ee.on){let s=Ee.f[Ee.band];if(Ee.band==="FM"){let r=Uo[0],a=99;Uo.forEach(l=>{let c=Math.abs(l.f-s);c<a&&(a=c,r=l)});let o=1-In(.05,.4,a);e=.008+.045*(1-o),r.kind==="music"&&(t=o),r.kind==="ambient"&&(n=o),r.kind==="dead"&&(e+=.01*o)}else{let r=Math.abs(s-Z0),a=1-In(0,.9,r);if(e=.05-a*.025,!Ee.triggered&&a>.05&&i>Ee.nextBleed&&(Ee.nextBleed=i+nt(2.5,4.5),[0,.3].forEach(o=>Wt(1e3,.14,"sine",.05*a,o)),a>.6&&Math.random()<.4&&"speechSynthesis"in window))try{let o=new SpeechSynthesisUtterance("four... seven");o.rate=.7,o.pitch=.3,o.volume=.12*a,speechSynthesis.speak(o)}catch{}Ee.triggered&&Ft>.5&&i>Df&&(Df=i+nt(24,34),ag())}}rg.gain.setTargetAtTime(e*(.75+Math.random()*.5),i,.02),He.radio=t>.05,ih(),To.gain.setTargetAtTime(He.boom?1:0,i,.05),wo.gain.setTargetAtTime(t*1.4,i,.08),Ao.gain.setTargetAtTime(n*.09,i,.3)}function bS(i){if(!Ee.on||Ee.band!=="SW"||Ee.triggered){Ee.lock=0;return}Math.abs(Ee.f.SW-Z0)<.05?(Ee.lock+=i,Ee.lock>2.5&&(Ee.triggered=!0,li&&(ag(),Df=_e.currentTime+30),setTimeout(()=>{Ee.triggered&&(Us=1)},3800))):Ee.lock=0}function xS(){let i=_e.currentTime,e=_e.createOscillator(),t=_e.createGain();e.type="sawtooth",e.frequency.setValueAtTime(nt(70,110),i),e.frequency.linearRampToValueAtTime(nt(45,60),i+.5);let n=_e.createBiquadFilter();n.type="lowpass",n.frequency.value=320,t.gain.setValueAtTime(1e-4,i),t.gain.exponentialRampToValueAtTime(.05,i+.08),t.gain.exponentialRampToValueAtTime(1e-4,i+.6),e.connect(n),n.connect(t),t.connect(Qn),e.start(i),e.stop(i+.65)}function ag(){[0,.35,.7].forEach(i=>Wt(1e3,.18,"sine",.05,i)),!(!("speechSynthesis"in window)||si)&&setTimeout(()=>{try{let i=new SpeechSynthesisUtterance(Ge.radioNumbers);i.rate=.72,i.pitch=.3,i.volume=.35,speechSynthesis.speak(i)}catch{}},1300)}function vS(i){if(!li||si)return;let e=_e.currentTime,t=1-In(.2,.55,i),n=In(.3,.9,i);pS(t,e),ig.gain.setTargetAtTime(.035+n*.1,e,.5),sg.gain.setTargetAtTime(n*.05,e,.8),gS(e),i>.45&&Math.random()<.0015&&xS(),Ea=1-n*.24,ma.frequency.setTargetAtTime(600+17400*(1-n),e,.3),He.el&&(He.el.preservesPitch=!1,He.el.playbackRate=Ea)}var He={boom:!1,radio:!1,playing:!1,el:null,an:null,idx:0,next:0,step:0,lastKick:-9,data:null},_S=172,P0=60/_S/4,yS=i=>440*Math.pow(2,(i-69)/12);function MS(i){let e=_e.createOscillator(),t=_e.createGain();e.frequency.setValueAtTime(155*Ea,i),e.frequency.exponentialRampToValueAtTime(42*Ea,i+.12),t.gain.setValueAtTime(.9,i),t.gain.exponentialRampToValueAtTime(.001,i+.3),e.connect(t),t.connect(rs),e.start(i),e.stop(i+.32),He.lastKick=i}function Uf(i,e,t,n,s){let r=_e.createBufferSource();r.buffer=_e.noise;let a=_e.createBiquadFilter();a.type=e,a.frequency.value=t;let o=_e.createGain();o.gain.setValueAtTime(s,i),o.gain.exponentialRampToValueAtTime(.001,i+n),r.connect(a),a.connect(o),o.connect(rs),r.start(i,Math.random()),r.stop(i+n+.02)}function SS(i){Uf(i,"bandpass",1900,.17,.5);let e=_e.createOscillator(),t=_e.createGain();e.frequency.value=190,t.gain.setValueAtTime(.25,i),t.gain.exponentialRampToValueAtTime(.001,i+.1),e.connect(t),t.connect(rs),e.start(i),e.stop(i+.12)}function ES(i,e,t){let n=_e.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(260,i),n.frequency.linearRampToValueAtTime(520,i+t*.5),n.frequency.linearRampToValueAtTime(240,i+t),n.Q.value=6;let s=_e.createGain();s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(.16,i+.02),s.gain.setValueAtTime(.16,i+t-.05),s.gain.exponentialRampToValueAtTime(1e-4,i+t);for(let r of[-9,9]){let a=_e.createOscillator();a.type="sawtooth",a.frequency.value=yS(e)*Ea,a.detune.value=r,a.connect(n),a.start(i),a.stop(i+t+.02)}n.connect(s),s.connect(rs)}function TS(){for(He.next<_e.currentTime&&(He.next=_e.currentTime);He.next<_e.currentTime+.12;){let i=He.step,e=i%16,t=He.next;(e===0||e===10)&&MS(t),(e===4||e===12)&&SS(t),e===7&&Math.random()<.5&&Uf(t,"bandpass",1900,.08,.18),e%2===0&&Uf(t,"highpass",7500,.03,e%4===2?.09:.05),e===0&&ES(t,[31,31,29,34][Math.floor(i/16)%4],P0*14),He.next+=P0/Ea,He.step=(He.step+1)%64}}function wS(){if(nh(),!li)return;_e.state==="suspended"&&_e.resume();let i=Ct.music||[];if(i.length){if(!He.el){He.el=new Audio(i[0]),He.el.crossOrigin="anonymous",He.el.muted=si;let e=_e.createMediaElementSource(He.el);He.an=_e.createAnalyser(),He.an.fftSize=256,He.data=new Uint8Array(He.an.frequencyBinCount),e.connect(He.an),He.an.connect(rs),He.el.addEventListener("ended",()=>{He.idx=(He.idx+1)%i.length,He.el.src=i[He.idx],He.el.play()})}He.el.play().catch(()=>{})}else He.next=_e.currentTime+.05,He.step=0;He.playing=!0}function AS(){He.playing=!1,He.el&&He.el.pause()}function ih(){let i=He.boom||He.radio;i&&!He.playing?wS():!i&&He.playing&&AS()}function RS(){return!He.playing||!li?0:He.an?(He.an.getByteFrequencyData(He.data),(He.data[1]+He.data[2])/510):Math.exp(-(_e.currentTime-He.lastKick)*9)}var qt=(i,e,t)=>new L(i,e,t),Ta={pos:qt(.4,1.5,3.05),tgt:qt(-.55,1,-1.3)},Wc=qt(yi.x,Ke.top+.23,yi.z+.033),wa={pos:qt(),tgt:Wc.clone()},CS={pos:qt(fe.x+.05,fe.y-.02,ue.z0+.95),tgt:qt(fe.x-1.2,fe.y+.1,-10)};function rp(){let i=Ci.degToRad(Pt.fov),e=Math.tan(i/2),t=Pt.aspect,n=.268/2/e/.84,s=.352/2/(e*t)/.9;wa.pos.set(Wc.x,Wc.y,Wc.z+Math.max(n,s,.24))}var bt={pos:Ta.pos.clone(),tgt:Ta.tgt.clone(),anim:null},ye="room",sh=0,Nf=0,Go=0,og=0;function Bs(i,e,t=1.25){let n=bt.pos.clone(),s=bt.tgt.clone(),r=0;ye="busy",bt.anim={step(a){r=Math.min(1,r+a/t);let o=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;bt.pos.lerpVectors(n,i.pos,o),bt.tgt.lerpVectors(s,i.tgt,o),r>=1&&(bt.anim=null,e&&e())}}}var yo=qt(0,0,0),Ff=qt(0,0,0),Of=qt(0,1,0);function PS(i){let e=0,t=0;E0||(e=Math.sin(i*.6)*.012+Math.sin(i*.27)*.008,t=Math.cos(i*.45)*.008);let n=ye==="room"?1:0;Pt.position.copy(bt.pos),Pt.position.x+=e*n,Pt.position.y+=t*n,yo.copy(bt.tgt).sub(bt.pos);let s=yo.length();Ff.crossVectors(yo,Of).normalize(),yo.copy(bt.tgt).addScaledVector(Ff,Math.tan(sh)*s).addScaledVector(Of,Math.tan(Nf)*s),Pt.lookAt(yo),ye==="room"&&!E0&&Pt.rotateZ(Math.sin(i*.5)*.004)}var hr=dt("prompt"),lg=dt("back"),cg=dt("mood"),IS=dt("slider"),kf=dt("secret"),Is=dt("cursor"),LS=Is.querySelector(".lab"),Sf=dt("hint"),Us=0,Ft=0,Xc=0,Ef=!1,Bf=0,Hf=0,zf=0,Gf=0,Ro=0,ss=0;IS.addEventListener("input",i=>{Us=i.target.value/100});function oh(i){kf.textContent=i,kf.style.opacity="1",Xc=performance.now()+3600}var nT=Ge.fragments;function DS(i){let e=!i.userData.found;i.userData.found=!0,US(Ge.fragments[i.userData.pid%Ge.fragments.length]),Wt(320,.12,"triangle",.04),e&&ep()>=Os.length&&setTimeout(()=>oh(Ge.allFound),400)}var rh=dt("note");function US(i){rh.querySelector(".txt").textContent=i,rh.classList.add("on")}rh.addEventListener("click",()=>rh.classList.remove("on"));function Yt(){document.body.classList.toggle("zoomed",ye==="zoom"),hr.classList.toggle("hide",ye!=="room"&&ye!=="radio"&&ye!=="book"),cg.classList.toggle("hide",ye!=="room"),lg.classList.toggle("on",ye==="zoom"||ye==="window"||ye==="radio"||ye==="book"),hr.textContent=ye==="radio"?Oi?Ge.radioHelpTouch:Ge.radioHelp:ye==="book"?Oi?Ge.bookHelpTouch:Ge.bookHelp:Ge.prompt}function hg(){ye==="room"&&(lt==="idle"&&(lt="off"),rp(),Yt(),hr.classList.add("hide"),cg.classList.add("hide"),zo||document.body.classList.add("cine"),Bs(wa,()=>{ye="zoom",Yt(),ss=1,zo?(lt="welcome",Q0=performance.now(),uS()):(lt="boot",Ds=performance.now(),lr=!1,cS())}))}function lh(){ye==="zoom"&&(pg(),document.body.classList.remove("cine"),ss=0,lt="off",$f(),Wt(220,.25,"sine",.06,0,60),Bs(Ta,()=>{ye="room",Yt()}),Yt())}var ur={pos:qt(0,0,0),tgt:qt(0,0,0)};function ap(){let i=qt(2.18,1.966,-2.3),e=qt(Math.sin(-.2),0,Math.cos(-.2)),t=Ci.degToRad(Pt.fov),n=Pt.aspect,s=Math.max(.42,.2/(Math.tan(t/2)*n),.14/Math.tan(t/2));ur.tgt.copy(i),ur.pos.copy(i).addScaledVector(e,s).add(qt(0,.03,0))}function NS(){ye==="room"&&(ap(),Bs(ur,()=>{ye="radio",Yt()},1.1),Yt(),hr.classList.add("hide"))}function op(){ye==="radio"&&(Bs(Ta,()=>{ye="room",Yt()},1.1),Yt())}function FS(i){if(Wt(i==="power"?520:900,.05,"square",.03),i==="power"||!Ee.on)Ee.on=!Ee.on,Ee.on||(Ee.triggered=!1,Us=0);else if(i==="band")Ee.band=Ee.band==="FM"?"SW":"FM",Ee.lock=0;else if(i==="station"&&Ee.band==="FM"){let e=Uo.findIndex(t=>t.f>Ee.f.FM+.05);Ee.f.FM=(e<0?Uo[0]:Uo[e]).f}Jf()}var dr={pos:qt(0,0,0),tgt:qt(0,0,0)};function lp(){let i=Oe.pos.clone().add(qt(0,.015,0)),e=qt(Math.sin(Oe.rot),0,Math.cos(Oe.rot)),t=Math.tan(Ci.degToRad(Pt.fov)/2),n=Pt.aspect,s=Math.max(.3,(Oe.W+.03)/(t*n)/.92,(Oe.H/2+.02)/t/.68);dr.tgt.copy(i),dr.pos.copy(i).addScaledVector(e,s*.34).add(qt(0,s*.94,0))}function OS(){ye==="room"&&(lp(),Bs(dr,()=>{ye="book",Yt()},1.2),Yt(),hr.classList.add("hide"))}function cp(){ye==="book"&&(Bs(Ta,()=>{ye="room",Yt()},1.2),Yt())}function ug(){ye==="room"&&(Bs(CS,()=>{ye="window",Yt()},1.6),Yt())}function ch(){ye==="window"&&(Bs(Ta,()=>{ye="room",Yt()},1.4),Yt())}lg.addEventListener("click",i=>{if(i.stopPropagation(),ye==="window")return ch();if(ye==="radio")return op();if(ye==="book")return cp();if(ye==="zoom"&&["terminal","about","void","credits"].includes(lt))return ks();lh()});var Aa=new mc,ar=new ie;function Oo(i,e){ar.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),Aa.setFromCamera(ar,Pt);let t=Aa.intersectObjects(z0,!1);for(let n of t){let s=n.object,r=!0;for(;s;){if(!s.visible){r=!1;break}s=s.parent}if(r)return n}return null}function kS(i,e){let t=i-.5,n=e-.5,s=t*t+n*n,r=1+.09*s;return[.5+t*r,.5+n*r]}function BS(i,e){ar.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),Aa.setFromCamera(ar,Pt);let t=Aa.intersectObject(sr,!1)[0];if(!t||!t.uv)return null;let[n,s]=kS(t.uv.x,t.uv.y);return{x:n*pn,y:(1-s)*Ot}}function dg(i,e){if(nh(),_e&&_e.state==="suspended"&&_e.resume(),ye==="window")return ch();if(ye==="book"){let r=Oo(i,e),a=r&&r.object.userData.kind==="book"?r.object.userData.part:null;a==="right"?Qc(1):a==="left"?Qc(-1):cp();return}if(ye==="radio"){let r=Oo(i,e);r&&r.object.userData.kind==="radio"?FS(r.object.userData.part||"power"):op();return}if(ye==="zoom"){if(lt==="boot"){lr||(lr=!0,performance.now()-Ds-320<ni&&(Ds=performance.now()-320-ni),hS());return}if(lt==="welcome"||lt==="about"||lt==="void"||lt==="credits")return ks();if(lt==="terminal"){fg();return}let r=BS(i,e);if(!r)return lh();let a=r.y+ti;if(ns&&r.x>=ns.x&&r.x<=ns.x+ns.w&&a>=ns.y&&a<=ns.y+ns.h){bg(Ct.business),oh("email copied"),Wt(880,.06,"sine",.05);return}let o=If.find(c=>r.x>=c.x&&r.x<=c.x+c.w&&a>=c.y&&a<=c.y+c.h);if(o)return ng(o.link);let l=Lf.find(c=>r.x>=c.x&&r.x<=c.x+c.w&&a>=c.y&&a<=c.y+c.h);return l?tg(l.id):void 0}if(ye!=="room")return;let t=Oo(i,e);if(!t)return;let n=t.object.userData.kind,s=t.object;n==="note"&&Ft<.55||(n==="screen"?hg():n==="note"?Ft>.55&&DS(s.userData.root):n==="radio"?NS():n==="fire"?(Bf=performance.now()+700,mS()):n==="fox"?(Hf=performance.now()+650,C0()):n==="slug"?(zf=performance.now()+650,C0()):n==="book"?OS():n==="plush"?(Gf=performance.now()+550,fS()):n==="boombox"?(nh(),He.boom=!He.boom,ih(),Wt(1200,.04,"square",.04)):n==="window"&&ug())}var HS={note:i=>Ge.labels.note,radio:i=>{let e=i.userData.part||"power",t=Ee.on?"  "+Ee.band+" "+Ee.f[Ee.band].toFixed(1):"";return Ee.on?e==="band"?"band"+t:e==="station"?(Ee.band==="FM"?"next station":"fm only")+t:Ge.labels.radioOff+t:Ge.labels.radioOn},screen:()=>zo?Ge.labels.screenOn:Ge.labels.screenOff,pearl:i=>i.userData.found?"\xB7\xB7\xB7":Ge.labels.pearl,fire:()=>Ge.labels.fire,fox:()=>Ge.labels.fox,slug:()=>Ge.labels.slug,plush:()=>Ge.labels.plush||"squeeze",book:i=>ye==="book"?i.userData.part==="right"?Ge.labels.bookNext:Ge.labels.bookPrev:Ge.labels.book,boombox:()=>He.boom?Ge.labels.stop:Ge.labels.play,window:()=>Ge.labels.window},I0={note:15327433,radio:16752704,screen:10123983,pearl:4183748,fire:16747056,fox:14254655,slug:15328214,plush:12109008,book:15129798,boombox:8380576,window:10469608},ko=innerWidth/2,Bo=innerHeight/2,Tf=null,wf=new un,L0=qt(0,0,0),D0=qt(0,0,0);function zS(){if(Oi||ye!=="room"&&ye!=="radio"&&ye!=="book"||bt.anim){vi.hover.visible=!1,Is.classList.remove("act"),Tf=null;return}let i=Oo(ko,Bo);if(ye==="radio"&&i&&i.object.userData.kind!=="radio"&&(i=null),ye==="book"&&i&&!(i.object.userData.kind==="book"&&(i.object.userData.part==="left"||i.object.userData.part==="right"))&&(i=null),i&&!(i.object.userData.kind==="note"&&Ft<.55)){let e=i.object.userData.kind,t=i.object.userData.root;Tf=e,wf.setFromObject(t),wf.getCenter(L0),wf.getSize(D0),vi.hover.position.copy(L0),vi.hover.scale.setScalar(Math.min(1.6,Math.max(.28,D0.length()*1.1))),vi.hover.material.color.set(I0[e]||16777215),vi.hover.material.opacity=e==="window"?.12:.35,vi.hover.visible=!0,Is.classList.add("act"),Is.style.borderColor="#"+new Le(I0[e]).getHexString(),LS.textContent=ye==="room"&&e==="radio"?Ge.labels.radio:HS[e](i.object),(ye==="radio"||ye==="book")&&(vi.hover.visible=!1)}else vi.hover.visible=!1,Is.classList.remove("act"),Is.style.borderColor="",Tf=null}var fn=null;Ma.addEventListener("pointerdown",i=>{if(fn={x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,yaw:Go,scroll:ti,moved:0,radio:!1,f0:0},ye==="radio"&&Ee.on){let e=Oo(i.clientX,i.clientY);e&&e.object.userData.kind==="radio"&&(fn.radio=!0,fn.f0=Ee.f[Ee.band])}Ma.setPointerCapture?.(i.pointerId)});Ma.addEventListener("pointermove",i=>{if(ko=i.clientX,Bo=i.clientY,Is.style.left=ko+"px",Is.style.top=Bo+"px",!Oi&&i.pointerType==="mouse"&&ye==="room"&&(Go=(ko/innerWidth-.5)*.5,og=-(Bo/innerHeight-.5)*.18),fn){let e=i.clientX-fn.sx,t=i.clientY-fn.sy;if(fn.moved=Math.max(fn.moved,Math.hypot(e,t)),fn.radio){if(fn.moved>6){let n=Math.round((fn.f0+Math.round(e/14)*.1)*10)/10;n!==Ee.f[Ee.band]&&(Qf(n-Ee.f[Ee.band]),Wt(1500,.015,"square",.015))}}else i.pointerType!=="mouse"&&ye==="room"&&(Go=Ci.clamp(fn.yaw-e/innerWidth*1.6,-.75,.75));ye==="zoom"&&lt==="desktop"&&i.pointerType!=="mouse"&&(ti=Ci.clamp(fn.scroll-t*(Ot/(innerHeight*.8)),0,Math.max(0,ba-Ot)),Wo())}});Ma.addEventListener("pointerup",i=>{fn&&fn.moved<8&&dg(i.clientX,i.clientY),fn=null});Ma.addEventListener("pointercancel",()=>{fn=null});addEventListener("wheel",i=>{if(ye==="radio"&&Ee.on){i.preventDefault(),Qf(i.deltaY>0?-.1:.1),Wt(1500,.015,"square",.015);return}ye!=="zoom"||lt!=="desktop"||(i.preventDefault(),ti=Ci.clamp(ti+i.deltaY*.8,0,Math.max(0,ba-Ot)),Wo())},{passive:!1});var or=dt("kb");function fg(){Oi&&(or.value="",or.focus())}function pg(){or.blur()}or.addEventListener("input",()=>{lt==="terminal"&&(Hn=(Hn+or.value).slice(0,80),or.value="",cr(!0))});addEventListener("keydown",i=>{if(i.key==="Escape"&&ye==="radio"){op();return}if(i.key==="Escape"&&ye==="book"){cp();return}if(ye==="book"&&(i.key==="ArrowRight"||i.key==="ArrowLeft")){Qc(i.key==="ArrowRight"?1:-1);return}if(i.key==="Escape"){ye==="zoom"&&["terminal","about","void","credits"].includes(lt)?ks():ye==="zoom"?lh():ye==="window"&&ch();return}if(!(ye!=="zoom"||lt!=="terminal"))if(i.key==="Enter"){let e=Hn;Hn="",$0(e),i.preventDefault()}else i.key==="Backspace"?(Hn=Hn.slice(0,-1),i.preventDefault(),cr(!0)):i.key.length===1&&!i.ctrlKey&&!i.metaKey&&document.activeElement!==or&&(Hn=(Hn+i.key).slice(0,80),cr(!0))});var Ra=dt("enter"),mg=dt("lite"),gg=dt("litelink"),Vf=!1,Xo=fr.has("lite");function GS(){let i=(t,n)=>{let s=document.querySelector(t);s&&n!=null&&(s.textContent=n)};i("#enter .big",Ge.enterTitle),i("#enter .sub",Ge.enterSub),i("#litelink",Ge.liteLink),i("#lite-back",Ge.liteBack),i("#prompt",Ge.prompt),i("#mood .l",Ge.sliderLeft),i("#mood .r",Ge.sliderRight);let e=document.querySelector("#lite .cred");if(e){e.innerHTML="";let t=document.createElement("div");t.textContent="3D models: "+Wf.map(a=>a[0]+" by "+a[1]+" ("+a[2]+")").join(" \xB7 ")+".",e.appendChild(t);let n=document.createElement("div");n.append("Licenses: ");let s=document.createElement("a");s.href=Xf,s.target="_blank",s.rel="noopener",s.textContent="CC BY 4.0",n.append(s," \xB7 via ");let r=document.createElement("a");r.href=qf,r.target="_blank",r.rel="noopener",r.textContent="Khronos glTF Sample Assets",n.append(r,". Compressed for web (modified)."),e.appendChild(n)}}function bg(i,e){let t=()=>{if(e){let n=e.textContent;e.textContent="copied",setTimeout(()=>e.textContent=n,1400)}};try{navigator.clipboard.writeText(i).then(t,()=>{U0(i),t()})}catch{U0(i),t()}}function U0(i){let e=document.createElement("textarea");e.value=i,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch{}e.remove()}["biz","lite-biz"].forEach(i=>{let e=dt(i);if(e){if(!Ct.business){e.hidden=!0;return}e.querySelector(".mail").textContent=Ct.business,e.addEventListener("click",t=>t.stopPropagation()),e.querySelector(".copy").addEventListener("click",t=>{t.stopPropagation(),bg(Ct.business,t.currentTarget)})}});function VS(){let i=Ct.work,e=dt("work"),t=dt("worklink");if(!i){t&&(t.hidden=!0);return}dt("work-title").textContent=i.title||"work with me",dt("work-sub").textContent=i.subtitle||"",dt("work-status").textContent=i.status||"",dt("work-status").hidden=!i.status;let n=(r,a)=>{let o=dt(r);o.innerHTML="",(a||[]).forEach(l=>{let c=document.createElement("li");c.textContent=l,o.appendChild(c)}),o.parentElement.hidden=!(a&&a.length)};n("work-take",i.take),n("work-made",i.made),dt("work-bigger").textContent=i.bigger||"",dt("work-price").textContent=i.price||"";let s=dt("work-btns");s.innerHTML="",(i.buttons||[]).filter(r=>r.url).forEach(r=>{let a=document.createElement("a");a.href=r.url,a.target="_blank",a.rel="noopener",a.textContent=r.label,s.appendChild(a)}),i.label&&t&&(t.innerHTML="",t.append(i.label)),t.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e.classList.add("show")}),dt("work-back").addEventListener("click",r=>{r.stopPropagation(),e.classList.remove("show")}),e.addEventListener("click",r=>r.stopPropagation())}VS();GS();function WS(){dt("lite-name").textContent=Ct.name||"Schurik",dt("lite-hd").textContent=[Ct.handle,Ct.pronouns,"\u{1F98A}"].filter(Boolean).join(" \xB7 "),dt("lite-tag").textContent=Ct.tagline||"";let i=dt("lite-links");i.innerHTML="",ya.forEach(e=>{let t=document.createElement("a");t.href=e.url,t.target="_blank",t.rel="noopener",t.innerHTML=`<i style="background:${e.color||"#888"}"></i>${e.label}<span>\u2197</span>`,i.appendChild(t)})}WS();function xg(){Xo=!0,mg.classList.add("show"),Ra.style.display="none",dt("load").classList.add("gone")}Xo&&xg();setTimeout(()=>gg.classList.add("show"),3200);gg.addEventListener("click",i=>{i.stopPropagation(),xg()});dt("lite-back").addEventListener("click",()=>{mg.classList.remove("show"),Xo=!1,Ra.style.display="flex",KS=performance.now(),window.__ready&&!Ca&&(Ca=!0,requestAnimationFrame(up))});function XS(){Vf||(Vf=!0,nh(),Ra.classList.add("gone"),setTimeout(()=>Ra.style.display="none",1e3),Sf.textContent=Oi?Ge.hintTouch:Ge.hintDesktop,setTimeout(()=>Sf.classList.add("on"),1200),setTimeout(()=>Sf.classList.remove("on"),7e3),Yt())}Ra.addEventListener("click",XS);var N0=(()=>{let i=[];[4,7,2].forEach((t,n)=>{for(let s=0;s<t;s++)i.push([1,.42]),i.push([0,s<t-1?.38:n<2?1.7:4.2])});let e=i.reduce((t,n)=>t+n[1],0);return{seq:i,total:e}})();function qS(i){let e=i%N0.total;for(let[t,n]of N0.seq){if(e<n)return!!t;e-=n}return!1}function jS(i,e){let t=1-In(.12,.55,i),n=In(.3,.9,i);J0(i),zn.toneMappingExposure=1.12-n*.27,$.environmentIntensity=.06*(1-n)+.012,be.amb.intensity=.35*(1-n)+.03,be.amb.color.setRGB(.165-n*.06,.141-n*.03,.251+n*.05),be.sconce.intensity=4.5*t,be.table&&(be.table.intensity=1.5*t,be.tableShade.material.emissiveIntensity=.35*t+.02,be.tableBulb.material.emissiveIntensity=3*t+.05,be.sill.intensity=.35*t*(.9+Math.sin(e*7)*.08)),be.fairy.intensity=.9*t,be.candle.intensity=.6*t*(.9+Math.sin(e*9)*.06),Do&&(Do.material.emissiveIntensity=6*t+.02),Io&&(Io.material.emissiveIntensity=(4+Math.sin(e*1.1)*.6)*t+.02),Fi&&(Fi.material.uniforms.uInt.value=1.2*t);let s=In(.45,.7,i),r=Math.random()<.08?0:Math.sin(e*23)>-.2?1:.3;if(Eo.material.emissiveIntensity=s*r*4,be.flicker.intensity=s*r*.35,be.moon.intensity=ri?.12*(1-n*.7):.55*(1+n*.2),Lo&&(Lo.material.emissiveIntensity=(3.5+Math.sin(e*1.4)*.5)*t+.02),be.chest&&(be.chest.intensity=.35*t*(.9+Math.sin(e*8)*.06)),ye==="room"){let a=i>.5?Ge.lateHint:Ge.prompt;hr.textContent!==a&&(hr.textContent=a)}$.fog.color.setRGB(.039*(1-n)+.018*n,.027*(1-n)+.024*n,.024*(1-n)+.045*n),$.fog.density=.045+n*.02,$n.intensity=(ye==="room"?1:0)*In(.4,.7,i)*26,Hc.material.emissiveIntensity=Ee.on?1.2:0,be.radioFill&&(be.radioFill.intensity+=((ye==="radio"?.35:0)-be.radioFill.intensity)*.08),No.visible=qS(e),No.material.color.setRGB(1,.08,.05).multiplyScalar(1.5+n*2.5),th&&(th.strength=.55+n*.15),Fs&&(Fs.uniforms.uVoid.value=n*.75,Fs.uniforms.uGlitch.value=i>.94?(i-.94)/.06*(.3+Math.random()*.4):0),i>.85&&!Ef&&(Ef=!0,oh(tp()?Ge.signalFull:Ge.signalPartial)),i<.7&&(Ef=!1)}function hp(){let i=innerWidth,e=innerHeight;Pt.aspect=i/e,Pt.fov=i/e<.8?68:52,Pt.updateProjectionMatrix(),zn.setSize(i,e),Jn&&(Jn.setSize(i,e),Fs.uniforms.uRes.value.set(i,e));let t=i<700||i/e<.9?1.8:1;t!==Re&&(Re=t,YS()),rp(),ye==="zoom"&&!bt.anim&&(bt.pos.copy(wa.pos),bt.tgt.copy(wa.tgt)),ap(),ye==="radio"&&!bt.anim&&(bt.pos.copy(ur.pos),bt.tgt.copy(ur.tgt)),lp(),ye==="book"&&!bt.anim&&(bt.pos.copy(dr.pos),bt.tgt.copy(dr.tgt))}function YS(){lt==="desktop"?Wo():lt==="terminal"?cr(!0):lt==="about"?np():lt==="void"?ip():lt==="credits"&&sp()}addEventListener("resize",hp);var F0=new oa,KS=performance.now(),Af=0,kc=0,O0=!1,k0=-1,Ca=!1;function up(i){if(Xo){Ca=!1;return}Ca=!0,requestAnimationFrame(up);let e=Math.min(.05,F0.getDelta()),t=F0.elapsedTime;Ft+=(Us-Ft)*Math.min(1,e*(Us>Ft?.45:.9)),Math.abs(Us-Ft)<.002&&(Ft=Us);let n=1-Ft;bS(e),jS(Ft,t),vS(Ft),bt.anim&&bt.anim.step(e),V1(e),Oe.light&&(Oe.light.intensity+=((ye==="book"?.5+Ft*.4:0)-Oe.light.intensity)*Math.min(1,e*3)),sh+=(Go*(ye==="room"?1:0)-sh)*Math.min(1,e*4),Nf+=(og*(ye==="room"?1:0)-Nf)*Math.min(1,e*4),PS(t);let s=i<Bf?(Bf-i)/700:0,r=.82+Math.sin(t*3.1)*.06+Math.sin(t*7.7)*.04+Math.sin(t*13.3)*.025,a=1-In(.2,.55,Ft),o=s*a;if(be.fire.intensity=(9*r+o*14)*a,be.fireFill.intensity=2.2*r*a,G0.forEach(d=>{d.visible=a>.01,d.material.uniforms.uTime.value=t,d.material.uniforms.uInt.value=(1+o*.9)*a,d.scale.y=(1+o*.45)*(.4+a*.6)}),jc.uniforms.uTime.value=t,jc.uniforms.uInt.value=(.5+.5*a+o)*Math.max(a,0),Fi&&(Fi.material.uniforms.uTime.value=t*1.3,Fi.lookAt(Pt.position.x,Fi.position.y,Pt.position.z)),W0.forEach((d,m)=>{d.visible=n>.02,d.material.uniforms.uTime.value=t*1.3+m,d.material.uniforms.uInt.value=1.2*(1-In(.12,.55,Ft)),d.lookAt(Pt.position.x,d.position.y,Pt.position.z)}),Ii&&Ft>.5)Ii.s.rotation.z=-.24*Math.PI*2,Ii.m.rotation.z=-(14/60)*Math.PI*2,Ii.h.rotation.z=-(3.23/12)*Math.PI*2;else if(Ii){let d=new Date,m=d.getSeconds()+d.getMilliseconds()/1e3,x=d.getMinutes()+m/60,g=d.getHours()%12+x/60;Ii.s.rotation.z=-m/60*Math.PI*2,Ii.m.rotation.z=-x/60*Math.PI*2,Ii.h.rotation.z=-g/12*Math.PI*2}if(Jc&&(Jc.uniforms.uTime.value=t),_a){let d=_a.attributes.position.array;for(let m=0;m<Zc.length;m++)d[m*3+1]+=Zc[m]*e*(Math.sin(t*.3+m)>0?1:-.6),d[m*3]+=Math.sin(t*.21+m*1.7)*e*.012,d[m*3+1]>2.7&&(d[m*3+1]=.3),d[m*3+1]<.2&&(d[m*3+1]=2.6);_a.attributes.position.needsUpdate=!0}let l=Po.attributes.position.array;for(let d=0;d<Yc.length;d++)l[d*3+1]+=Yc[d]*e*(1+s*2),l[d*3]+=Math.sin(t*2+d)*e*.03,l[d*3+1]>.86&&(l[d*3+1]=.18,l[d*3]=Ui.x+nt(-.15,.15));Po.attributes.position.needsUpdate=!0;let c=Co.attributes.position.array,h=.25+Ft*1.8,u=1+Ft*1.4;for(let d=0;d<qc.length;d++)c[d*3+1]-=qc[d]*e*u,c[d*3]+=(Math.sin(t*.7+d)*.08+h*.3)*e,c[d*3+1]<-.35&&(c[d*3+1]=7,c[d*3]=nt(-14,6)),c[d*3]>6&&(c[d*3]=-14);if(Co.attributes.position.needsUpdate=!0,zc.visible){let d=Fo.attributes.position.array;for(let m=0;m<eh.length;m++)d[m*3+1]-=eh[m]*e,d[m*3+2]+=e*.25,d[m*3]+=Math.sin(t+m)*e*.05,d[m*3+1]<.02&&(d[m*3+1]=fe.y-.25+nt(0,.3),d[m*3+2]=ue.z0+.12,d[m*3]=fe.x-.35+nt(-.2,.25));Fo.attributes.position.needsUpdate=!0}if($n.intensity>0&&(ar.set(ko/innerWidth*2-1,-(Bo/innerHeight)*2+1),Oi&&ar.set(0,-.1),Aa.setFromCamera(ar,Pt),$n.position.copy(Pt.position).addScaledVector(Ff,.12).addScaledVector(Of,-.1),$n.target.position.copy(Pt.position).addScaledVector(Aa.ray.direction,4),$n.target.updateMatrixWorld()),ei.geo){ei.points.visible=Ft<.4;let d=ei.geo.attributes.position.array;for(let m=0;m<ei.v.length;m++)d[m*3+1]+=ei.v[m]*e,d[m*3]+=Math.sin(t*1.5+m)*e*.01,d[m*3+1]>Ke.top+.36&&(d[m*3+1]=Ke.top+.07,d[m*3]=Mo.x+nt(-.02,.02));ei.geo.attributes.position.needsUpdate=!0}if($c&&$c.update(e),_i){let d=i<Hf?Math.sin((1-(Hf-i)/650)*Math.PI):0;_i.position.y=q0+d*.05,_i.scale.setScalar(.0042*(1+d*.04))}if(is){let d=i<Gf?Math.sin((1-(Gf-i)/550)*Math.PI):0;is.scale.set(So*(1+d*.14),So*(1-d*.16),So*(1+d*.14)),is.position.y=Y0-1.857*So*d*.16}if(dn){let d=i<zf?Math.sin((1-(zf-i)/650)*Math.PI):0,m=1+Math.sin(t*1.6)*.025;dn.scale.set(1.15*(1+d*.12),1.15*(m-d*.1),1.15*(1+d*.12))}He.playing&&li&&!He.el&&TS();let f=RS();if(V0.forEach(d=>d.emissiveIntensity=.15*(1-In(.3,.6,Ft))+(He.boom?.8+f*2.5:0)),ye==="room"&&!bt.anim&&(Ft>.55&&lt==="off"?(lt="idle",ss=1):Ft<.5&&lt==="idle"&&(lt="off",ss=0,$f())),lt==="idle"&&Math.floor(i/600)!==Math.floor((i-e*1e3)/600)&&aS(Math.floor(i/600)%2===0),Ro+=(ss-Ro)*Math.min(1,e*(ss?3:6)),ga.uniforms.uOn.value=Ro,ga.uniforms.uTime.value=t,ga.uniforms.uBright.value=1.15*(1+Ft*.25),Kc.emissive.set(ss?4259696:16724e3),Kc.emissiveIntensity=ss?2.5:.6,be.screen.intensity=Ro*.35*(1+Ft),ye==="zoom"&&lt==="boot"){let d=i-Ds;!lr&&d-320>ni&&(Ds=i-320-ni),rS(i-Ds),lr&&i-Ds-320>ni+2e3&&eg()}else if(ye==="zoom"&&lt==="welcome"){let d=i-Q0;oS(d),d>1900&&ks()}else if(lt==="terminal"&&Math.floor(i/500)!==Math.floor((i-e*1e3)/500))cr(Math.floor(i/500)%2===0);else if(lt==="desktop"){let d=new Date().getMinutes();d!==k0&&(k0=d,Wo())}Mi&&(ga.uniforms.map.value.needsUpdate=!0,Mi=!1),Xc&&i>Xc&&(kf.style.opacity="0",Xc=0),zS(),Fs.uniforms.uTime.value=t,Fs.uniforms.uVig.value=ye==="zoom"?.85:.6,Jn.render(e),Af++,kc+=e,kc>4&&!O0&&!fr.has("shot")&&(Af/kc<32&&(O0=!0,Di&&(Di.enabled=!1),Ls=Math.max(1,Ls*.75),zn.setPixelRatio(Ls),Jn.setPixelRatio(Ls),hp()),Af=0,kc=0)}async function ZS(){P1(),I1(),L1(),D1(),U1(),N1(),O1(),B1(),W1(),Y1(),J1(),sS(),$f(),await j1();try{await Promise.race([Promise.all([document.fonts.load('400 22px "JetBrains Mono"'),document.fonts.load('700 22px "JetBrains Mono"'),document.fonts.load('700 40px "Space Grotesk"'),document.fonts.load('34px "Caveat"')]),new Promise(i=>setTimeout(i,2500))])}catch{}H1(),G1(),Q1(),eS(),$1(),J0(0),iS(),hp(),Pt.position.copy(bt.pos),zn.compile($,Pt),dt("load").classList.add("gone"),window.__ready=!0,console.log(`
-----------------------------------------------
Snowie_Site has successfully loaded!
Version: `+y1+`
-----------------------------------------------`),fr.has("shot")&&(Vf=!0,Ra.style.display="none",dt("load").style.display="none",Yt()),!Xo&&!Ca&&(Ca=!0,requestAnimationFrame(up))}fr.has("debug")&&(window.__app={bookNow:()=>{lp(),bt.anim=null,bt.pos.copy(dr.pos),bt.tgt.copy(dr.tgt),ye="book",Yt()},flipBook:Qc,radioNow:()=>{ap(),bt.anim=null,bt.pos.copy(ur.pos),bt.tgt.copy(ur.tgt),ye="radio",Yt()},zoomNow:()=>{rp(),bt.anim=null,bt.pos.copy(wa.pos),bt.tgt.copy(wa.tgt),ye="zoom",Yt(),ss=1,Ro=1,zo=!0,ks()},enterScreen:hg,exitScreen:lh,enterWindow:ug,exitWindow:ch,tap:dg,setMood:i=>{Us=i,Ft=i},login:()=>{lr=!0,Ds=performance.now()-320-ni},skipBoot:()=>eg(),openDock:tg,type:i=>{Hn=i},run:()=>{let i=Hn;Hn="",$0(i)},findAll:()=>Os.forEach(i=>{i.userData.found=!0}),startMusic:()=>{He.boom=!0,ih()},stopMusic:()=>{He.boom=!1,ih()},radio:Ee,tune:Qf,cam:bt,camera:Pt,scene:$,setYaw:i=>{Go=sh=i}});ZS();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

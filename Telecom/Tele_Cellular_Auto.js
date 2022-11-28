const $ = new Env(`电信余量`)
const headers = { "Accept": "application/json", "Content-Type": "application/json; charset\u003dUTF-8", "Connection": "Keep-Alive", "Accept-Encoding": "gzip", }
var navigator=navigator||{};var window=window||{};ASN1={};Hex={};Base64S={};var JSEncryptExports={}; (function(exports){var dbits;var canary=0xdeadbeefcafe;var j_lm=(canary&16777215)==15715070;function BigInteger(a,b,c){if(a!=null)if("number"==typeof a)this.fromNumber(a,b,c);else if(b==null&&"string"!=typeof a)this.fromString(a,256);else this.fromString(a,b)}function nbi(){return new BigInteger(null)}function am1(i,x,w,j,c,n){while(--n>=0){var v=x*this[i++]+w[j]+c;c=Math.floor(v/67108864);w[j++]=v&67108863}return c}function am2(i,x,w,j,c,n){var xl=x&32767,xh=x>>15;while(--n>=0){var l=this[i]&32767; var h=this[i++]>>15;var m=xh*l+h*xl;l=xl*l+((m&32767)<<15)+w[j]+(c&1073741823);c=(l>>>30)+(m>>>15)+xh*h+(c>>>30);w[j++]=l&1073741823}return c}function am3(i,x,w,j,c,n){var xl=x&16383,xh=x>>14;while(--n>=0){var l=this[i]&16383;var h=this[i++]>>14;var m=xh*l+h*xl;l=xl*l+((m&16383)<<14)+w[j]+c;c=(l>>28)+(m>>14)+xh*h;w[j++]=l&268435455}return c}if(j_lm&&navigator.appName=="Microsoft Internet Explorer"){BigInteger.prototype.am=am2;dbits=30}else if(j_lm&&navigator.appName!="Netscape"){BigInteger.prototype.am= am1;dbits=26}else{BigInteger.prototype.am=am3;dbits=28}BigInteger.prototype.DB=dbits;BigInteger.prototype.DM=(1<<dbits)-1;BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP);BigInteger.prototype.F1=BI_FP-dbits;BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz";var BI_RC=new Array;var rr,vv;rr="0".charCodeAt(0);for(vv=0;vv<=9;++vv)BI_RC[rr++]=vv;rr="a".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;rr="A".charCodeAt(0);for(vv= 10;vv<36;++vv)BI_RC[rr++]=vv;function int2char(n){return BI_RM.charAt(n)}function intAt(s,i){var c=BI_RC[s.charCodeAt(i)];return c==null?-1:c}function bnpCopyTo(r){for(var i=this.t-1;i>=0;--i)r[i]=this[i];r.t=this.t;r.s=this.s}function bnpFromInt(x){this.t=1;this.s=x<0?-1:0;if(x>0)this[0]=x;else if(x<-1)this[0]=x+this.DV;else this.t=0}function nbv(i){var r=nbi();r.fromInt(i);return r}function bnpFromString(s,b){var k;if(b==16)k=4;else if(b==8)k=3;else if(b==256)k=8;else if(b==2)k=1;else if(b==32)k= 5;else if(b==4)k=2;else{this.fromRadix(s,b);return}this.t=0;this.s=0;var i=s.length,mi=false,sh=0;while(--i>=0){var x=k==8?s[i]&255:intAt(s,i);if(x<0){if(s.charAt(i)=="-")mi=true;continue}mi=false;if(sh==0)this[this.t++]=x;else if(sh+k>this.DB){this[this.t-1]|=(x&(1<<this.DB-sh)-1)<<sh;this[this.t++]=x>>this.DB-sh}else this[this.t-1]|=x<<sh;sh+=k;if(sh>=this.DB)sh-=this.DB}if(k==8&&(s[0]&128)!=0){this.s=-1;if(sh>0)this[this.t-1]|=(1<<this.DB-sh)-1<<sh}this.clamp();if(mi)BigInteger.ZERO.subTo(this, this)}function bnpClamp(){var c=this.s&this.DM;while(this.t>0&&this[this.t-1]==c)--this.t}function bnToString(b){if(this.s<0)return"-"+this.negate().toString(b);var k;if(b==16)k=4;else if(b==8)k=3;else if(b==2)k=1;else if(b==32)k=5;else if(b==4)k=2;else return this.toRadix(b);var km=(1<<k)-1,d,m=false,r="",i=this.t;var p=this.DB-i*this.DB%k;if(i-- >0){if(p<this.DB&&(d=this[i]>>p)>0){m=true;r=int2char(d)}while(i>=0){if(p<k){d=(this[i]&(1<<p)-1)<<k-p;d|=this[--i]>>(p+=this.DB-k)}else{d=this[i]>>(p-= k)&km;if(p<=0){p+=this.DB;--i}}if(d>0)m=true;if(m)r+=int2char(d)}}return m?r:"0"}function bnNegate(){var r=nbi();BigInteger.ZERO.subTo(this,r);return r}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(a){var r=this.s-a.s;if(r!=0)return r;var i=this.t;r=i-a.t;if(r!=0)return this.s<0?-r:r;while(--i>=0)if((r=this[i]-a[i])!=0)return r;return 0}function nbits(x){var r=1,t;if((t=x>>>16)!=0){x=t;r+=16}if((t=x>>8)!=0){x=t;r+=8}if((t=x>>4)!=0){x=t;r+=4}if((t=x>>2)!=0){x=t;r+=2}if((t= x>>1)!=0){x=t;r+=1}return r}function bnBitLength(){if(this.t<=0)return 0;return this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(n,r){var i;for(i=this.t-1;i>=0;--i)r[i+n]=this[i];for(i=n-1;i>=0;--i)r[i]=0;r.t=this.t+n;r.s=this.s}function bnpDRShiftTo(n,r){for(var i=n;i<this.t;++i)r[i-n]=this[i];r.t=Math.max(this.t-n,0);r.s=this.s}function bnpLShiftTo(n,r){var bs=n%this.DB;var cbs=this.DB-bs;var bm=(1<<cbs)-1;var ds=Math.floor(n/this.DB),c=this.s<<bs&this.DM,i;for(i=this.t- 1;i>=0;--i){r[i+ds+1]=this[i]>>cbs|c;c=(this[i]&bm)<<bs}for(i=ds-1;i>=0;--i)r[i]=0;r[ds]=c;r.t=this.t+ds+1;r.s=this.s;r.clamp()}function bnpRShiftTo(n,r){r.s=this.s;var ds=Math.floor(n/this.DB);if(ds>=this.t){r.t=0;return}var bs=n%this.DB;var cbs=this.DB-bs;var bm=(1<<bs)-1;r[0]=this[ds]>>bs;for(var i=ds+1;i<this.t;++i){r[i-ds-1]|=(this[i]&bm)<<cbs;r[i-ds]=this[i]>>bs}if(bs>0)r[this.t-ds-1]|=(this.s&bm)<<cbs;r.t=this.t-ds;r.clamp()}function bnpSubTo(a,r){var i=0,c=0,m=Math.min(a.t,this.t);while(i< m){c+=this[i]-a[i];r[i++]=c&this.DM;c>>=this.DB}if(a.t<this.t){c-=a.s;while(i<this.t){c+=this[i];r[i++]=c&this.DM;c>>=this.DB}c+=this.s}else{c+=this.s;while(i<a.t){c-=a[i];r[i++]=c&this.DM;c>>=this.DB}c-=a.s}r.s=c<0?-1:0;if(c<-1)r[i++]=this.DV+c;else if(c>0)r[i++]=c;r.t=i;r.clamp()}function bnpMultiplyTo(a,r){var x=this.abs(),y=a.abs();var i=x.t;r.t=i+y.t;while(--i>=0)r[i]=0;for(i=0;i<y.t;++i)r[i+x.t]=x.am(0,y[i],r,i,0,x.t);r.s=0;r.clamp();if(this.s!=a.s)BigInteger.ZERO.subTo(r,r)}function bnpSquareTo(r){var x= this.abs();var i=r.t=2*x.t;while(--i>=0)r[i]=0;for(i=0;i<x.t-1;++i){var c=x.am(i,x[i],r,2*i,0,1);if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1))>=x.DV){r[i+x.t]-=x.DV;r[i+x.t+1]=1}}if(r.t>0)r[r.t-1]+=x.am(i,x[i],r,2*i,0,1);r.s=0;r.clamp()}function bnpDivRemTo(m,q,r){var pm=m.abs();if(pm.t<=0)return;var pt=this.abs();if(pt.t<pm.t){if(q!=null)q.fromInt(0);if(r!=null)this.copyTo(r);return}if(r==null)r=nbi();var y=nbi(),ts=this.s,ms=m.s;var nsh=this.DB-nbits(pm[pm.t-1]);if(nsh>0){pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r)}else{pm.copyTo(y);pt.copyTo(r)}var ys=y.t;var y0=y[ys-1];if(y0==0)return;var yt=y0*(1<<this.F1)+(ys>1?y[ys-2]>>this.F2:0);var d1=this.FV/yt,d2=(1<<this.F1)/yt,e=1<<this.F2;var i=r.t,j=i-ys,t=q==null?nbi():q;y.dlShiftTo(j,t);if(r.compareTo(t)>=0){r[r.t++]=1;r.subTo(t,r)}BigInteger.ONE.dlShiftTo(ys,t);t.subTo(y,y);while(y.t<ys)y[y.t++]=0;while(--j>=0){var qd=r[--i]==y0?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);if((r[i]+=y.am(0,qd,r,j,0,ys))<qd){y.dlShiftTo(j,t);r.subTo(t,r);while(r[i]< --qd)r.subTo(t,r)}}if(q!=null){r.drShiftTo(ys,q);if(ts!=ms)BigInteger.ZERO.subTo(q,q)}r.t=ys;r.clamp();if(nsh>0)r.rShiftTo(nsh,r);if(ts<0)BigInteger.ZERO.subTo(r,r)}function bnMod(a){var r=nbi();this.abs().divRemTo(a,null,r);if(this.s<0&&r.compareTo(BigInteger.ZERO)>0)a.subTo(r,r);return r}function Classic(m){this.m=m}function cConvert(x){if(x.s<0||x.compareTo(this.m)>=0)return x.mod(this.m);else return x}function cRevert(x){return x}function cReduce(x){x.divRemTo(this.m,null,x)}function cMulTo(x, y,r){x.multiplyTo(y,r);this.reduce(r)}function cSqrTo(x,r){x.squareTo(r);this.reduce(r)}Classic.prototype.convert=cConvert;Classic.prototype.revert=cRevert;Classic.prototype.reduce=cReduce;Classic.prototype.mulTo=cMulTo;Classic.prototype.sqrTo=cSqrTo;function bnpInvDigit(){if(this.t<1)return 0;var x=this[0];if((x&1)==0)return 0;var y=x&3;y=y*(2-(x&15)*y)&15;y=y*(2-(x&255)*y)&255;y=y*(2-((x&65535)*y&65535))&65535;y=y*(2-x*y%this.DV)%this.DV;return y>0?this.DV-y:-y}function Montgomery(m){this.m=m;this.mp= m.invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<m.DB-15)-1;this.mt2=2*m.t}function montConvert(x){var r=nbi();x.abs().dlShiftTo(this.m.t,r);r.divRemTo(this.m,null,r);if(x.s<0&&r.compareTo(BigInteger.ZERO)>0)this.m.subTo(r,r);return r}function montRevert(x){var r=nbi();x.copyTo(r);this.reduce(r);return r}function montReduce(x){while(x.t<=this.mt2)x[x.t++]=0;for(var i=0;i<this.m.t;++i){var j=x[i]&32767;var u0=j*this.mpl+((j*this.mph+(x[i]>>15)*this.mpl&this.um)<<15)&x.DM;j=i+this.m.t; x[j]+=this.m.am(0,u0,x,i,0,this.m.t);while(x[j]>=x.DV){x[j]-=x.DV;x[++j]++}}x.clamp();x.drShiftTo(this.m.t,x);if(x.compareTo(this.m)>=0)x.subTo(this.m,x)}function montSqrTo(x,r){x.squareTo(r);this.reduce(r)}function montMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}Montgomery.prototype.convert=montConvert;Montgomery.prototype.revert=montRevert;Montgomery.prototype.reduce=montReduce;Montgomery.prototype.mulTo=montMulTo;Montgomery.prototype.sqrTo=montSqrTo;function bnpIsEven(){return(this.t>0?this[0]& 1:this.s)==0}function bnpExp(e,z){if(e>4294967295||e<1)return BigInteger.ONE;var r=nbi(),r2=nbi(),g=z.convert(this),i=nbits(e)-1;g.copyTo(r);while(--i>=0){z.sqrTo(r,r2);if((e&1<<i)>0)z.mulTo(r2,g,r);else{var t=r;r=r2;r2=t}}return z.revert(r)}function bnModPowInt(e,m){var z;if(e<256||m.isEven())z=new Classic(m);else z=new Montgomery(m);return this.exp(e,z)}BigInteger.prototype.copyTo=bnpCopyTo;BigInteger.prototype.fromInt=bnpFromInt;BigInteger.prototype.fromString=bnpFromString;BigInteger.prototype.clamp= bnpClamp;BigInteger.prototype.dlShiftTo=bnpDLShiftTo;BigInteger.prototype.drShiftTo=bnpDRShiftTo;BigInteger.prototype.lShiftTo=bnpLShiftTo;BigInteger.prototype.rShiftTo=bnpRShiftTo;BigInteger.prototype.subTo=bnpSubTo;BigInteger.prototype.multiplyTo=bnpMultiplyTo;BigInteger.prototype.squareTo=bnpSquareTo;BigInteger.prototype.divRemTo=bnpDivRemTo;BigInteger.prototype.invDigit=bnpInvDigit;BigInteger.prototype.isEven=bnpIsEven;BigInteger.prototype.exp=bnpExp;BigInteger.prototype.toString=bnToString;BigInteger.prototype.negate= bnNegate;BigInteger.prototype.abs=bnAbs;BigInteger.prototype.compareTo=bnCompareTo;BigInteger.prototype.bitLength=bnBitLength;BigInteger.prototype.mod=bnMod;BigInteger.prototype.modPowInt=bnModPowInt;BigInteger.ZERO=nbv(0);BigInteger.ONE=nbv(1);function bnClone(){var r=nbi();this.copyTo(r);return r}function bnIntValue(){if(this.s<0)if(this.t==1)return this[0]-this.DV;else{if(this.t==0)return-1}else if(this.t==1)return this[0];else if(this.t==0)return 0;return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]} function bnByteValue(){return this.t==0?this.s:this[0]<<24>>24}function bnShortValue(){return this.t==0?this.s:this[0]<<16>>16}function bnpChunkSize(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function bnSigNum(){if(this.s<0)return-1;else if(this.t<=0||this.t==1&&this[0]<=0)return 0;else return 1}function bnpToRadix(b){if(b==null)b=10;if(this.signum()==0||b<2||b>36)return"0";var cs=this.chunkSize(b);var a=Math.pow(b,cs);var d=nbv(a),y=nbi(),z=nbi(),r="";this.divRemTo(d,y,z);while(y.signum()> 0){r=(a+z.intValue()).toString(b).substr(1)+r;y.divRemTo(d,y,z)}return z.intValue().toString(b)+r}function bnpFromRadix(s,b){this.fromInt(0);if(b==null)b=10;var cs=this.chunkSize(b);var d=Math.pow(b,cs),mi=false,j=0,w=0;for(var i=0;i<s.length;++i){var x=intAt(s,i);if(x<0){if(s.charAt(i)=="-"&&this.signum()==0)mi=true;continue}w=b*w+x;if(++j>=cs){this.dMultiply(d);this.dAddOffset(w,0);j=0;w=0}}if(j>0){this.dMultiply(Math.pow(b,j));this.dAddOffset(w,0)}if(mi)BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(a, b,c){if("number"==typeof b)if(a<2)this.fromInt(1);else{this.fromNumber(a,c);if(!this.testBit(a-1))this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);if(this.isEven())this.dAddOffset(1,0);while(!this.isProbablePrime(b)){this.dAddOffset(2,0);if(this.bitLength()>a)this.subTo(BigInteger.ONE.shiftLeft(a-1),this)}}else{var x=new Array,t=a&7;x.length=(a>>3)+1;b.nextBytes(x);if(t>0)x[0]&=(1<<t)-1;else x[0]=0;this.fromString(x,256)}}function bnToByteArray(){var i=this.t,r=new Array;r[0]=this.s;var p= this.DB-i*this.DB%8,d,k=0;if(i-- >0){if(p<this.DB&&(d=this[i]>>p)!=(this.s&this.DM)>>p)r[k++]=d|this.s<<this.DB-p;while(i>=0){if(p<8){d=(this[i]&(1<<p)-1)<<8-p;d|=this[--i]>>(p+=this.DB-8)}else{d=this[i]>>(p-=8)&255;if(p<=0){p+=this.DB;--i}}if((d&128)!=0)d|=-256;if(k==0&&(this.s&128)!=(d&128))++k;if(k>0||d!=this.s)r[k++]=d}}return r}function bnEquals(a){return this.compareTo(a)==0}function bnMin(a){return this.compareTo(a)<0?this:a}function bnMax(a){return this.compareTo(a)>0?this:a}function bnpBitwiseTo(a, op,r){var i,f,m=Math.min(a.t,this.t);for(i=0;i<m;++i)r[i]=op(this[i],a[i]);if(a.t<this.t){f=a.s&this.DM;for(i=m;i<this.t;++i)r[i]=op(this[i],f);r.t=this.t}else{f=this.s&this.DM;for(i=m;i<a.t;++i)r[i]=op(f,a[i]);r.t=a.t}r.s=op(this.s,a.s);r.clamp()}function op_and(x,y){return x&y}function bnAnd(a){var r=nbi();this.bitwiseTo(a,op_and,r);return r}function op_or(x,y){return x|y}function bnOr(a){var r=nbi();this.bitwiseTo(a,op_or,r);return r}function op_xor(x,y){return x^y}function bnXor(a){var r=nbi(); this.bitwiseTo(a,op_xor,r);return r}function op_andnot(x,y){return x&~y}function bnAndNot(a){var r=nbi();this.bitwiseTo(a,op_andnot,r);return r}function bnNot(){var r=nbi();for(var i=0;i<this.t;++i)r[i]=this.DM&~this[i];r.t=this.t;r.s=~this.s;return r}function bnShiftLeft(n){var r=nbi();if(n<0)this.rShiftTo(-n,r);else this.lShiftTo(n,r);return r}function bnShiftRight(n){var r=nbi();if(n<0)this.lShiftTo(-n,r);else this.rShiftTo(n,r);return r}function lbit(x){if(x==0)return-1;var r=0;if((x&65535)== 0){x>>=16;r+=16}if((x&255)==0){x>>=8;r+=8}if((x&15)==0){x>>=4;r+=4}if((x&3)==0){x>>=2;r+=2}if((x&1)==0)++r;return r}function bnGetLowestSetBit(){for(var i=0;i<this.t;++i)if(this[i]!=0)return i*this.DB+lbit(this[i]);if(this.s<0)return this.t*this.DB;return-1}function cbit(x){var r=0;while(x!=0){x&=x-1;++r}return r}function bnBitCount(){var r=0,x=this.s&this.DM;for(var i=0;i<this.t;++i)r+=cbit(this[i]^x);return r}function bnTestBit(n){var j=Math.floor(n/this.DB);if(j>=this.t)return this.s!=0;return(this[j]& 1<<n%this.DB)!=0}function bnpChangeBit(n,op){var r=BigInteger.ONE.shiftLeft(n);this.bitwiseTo(r,op,r);return r}function bnSetBit(n){return this.changeBit(n,op_or)}function bnClearBit(n){return this.changeBit(n,op_andnot)}function bnFlipBit(n){return this.changeBit(n,op_xor)}function bnpAddTo(a,r){var i=0,c=0,m=Math.min(a.t,this.t);while(i<m){c+=this[i]+a[i];r[i++]=c&this.DM;c>>=this.DB}if(a.t<this.t){c+=a.s;while(i<this.t){c+=this[i];r[i++]=c&this.DM;c>>=this.DB}c+=this.s}else{c+=this.s;while(i<a.t){c+= a[i];r[i++]=c&this.DM;c>>=this.DB}c+=a.s}r.s=c<0?-1:0;if(c>0)r[i++]=c;else if(c<-1)r[i++]=this.DV+c;r.t=i;r.clamp()}function bnAdd(a){var r=nbi();this.addTo(a,r);return r}function bnSubtract(a){var r=nbi();this.subTo(a,r);return r}function bnMultiply(a){var r=nbi();this.multiplyTo(a,r);return r}function bnSquare(){var r=nbi();this.squareTo(r);return r}function bnDivide(a){var r=nbi();this.divRemTo(a,r,null);return r}function bnRemainder(a){var r=nbi();this.divRemTo(a,null,r);return r}function bnDivideAndRemainder(a){var q= nbi(),r=nbi();this.divRemTo(a,q,r);return new Array(q,r)}function bnpDMultiply(n){this[this.t]=this.am(0,n-1,this,0,0,this.t);++this.t;this.clamp()}function bnpDAddOffset(n,w){if(n==0)return;while(this.t<=w)this[this.t++]=0;this[w]+=n;while(this[w]>=this.DV){this[w]-=this.DV;if(++w>=this.t)this[this.t++]=0;++this[w]}}function NullExp(){}function nNop(x){return x}function nMulTo(x,y,r){x.multiplyTo(y,r)}function nSqrTo(x,r){x.squareTo(r)}NullExp.prototype.convert=nNop;NullExp.prototype.revert=nNop; NullExp.prototype.mulTo=nMulTo;NullExp.prototype.sqrTo=nSqrTo;function bnPow(e){return this.exp(e,new NullExp)}function bnpMultiplyLowerTo(a,n,r){var i=Math.min(this.t+a.t,n);r.s=0;r.t=i;while(i>0)r[--i]=0;var j;for(j=r.t-this.t;i<j;++i)r[i+this.t]=this.am(0,a[i],r,i,0,this.t);for(j=Math.min(a.t,n);i<j;++i)this.am(0,a[i],r,i,0,n-i);r.clamp()}function bnpMultiplyUpperTo(a,n,r){--n;var i=r.t=this.t+a.t-n;r.s=0;while(--i>=0)r[i]=0;for(i=Math.max(n-this.t,0);i<a.t;++i)r[this.t+i-n]=this.am(n-i,a[i],r, 0,0,this.t+i-n);r.clamp();r.drShiftTo(1,r)}function Barrett(m){this.r2=nbi();this.q3=nbi();BigInteger.ONE.dlShiftTo(2*m.t,this.r2);this.mu=this.r2.divide(m);this.m=m}function barrettConvert(x){if(x.s<0||x.t>2*this.m.t)return x.mod(this.m);else if(x.compareTo(this.m)<0)return x;else{var r=nbi();x.copyTo(r);this.reduce(r);return r}}function barrettRevert(x){return x}function barrettReduce(x){x.drShiftTo(this.m.t-1,this.r2);if(x.t>this.m.t+1){x.t=this.m.t+1;x.clamp()}this.mu.multiplyUpperTo(this.r2, this.m.t+1,this.q3);this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);while(x.compareTo(this.r2)<0)x.dAddOffset(1,this.m.t+1);x.subTo(this.r2,x);while(x.compareTo(this.m)>=0)x.subTo(this.m,x)}function barrettSqrTo(x,r){x.squareTo(r);this.reduce(r)}function barrettMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}Barrett.prototype.convert=barrettConvert;Barrett.prototype.revert=barrettRevert;Barrett.prototype.reduce=barrettReduce;Barrett.prototype.mulTo=barrettMulTo;Barrett.prototype.sqrTo=barrettSqrTo; function bnModPow(e,m){var i=e.bitLength(),k,r=nbv(1),z;if(i<=0)return r;else if(i<18)k=1;else if(i<48)k=3;else if(i<144)k=4;else if(i<768)k=5;else k=6;if(i<8)z=new Classic(m);else if(m.isEven())z=new Barrett(m);else z=new Montgomery(m);var g=new Array,n=3,k1=k-1,km=(1<<k)-1;g[1]=z.convert(this);if(k>1){var g2=nbi();z.sqrTo(g[1],g2);while(n<=km){g[n]=nbi();z.mulTo(g2,g[n-2],g[n]);n+=2}}var j=e.t-1,w,is1=true,r2=nbi(),t;i=nbits(e[j])-1;while(j>=0){if(i>=k1)w=e[j]>>i-k1&km;else{w=(e[j]&(1<<i+1)-1)<< k1-i;if(j>0)w|=e[j-1]>>this.DB+i-k1}n=k;while((w&1)==0){w>>=1;--n}if((i-=n)<0){i+=this.DB;--j}if(is1){g[w].copyTo(r);is1=false}else{while(n>1){z.sqrTo(r,r2);z.sqrTo(r2,r);n-=2}if(n>0)z.sqrTo(r,r2);else{t=r;r=r2;r2=t}z.mulTo(r2,g[w],r)}while(j>=0&&(e[j]&1<<i)==0){z.sqrTo(r,r2);t=r;r=r2;r2=t;if(--i<0){i=this.DB-1;--j}}}return z.revert(r)}function bnGCD(a){var x=this.s<0?this.negate():this.clone();var y=a.s<0?a.negate():a.clone();if(x.compareTo(y)<0){var t=x;x=y;y=t}var i=x.getLowestSetBit(),g=y.getLowestSetBit(); if(g<0)return x;if(i<g)g=i;if(g>0){x.rShiftTo(g,x);y.rShiftTo(g,y)}while(x.signum()>0){if((i=x.getLowestSetBit())>0)x.rShiftTo(i,x);if((i=y.getLowestSetBit())>0)y.rShiftTo(i,y);if(x.compareTo(y)>=0){x.subTo(y,x);x.rShiftTo(1,x)}else{y.subTo(x,y);y.rShiftTo(1,y)}}if(g>0)y.lShiftTo(g,y);return y}function bnpModInt(n){if(n<=0)return 0;var d=this.DV%n,r=this.s<0?n-1:0;if(this.t>0)if(d==0)r=this[0]%n;else for(var i=this.t-1;i>=0;--i)r=(d*r+this[i])%n;return r}function bnModInverse(m){var ac=m.isEven(); if(this.isEven()&&ac||m.signum()==0)return BigInteger.ZERO;var u=m.clone(),v=this.clone();var a=nbv(1),b=nbv(0),c=nbv(0),d=nbv(1);while(u.signum()!=0){while(u.isEven()){u.rShiftTo(1,u);if(ac){if(!a.isEven()||!b.isEven()){a.addTo(this,a);b.subTo(m,b)}a.rShiftTo(1,a)}else if(!b.isEven())b.subTo(m,b);b.rShiftTo(1,b)}while(v.isEven()){v.rShiftTo(1,v);if(ac){if(!c.isEven()||!d.isEven()){c.addTo(this,c);d.subTo(m,d)}c.rShiftTo(1,c)}else if(!d.isEven())d.subTo(m,d);d.rShiftTo(1,d)}if(u.compareTo(v)>=0){u.subTo(v, u);if(ac)a.subTo(c,a);b.subTo(d,b)}else{v.subTo(u,v);if(ac)c.subTo(a,c);d.subTo(b,d)}}if(v.compareTo(BigInteger.ONE)!=0)return BigInteger.ZERO;if(d.compareTo(m)>=0)return d.subtract(m);if(d.signum()<0)d.addTo(m,d);else return d;if(d.signum()<0)return d.add(m);else return d}var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283, 293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];var lplim=(1<<26)/lowprimes[lowprimes.length-1];function bnIsProbablePrime(t){var i, x=this.abs();if(x.t==1&&x[0]<=lowprimes[lowprimes.length-1]){for(i=0;i<lowprimes.length;++i)if(x[0]==lowprimes[i])return true;return false}if(x.isEven())return false;i=1;while(i<lowprimes.length){var m=lowprimes[i],j=i+1;while(j<lowprimes.length&&m<lplim)m*=lowprimes[j++];m=x.modInt(m);while(i<j)if(m%lowprimes[i++]==0)return false}return x.millerRabin(t)}function bnpMillerRabin(t){var n1=this.subtract(BigInteger.ONE);var k=n1.getLowestSetBit();if(k<=0)return false;var r=n1.shiftRight(k);t=t+1>>1; if(t>lowprimes.length)t=lowprimes.length;var a=nbi();for(var i=0;i<t;++i){a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var y=a.modPow(r,this);if(y.compareTo(BigInteger.ONE)!=0&&y.compareTo(n1)!=0){var j=1;while(j++<k&&y.compareTo(n1)!=0){y=y.modPowInt(2,this);if(y.compareTo(BigInteger.ONE)==0)return false}if(y.compareTo(n1)!=0)return false}}return true}BigInteger.prototype.chunkSize=bnpChunkSize;BigInteger.prototype.toRadix=bnpToRadix;BigInteger.prototype.fromRadix=bnpFromRadix; BigInteger.prototype.fromNumber=bnpFromNumber;BigInteger.prototype.bitwiseTo=bnpBitwiseTo;BigInteger.prototype.changeBit=bnpChangeBit;BigInteger.prototype.addTo=bnpAddTo;BigInteger.prototype.dMultiply=bnpDMultiply;BigInteger.prototype.dAddOffset=bnpDAddOffset;BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo;BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo;BigInteger.prototype.modInt=bnpModInt;BigInteger.prototype.millerRabin=bnpMillerRabin;BigInteger.prototype.clone=bnClone;BigInteger.prototype.intValue= bnIntValue;BigInteger.prototype.byteValue=bnByteValue;BigInteger.prototype.shortValue=bnShortValue;BigInteger.prototype.signum=bnSigNum;BigInteger.prototype.toByteArray=bnToByteArray;BigInteger.prototype.equals=bnEquals;BigInteger.prototype.min=bnMin;BigInteger.prototype.max=bnMax;BigInteger.prototype.and=bnAnd;BigInteger.prototype.or=bnOr;BigInteger.prototype.xor=bnXor;BigInteger.prototype.andNot=bnAndNot;BigInteger.prototype.not=bnNot;BigInteger.prototype.shiftLeft=bnShiftLeft;BigInteger.prototype.shiftRight= bnShiftRight;BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit;BigInteger.prototype.bitCount=bnBitCount;BigInteger.prototype.testBit=bnTestBit;BigInteger.prototype.setBit=bnSetBit;BigInteger.prototype.clearBit=bnClearBit;BigInteger.prototype.flipBit=bnFlipBit;BigInteger.prototype.add=bnAdd;BigInteger.prototype.subtract=bnSubtract;BigInteger.prototype.multiply=bnMultiply;BigInteger.prototype.divide=bnDivide;BigInteger.prototype.remainder=bnRemainder;BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder; BigInteger.prototype.modPow=bnModPow;BigInteger.prototype.modInverse=bnModInverse;BigInteger.prototype.pow=bnPow;BigInteger.prototype.gcd=bnGCD;BigInteger.prototype.isProbablePrime=bnIsProbablePrime;BigInteger.prototype.square=bnSquare;function Arcfour(){this.i=0;this.j=0;this.S=new Array}function ARC4init(key){var i,j,t;for(i=0;i<256;++i)this.S[i]=i;j=0;for(i=0;i<256;++i){j=j+this.S[i]+key[i%key.length]&255;t=this.S[i];this.S[i]=this.S[j];this.S[j]=t}this.i=0;this.j=0}function ARC4next(){var t;this.i= this.i+1&255;this.j=this.j+this.S[this.i]&255;t=this.S[this.i];this.S[this.i]=this.S[this.j];this.S[this.j]=t;return this.S[t+this.S[this.i]&255]}Arcfour.prototype.init=ARC4init;Arcfour.prototype.next=ARC4next;function prng_newstate(){return new Arcfour}var rng_psize=256;var rng_state;var rng_pool;var rng_pptr;if(rng_pool==null){rng_pool=new Array;rng_pptr=0;var t;if(window.crypto&&window.crypto.getRandomValues){var z=new Uint32Array(256);window.crypto.getRandomValues(z);for(t=0;t<z.length;++t)rng_pool[rng_pptr++]= z[t]&255}var onMouseMoveListener=function(ev){this.count=this.count||0;if(this.count>=256||rng_pptr>=rng_psize){if(window.removeEventListener)window.removeEventListener("mousemove",onMouseMoveListener);else if(window.detachEvent)window.detachEvent("onmousemove",onMouseMoveListener);return}this.count+=1;var mouseCoordinates=ev.x+ev.y;rng_pool[rng_pptr++]=mouseCoordinates&255};if(window.addEventListener)window.addEventListener("mousemove",onMouseMoveListener);else if(window.attachEvent)window.attachEvent("onmousemove", onMouseMoveListener)}function rng_get_byte(){if(rng_state==null){rng_state=prng_newstate();while(rng_pptr<rng_psize){var random=Math.floor(65536*Math.random());rng_pool[rng_pptr++]=random&255}rng_state.init(rng_pool);for(rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return rng_state.next()}function rng_get_bytes(ba){var i;for(i=0;i<ba.length;++i)ba[i]=rng_get_byte()}function SecureRandom(){}SecureRandom.prototype.nextBytes=rng_get_bytes;function parseBigInt(str,r){return new BigInteger(str, r)}function linebrk(s,n){var ret="";var i=0;while(i+n<s.length){ret+=s.substring(i,i+n)+"\n";i+=n}return ret+s.substring(i,s.length)}function byte2Hex(b){if(b<16)return"0"+b.toString(16);else return b.toString(16)}function pkcs1pad2(s,n){if(n<s.length+11){console.log("Message too long for RSA");return null}var ba=new Array;var i=s.length-1;while(i>=0&&n>0){var c=s.charCodeAt(i--);if(c<128)ba[--n]=c;else if(c>127&&c<2048){ba[--n]=c&63|128;ba[--n]=c>>6|192}else{ba[--n]=c&63|128;ba[--n]=c>>6&63|128; ba[--n]=c>>12|224}}ba[--n]=0;var rng=new SecureRandom;var x=new Array;while(n>2){x[0]=0;while(x[0]==0)rng.nextBytes(x);ba[--n]=x[0]}ba[--n]=2;ba[--n]=0;return new BigInteger(ba)}function RSAKey(){this.n=null;this.e=0;this.d=null;this.p=null;this.q=null;this.dmp1=null;this.dmq1=null;this.coeff=null}function RSASetPublic(N,E){if(N!=null&&E!=null&&N.length>0&&E.length>0){this.n=parseBigInt(N,16);this.e=parseInt(E,16)}else console.log("Invalid RSA public key")}function RSADoPublic(x){return x.modPowInt(this.e, this.n)}function RSAEncrypt(text){var m=pkcs1pad2(text,this.n.bitLength()+7>>3);if(m==null)return null;var c=this.doPublic(m);if(c==null)return null;var h=c.toString(16);if((h.length&1)==0)return h;else return"0"+h}RSAKey.prototype.doPublic=RSADoPublic;RSAKey.prototype.setPublic=RSASetPublic;RSAKey.prototype.encrypt=RSAEncrypt;function pkcs1unpad2(d,n){var b=d.toByteArray();var i=0;while(i<b.length&&b[i]==0)++i;if(b.length-i!=n-1||b[i]!=2)return null;++i;while(b[i]!=0)if(++i>=b.length)return null; var ret="";while(++i<b.length){var c=b[i]&255;if(c<128)ret+=String.fromCharCode(c);else if(c>191&&c<224){ret+=String.fromCharCode((c&31)<<6|b[i+1]&63);++i}else{ret+=String.fromCharCode((c&15)<<12|(b[i+1]&63)<<6|b[i+2]&63);i+=2}}return ret}function RSASetPrivate(N,E,D){if(N!=null&&E!=null&&N.length>0&&E.length>0){this.n=parseBigInt(N,16);this.e=parseInt(E,16);this.d=parseBigInt(D,16)}else console.log("Invalid RSA private key")}function RSASetPrivateEx(N,E,D,P,Q,DP,DQ,C){if(N!=null&&E!=null&&N.length> 0&&E.length>0){this.n=parseBigInt(N,16);this.e=parseInt(E,16);this.d=parseBigInt(D,16);this.p=parseBigInt(P,16);this.q=parseBigInt(Q,16);this.dmp1=parseBigInt(DP,16);this.dmq1=parseBigInt(DQ,16);this.coeff=parseBigInt(C,16)}else console.log("Invalid RSA private key")}function RSAGenerate(B,E){var rng=new SecureRandom;var qs=B>>1;this.e=parseInt(E,16);var ee=new BigInteger(E,16);for(;;){for(;;){this.p=new BigInteger(B-qs,1,rng);if(this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE)== 0&&this.p.isProbablePrime(10))break}for(;;){this.q=new BigInteger(qs,1,rng);if(this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE)==0&&this.q.isProbablePrime(10))break}if(this.p.compareTo(this.q)<=0){var t=this.p;this.p=this.q;this.q=t}var p1=this.p.subtract(BigInteger.ONE);var q1=this.q.subtract(BigInteger.ONE);var phi=p1.multiply(q1);if(phi.gcd(ee).compareTo(BigInteger.ONE)==0){this.n=this.p.multiply(this.q);this.d=ee.modInverse(phi);this.dmp1=this.d.mod(p1);this.dmq1=this.d.mod(q1); this.coeff=this.q.modInverse(this.p);break}}}function RSADoPrivate(x){if(this.p==null||this.q==null)return x.modPow(this.d,this.n);var xp=x.mod(this.p).modPow(this.dmp1,this.p);var xq=x.mod(this.q).modPow(this.dmq1,this.q);while(xp.compareTo(xq)<0)xp=xp.add(this.p);return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq)}function RSADecrypt(ctext){var c=parseBigInt(ctext,16);var m=this.doPrivate(c);if(m==null)return null;return pkcs1unpad2(m,this.n.bitLength()+7>>3)}RSAKey.prototype.doPrivate= RSADoPrivate;RSAKey.prototype.setPrivate=RSASetPrivate;RSAKey.prototype.setPrivateEx=RSASetPrivateEx;RSAKey.prototype.generate=RSAGenerate;RSAKey.prototype.decrypt=RSADecrypt;(function(){var RSAGenerateAsync=function(B,E,callback){var rng=new SecureRandom;var qs=B>>1;this.e=parseInt(E,16);var ee=new BigInteger(E,16);var rsa=this;var loop1=function(){var loop4=function(){if(rsa.p.compareTo(rsa.q)<=0){var t=rsa.p;rsa.p=rsa.q;rsa.q=t}var p1=rsa.p.subtract(BigInteger.ONE);var q1=rsa.q.subtract(BigInteger.ONE); var phi=p1.multiply(q1);if(phi.gcd(ee).compareTo(BigInteger.ONE)==0){rsa.n=rsa.p.multiply(rsa.q);rsa.d=ee.modInverse(phi);rsa.dmp1=rsa.d.mod(p1);rsa.dmq1=rsa.d.mod(q1);rsa.coeff=rsa.q.modInverse(rsa.p);setTimeout(function(){callback()},0)}else setTimeout(loop1,0)};var loop3=function(){rsa.q=nbi();rsa.q.fromNumberAsync(qs,1,rng,function(){rsa.q.subtract(BigInteger.ONE).gcda(ee,function(r){if(r.compareTo(BigInteger.ONE)==0&&rsa.q.isProbablePrime(10))setTimeout(loop4,0);else setTimeout(loop3,0)})})}; var loop2=function(){rsa.p=nbi();rsa.p.fromNumberAsync(B-qs,1,rng,function(){rsa.p.subtract(BigInteger.ONE).gcda(ee,function(r){if(r.compareTo(BigInteger.ONE)==0&&rsa.p.isProbablePrime(10))setTimeout(loop3,0);else setTimeout(loop2,0)})})};setTimeout(loop2,0)};setTimeout(loop1,0)};RSAKey.prototype.generateAsync=RSAGenerateAsync;var bnGCDAsync=function(a,callback){var x=this.s<0?this.negate():this.clone();var y=a.s<0?a.negate():a.clone();if(x.compareTo(y)<0){var t=x;x=y;y=t}var i=x.getLowestSetBit(), g=y.getLowestSetBit();if(g<0){callback(x);return}if(i<g)g=i;if(g>0){x.rShiftTo(g,x);y.rShiftTo(g,y)}var gcda1=function(){if((i=x.getLowestSetBit())>0)x.rShiftTo(i,x);if((i=y.getLowestSetBit())>0)y.rShiftTo(i,y);if(x.compareTo(y)>=0){x.subTo(y,x);x.rShiftTo(1,x)}else{y.subTo(x,y);y.rShiftTo(1,y)}if(!(x.signum()>0)){if(g>0)y.lShiftTo(g,y);setTimeout(function(){callback(y)},0)}else setTimeout(gcda1,0)};setTimeout(gcda1,10)};BigInteger.prototype.gcda=bnGCDAsync;var bnpFromNumberAsync=function(a,b,c,callback){if("number"== typeof b)if(a<2)this.fromInt(1);else{this.fromNumber(a,c);if(!this.testBit(a-1))this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);if(this.isEven())this.dAddOffset(1,0);var bnp=this;var bnpfn1=function(){bnp.dAddOffset(2,0);if(bnp.bitLength()>a)bnp.subTo(BigInteger.ONE.shiftLeft(a-1),bnp);if(bnp.isProbablePrime(b))setTimeout(function(){callback()},0);else setTimeout(bnpfn1,0)};setTimeout(bnpfn1,0)}else{var x=new Array,t=a&7;x.length=(a>>3)+1;b.nextBytes(x);if(t>0)x[0]&=(1<<t)-1;else x[0]=0; this.fromString(x,256)}};BigInteger.prototype.fromNumberAsync=bnpFromNumberAsync})();var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64pad="=";function hex2b64(h){var i;var c;var ret="";for(i=0;i+3<=h.length;i+=3){c=parseInt(h.substring(i,i+3),16);ret+=b64map.charAt(c>>6)+b64map.charAt(c&63)}if(i+1==h.length){c=parseInt(h.substring(i,i+1),16);ret+=b64map.charAt(c<<2)}else if(i+2==h.length){c=parseInt(h.substring(i,i+2),16);ret+=b64map.charAt(c>>2)+b64map.charAt((c& 3)<<4)}while((ret.length&3)>0)ret+=b64pad;return ret}function b64tohex(s){var ret="";var i;var k=0;var slop;for(i=0;i<s.length;++i){if(s.charAt(i)==b64pad)break;v=b64map.indexOf(s.charAt(i));if(v<0)continue;if(k==0){ret+=int2char(v>>2);slop=v&3;k=1}else if(k==1){ret+=int2char(slop<<2|v>>4);slop=v&15;k=2}else if(k==2){ret+=int2char(slop);ret+=int2char(v>>2);slop=v&3;k=3}else{ret+=int2char(slop<<2|v>>4);ret+=int2char(v&15);k=0}}if(k==1)ret+=int2char(slop<<2);return ret}function b64toBA(s){var h=b64tohex(s); var i;var a=new Array;for(i=0;2*i<h.length;++i)a[i]=parseInt(h.substring(2*i,2*i+2),16);return a}var JSX=JSX||{};JSX.env=JSX.env||{};var L=JSX,OP=Object.prototype,FUNCTION_TOSTRING="[object Function]",ADD=["toString","valueOf"];JSX.env.parseUA=function(agent){var numberify=function(s){var c=0;return parseFloat(s.replace(/\./g,function(){return c++==1?"":"."}))},nav=navigator,o={ie:0,opera:0,gecko:0,webkit:0,chrome:0,mobile:null,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,webos:0,caja:nav&&nav.cajaVersion, secure:false,os:null},ua=agent||navigator&&navigator.userAgent,loc=window&&window.location,href=loc&&loc.href,m;o.secure=href&&href.toLowerCase().indexOf("https")===0;if(ua){if(/windows|win32/i.test(ua))o.os="windows";else if(/macintosh/i.test(ua))o.os="macintosh";else if(/rhino/i.test(ua))o.os="rhino";if(/KHTML/.test(ua))o.webkit=1;m=ua.match(/AppleWebKit\/([^\s]*)/);if(m&&m[1]){o.webkit=numberify(m[1]);if(/ Mobile\//.test(ua)){o.mobile="Apple";m=ua.match(/OS ([^\s]*)/);if(m&&m[1])m=numberify(m[1].replace("_", "."));o.ios=m;o.ipad=o.ipod=o.iphone=0;m=ua.match(/iPad|iPod|iPhone/);if(m&&m[0])o[m[0].toLowerCase()]=o.ios}else{m=ua.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/);if(m)o.mobile=m[0];if(/webOS/.test(ua)){o.mobile="WebOS";m=ua.match(/webOS\/([^\s]*);/);if(m&&m[1])o.webos=numberify(m[1])}if(/ Android/.test(ua)){o.mobile="Android";m=ua.match(/Android ([^\s]*);/);if(m&&m[1])o.android=numberify(m[1])}}m=ua.match(/Chrome\/([^\s]*)/);if(m&&m[1])o.chrome=numberify(m[1]);else{m=ua.match(/AdobeAIR\/([^\s]*)/); if(m)o.air=m[0]}}if(!o.webkit){m=ua.match(/Opera[\s\/]([^\s]*)/);if(m&&m[1]){o.opera=numberify(m[1]);m=ua.match(/Version\/([^\s]*)/);if(m&&m[1])o.opera=numberify(m[1]);m=ua.match(/Opera Mini[^;]*/);if(m)o.mobile=m[0]}else{m=ua.match(/MSIE\s([^;]*)/);if(m&&m[1])o.ie=numberify(m[1]);else{m=ua.match(/Gecko\/([^\s]*)/);if(m){o.gecko=1;m=ua.match(/rv:([^\s\)]*)/);if(m&&m[1])o.gecko=numberify(m[1])}}}}}return o};JSX.env.ua=JSX.env.parseUA();JSX.isFunction=function(o){return typeof o==="function"||OP.toString.apply(o)=== FUNCTION_TOSTRING};JSX._IEEnumFix=JSX.env.ua.ie?function(r,s){var i,fname,f;for(i=0;i<ADD.length;i=i+1){fname=ADD[i];f=s[fname];if(L.isFunction(f)&&f!=OP[fname])r[fname]=f}}:function(){};JSX.extend=function(subc,superc,overrides){if(!superc||!subc)throw new Error("extend failed, please check that "+"all dependencies are included.");var F=function(){},i;F.prototype=superc.prototype;subc.prototype=new F;subc.prototype.constructor=subc;subc.superclass=superc.prototype;if(superc.prototype.constructor== OP.constructor)superc.prototype.constructor=superc;if(overrides){for(i in overrides)if(L.hasOwnProperty(overrides,i))subc.prototype[i]=overrides[i];L._IEEnumFix(subc.prototype,overrides)}};if(typeof KJUR=="undefined"||!KJUR)KJUR={};if(typeof KJUR.asn1=="undefined"||!KJUR.asn1)KJUR.asn1={};KJUR.asn1.ASN1Util=new function(){this.integerToByteHex=function(i){var h=i.toString(16);if(h.length%2==1)h="0"+h;return h};this.bigIntToMinTwosComplementsHex=function(bigIntegerValue){var h=bigIntegerValue.toString(16); if(h.substr(0,1)!="-")if(h.length%2==1)h="0"+h;else{if(!h.match(/^[0-7]/))h="00"+h}else{var hPos=h.substr(1);var xorLen=hPos.length;if(xorLen%2==1)xorLen+=1;else if(!h.match(/^[0-7]/))xorLen+=2;var hMask="";for(var i=0;i<xorLen;i++)hMask+="f";var biMask=new BigInteger(hMask,16);var biNeg=biMask.xor(bigIntegerValue).add(BigInteger.ONE);h=biNeg.toString(16).replace(/^-/,"")}return h};this.getPEMStringFromHex=function(dataHex,pemHeader){var dataWA=CryptoJS.enc.Hex.parse(dataHex);var dataB64=CryptoJS.enc.Base64S.stringify(dataWA); var pemBody=dataB64.replace(/(.{64})/g,"$1\r\n");pemBody=pemBody.replace(/\r\n$/,"");return"-----BEGIN "+pemHeader+"-----\r\n"+pemBody+"\r\n-----END "+pemHeader+"-----\r\n"}};KJUR.asn1.ASN1Object=function(){var isModified=true;var hTLV=null;var hT="00";var hL="00";var hV="";this.getLengthHexFromValue=function(){if(typeof this.hV=="undefined"||this.hV==null)throw"this.hV is null or undefined.";if(this.hV.length%2==1)throw"value hex must be even length: n="+hV.length+",v="+this.hV;var n=this.hV.length/ 2;var hN=n.toString(16);if(hN.length%2==1)hN="0"+hN;if(n<128)return hN;else{var hNlen=hN.length/2;if(hNlen>15)throw"ASN.1 length too long to represent by 8x: n = "+n.toString(16);var head=128+hNlen;return head.toString(16)+hN}};this.getEncodedHex=function(){if(this.hTLV==null||this.isModified){this.hV=this.getFreshValueHex();this.hL=this.getLengthHexFromValue();this.hTLV=this.hT+this.hL+this.hV;this.isModified=false}return this.hTLV};this.getValueHex=function(){this.getEncodedHex();return this.hV}; this.getFreshValueHex=function(){return""}};KJUR.asn1.DERAbstractString=function(params){KJUR.asn1.DERAbstractString.superclass.constructor.call(this);var s=null;var hV=null;this.getString=function(){return this.s};this.setString=function(newS){this.hTLV=null;this.isModified=true;this.s=newS;this.hV=stohex(this.s)};this.setStringHex=function(newHexString){this.hTLV=null;this.isModified=true;this.s=null;this.hV=newHexString};this.getFreshValueHex=function(){return this.hV};if(typeof params!="undefined")if(typeof params["str"]!= "undefined")this.setString(params["str"]);else if(typeof params["hex"]!="undefined")this.setStringHex(params["hex"])};JSX.extend(KJUR.asn1.DERAbstractString,KJUR.asn1.ASN1Object);KJUR.asn1.DERAbstractTime=function(params){KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);var s=null;var date=null;this.localDateToUTC=function(d){utc=d.getTime()+d.getTimezoneOffset()*6E4;var utcDate=new Date(utc);return utcDate};this.formatDate=function(dateObject,type){var pad=this.zeroPadding;var d=this.localDateToUTC(dateObject); var year=String(d.getFullYear());if(type=="utc")year=year.substr(2,2);var month=pad(String(d.getMonth()+1),2);var day=pad(String(d.getDate()),2);var hour=pad(String(d.getHours()),2);var min=pad(String(d.getMinutes()),2);var sec=pad(String(d.getSeconds()),2);return year+month+day+hour+min+sec+"Z"};this.zeroPadding=function(s,len){if(s.length>=len)return s;return(new Array(len-s.length+1)).join("0")+s};this.getString=function(){return this.s};this.setString=function(newS){this.hTLV=null;this.isModified= true;this.s=newS;this.hV=stohex(this.s)};this.setByDateValue=function(year,month,day,hour,min,sec){var dateObject=new Date(Date.UTC(year,month-1,day,hour,min,sec,0));this.setByDate(dateObject)};this.getFreshValueHex=function(){return this.hV}};JSX.extend(KJUR.asn1.DERAbstractTime,KJUR.asn1.ASN1Object);KJUR.asn1.DERAbstractStructured=function(params){KJUR.asn1.DERAbstractString.superclass.constructor.call(this);var asn1Array=null;this.setByASN1ObjectArray=function(asn1ObjectArray){this.hTLV=null;this.isModified= true;this.asn1Array=asn1ObjectArray};this.appendASN1Object=function(asn1Object){this.hTLV=null;this.isModified=true;this.asn1Array.push(asn1Object)};this.asn1Array=new Array;if(typeof params!="undefined")if(typeof params["array"]!="undefined")this.asn1Array=params["array"]};JSX.extend(KJUR.asn1.DERAbstractStructured,KJUR.asn1.ASN1Object);KJUR.asn1.DERBoolean=function(){KJUR.asn1.DERBoolean.superclass.constructor.call(this);this.hT="01";this.hTLV="0101ff"};JSX.extend(KJUR.asn1.DERBoolean,KJUR.asn1.ASN1Object); KJUR.asn1.DERInteger=function(params){KJUR.asn1.DERInteger.superclass.constructor.call(this);this.hT="02";this.setByBigInteger=function(bigIntegerValue){this.hTLV=null;this.isModified=true;this.hV=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue)};this.setByInteger=function(intValue){var bi=new BigInteger(String(intValue),10);this.setByBigInteger(bi)};this.setValueHex=function(newHexString){this.hV=newHexString};this.getFreshValueHex=function(){return this.hV};if(typeof params!="undefined")if(typeof params["bigint"]!= "undefined")this.setByBigInteger(params["bigint"]);else if(typeof params["int"]!="undefined")this.setByInteger(params["int"]);else if(typeof params["hex"]!="undefined")this.setValueHex(params["hex"])};JSX.extend(KJUR.asn1.DERInteger,KJUR.asn1.ASN1Object);KJUR.asn1.DERBitString=function(params){KJUR.asn1.DERBitString.superclass.constructor.call(this);this.hT="03";this.setHexValueIncludingUnusedBits=function(newHexStringIncludingUnusedBits){this.hTLV=null;this.isModified=true;this.hV=newHexStringIncludingUnusedBits}; this.setUnusedBitsAndHexValue=function(unusedBits,hValue){if(unusedBits<0||7<unusedBits)throw"unused bits shall be from 0 to 7: u = "+unusedBits;var hUnusedBits="0"+unusedBits;this.hTLV=null;this.isModified=true;this.hV=hUnusedBits+hValue};this.setByBinaryString=function(binaryString){binaryString=binaryString.replace(/0+$/,"");var unusedBits=8-binaryString.length%8;if(unusedBits==8)unusedBits=0;for(var i=0;i<=unusedBits;i++)binaryString+="0";var h="";for(var i=0;i<binaryString.length-1;i+=8){var b= binaryString.substr(i,8);var x=parseInt(b,2).toString(16);if(x.length==1)x="0"+x;h+=x}this.hTLV=null;this.isModified=true;this.hV="0"+unusedBits+h};this.setByBooleanArray=function(booleanArray){var s="";for(var i=0;i<booleanArray.length;i++)if(booleanArray[i]==true)s+="1";else s+="0";this.setByBinaryString(s)};this.newFalseArray=function(nLength){var a=new Array(nLength);for(var i=0;i<nLength;i++)a[i]=false;return a};this.getFreshValueHex=function(){return this.hV};if(typeof params!="undefined")if(typeof params["hex"]!= "undefined")this.setHexValueIncludingUnusedBits(params["hex"]);else if(typeof params["bin"]!="undefined")this.setByBinaryString(params["bin"]);else if(typeof params["array"]!="undefined")this.setByBooleanArray(params["array"])};JSX.extend(KJUR.asn1.DERBitString,KJUR.asn1.ASN1Object);KJUR.asn1.DEROctetString=function(params){KJUR.asn1.DEROctetString.superclass.constructor.call(this,params);this.hT="04"};JSX.extend(KJUR.asn1.DEROctetString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERNull=function(){KJUR.asn1.DERNull.superclass.constructor.call(this); this.hT="05";this.hTLV="0500"};JSX.extend(KJUR.asn1.DERNull,KJUR.asn1.ASN1Object);KJUR.asn1.DERObjectIdentifier=function(params){var itox=function(i){var h=i.toString(16);if(h.length==1)h="0"+h;return h};var roidtox=function(roid){var h="";var bi=new BigInteger(roid,10);var b=bi.toString(2);var padLen=7-b.length%7;if(padLen==7)padLen=0;var bPad="";for(var i=0;i<padLen;i++)bPad+="0";b=bPad+b;for(var i=0;i<b.length-1;i+=7){var b8=b.substr(i,7);if(i!=b.length-7)b8="1"+b8;h+=itox(parseInt(b8,2))}return h}; KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);this.hT="06";this.setValueHex=function(newHexString){this.hTLV=null;this.isModified=true;this.s=null;this.hV=newHexString};this.setValueOidString=function(oidString){if(!oidString.match(/^[0-9.]+$/))throw"malformed oid string: "+oidString;var h="";var a=oidString.split(".");var i0=parseInt(a[0])*40+parseInt(a[1]);h+=itox(i0);a.splice(0,2);for(var i=0;i<a.length;i++)h+=roidtox(a[i]);this.hTLV=null;this.isModified=true;this.s=null;this.hV= h};this.setValueName=function(oidName){if(typeof KJUR.asn1.x509.OID.name2oidList[oidName]!="undefined"){var oid=KJUR.asn1.x509.OID.name2oidList[oidName];this.setValueOidString(oid)}else throw"DERObjectIdentifier oidName undefined: "+oidName;};this.getFreshValueHex=function(){return this.hV};if(typeof params!="undefined")if(typeof params["oid"]!="undefined")this.setValueOidString(params["oid"]);else if(typeof params["hex"]!="undefined")this.setValueHex(params["hex"]);else if(typeof params["name"]!= "undefined")this.setValueName(params["name"])};JSX.extend(KJUR.asn1.DERObjectIdentifier,KJUR.asn1.ASN1Object);KJUR.asn1.DERUTF8String=function(params){KJUR.asn1.DERUTF8String.superclass.constructor.call(this,params);this.hT="0c"};JSX.extend(KJUR.asn1.DERUTF8String,KJUR.asn1.DERAbstractString);KJUR.asn1.DERNumericString=function(params){KJUR.asn1.DERNumericString.superclass.constructor.call(this,params);this.hT="12"};JSX.extend(KJUR.asn1.DERNumericString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERPrintableString= function(params){KJUR.asn1.DERPrintableString.superclass.constructor.call(this,params);this.hT="13"};JSX.extend(KJUR.asn1.DERPrintableString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERTeletexString=function(params){KJUR.asn1.DERTeletexString.superclass.constructor.call(this,params);this.hT="14"};JSX.extend(KJUR.asn1.DERTeletexString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERIA5String=function(params){KJUR.asn1.DERIA5String.superclass.constructor.call(this,params);this.hT="16"};JSX.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);KJUR.asn1.DERUTCTime=function(params){KJUR.asn1.DERUTCTime.superclass.constructor.call(this,params);this.hT="17";this.setByDate=function(dateObject){this.hTLV=null;this.isModified=true;this.date=dateObject;this.s=this.formatDate(this.date,"utc");this.hV=stohex(this.s)};if(typeof params!="undefined")if(typeof params["str"]!="undefined")this.setString(params["str"]);else if(typeof params["hex"]!="undefined")this.setStringHex(params["hex"]);else if(typeof params["date"]!= "undefined")this.setByDate(params["date"])};JSX.extend(KJUR.asn1.DERUTCTime,KJUR.asn1.DERAbstractTime);KJUR.asn1.DERGeneralizedTime=function(params){KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this,params);this.hT="18";this.setByDate=function(dateObject){this.hTLV=null;this.isModified=true;this.date=dateObject;this.s=this.formatDate(this.date,"gen");this.hV=stohex(this.s)};if(typeof params!="undefined")if(typeof params["str"]!="undefined")this.setString(params["str"]);else if(typeof params["hex"]!= "undefined")this.setStringHex(params["hex"]);else if(typeof params["date"]!="undefined")this.setByDate(params["date"])};JSX.extend(KJUR.asn1.DERGeneralizedTime,KJUR.asn1.DERAbstractTime);KJUR.asn1.DERSequence=function(params){KJUR.asn1.DERSequence.superclass.constructor.call(this,params);this.hT="30";this.getFreshValueHex=function(){var h="";for(var i=0;i<this.asn1Array.length;i++){var asn1Obj=this.asn1Array[i];h+=asn1Obj.getEncodedHex()}this.hV=h;return this.hV}};JSX.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);KJUR.asn1.DERSet=function(params){KJUR.asn1.DERSet.superclass.constructor.call(this,params);this.hT="31";this.getFreshValueHex=function(){var a=new Array;for(var i=0;i<this.asn1Array.length;i++){var asn1Obj=this.asn1Array[i];a.push(asn1Obj.getEncodedHex())}a.sort();this.hV=a.join("");return this.hV}};JSX.extend(KJUR.asn1.DERSet,KJUR.asn1.DERAbstractStructured);KJUR.asn1.DERTaggedObject=function(params){KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);this.hT= "a0";this.hV="";this.isExplicit=true;this.asn1Object=null;this.setASN1Object=function(isExplicitFlag,tagNoHex,asn1Object){this.hT=tagNoHex;this.isExplicit=isExplicitFlag;this.asn1Object=asn1Object;if(this.isExplicit){this.hV=this.asn1Object.getEncodedHex();this.hTLV=null;this.isModified=true}else{this.hV=null;this.hTLV=asn1Object.getEncodedHex();this.hTLV=this.hTLV.replace(/^../,tagNoHex);this.isModified=false}};this.getFreshValueHex=function(){return this.hV};if(typeof params!="undefined"){if(typeof params["tag"]!= "undefined")this.hT=params["tag"];if(typeof params["explicit"]!="undefined")this.isExplicit=params["explicit"];if(typeof params["obj"]!="undefined"){this.asn1Object=params["obj"];this.setASN1Object(this.isExplicit,this.hT,this.asn1Object)}}};JSX.extend(KJUR.asn1.DERTaggedObject,KJUR.asn1.ASN1Object);(function(undefined){var Hex1={},decoder;Hex1.decode=function(a){var i;if(decoder===undefined){var hex="0123456789ABCDEF",ignore=" \f\n\r\t\u00a0\u2028\u2029";decoder=[];for(i=0;i<16;++i)decoder[hex.charAt(i)]= i;hex=hex.toLowerCase();for(i=10;i<16;++i)decoder[hex.charAt(i)]=i;for(i=0;i<ignore.length;++i)decoder[ignore.charAt(i)]=-1}var out=[],bits=0,char_count=0;for(i=0;i<a.length;++i){var c=a.charAt(i);if(c=="=")break;c=decoder[c];if(c==-1)continue;if(c===undefined)throw"Illegal character at offset "+i;bits|=c;if(++char_count>=2){out[out.length]=bits;bits=0;char_count=0}else bits<<=4}if(char_count)throw"Hex encoding incomplete: 4 bits missing";return out};Hex=Hex1})();(function(undefined){var Base64S1= {},decoder;Base64S1.decode=function(a){var i;if(decoder===undefined){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ignore="= \f\n\r\t\u00a0\u2028\u2029";decoder=[];for(i=0;i<64;++i)decoder[b64.charAt(i)]=i;for(i=0;i<ignore.length;++i)decoder[ignore.charAt(i)]=-1}var out=[];var bits=0,char_count=0;for(i=0;i<a.length;++i){var c=a.charAt(i);if(c=="=")break;c=decoder[c];if(c==-1)continue;if(c===undefined)throw"Illegal character at offset "+i;bits|=c;if(++char_count>=4){out[out.length]= bits>>16;out[out.length]=bits>>8&255;out[out.length]=bits&255;bits=0;char_count=0}else bits<<=6}switch(char_count){case 1:throw"Base64S encoding incomplete: at least 2 bits missing";case 2:out[out.length]=bits>>10;break;case 3:out[out.length]=bits>>16;out[out.length]=bits>>8&255;break}return out};Base64S1.re=/-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-Base64S[^\n]+\n([A-Za-z0-9+\/=\s]+)====/;Base64S1.unarmor=function(a){var m=Base64S1.re.exec(a);if(m)if(m[1])a=m[1];else if(m[2])a= m[2];else throw"RegExp out of sync";return Base64S1.decode(a)};Base64S=Base64S1})();(function(undefined){var hardLimit=100,ellipsis="\u2026",DOM={tag:function(tagName,className){var t=document.createElement(tagName);t.className=className;return t},text:function(str){return document.createTextNode(str)}};function Stream(enc,pos){if(enc instanceof Stream){this.enc=enc.enc;this.pos=enc.pos}else{this.enc=enc;this.pos=pos}}Stream.prototype.get=function(pos){if(pos===undefined)pos=this.pos++;if(pos>=this.enc.length)throw"Requesting byte offset "+ pos+" on a stream of length "+this.enc.length;return this.enc[pos]};Stream.prototype.hexDigits="0123456789ABCDEF";Stream.prototype.hexByte=function(b){return this.hexDigits.charAt(b>>4&15)+this.hexDigits.charAt(b&15)};Stream.prototype.hexDump=function(start,end,raw){var s="";for(var i=start;i<end;++i){s+=this.hexByte(this.get(i));if(raw!==true)switch(i&15){case 7:s+="  ";break;case 15:s+="\n";break;default:s+=" "}}return s};Stream.prototype.parseStringISO=function(start,end){var s="";for(var i=start;i< end;++i)s+=String.fromCharCode(this.get(i));return s};Stream.prototype.parseStringUTF=function(start,end){var s="";for(var i=start;i<end;){var c=this.get(i++);if(c<128)s+=String.fromCharCode(c);else if(c>191&&c<224)s+=String.fromCharCode((c&31)<<6|this.get(i++)&63);else s+=String.fromCharCode((c&15)<<12|(this.get(i++)&63)<<6|this.get(i++)&63)}return s};Stream.prototype.parseStringBMP=function(start,end){var str="";for(var i=start;i<end;i+=2){var high_byte=this.get(i);var low_byte=this.get(i+1);str+= String.fromCharCode((high_byte<<8)+low_byte)}return str};Stream.prototype.reTime=/^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;Stream.prototype.parseTime=function(start,end){var s=this.parseStringISO(start,end),m=this.reTime.exec(s);if(!m)return"Unrecognized time: "+s;s=m[1]+"-"+m[2]+"-"+m[3]+" "+m[4];if(m[5]){s+=":"+m[5];if(m[6]){s+=":"+m[6];if(m[7])s+="."+m[7]}}if(m[8]){s+=" UTC";if(m[8]!= "Z"){s+=m[8];if(m[9])s+=":"+m[9]}}return s};Stream.prototype.parseInteger=function(start,end){var len=end-start;if(len>4){len<<=3;var s=this.get(start);if(s===0)len-=8;else while(s<128){s<<=1;--len}return"("+len+" bit)"}var n=0;for(var i=start;i<end;++i)n=n<<8|this.get(i);return n};Stream.prototype.parseBitString=function(start,end){var unusedBit=this.get(start),lenBit=(end-start-1<<3)-unusedBit,s="("+lenBit+" bit)";if(lenBit<=20){var skip=unusedBit;s+=" ";for(var i=end-1;i>start;--i){var b=this.get(i); for(var j=skip;j<8;++j)s+=b>>j&1?"1":"0";skip=0}}return s};Stream.prototype.parseOctetString=function(start,end){var len=end-start,s="("+len+" byte) ";if(len>hardLimit)end=start+hardLimit;for(var i=start;i<end;++i)s+=this.hexByte(this.get(i));if(len>hardLimit)s+=ellipsis;return s};Stream.prototype.parseOID=function(start,end){var s="",n=0,bits=0;for(var i=start;i<end;++i){var v=this.get(i);n=n<<7|v&127;bits+=7;if(!(v&128)){if(s===""){var m=n<80?n<40?0:1:2;s=m+"."+(n-m*40)}else s+="."+(bits>=31?"bigint": n);n=bits=0}}return s};function ASN11(stream,header,length,tag,sub){this.stream=stream;this.header=header;this.length=length;this.tag=tag;this.sub=sub}ASN11.prototype.typeName=function(){if(this.tag===undefined)return"unknown";var tagClass=this.tag>>6,tagConstructed=this.tag>>5&1,tagNumber=this.tag&31;switch(tagClass){case 0:switch(tagNumber){case 0:return"EOC";case 1:return"BOOLEAN";case 2:return"INTEGER";case 3:return"BIT_STRING";case 4:return"OCTET_STRING";case 5:return"NULL";case 6:return"OBJECT_IDENTIFIER"; case 7:return"ObjectDescriptor";case 8:return"EXTERNAL";case 9:return"REAL";case 10:return"ENUMERATED";case 11:return"EMBEDDED_PDV";case 12:return"UTF8String";case 16:return"SEQUENCE";case 17:return"SET";case 18:return"NumericString";case 19:return"PrintableString";case 20:return"TeletexString";case 21:return"VideotexString";case 22:return"IA5String";case 23:return"UTCTime";case 24:return"GeneralizedTime";case 25:return"GraphicString";case 26:return"VisibleString";case 27:return"GeneralString";case 28:return"UniversalString"; case 30:return"BMPString";default:return"Universal_"+tagNumber.toString(16)}case 1:return"Application_"+tagNumber.toString(16);case 2:return"["+tagNumber+"]";case 3:return"Private_"+tagNumber.toString(16)}};ASN11.prototype.reSeemsASCII=/^[ -~]+$/;ASN11.prototype.content=function(){if(this.tag===undefined)return null;var tagClass=this.tag>>6,tagNumber=this.tag&31,content=this.posContent(),len=Math.abs(this.length);if(tagClass!==0){if(this.sub!==null)return"("+this.sub.length+" elem)";var s=this.stream.parseStringISO(content, content+Math.min(len,hardLimit));if(this.reSeemsASCII.test(s))return s.substring(0,2*hardLimit)+(s.length>2*hardLimit?ellipsis:"");else return this.stream.parseOctetString(content,content+len)}switch(tagNumber){case 1:return this.stream.get(content)===0?"false":"true";case 2:return this.stream.parseInteger(content,content+len);case 3:return this.sub?"("+this.sub.length+" elem)":this.stream.parseBitString(content,content+len);case 4:return this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(content, content+len);case 6:return this.stream.parseOID(content,content+len);case 16:case 17:return"("+this.sub.length+" elem)";case 12:return this.stream.parseStringUTF(content,content+len);case 18:case 19:case 20:case 21:case 22:case 26:return this.stream.parseStringISO(content,content+len);case 30:return this.stream.parseStringBMP(content,content+len);case 23:case 24:return this.stream.parseTime(content,content+len)}return null};ASN11.prototype.toString=function(){return this.typeName()+"@"+this.stream.pos+ "[header:"+this.header+",length:"+this.length+",sub:"+(this.sub===null?"null":this.sub.length)+"]"};ASN11.prototype.print=function(indent){if(indent===undefined)indent="";document.writeln(indent+this);if(this.sub!==null){indent+="  ";for(var i=0,max=this.sub.length;i<max;++i)this.sub[i].print(indent)}};ASN11.prototype.toPrettyString=function(indent){if(indent===undefined)indent="";var s=indent+this.typeName()+" @"+this.stream.pos;if(this.length>=0)s+="+";s+=this.length;if(this.tag&32)s+=" (constructed)"; else if((this.tag==3||this.tag==4)&&this.sub!==null)s+=" (encapsulates)";s+="\n";if(this.sub!==null){indent+="  ";for(var i=0,max=this.sub.length;i<max;++i)s+=this.sub[i].toPrettyString(indent)}return s};ASN11.prototype.toDOM=function(){var node=DOM.tag("div","node");node.asn1=this;var head=DOM.tag("div","head");var s=this.typeName().replace(/_/g," ");head.innerHTML=s;var content=this.content();if(content!==null){content=String(content).replace(/</g,"&lt;");var preview=DOM.tag("span","preview");preview.appendChild(DOM.text(content)); head.appendChild(preview)}node.appendChild(head);this.node=node;this.head=head;var value=DOM.tag("div","value");s="Offset: "+this.stream.pos+"<br/>";s+="Length: "+this.header+"+";if(this.length>=0)s+=this.length;else s+=-this.length+" (undefined)";if(this.tag&32)s+="<br/>(constructed)";else if((this.tag==3||this.tag==4)&&this.sub!==null)s+="<br/>(encapsulates)";if(content!==null){s+="<br/>Value:<br/><b>"+content+"</b>";if(typeof oids==="object"&&this.tag==6){var oid=oids[content];if(oid){if(oid.d)s+= "<br/>"+oid.d;if(oid.c)s+="<br/>"+oid.c;if(oid.w)s+="<br/>(warning!)"}}}value.innerHTML=s;node.appendChild(value);var sub=DOM.tag("div","sub");if(this.sub!==null)for(var i=0,max=this.sub.length;i<max;++i)sub.appendChild(this.sub[i].toDOM());node.appendChild(sub);head.onclick=function(){node.className=node.className=="node collapsed"?"node":"node collapsed"};return node};ASN11.prototype.posStart=function(){return this.stream.pos};ASN11.prototype.posContent=function(){return this.stream.pos+this.header}; ASN11.prototype.posEnd=function(){return this.stream.pos+this.header+Math.abs(this.length)};ASN11.prototype.fakeHover=function(current){this.node.className+=" hover";if(current)this.head.className+=" hover"};ASN11.prototype.fakeOut=function(current){var re=/ ?hover/;this.node.className=this.node.className.replace(re,"");if(current)this.head.className=this.head.className.replace(re,"")};ASN11.prototype.toHexDOM_sub=function(node,className,stream,start,end){if(start>=end)return;var sub=DOM.tag("span", className);sub.appendChild(DOM.text(stream.hexDump(start,end)));node.appendChild(sub)};ASN11.prototype.toHexDOM=function(root){var node=DOM.tag("span","hex");if(root===undefined)root=node;this.head.hexNode=node;this.head.onmouseover=function(){this.hexNode.className="hexCurrent"};this.head.onmouseout=function(){this.hexNode.className="hex"};node.asn1=this;node.onmouseover=function(){var current=!root.selected;if(current){root.selected=this.asn1;this.className="hexCurrent"}this.asn1.fakeHover(current)}; node.onmouseout=function(){var current=root.selected==this.asn1;this.asn1.fakeOut(current);if(current){root.selected=null;this.className="hex"}};this.toHexDOM_sub(node,"tag",this.stream,this.posStart(),this.posStart()+1);this.toHexDOM_sub(node,this.length>=0?"dlen":"ulen",this.stream,this.posStart()+1,this.posContent());if(this.sub===null)node.appendChild(DOM.text(this.stream.hexDump(this.posContent(),this.posEnd())));else if(this.sub.length>0){var first=this.sub[0];var last=this.sub[this.sub.length- 1];this.toHexDOM_sub(node,"intro",this.stream,this.posContent(),first.posStart());for(var i=0,max=this.sub.length;i<max;++i)node.appendChild(this.sub[i].toHexDOM(root));this.toHexDOM_sub(node,"outro",this.stream,last.posEnd(),this.posEnd())}return node};ASN11.prototype.toHexString=function(root){return this.stream.hexDump(this.posStart(),this.posEnd(),true)};ASN11.decodeLength=function(stream){var buf=stream.get(),len=buf&127;if(len==buf)return len;if(len>3)throw"Length over 24 bits not supported at position "+ (stream.pos-1);if(len===0)return-1;buf=0;for(var i=0;i<len;++i)buf=buf<<8|stream.get();return buf};ASN11.hasContent=function(tag,len,stream){if(tag&32)return true;if(tag<3||tag>4)return false;var p=new Stream(stream);if(tag==3)p.get();var subTag=p.get();if(subTag>>6&1)return false;try{var subLength=ASN11.decodeLength(p);return p.pos-stream.pos+subLength==len}catch(exception){return false}};ASN11.decode=function(stream){if(!(stream instanceof Stream))stream=new Stream(stream,0);var streamStart=new Stream(stream), tag=stream.get(),len=ASN1.decodeLength(stream),header=stream.pos-streamStart.pos,sub=null;if(ASN1.hasContent(tag,len,stream)){var start=stream.pos;if(tag==3)stream.get();sub=[];if(len>=0){var end=start+len;while(stream.pos<end)sub[sub.length]=ASN1.decode(stream);if(stream.pos!=end)throw"Content size is not correct for container starting at offset "+start;}else try{for(;;){var s=ASN11.decode(stream);if(s.tag===0)break;sub[sub.length]=s}len=start-stream.pos}catch(e){throw"Exception while decoding undefined length content: "+ e;}}else stream.pos+=len;return new ASN11(streamStart,header,len,tag,sub)};ASN11.test=function(){var test=[{value:[39],expected:39},{value:[129,201],expected:201},{value:[131,254,220,186],expected:16702650}];for(var i=0,max=test.length;i<max;++i){var pos=0,stream=new Stream(test[i].value,0),res=ASN1.decodeLength(stream);if(res!=test[i].expected)document.write("In test["+i+"] expected "+test[i].expected+" got "+res+"\n")}};ASN1=ASN11})();ASN1.prototype.getHexStringValue=function(){var hexString=this.toHexString(); var offset=this.header*2;var length=this.length*2;return hexString.substr(offset,length)};RSAKey.prototype.parseKey=function(pem){try{var modulus=0;var public_exponent=0;var reHex=/^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;var der=reHex.test(pem)?Hex.decode(pem):Base64S.unarmor(pem);var asn1=ASN1.decode(der);if(asn1.sub.length===3)asn1=asn1.sub[2].sub[0];if(asn1.sub.length===9){modulus=asn1.sub[1].getHexStringValue();this.n=parseBigInt(modulus,16);public_exponent=asn1.sub[2].getHexStringValue();this.e= parseInt(public_exponent,16);var private_exponent=asn1.sub[3].getHexStringValue();this.d=parseBigInt(private_exponent,16);var prime1=asn1.sub[4].getHexStringValue();this.p=parseBigInt(prime1,16);var prime2=asn1.sub[5].getHexStringValue();this.q=parseBigInt(prime2,16);var exponent1=asn1.sub[6].getHexStringValue();this.dmp1=parseBigInt(exponent1,16);var exponent2=asn1.sub[7].getHexStringValue();this.dmq1=parseBigInt(exponent2,16);var coefficient=asn1.sub[8].getHexStringValue();this.coeff=parseBigInt(coefficient, 16)}else if(asn1.sub.length===2){var bit_string=asn1.sub[1];var sequence=bit_string.sub[0];modulus=sequence.sub[0].getHexStringValue();this.n=parseBigInt(modulus,16);public_exponent=sequence.sub[1].getHexStringValue();this.e=parseInt(public_exponent,16)}else return false;return true}catch(ex){return false}};RSAKey.prototype.getPrivateBaseKey=function(){var options={"array":[new KJUR.asn1.DERInteger({"int":0}),new KJUR.asn1.DERInteger({"bigint":this.n}),new KJUR.asn1.DERInteger({"int":this.e}),new KJUR.asn1.DERInteger({"bigint":this.d}), new KJUR.asn1.DERInteger({"bigint":this.p}),new KJUR.asn1.DERInteger({"bigint":this.q}),new KJUR.asn1.DERInteger({"bigint":this.dmp1}),new KJUR.asn1.DERInteger({"bigint":this.dmq1}),new KJUR.asn1.DERInteger({"bigint":this.coeff})]};var seq=new KJUR.asn1.DERSequence(options);return seq.getEncodedHex()};RSAKey.prototype.getPrivateBaseKeyB64=function(){return hex2b64(this.getPrivateBaseKey())};RSAKey.prototype.getPublicBaseKey=function(){var options={"array":[new KJUR.asn1.DERObjectIdentifier({"oid":"1.2.840.113549.1.1.1"}), new KJUR.asn1.DERNull]};var first_sequence=new KJUR.asn1.DERSequence(options);options={"array":[new KJUR.asn1.DERInteger({"bigint":this.n}),new KJUR.asn1.DERInteger({"int":this.e})]};var second_sequence=new KJUR.asn1.DERSequence(options);options={"hex":"00"+second_sequence.getEncodedHex()};var bit_string=new KJUR.asn1.DERBitString(options);options={"array":[first_sequence,bit_string]};var seq=new KJUR.asn1.DERSequence(options);return seq.getEncodedHex()};RSAKey.prototype.getPublicBaseKeyB64=function(){return hex2b64(this.getPublicBaseKey())}; RSAKey.prototype.wordwrap=function(str,width){width=width||64;if(!str)return str;var regex="(.{1,"+width+"})( +|$\n?)|(.{1,"+width+"})";return str.match(RegExp(regex,"g")).join("\n")};RSAKey.prototype.getPrivateKey=function(){var key="-----BEGIN RSA PRIVATE KEY-----\n";key+=this.wordwrap(this.getPrivateBaseKeyB64())+"\n";key+="-----END RSA PRIVATE KEY-----";return key};RSAKey.prototype.getPublicKey=function(){var key="-----BEGIN PUBLIC KEY-----\n";key+=this.wordwrap(this.getPublicBaseKeyB64())+"\n"; key+="-----END PUBLIC KEY-----";return key};RSAKey.prototype.hasPublicKeyProperty=function(obj){obj=obj||{};return obj.hasOwnProperty("n")&&obj.hasOwnProperty("e")};RSAKey.prototype.hasPrivateKeyProperty=function(obj){obj=obj||{};return obj.hasOwnProperty("n")&&obj.hasOwnProperty("e")&&obj.hasOwnProperty("d")&&obj.hasOwnProperty("p")&&obj.hasOwnProperty("q")&&obj.hasOwnProperty("dmp1")&&obj.hasOwnProperty("dmq1")&&obj.hasOwnProperty("coeff")};RSAKey.prototype.parsePropertiesFrom=function(obj){this.n= obj.n;this.e=obj.e;if(obj.hasOwnProperty("d")){this.d=obj.d;this.p=obj.p;this.q=obj.q;this.dmp1=obj.dmp1;this.dmq1=obj.dmq1;this.coeff=obj.coeff}};var JSEncryptRSAKey=function(key){RSAKey.call(this);if(key)if(typeof key==="string")this.parseKey(key);else if(this.hasPrivateKeyProperty(key)||this.hasPublicKeyProperty(key))this.parsePropertiesFrom(key)};JSEncryptRSAKey.prototype=new RSAKey;JSEncryptRSAKey.prototype.constructor=JSEncryptRSAKey;var JSEncrypt=function(options){options=options||{};this.default_key_size= parseInt(options.default_key_size)||1024;this.default_public_exponent=options.default_public_exponent||"010001";this.log=options.log||false;this.key=null};JSEncrypt.prototype.setKey=function(key){if(this.log&&this.key)console.warn("A key was already set, overriding existing.");this.key=new JSEncryptRSAKey(key)};JSEncrypt.prototype.setPrivateKey=function(privkey){this.setKey(privkey)};JSEncrypt.prototype.setPublicKey=function(pubkey){this.setKey(pubkey)};JSEncrypt.prototype.decrypt=function(string){try{return this.getKey().decrypt(b64tohex(string))}catch(ex){return false}}; JSEncrypt.prototype.encrypt=function(string){try{return hex2b64(this.getKey().encrypt(string))}catch(ex){return false}};JSEncrypt.prototype.getKey=function(cb){if(!this.key){this.key=new JSEncryptRSAKey;if(cb&&{}.toString.call(cb)==="[object Function]"){this.key.generateAsync(this.default_key_size,this.default_public_exponent,cb);return}this.key.generate(this.default_key_size,this.default_public_exponent)}return this.key};JSEncrypt.prototype.getPrivateKey=function(){return this.getKey().getPrivateKey()}; JSEncrypt.prototype.getPrivateKeyB64=function(){return this.getKey().getPrivateBaseKeyB64()};JSEncrypt.prototype.getPublicKey=function(){return this.getKey().getPublicKey()};JSEncrypt.prototype.getPublicKeyB64=function(){return this.getKey().getPublicBaseKeyB64()};exports.JSEncrypt=JSEncrypt})(JSEncryptExports);var JSEncrypt=JSEncryptExports.JSEncrypt; function RSAEncrypt(message){var encrypt=new JSEncrypt;var pKey="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB";encrypt.setPublicKey(pKey);var encrypted=encrypt.encrypt(message);return encrypted}; var JSEncrypt = JSEncryptExports.JSEncrypt;

const Tele_AutoCheck_key_brond=`Tele_AutoCheck.key_brond`
const Tele_AutoCheck_LoginName=`Tele_AutoCheck.LoginName`
const Tele_AutoCheck_LoginPw=`Tele_AutoCheck.LoginPw`
const Tele_AutoCheck_SetVal=`Tele_AutoCheck.SetVal`
const Tele_AutoCheck_hourstimeStore=`Tele_AutoCheck.hourstimeStore`
const Tele_AutoCheck_minutestimeStore=`Tele_AutoCheck.minutestimeStore`
const Tele_AutoCheck_limitStore=`Tele_AutoCheck.limitStore`
const Tele_AutoCheck_unlimitStore=`Tele_AutoCheck.unlimitStore`
const Tele_AutoCheck_bark_icon=`Tele_AutoCheck.bark_icon`
const Tele_AutoCheck_bark_key=`Tele_AutoCheck.bark_key`
const Tele_AutoCheck_bark_add=`Tele_AutoCheck.bark_add`
const Tele_AutoCheck_packge_detail=`Tele_AutoCheck.packge_detail`
const Tele_AutoCheck_querybody=`Tele_AutoCheck.querybody`
const Tele_AutoCheck_limit_choose=`Tele_AutoCheck.limit_choose`
const Tele_AutoCheck_threshold=`Tele_AutoCheck.threshold`
const Tele_AutoCheck_notice_body=`Tele_AutoCheck.notice_body`
const Tele_AutoCheck_day=`Tele_AutoCheck.day`
const Tele_AutoCheck_limittoday=`Tele_AutoCheck.limittoday`
const Tele_AutoCheck_unlimittoday=`Tele_AutoCheck.unlimittoday`

!(async () => {
    let panel = {
        title: '电信余量',
        content: ``,
        backgroundColor: "#0099FF",
        icon: "dial.max.fill",
    }
    try {
        
        let thishours = Number(formatTime().hours)
        let thisminutes = Number(formatTime().minutes)
        let Days = formatTime().day
        let lasthours = $.getdata(Tele_AutoCheck_hourstimeStore)
        let lastminutes = $.getdata(Tele_AutoCheck_minutestimeStore)
        let minutesused, Tokenexpired,jsonData,ArrayQuery
        let isFirst=false

        if (lasthours == undefined && lastminutes == undefined) isFirst = true
        if (lasthours == undefined) lasthours = thishours
        if (lastminutes == undefined) lastminutes = thisminutes
        let hoursused = thishours - lasthours
        
        if (hoursused >= 0) { minutesused = (thisminutes - lastminutes) + hoursused * 60 } //上次查询的时间大于等于当前查询的时间
        else if (hoursused < 0 && lasthours <= 23) { minutesused = (60 - lastminutes) + (23 - lasthours + thishours) * 60 + thisminutes }
        //**********

        let Tile_All = { Tile_Today: '', Tile_Month: '', Tile_Time: '' }


        let Phone = $.getdata(Tele_AutoCheck_LoginName)
        let PassWd = $.getdata(Tele_AutoCheck_LoginPw)
        let Tele_value = $.getdata(Tele_AutoCheck_threshold) //读取阈值
        
        if(Phone==undefined) {Phone='';$.setdata('',Tele_AutoCheck_LoginName)}
        if(PassWd==undefined) {PassWd='';$.setdata('',Tele_AutoCheck_LoginPw)}
        if(Tele_value == undefined) { Tele_value = '' ;$.setdata('', Tele_AutoCheck_threshold)}
        

        if(Phone==''||PassWd=='') {throw '请在Boxjs中设置登录账号与密码'}

        if(!isFirst){
            do{jsonData = await Query($.getjson(Tele_AutoCheck_querybody))}while(jsonData!='err'&&jsonData.responseData!=null&&jsonData.responseData.data.flowInfo.commonFlow.balance==null);
            $.setjson(jsonData,Tele_AutoCheck_packge_detail)
        }

        if(jsonData!=undefined&&(jsonData=='err'||jsonData.headerInfos.code=='X104'||jsonData.headerInfos.code=='X201')) Tokenexpired=true

        if(isFirst||Tokenexpired||jsonData.status=='400'||jsonData.status=='415') {

            let trylogin=await Login(Phone,PassWd) //尝试使用账号密码登录
            if(trylogin.responseData.resultCode!="0000") throw trylogin.responseData.resultDesc
            if(isFirst) $.log('当前为初次使用，尝试获取Token')
            if(Tokenexpired) $.log('当前Token已过期，尝试获取Token')
            $.log(`\n`+JSON.stringify(trylogin))
			$.setjson(trylogin,Tele_AutoCheck_querybody)
            do{jsonData = await Query(trylogin)}while(jsonData!='err'&&jsonData.responseData!=null&&jsonData.responseData.data.flowInfo.commonFlow.balance==null);
            $.setjson(jsonData,Tele_AutoCheck_packge_detail)
        }

        ArrayQuery = Query_All(jsonData)

        let brond = $.getdata(Tele_AutoCheck_key_brond)
        if (brond== undefined|| brond == '') {
            brond = (await ProductName($.getjson(Tele_AutoCheck_querybody))).responseData.data.mainProductOFFInfo.productOFFName
            $.setdata(brond, Tele_AutoCheck_key_brond)
        }

        let limitThis = ArrayQuery.limitusage//通用使用量
        let unlimitThis = ArrayQuery.unlimitusage//定向使用量
        let limitLast = $.getdata(Tele_AutoCheck_limitStore) //将上次查询到的值读出来
        let unlimitLast = $.getdata(Tele_AutoCheck_unlimitStore) //将上次查询到的值读出来
        if (limitLast == undefined) limitLast = limitThis;else limitLast=Number(limitLast)
        if (unlimitLast == undefined) unlimitLast = unlimitThis;else unlimitLast=Number(unlimitLast)
        let limitChange = limitThis - limitLast
        let unlimitChange = unlimitThis - unlimitLast

        if (limitChange< 0 ||unlimitChange<0)
        {
            $.setdata($.toStr(0), Tele_AutoCheck_limitStore)
            $.setdata($.toStr(0), Tele_AutoCheck_unlimitStore)
            limitChange=0;unlimitChange=0;
            title = "数据修正"
            body = '修正后：'
            body1 = '通用使用：'+ToSize(limitThis,0,0,1)+' 定向使用：'+ToSize(unlimitThis,0,0,1)
            Notice(title, body, body1)
        }

        //***********

        let tile_date = $.getdata(Tele_AutoCheck_day)

        if (tile_date == '') { $.setdata($.toStr(Days), Tele_AutoCheck_day) }//初次
        let tile_unlimittoday = $.getdata(Tele_AutoCheck_unlimittoday)
        let tile_limittoday = $.getdata(Tele_AutoCheck_limittoday)
        if ((thishours == 0 && thisminutes == 0) || (tile_unlimittoday == '' || tile_limittoday == '') || tile_date != $.toStr(Days))//面板更新时间
        {
            $.setdata($.toStr(Days), Tele_AutoCheck_day)
            $.setdata($.toStr(ArrayQuery.unlimitusage), Tele_AutoCheck_unlimittoday)
            $.setdata($.toStr(ArrayQuery.limitusage), Tele_AutoCheck_limittoday)
        }
        let tile_unlimitTotal = ArrayQuery.unlimitusage - tile_unlimittoday//面板今日定向用量
        let tile_limitTotal = ArrayQuery.limitusage - tile_limittoday//面板今天通用用量
        let tile_unlimitUsageTotal = ArrayQuery.unlimitusage//面板本月定向使用量
        let tile_limitUsageTotal = ArrayQuery.limitusage//面板本月通用使用量

        if (thishours < 10) { tile_hour = '0' + thishours }else { tile_hour = thishours }
        if (thisminutes < 10) { tile_minute = '0' + thisminutes }else { tile_minute = thisminutes }

        Tile_All['Tile_Today'] = ToSize(tile_unlimitTotal, 1, 0, 1) + '/' + ToSize(tile_limitTotal, 1, 0, 1)
        Tile_All['Tile_Month'] = ToSize(tile_unlimitUsageTotal, 1, 0, 1) + '/' + ToSize(tile_limitUsageTotal, 1, 0, 1)
        Tile_All['Tile_Time'] = tile_hour + ':' + tile_minute

        let notice_body = $.getdata(Tele_AutoCheck_notice_body);
        if (notice_body == undefined) {
            notice_body = $.setdata("免/跳/总免/剩余", Tele_AutoCheck_notice_body)
            notice_body = $.getdata(Tele_AutoCheck_notice_body).split('/')
        } else { notice_body = $.getdata(Tele_AutoCheck_notice_body).split('/') }
        
        $.log('详细信息：'+$.toStr(AllInfo(jsonData).Phone.Bar)+`\n\n`+ '流量卡名：' + brond + `\n`+'账户余额：'+AllInfo(jsonData).Phone.Left+` `+'实时话费：'+AllInfo(jsonData).Phone.Used+`\n`+AllInfo(jsonData).Flow.Detail+`\n`+'国内语音/'+AllInfo(jsonData).Voice.Total+' 使用：'+AllInfo(jsonData).Voice.Used+` 剩余：`+AllInfo(jsonData).Voice.Left+`\n`+AllInfo(jsonData).Storage.Detail+`\n`+'流量总共使用：'+AllInfo(jsonData).Flow.AllUsed+`\n`+'云盘总共使用：'+AllInfo(jsonData).Storage.AllUsed+`\n`+AllInfo(jsonData).Integral+`\n`)
        $.log("上次通用使用：" + ToSize(limitLast, 2, 0, 1) + " 当前通用使用：" + ToSize(limitThis, 2, 0, 1))
        $.log("上次定向使用：" + ToSize(unlimitLast, 2, 0, 1) + " 当前定向使用：" + ToSize(unlimitThis, 2, 0, 1))
        $.log("通用变化量：" + ToSize(limitChange, 2, 0, 1) + " 定向变化量：" + ToSize(unlimitChange, 2, 0, 1))
        
        if(Tele_value==''){
            $.log(`\n` + '当前为定时通知 间隔时间请去Cron中修改' )
            if (isFirst) $.log('首次使用：通知已发送！')
            $.setdata($.toStr(ArrayQuery.limitusage), Tele_AutoCheck_limitStore)
            $.setdata($.toStr(ArrayQuery.unlimitusage),Tele_AutoCheck_unlimitStore)
            $.setdata($.toStr(thishours), Tele_AutoCheck_hourstimeStore)
            $.setdata($.toStr(thisminutes), Tele_AutoCheck_minutestimeStore)
            title = brond + '  耗时:' + formatMinutes(minutesused)
            body = notice_body[0] + ToSize(unlimitChange, 2, 1, 1) + ' ' + notice_body[1] + ToSize(limitChange, 2, 1, 1)
            body1 = notice_body[2] + ToSize(ArrayQuery.unlimitusage, 2, 1, 1) + ' ' + notice_body[3] + ToSize(ArrayQuery.limitleft, 2, 1, 1)+`\n\n`+ '流量卡名：' + brond + `\n`+'账户余额：'+AllInfo(jsonData).Phone.Left+` `+'实时话费：'+AllInfo(jsonData).Phone.Used+`\n`+AllInfo(jsonData).Flow.Detail+`\n`+'国内语音/'+AllInfo(jsonData).Voice.Total+' 使用：'+AllInfo(jsonData).Voice.Used+` 剩余：`+AllInfo(jsonData).Voice.Used+`\n`+AllInfo(jsonData).Storage.Detail+`\n`+'流量总共使用：'+AllInfo(jsonData).Flow.AllUsed+`\n`+'云盘总共使用：'+AllInfo(jsonData).Storage.AllUsed+`\n`+AllInfo(jsonData).Integral
            Notice(title, body, body1)
        }else{
            $.log(`\n` + '当前为变化通知，变化阈值为：' + ToSize(Tele_value, 3, 0, 1))
            let Change=$.getdata(Tele_AutoCheck_limit_choose) //判断是仅通用，还是任意值变化
            if(Change==undefined) {$.setdata('false',Tele_AutoCheck_limit_choose);Change='false'}
            let val=false
            if(Change=='true'&&limitChange >= Tele_value) val=true
            if(Change=='false'&&(unlimitChange>=Tele_value||limitChange>=Tele_value)) val=true
            if (val) {
                $.setdata($.toStr(ArrayQuery.limitusage), Tele_AutoCheck_limitStore)
                $.setdata($.toStr(ArrayQuery.unlimitusage), Tele_AutoCheck_unlimitStore)
                $.setdata($.toStr(thishours), Tele_AutoCheck_hourstimeStore)
                $.setdata($.toStr(thisminutes), Tele_AutoCheck_minutestimeStore)
                title = brond + '  耗时:' + formatMinutes(minutesused)
                body = notice_body[0] + ToSize(unlimitChange, 2, 1, 1) + ' ' + notice_body[1] + ToSize(limitChange, 2, 1, 1)
                body1 = notice_body[2] + ToSize(ArrayQuery.unlimitusage, 2, 1, 1) + ' ' + notice_body[3] + ToSize(ArrayQuery.limitleft, 2, 1, 1)+`\n\n`+ '流量卡名：' + brond + `\n`+'账户余额：'+AllInfo(jsonData).Phone.Left+` `+'实时话费：'+AllInfo(jsonData).Phone.Used+`\n`+AllInfo(jsonData).Flow.Detail+`\n`+'国内语音/'+AllInfo(jsonData).Voice.Total+' 使用：'+AllInfo(jsonData).Voice.Used+` 剩余：`+AllInfo(jsonData).Voice.Used+`\n`+AllInfo(jsonData).Storage.Detail+`\n`+'流量总共使用：'+AllInfo(jsonData).Flow.AllUsed+`\n`+'云盘总共使用：'+AllInfo(jsonData).Storage.AllUsed+`\n`+AllInfo(jsonData).Integral
                Notice(title, body, body1)
            }
        }

        panel['title'] = $.getdata(Tele_AutoCheck_key_brond)
        panel['content'] = '今日免流/跳点：' + Tile_All['Tile_Today'] + `\n` + '本月免流/跳点：' + Tile_All['Tile_Month'] + `\n` + '查询时间：' + Tile_All['Tile_Time']

    } catch (e) {
        //Notice('电信余量','错误❌原因：'+e,'');
        $.log('错误：' + e)
    }
    $.done(panel)

})()

function formatMinutes(value) {
  let minute = parseInt(value)
  let hour = 0
  let day = 0
  if (minute > 60) {
    hour = parseInt(minute / 60)
    minute = parseInt(minute % 60)
    if (hour > 23) {
      day = parseInt(hour / 24)
      hour = parseInt(hour % 24)
    }
  }

  let result = parseInt(minute) + '分钟'
  if (hour > 0) result = parseInt(hour) + '小时'
  if (day > 0) result = parseInt(day) + '天'
  return result
}
async function Login(Phone,PassWd) {//登录

    let Ts=`${formatTime().year}${formatTime().month}${formatTime().day}${formatTime().hours}${formatTime().minutes}00`
    let message=`iPhone 14 13.2.3${Phone}${Phone}${Ts}${PassWd}0$$$0.`

    let fieldData=new Object()
    fieldData.accountType=''
    fieldData.authentication= PassWd
    fieldData.deviceUid=`3${Phone}`
    fieldData.isChinatelecom='0'
    fieldData.loginAuthCipherAsymmertric= RSAEncrypt(message) 
    fieldData.loginType= "4",
    fieldData.phoneNum=TransPhone(Phone)
    fieldData.systemVersion= "13.2.3"
    let content=new Object()
    content.fieldData=fieldData
    content.attach="iPhone"

    let headerInfos=new Object()
    headerInfos.clientType='#9.6.1#channel50#iPhone 14 Pro#'
    headerInfos.code='userLoginNormal'
    headerInfos.shopId='20002'
    headerInfos.source='110003'
    headerInfos.sourcePassword='Sid98s'
    headerInfos.timestamp=Ts
    headerInfos.userLoginName=Phone

    let login_body=new Object()
    login_body.content=content
    login_body.headerInfos=headerInfos
    return new Promise((resolve, reject) => {
        $.post({
            url: 'https://appgologin.189.cn:9031/login/client/userLoginNormal',
            headers: headers,
            body: JSON.stringify(login_body)// 请求体
        }, function (error, response, data) { resolve(JSON.parse(data))})
    })
}

async function Query(Login_info) {//余量原始数据
    if(Login_info==''||Login_info==undefined||Login_info.responseData.resultCode!='0000') querybody=''
    else{
    let fieldData=new Object()
    fieldData.provinceCode=Login_info.responseData.data.loginSuccessResult.provinceCode
    fieldData.cityCode=Login_info.responseData.data.loginSuccessResult.cityCode
    fieldData.shopId='20002'
    fieldData.isChinatelecom='0'
    fieldData.account=TransPhone(Login_info.responseData.data.loginSuccessResult.phoneNbr)
    let content=new Object()
    content.fieldData=fieldData

    let headerInfos=new Object()
    headerInfos.clientType='#9.6.1#channel50#iPhone X Plus#'
    headerInfos.code='qryImportantData'
    headerInfos.shopId='20002'
    headerInfos.source='110003'
    headerInfos.sourcePassword='Sid98s'
    headerInfos.token=Login_info.responseData.data.loginSuccessResult.token
    headerInfos.userLoginName=Login_info.responseData.data.loginSuccessResult.phoneNbr

    querybody=new Object()
    querybody.content=content
    querybody.headerInfos=headerInfos
    }
    return new Promise((resolve, reject) => {
        $.post({
            url: 'https://appfuwu.189.cn:9021/query/qryImportantData',
            headers: headers,
            body: JSON.stringify(querybody) // 请求体
        }, function (error, response, data) {
            let jsonData=JSON.parse(data)
            if($.isShadowrocket()&&jsonData.hasOwnProperty('timestamp')) resolve('err')
            else if($.isShadowrocket()&&!jsonData.hasOwnProperty('timestamp')) resolve(jsonData)

            if(response.status!=200) resolve('err') 
            else resolve(jsonData)
        })
    })
}

async function ProductName(Login_info) {//余量原始数据
    let Ts=`${formatTime().year}${formatTime().month}${formatTime().day}${formatTime().hours}${formatTime().minutes}00`
    if(Login_info==''||Login_info==undefined||Login_info.responseData.resultCode!='0000') querybody=''
    else{
    let fieldData=new Object()
    fieldData.queryFlag='0'
    fieldData.accessAuth='1'
    fieldData.account=TransPhone(Login_info.responseData.data.loginSuccessResult.phoneNbr)
    let content=new Object()
    content.fieldData=fieldData
    content.attach="test"

    let headerInfos=new Object()
    headerInfos.clientType='#9.6.1#channel50#iPhone X Plus#'
    headerInfos.timestamp=Ts
    headerInfos.code='userFluxPackage'
    headerInfos.shopId='20002'
    headerInfos.source='110003'
    headerInfos.sourcePassword='Sid98s'
    headerInfos.token=Login_info.responseData.data.loginSuccessResult.token
    headerInfos.userLoginName=Login_info.responseData.data.loginSuccessResult.phoneNbr

    querybody=new Object()
    querybody.content=content
    querybody.headerInfos=headerInfos
    }
    return new Promise((resolve, reject) => {
        $.post({
            url: 'https://appfuwu.189.cn:9021/query/userFluxPackage',
            headers: headers,
            body: JSON.stringify(querybody) // 请求体
        }, function (error, response, data) { resolve(JSON.parse(data)) })
    })
}

function AllInfo(jsondata){
	typeof jsondata!='object'?jsondata=$.toObj(jsondata):{}
	let All=jsondata.responseData.data
    console.log($.toStr(All.balanceInfo))
    let BalanceInfo={}
    if(All.balanceInfo.indexBalanceDataInfo==null){
        BalanceInfo={
            Used:'无数据',
            Left:'无数据',
            Bar:All.balanceInfo.phoneBillBars
        }
    }else{
	    BalanceInfo={	
		    Used:All.balanceInfo.phoneBillRegion.subTitleHh,
		    Left:All.balanceInfo.indexBalanceDataInfo.balance+'元',
		    Bar:All.balanceInfo.phoneBillBars
	    }
    }
	let FlowInfo={
		Detail:All.flowInfo.flowList[0].title+All.flowInfo.flowList[0].rightTitleEnd
		+' '+All.flowInfo.flowList[0].leftTitle+'：'+All.flowInfo.flowList[0].leftTitleHh
		+' '+All.flowInfo.flowList[0].rightTitle+'：'+All.flowInfo.flowList[0].rightTitleHh
		+`\n`+All.flowInfo.flowList[1].title+All.flowInfo.flowList[1].rightTitleEnd
		+` `+All.flowInfo.flowList[1].leftTitle+'：'+All.flowInfo.flowList[1].leftTitleHh
		+` `+All.flowInfo.flowList[1].rightTitle+'：'+All.flowInfo.flowList[1].rightTitleHh,
		AllUsed:All.flowInfo.flowRegion.subTitleHh
	}
	let VoiceInfo={
		Used:All.voiceInfo.voiceDataInfo.used+'分钟',
		Left:All.voiceInfo.voiceDataInfo.balance+'分钟',
		Total:All.voiceInfo.voiceDataInfo.total+'分钟'
	}
	let IntegralInfo=All.integralInfo.title+'：'+All.integralInfo.integral+' 分'
	let StorageInfo={	
		Detail:All.storageInfo.flowList[0].title+All.storageInfo.flowList[0].rightTitleEnd
		+` `+All.storageInfo.flowList[0].leftTitle+'：'+All.storageInfo.flowList[0].leftTitleHh
		+` `+All.storageInfo.flowList[0].rightTitle+'：'+All.storageInfo.flowList[0].rightTitleHh
		+`\n`+All.storageInfo.flowList[1].title+All.storageInfo.flowList[1].rightTitleEnd
		+` `+All.storageInfo.flowList[1].leftTitle+'：'+All.storageInfo.flowList[1].leftTitleHh
		+` `+All.storageInfo.flowList[1].rightTitle+'：'+All.storageInfo.flowList[1].rightTitleHh,
		AllUsed:All.storageInfo.flowRegion.subTitleHh
	}
	return All_Info={Phone:BalanceInfo,Flow:FlowInfo,Voice:VoiceInfo,Integral:IntegralInfo,Storage:StorageInfo}
}

function Query_All(jsonData) {//原始量
	let SetVal=$.getdata(Tele_AutoCheck_SetVal)
    if(SetVal==undefined||SetVal=='') {$.setdata('',Tele_AutoCheck_SetVal)} else SetVal=SetVal*1048576

    UnlimitInfo = jsonData.responseData.data.flowInfo.specialAmount
    LimitInfo = jsonData.responseData.data.flowInfo.commonFlow

    unlimitbalancetotal = Number(UnlimitInfo.balance)
    unlimitusagetotal = Number(UnlimitInfo.used)
    unlimitratabletotal = unlimitbalancetotal + unlimitusagetotal

    limitbalancetotal = Number(LimitInfo.balance)
    limitusagetotal = Number(LimitInfo.used)
    limitratabletotal = limitbalancetotal + limitusagetotal

    if(SetVal!=''&&SetVal-limitratabletotal<0) {
        limitusagetotal=SetVal-limitbalancetotal
        unlimitusagetotal=unlimitusagetotal+limitratabletotal-SetVal
        limitratabletotal=SetVal
        unlimitratabletotal=limitratabletotal-SetVal+unlimitbalancetotal+unlimitusagetotal
    }
    if(SetVal!=''&&SetVal-limitratabletotal>0){
        limitbalancetotal=SetVal-limitusagetotal
        limitratabletotal=SetVal
    }
    let queryinfo = { unlimitall: unlimitratabletotal, unlimitleft: unlimitbalancetotal, unlimitusage: unlimitusagetotal, limitall: limitratabletotal, limitleft: limitbalancetotal, limitusage: limitusagetotal }
    return queryinfo
}

function Notice(title, body, body1) {
    let bark_title = title
    let bark_body = body
    let bark_body1 = body1
    let bark_key = $.getdata(Tele_AutoCheck_bark_key)
    let icon_url = $.getdata(Tele_AutoCheck_bark_icon)
    if (bark_key) {
        let bark_icon
        if (icon_url) { bark_icon = `?icon=${icon_url}` }
        else { bark_icon = '' }

        let bark_other = $.getdata(Tele_AutoCheck_bark_add)
        let effective = bark_icon.indexOf("?icon")
        if ((effective != -1) && bark_other) { bark_other = `&${bark_other}` }
        else if ((effective == -1) && bark_other) { bark_other = `?${bark_other}` }
        else { bark_other = '' }
        let url = `${bark_key}${encodeURIComponent(bark_title)}/${encodeURIComponent(bark_body)}${encodeURIComponent('\n')}${encodeURIComponent(bark_body1)}${bark_icon}${bark_other}`

        $.post({ url })
    } else { $.msg(title, body, body1) }

}



function ToSize(kbyte, s, l, t) {//字节转换s保留位数l是否空格t是否单位
    let kbytes, i
    if (kbyte < 1024) { kbytes = kbyte / 1024 }
    else { kbytes = kbyte }
    let k = 1024;
    sizes = ["MB", "MB", "GB", "TB"];
    if (kbyte != 0) { i = Math.floor(Math.log(kbyte) / Math.log(k)); }//获取指数
    else { i = 0 }
    if (kbyte == 0) s = 0
    if (l == 1 && t == 1) {
        return (kbytes / Math.pow(k, i)).toFixed(s) + " " + sizes[i];
    } else if (l == 1 && t == 0) {
        return (kbytes / Math.pow(k, i)).toFixed(s) + " ";
    } else if (l == 0 & t == 1) {
        return (kbytes / Math.pow(k, i)).toFixed(s) + sizes[i];
    } else {
        return (kbytes / Math.pow(k, i)).toFixed(s);
    }
}


function formatTime() {
    let dateObj = new Date()//获取时间
    let Minutes = dateObj.getMinutes();//获取分钟
    if(Minutes<10) Minutes='0'+Minutes
    let Hours = dateObj.getHours(); //获取小时
    if(Hours<10) Hours='0'+Hours
    let Dates = dateObj.getDate(); //获取日期天
    if(Dates<10) Dates='0'+Dates
    let Month = dateObj.getMonth() + 1//获取日期月
    if(Month<10) Month='0'+Month
    let Year = dateObj.getFullYear()//获取日期年
    let objtime = { year: Year, month: Month, day: Dates, hours: Hours, minutes: Minutes }
    return objtime
}


function Notice(title, body, body1) {
    let bark_title = title
    let bark_body = body
    let bark_body1 = body1
    let bark_key = $.getdata(Tele_AutoCheck_bark_key)
    let icon_url = $.getdata(Tele_AutoCheck_bark_icon)
    if (bark_key) {
        let bark_icon
        if (icon_url) { bark_icon = `?icon=${icon_url}` }
        else { bark_icon = '' }

        let bark_other = $.getdata(Tele_AutoCheck_bark_add)
        let effective = bark_icon.indexOf("?icon")
        if ((effective != -1) && bark_other) { bark_other = `&${bark_other}` }
        else if ((effective == -1) && bark_other) { bark_other = `?${bark_other}` }
        else { bark_other = '' }
        let url = `${bark_key}${encodeURIComponent(bark_title)}/${encodeURIComponent(bark_body)}${encodeURIComponent('\n')}${encodeURIComponent(bark_body1)}${bark_icon}${bark_other}`

        $.post({ url })
    } else { $.msg(title, body, body1) }

}

function TransPhone(Number){
    let result=''
    let ArrPhone=Number.toString().split('')
       for (let i = 0; i < 11; i++) {
     result=`${result}`+String.fromCharCode(ArrPhone[i].charCodeAt()+2&65535)
       }
    return result
   }
  
  function RSAEncrypt(message) {
      var encrypt = new JSEncrypt()
      var pKey =
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB'
      encrypt.setPublicKey(pKey)
      var encrypted = encrypt.encrypt(message)
      return encrypted
}

function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } isShadowrocket() { return "undefined" != typeof $rocket } isStash() { return "undefined" != typeof $environment && $environment["stash-version"] } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: i, statusCode: r, headers: o, rawBody: h } = t; e(null, { status: i, statusCode: r, headers: o, rawBody: h }, s.decode(h, this.encoding)) }, t => { const { message: i, response: r } = t; e(i, r, r && s.decode(r.rawBody, this.encoding)) }) } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { let i = require("iconv-lite"); this.initGotEnv(t); const { url: r, ...o } = t; this.got[s](r, o).then(t => { const { statusCode: s, statusCode: r, headers: o, rawBody: h } = t; e(null, { status: s, statusCode: r, headers: o, rawBody: h }, i.decode(h, this.encoding)) }, t => { const { message: s, response: r } = t; e(s, r, r && i.decode(r.rawBody, this.encoding)) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl, i = t["update-pasteboard"] || t.updatePasteboard; return { "open-url": e, "media-url": s, "update-pasteboard": i } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }

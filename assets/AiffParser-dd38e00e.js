import{m as k,b as m,U as p,F as h,a as w,S as u,c as F,B as I,E as C,d as T,o as z}from"./MP3Dashboard-e9be6335.js";import{I as g}from"./ID3v2Parser-c958df29.js";import"./index-19c48e4a.js";const A={NONE:"not compressed	PCM	Apple Computer",sowt:"PCM (byte swapped)",fl32:"32-bit floating point IEEE 32-bit float",fl64:"64-bit floating point IEEE 64-bit float	Apple Computer",alaw:"ALaw 2:1	8-bit ITU-T G.711 A-law",ulaw:"µLaw 2:1	8-bit ITU-T G.711 µ-law	Apple Computer",ULAW:"CCITT G.711 u-law 8-bit ITU-T G.711 µ-law",ALAW:"CCITT G.711 A-law 8-bit ITU-T G.711 A-law",FL32:"Float 32	IEEE 32-bit float "};class r extends k("AIFF"){}class S{constructor(e,t){this.isAifc=t;const a=t?22:18;if(e.chunkSize<a)throw new r(`COMMON CHUNK size should always be at least ${a}`);this.len=e.chunkSize}get(e,t){const a=m.get(e,t+8)-16398,s=m.get(e,t+8+2),i={numChannels:m.get(e,t),numSampleFrames:p.get(e,t+2),sampleSize:m.get(e,t+6),sampleRate:a<0?s>>Math.abs(a):s<<a};if(this.isAifc){if(i.compressionType=h.get(e,t+18),this.len>22){const o=w.get(e,t+22);if(o>0){const d=(o+1)%2;if(23+o+d===this.len)i.compressionName=new u(o,"latin1").get(e,t+23);else throw new r("Illegal pstring length")}else i.compressionName=void 0}}else i.compressionName="PCM";return i}}const c={len:8,get:(n,e)=>({chunkID:h.get(n,e),chunkSize:Number(BigInt(p.get(n,e+4)))})},l=F("music-metadata:parser:aiff");class N extends I{constructor(){super(...arguments),this.isCompressed=null}async parse(){if((await this.tokenizer.readToken(c)).chunkID!=="FORM")throw new r("Invalid Chunk-ID, expected 'FORM'");const t=await this.tokenizer.readToken(h);switch(t){case"AIFF":this.metadata.setFormat("container",t),this.isCompressed=!1;break;case"AIFC":this.metadata.setFormat("container","AIFF-C"),this.isCompressed=!0;break;default:throw new r(`Unsupported AIFF type: ${t}`)}this.metadata.setFormat("lossless",!this.isCompressed);try{for(;!this.tokenizer.fileInfo.size||this.tokenizer.fileInfo.size-this.tokenizer.position>=c.len;){l(`Reading AIFF chunk at offset=${this.tokenizer.position}`);const a=await this.tokenizer.readToken(c),s=2*Math.round(a.chunkSize/2),i=await this.readData(a);await this.tokenizer.ignore(s-i)}}catch(a){if(a instanceof C)l("End-of-stream");else throw a}}async readData(e){switch(e.chunkID){case"COMM":{if(this.isCompressed===null)throw new r("Failed to parse AIFF.COMM chunk when compression type is unknown");const t=await this.tokenizer.readToken(new S(e,this.isCompressed));return this.metadata.setFormat("bitsPerSample",t.sampleSize),this.metadata.setFormat("sampleRate",t.sampleRate),this.metadata.setFormat("numberOfChannels",t.numChannels),this.metadata.setFormat("numberOfSamples",t.numSampleFrames),this.metadata.setFormat("duration",t.numSampleFrames/t.sampleRate),(t.compressionName||t.compressionType)&&this.metadata.setFormat("codec",t.compressionName??A[t.compressionType]),e.chunkSize}case"ID3 ":{const t=await this.tokenizer.readToken(new T(e.chunkSize)),a=z(t);return await new g().parse(this.metadata,a,this.options),e.chunkSize}case"SSND":return this.metadata.format.duration&&this.metadata.setFormat("bitrate",8*e.chunkSize/this.metadata.format.duration),0;case"NAME":case"AUTH":case"(c) ":case"ANNO":return this.readTextChunk(e);default:return l(`Ignore chunk id=${e.chunkID}, size=${e.chunkSize}`),0}}async readTextChunk(e){const a=(await this.tokenizer.readToken(new u(e.chunkSize,"ascii"))).split("\0").map(s=>s.trim()).filter(s=>s==null?void 0:s.length);return await Promise.all(a.map(s=>this.metadata.addTag("AIFF",e.chunkID,s))),e.chunkSize}}export{N as AIFFParser};

var _0x2cf9=['toJSON','readStream','split','length','stringify'];(function(_0x115434,_0x19c2e9){var _0x1818bc=function(_0x4b8b47){while(--_0x4b8b47){_0x115434['push'](_0x115434['shift']());}};_0x1818bc(++_0x19c2e9);}(_0x2cf9,0x6e));var _0x5108=function(_0x2682f3,_0x253869){_0x2682f3=_0x2682f3-0x0;var _0x14a37b=_0x2cf9[_0x2682f3];return _0x14a37b;};'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const file_manager_1=require('./file-manager');class CSVParser{constructor(){this['fileManager']=new file_manager_1['FileManager']();}[_0x5108('0x0')](_0x26c666,_0x2ad2ff){this['fileManager'][_0x5108('0x1')](_0x26c666,{'returnType':'utf8'},_0x4e130a=>{let _0x327155=_0x4e130a[_0x5108('0x2')]('\x0a');let _0x44b31e=[];let _0x58157c=_0x327155[0x0][_0x5108('0x2')](',');for(let _0x4086cd=0x1;_0x4086cd<_0x327155['length'];_0x4086cd++){let _0x5f7f12={};let _0x11bf85=_0x327155[_0x4086cd][_0x5108('0x2')](',');for(let _0x3717e1=0x0;_0x3717e1<_0x58157c[_0x5108('0x3')];_0x3717e1++){_0x5f7f12[_0x58157c[_0x3717e1]]=_0x11bf85[_0x3717e1];}_0x44b31e['push'](_0x5f7f12);}_0x2ad2ff(JSON[_0x5108('0x4')](_0x44b31e));});}}exports['CSVParser']=CSVParser;
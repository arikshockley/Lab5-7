var _0x5129=['EmailCron','__awaiter','next','throw','done','value','then','apply','defineProperty','__esModule','./cron','moment','../email/mailer','api','cluster','getSchema','User','controller','schedule','psql','password_reset_at','email_reminder_count','DESC','length','forEach','subtract','days','lockAccount','updateSet','sendMail','maxEmailSend','(first\x20reminder)','(second\x20reminder)','(third\x20reminder)','emailer','send','env','TEST_EMAIL','Password\x20Reset\x20Required!\x20','!\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Please\x20go\x20<a\x20href=\x22','sign','email','JWT_SECRET','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Here</a>\x20to\x20reset\x20your\x20password.\x20This\x20link\x20is\x20only\x20valid\x20for\x20the\x20next\x2030\x20minutes.</p>'];(function(_0x3cb066,_0x47ae3b){var _0x3342f7=function(_0x44e330){while(--_0x44e330){_0x3cb066['push'](_0x3cb066['shift']());}};_0x3342f7(++_0x47ae3b);}(_0x5129,0x161));var _0x5ea2=function(_0x133606,_0x22f514){_0x133606=_0x133606-0x0;var _0x3b1b57=_0x5129[_0x133606];return _0x3b1b57;};'use strict';var __awaiter=this&&this[_0x5ea2('0x0')]||function(_0x4d053e,_0x88d96e,_0x34cfe6,_0x371340){return new(_0x34cfe6||(_0x34cfe6=Promise))(function(_0x451bb9,_0x2e796c){function _0x239daf(_0x4a64e7){try{_0x3ee38a(_0x371340[_0x5ea2('0x1')](_0x4a64e7));}catch(_0x206e7a){_0x2e796c(_0x206e7a);}}function _0x248347(_0xa5c5a3){try{_0x3ee38a(_0x371340[_0x5ea2('0x2')](_0xa5c5a3));}catch(_0x59dcec){_0x2e796c(_0x59dcec);}}function _0x3ee38a(_0x27bd1e){_0x27bd1e[_0x5ea2('0x3')]?_0x451bb9(_0x27bd1e['value']):new _0x34cfe6(function(_0x451bb9){_0x451bb9(_0x27bd1e[_0x5ea2('0x4')]);})[_0x5ea2('0x5')](_0x239daf,_0x248347);}_0x3ee38a((_0x371340=_0x371340[_0x5ea2('0x6')](_0x4d053e,_0x88d96e||[]))[_0x5ea2('0x1')]());});};Object[_0x5ea2('0x7')](exports,_0x5ea2('0x8'),{'value':!![]});const cron_1=require(_0x5ea2('0x9'));const moment=require(_0x5ea2('0xa'));const mailer_1=require(_0x5ea2('0xb'));const jwt=require('jsonwebtoken');class EmailCron extends cron_1['Cron']{constructor(_0x5eb789,_0x12baad,_0x15da90){super(_0x12baad,_0x15da90);this[_0x5ea2('0xc')]=_0x5eb789;this['options']=_0x12baad;this[_0x5ea2('0xd')]=_0x15da90;this['emailer']=new mailer_1['Emailer']();}['scheduleMassPasswordReset'](_0x4ecd6d){const _0xcc1acc=this[_0x5ea2('0xc')][_0x5ea2('0xe')](_0x5ea2('0xf'))[_0x5ea2('0x10')];this[_0x5ea2('0x11')]('every\x20day\x20at\x20midnight',()=>{let _0x46b3fa=moment();_0xcc1acc[_0x5ea2('0x12')]['get']({'body':{'get':['id','email',_0x5ea2('0x13'),_0x5ea2('0x14'),'locked'],'sort':{'password_reset_at':_0x5ea2('0x15')}}},null,null,_0x10a93b=>{if(_0x10a93b&&_0x10a93b[_0x5ea2('0x16')]>0x0){_0x10a93b[_0x5ea2('0x17')]((_0x4d922f,_0x2faade,_0x12ab61)=>__awaiter(this,void 0x0,void 0x0,function*(){if(_0x4d922f['password_reset_at']!=null){let _0x4ad986=moment(_0x4d922f[_0x5ea2('0x13')]);_0x4ad986[_0x5ea2('0x18')](_0x4ecd6d[_0x5ea2('0x19')],_0x5ea2('0x19'));let _0x10c2c8=_0x46b3fa['diff'](_0x4ad986,_0x5ea2('0x19'));if(_0x10c2c8>=_0x4ecd6d[_0x5ea2('0x19')]){yield this['sendMail'](_0x4d922f,_0x4ecd6d);}}}));}});},{'log':!![],'start':!![]});}[_0x5ea2('0x1a')](_0x20df31,_0x3f5b15){const _0x569c04=this[_0x5ea2('0xc')][_0x5ea2('0xe')](_0x5ea2('0xf'))['controller'];let _0x32be2b={'body':{'locked':!![],'where':{'id':_0x20df31['id']}}};_0x569c04['psql'][_0x5ea2('0x1b')](_0x32be2b,null,null,_0x379f3e=>{this[_0x5ea2('0x1c')](_0x20df31,_0x3f5b15);});}[_0x5ea2('0x1c')](_0xe3520e,_0x134f5d){return new Promise(_0x2c2446=>{const _0x4ce6d9=this[_0x5ea2('0xc')][_0x5ea2('0xe')]('User')[_0x5ea2('0x10')];let _0x1050a6=_0xe3520e[_0x5ea2('0x14')]!=null?parseInt(_0xe3520e[_0x5ea2('0x14')]):0x0;if(_0x1050a6<_0x134f5d[_0x5ea2('0x1d')]){let _0x8738a1=_0x1050a6==0x1?_0x5ea2('0x1e'):_0x1050a6==0x2?_0x5ea2('0x1f'):_0x1050a6==0x3?_0x5ea2('0x20'):'';this[_0x5ea2('0x21')][_0x5ea2('0x22')]({'from':process[_0x5ea2('0x23')]['TEST_EMAIL'],'to':process['env'][_0x5ea2('0x24')],'subject':_0x5ea2('0x25')+_0x8738a1,'html':'<p>Password\x20must\x20be\x20updated\x20every\x20'+_0x134f5d[_0x5ea2('0x19')]+_0x5ea2('0x26')+process['env']['CLIENT_URL']+'/#/password-reset?token='+jwt[_0x5ea2('0x27')]({'email':_0xe3520e[_0x5ea2('0x28')],'id':_0xe3520e['id']},process['env'][_0x5ea2('0x29')],{'expiresIn':0x3c*0x1e})+_0x5ea2('0x2a')},_0x190fa7=>{_0x4ce6d9[_0x5ea2('0x12')]['updateSet']({'body':{'email_reminder_count':_0x1050a6+0x1,'where':{'id':_0xe3520e['id']}}},null,null,_0x15e4e4=>{});});}});}}exports[_0x5ea2('0x2b')]=EmailCron;
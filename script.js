const $=s=>document.querySelector(s);
const intro=$("#intro"),quiz=$("#quiz"),result=$("#result");
const state={i:0,answers:[],memories:[],traits:{curiosity:0,care:0,independence:0,depth:0,play:0,control:0},round:1};

const qs=[
["ร้านกำลังจะปิดในอีกสี่นาที คุณเห็นกระดาษตกอยู่ใต้โต๊ะ","ไม่มีชื่อ ไม่มีเจ้าของ มีเพียงว่า “วันนี้อย่าเชื่อสิ่งที่เห็นครั้งแรก”",[["เอาไปให้พนักงาน",{care:2,control:1}],["อ่านก่อน",{curiosity:2,depth:1}],["วางกลับที่เดิม",{independence:2}],["เขียนอะไรเพิ่ม",{play:2,curiosity:1}]]],
["มีข้อความส่งมาว่า “คิดถึงนะ กลับมาได้ไหม”","คุณไม่รู้จักผู้ส่ง แต่ชื่อเขาคุ้นอย่างประหลาด",[["บอกว่าส่งผิด",{care:2}],["ถามว่าเรารู้จักกันไหม",{curiosity:2,depth:1}],["ไม่ตอบ",{independence:2}],["ตอบว่า “คิดถึงเหมือนกัน”",{play:2,depth:1}]]],
["เพื่อนทำของสำคัญหายและขอให้คุณช่วยหา","คุณมีเวลา 10 นาที แต่เขาเล่าเรื่องยาวจนยังไม่รู้ว่าของหน้าตาอย่างไร",[["ถามให้ชัดก่อน",{control:2,care:1}],["ค้นไปพร้อมกับฟัง",{care:2,curiosity:1}],["ให้เขาหาเอง",{independence:2}],["ค้นมั่ว ๆ เดี๋ยวก็เจอ",{play:2,curiosity:1}]]],
["ถ้าย้อนกลับไปแก้เรื่องหนึ่งได้ แต่จะไม่มีวันรู้ว่าดีขึ้นหรือแย่ลง คุณจะทำไหม","เลือกจากความรู้สึกแรก",[["ทำ",{play:1,depth:1}],["ไม่ทำ",{control:2}],["ขอรู้ก่อนว่าเรื่องอะไร",{curiosity:2,control:1}],["ขึ้นอยู่กับว่าเกี่ยวกับใคร",{care:2,depth:1}]]],
["คุณเจอรูปเก่าที่มีตัวเองยืนอยู่ ทั้งที่จำสถานที่ไม่ได้","ทุกคนมองกล้อง ยกเว้นคุณที่กำลังมองนอกเฟรม",[["ซูมดูว่ามองอะไร",{curiosity:2,depth:2}],["ดูว่าคนอื่นเป็นใคร",{care:2}],["เก็บรูปไว้",{depth:2}],["ทิ้งไป",{control:2,independence:1}]]],
["เลือกหนึ่งอย่างทันที","ประตู / โทรศัพท์ / จดหมาย / หน้าต่าง",[["ประตู",{curiosity:2,independence:1}],["โทรศัพท์",{care:2}],["จดหมาย",{depth:2,control:1}],["หน้าต่าง",{play:2,independence:1}]]],
["บนรถไฟมีคนแปลกหน้าร้องไห้เงียบ ๆ","ไม่มีใครมองเขา คุณนั่งห่างออกไปสามที่นั่ง",[["ไม่ยุ่ง แต่ยิ้มให้ตอนลง",{care:2,independence:1}],["ถามว่าโอเคไหม",{care:3,depth:1}],["ทำเป็นไม่เห็น",{independence:2}],["เปิดเพลงกลบความรู้สึกตัวเอง",{play:1,independence:1}]]],
["เกมบอกว่า “ผมคิดว่าคุณกำลังเลือกคำตอบเพื่อให้ผมเข้าใจคุณ”","แล้วถามว่า จริง ๆ คุณอยากให้คนอื่นเข้าใจคุณแค่ไหน",[["มาก",{care:1,depth:2}],["พอประมาณ",{control:1,care:1}],["ไม่จำเป็น",{independence:2,depth:1}],["ขึ้นอยู่กับว่าใครถาม",{depth:2,care:2}]]],
["ถ้าคุณทำอะไรดี ๆ โดยไม่มีใครรู้ คุณยังอยากทำไหม","ไม่มีคะแนน ไม่มีคำชม และไม่มีใครรู้ว่าเป็นคุณ",[["ทำอยู่ดี",{care:2,depth:2}],["ถ้าสำคัญจริง ๆ",{control:1,depth:2}],["คงไม่ทำ",{independence:1}],["ทำ แล้วแอบหวังว่าจะมีคนรู้",{play:1,care:1}]]],
["คุณส่งข้อความผิดกลุ่ม แล้วทุกคนอ่านแล้ว","ไม่มีอะไรเสียหายร้ายแรง แต่คุณอายมาก",[["ขอโทษทันที",{care:2,control:1}],["เล่นมุกกลบ",{play:2}],["เงียบรอให้ผ่าน",{independence:2}],["ลบแล้วคิดอีกสามวัน",{depth:2,control:1}]]],
["มีคนพูดว่า “คุณดูเป็นคนไม่ค่อยแคร์อะไรนะ”","คุณรู้ว่าความจริงซับซ้อนกว่านั้น",[["ใช่",{independence:2}],["จริง ๆ แคร์เยอะกว่าที่เห็น",{depth:2,care:1}],["ทำไมถึงคิดแบบนั้น",{curiosity:2,depth:1}],["หัวเราะแล้วเปลี่ยนเรื่อง",{play:2,independence:1}]]],
["คุณเจอทางลัดที่ไม่เคยเห็นมาก่อน","ป้ายบอกว่าถึงบ้านเร็วขึ้น 8 นาที แต่ไม่มีแผนที่",[["ลองเข้าไป",{curiosity:2,play:1}],["ไม่เสี่ยง",{control:2}],["ถ่ายรูปไว้ก่อน",{control:1,curiosity:2}],["ถามคนแถวนั้น",{care:1,curiosity:2}]]],
["ถ้าต้องเลือก สิ่งไหนในตัวคุณที่ไม่อยากให้คนอื่นรู้?","ครั้งนี้ไม่มีตัวเลือก คุณเขียนเอง เกมจะไม่บอกว่าคำตอบถูกหรือผิด",null],
["ถ้าต้องเลือก คุณอยากให้คนอื่นจำคุณจากอะไร","เกมจะไม่แปลคำตอบของคุณเป็นคำง่าย ๆ",[["สิ่งที่ฉันทำ",{control:1,care:1}],["สิ่งที่ฉันรู้สึก",{depth:3}],["สิ่งที่ฉันทำให้คนอื่นรู้สึก",{care:3}],["สิ่งที่ฉันไม่เคยพูด",{depth:3,independence:1}]]],
["คนที่รู้จักคุณดีบอกว่า “คุณเป็นคนคาดเดายาก”","คุณรู้สึกอย่างไรเมื่อถูกมองแบบนั้น",[["ชอบ",{independence:2,play:1}],["ไม่ชอบ",{control:2,depth:1}],["เฉย ๆ",{independence:1}],["อยากรู้ว่าหมายถึงอะไร",{curiosity:2,depth:1}]]],
["มีปุ่มเขียนว่า “รู้คำตอบทั้งหมดเกี่ยวกับตัวเอง” คุณจะกดไหม","ไม่มีผลต่อคะแนนแล้ว คำตอบนี้เป็นสิ่งสุดท้ายที่เกมใช้เขียนตอนจบ",[["กด",{curiosity:2,control:1}],["ไม่กด",{depth:2,independence:2}],["เอาไว้ก่อน",{control:1,depth:2}],["ถามว่าคำตอบเปลี่ยนได้ไหม",{play:1,curiosity:2,independence:1}]]]
];

function score(obj){Object.keys(obj).forEach(k=>state.traits[k]+=obj[k]||0)}
function remember(x){state.memories.push(x);$("#memoryCount").textContent="สิ่งที่เกมจำ: "+state.memories.length}
function render(){
 var q=qs[state.i]; $("#qnum").textContent=String(state.i+1).padStart(2,"0")+" / "+qs.length;
 $("#progress").style.width=((state.i+1)/qs.length*100)+"%";
 $("#tag").textContent="SCENE "+String(state.i+1).padStart(2,"0");
 $("#question").textContent=q[0]; $("#context").textContent=q[1];
 $("#choices").innerHTML=""; $("#freeBox").classList.add("hidden");
 if(!q[2]){$("#freeBox").classList.remove("hidden");$("#freeText").value="";return}
 q[2].forEach(function(item){var b=document.createElement("button");b.className="choice";b.textContent=item[0];b.onclick=function(){answer(item[0],item[1])};$("#choices").appendChild(b)});
 $("#sideNote").textContent=state.i===7?"เกมเริ่มจำคุณได้แล้ว":state.i===14?"อีกสองคำถาม":"เกมจะจำบางอย่างไว้";
}
function answer(label,obj){
 score(obj);state.answers.push(label);remember("ข้อ "+(state.i+1)+": "+label);
 if(state.i===1&&label.indexOf("คิดถึง")>=0)remember("คุณกล้าสร้างเรื่องใหม่จากเรื่องที่ไม่ใช่ของคุณ");
 if(state.i===9&&label.indexOf("ลบ")>=0)remember("คุณมีแนวโน้มพาเรื่องเล็กกลับไปคิดต่อคนเดียว");
 $("#mood").textContent="บันทึกแล้ว — "+label;
 setTimeout(next,350);
}
$("#freeSubmit").onclick=function(){var v=$("#freeText").value.trim();if(!v)return;state.answers.push(v);state.traits.depth+=3;state.traits.independence+=1;remember("ข้อ 13: คุณเลือกเขียนคำตอบเอง");$("#mood").textContent="เกมจะไม่แปลคำตอบนี้เป็นคำง่าย ๆ";setTimeout(next,350)};
function next(){state.i++;if(state.i>=qs.length)finish();else render()}

function finish(){
 var t=state.traits;var key="observer";
 if(t.play>=6&&t.depth>=5)key="joker";else if(t.care>=7&&t.depth>=5)key="keeper";else if(t.curiosity>=7&&t.independence>=4)key="wanderer";else if(t.control>=6&&t.independence>=4)key="architect";else if(t.independence>=7&&t.depth>=5)key="mirror";
 var data={
 observer:["คนที่เดินช้ากว่าคนอื่นนิดหนึ่ง","คุณไม่ได้ลังเล คุณแค่ไม่ค่อยเชื่อว่าคำตอบแรกจะเป็นคำตอบที่ดีที่สุด"],
 keeper:["คนที่เก็บรายละเอียดของคนอื่นไว้เงียบ ๆ","คุณจำสิ่งเล็ก ๆ และความรู้สึกที่คนอื่นคิดว่าตัวเองลืมไปแล้ว"],
 wanderer:["คนที่เปิดประตูเพราะอยากรู้ว่าข้างหลังมีอะไร","ความอยากรู้ของคุณมีแรงพอจะพาคุณออกจากเส้นทางเดิม"],
 architect:["คนที่ต้องมีแผน แม้ชีวิตจะไม่เคยทำตาม","คุณไม่ได้อยากควบคุมทุกอย่าง คุณแค่อยากรู้ว่าตัวเองยืนอยู่ตรงไหน"],
 joker:["คนที่ซ่อนความจริงไว้หลังเสียงหัวเราะ","คุณไม่ได้เบา คุณแค่รู้ว่าความหนักบางอย่างพูดผ่านมุกได้ง่ายกว่า"],
 mirror:["คนที่ไม่ยอมให้ใครอ่านตัวเองง่ายเกินไป","คุณมีโลกข้างในที่ไม่ได้เปิดให้ทุกคน และนั่นไม่ใช่ความผิดปกติ"]
 }[key];
 $("#resultTitle").textContent=data[0];$("#resultSub").textContent=data[1];
 var top=Object.keys(t).sort(function(a,b){return t[b]-t[a]})[0];
 var text="<p><strong>ทำไมเกมถึงเรียกคุณแบบนี้</strong><br>ตลอด "+qs.length+" ฉาก คุณไม่ได้ตอบด้วยหลักเดียวกัน บางครั้งคุณเลือกความอยากรู้ บางครั้งปกป้องพื้นที่ของตัวเอง และบางครั้งคุณขยับเข้าไปหาคนอื่น สิ่งที่เกมเห็นจึงไม่ใช่ป้ายชื่อ แต่เป็นรูปแบบการตอบสนองของคุณเมื่อสถานการณ์เปลี่ยน</p>";
 text+="<p><strong>สิ่งที่เกมสังเกต</strong><br>ด้านที่โผล่ขึ้นมาบ่อยที่สุดคือ "+({curiosity:"ความอยากรู้",care:"ความใส่ใจคนอื่น",independence:"ความเป็นตัวเอง",depth:"การทบทวน",play:"ความเล่นและอารมณ์ขัน",control:"ความต้องการความชัดเจน"}[top])+" คุณมักใช้มันเป็นเข็มทิศแรก แต่ไม่ได้ใช้มันทุกครั้ง</p>";
 text+="<p><strong>ด้านที่คนอื่นอาจไม่เห็น</strong><br>"+(t.depth>=t.control?"คุณมีแนวโน้มกลับไปคิดกับเรื่องที่จบไปแล้ว แม้ภายนอกจะดูเหมือนปล่อยผ่าน":"คุณมักอยากให้สถานการณ์มีขอบเขตชัดเจน แม้จะไม่ได้พูดออกมาตรง ๆ")+"<br><br>และนี่คือความย้อนแย้งของคุณ: "+(t.care>t.independence?"คุณแคร์คนอื่นมาก แต่ก็ต้องการพื้นที่ของตัวเอง":"คุณรักพื้นที่ของตัวเอง แต่บางสถานการณ์ก็ทำให้คุณเดินเข้าไปหาใครบางคน")+"</p>";
 text+="<p><strong>เรื่องที่คุณอาจต้องระวัง</strong><br>อย่าให้ความสามารถในการอ่านสถานการณ์กลายเป็นเหตุผลที่ทำให้คุณไม่ยอมอยู่กับความรู้สึกแบบตรง ๆ และอย่าให้การเข้าใจคนอื่นกลายเป็นหน้าที่ต้องเข้าใจทุกคน</p>";
 text+="<p><strong>ประโยคที่เกมอยากทิ้งไว้</strong><br>คุณไม่จำเป็นต้องสรุปตัวเองให้เสร็จในคืนนี้ บางส่วนของคุณมีไว้เพื่อเปลี่ยน และบางส่วนมีไว้เพื่อให้คุณกลับมาเจอใหม่ในวันที่มองโลกไม่เหมือนเดิม</p>";
 $("#analysis").innerHTML=text;$("#evidenceText").textContent=state.memories.slice(0,3).join(" / ");$("#tensionText").textContent="คะแนนไม่ใช่คำตัดสิน — สิ่งที่น่าสนใจกว่าคือคุณเปลี่ยนวิธีตอบเมื่อคำถามเปลี่ยน";
 $("#finalLine").textContent=data[1]+" และบางทีการที่คุณกลับมาเล่นอีกครั้ง ก็จะเป็นข้อมูลใหม่ของคุณเอง";
 quiz.classList.add("hidden");result.classList.remove("hidden");
}
function start(){state.i=0;state.answers=[];state.memories=[];state.traits={curiosity:0,care:0,independence:0,depth:0,play:0,control:0};$("#memoryCount").textContent="สิ่งที่เกมจำ: 0";intro.classList.add("hidden");result.classList.add("hidden");quiz.classList.remove("hidden");render()}
$("#start").onclick=start;$("#again").onclick=function(){state.round++;start()};$("#memoryBtn").onclick=function(){$("#memoryPanel").classList.toggle("hidden");$("#memoryPanel").textContent="เกมจำไว้ว่า…\\n\\n"+state.memories.map(function(x,i){return String(i+1).padStart(2,"0")+"  "+x}).join("\\n")};
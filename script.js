const $=s=>document.querySelector(s);
const intro=$("#intro"),game=$("#game"),result=$("#result");

const S={
  n:0,mem:[],bag:[],answers:[],missed:[],round:1,
  score:{care:0,self:0,curiosity:0,connection:0,courage:0,rest:0,control:0},
  flags:{}
};

const scenes=[
{
 time:"08:17",chapter:"เช้า / 01",tag:"A DAY BEGINS",title:"ตื่นขึ้นมา ก่อนจะพร้อมใช้ชีวิต",
 text:[
  "คุณตื่นก่อนนาฬิกาปลุกสามนาที",
  "สิ่งแรกที่เห็นคือเพดาน สิ่งที่สองคือโทรศัพท์ และสิ่งที่สามคือความคิดว่า <em>วันนี้ก็ต้องเป็นวันนี้อยู่ดี</em>",
  "มีข้อความค้างอยู่สามข้อความ — งานหนึ่งเรื่อง เพื่อนหนึ่งคน และคนที่คุณไม่ได้คุยมานานจนคำว่า “นาน” เริ่มไม่มีหน่วยวัด",
  "คุณยังไม่รู้ว่าวันนี้จะเป็นวันที่ดีหรือเปล่า ซึ่งก็ดีแล้ว เพราะวันธรรมดาไม่ค่อยประกาศตัวล่วงหน้า"
 ],
 opts:[
  ["ลุกเลย",{courage:1,self:1}, "คุณลุกขึ้นทั้งที่ยังไม่พร้อม", {up:true}],
  ["นอนต่ออีกสิบห้านาที",{rest:2,self:1}, "เตียงชนะไปหนึ่งยก", {rested:true}],
  ["อ่านทุกข้อความ",{curiosity:1,connection:1}, "โลกข้างนอกยังรอให้คุณรับรู้", {checked:true}],
  ["คว่ำโทรศัพท์แล้วมองเพดาน",{self:2,rest:1}, "คุณขอเวลาให้ตัวเองก่อนเจอโลก", {quiet:true}]
 ]
},
{
 time:"08:42",chapter:"เช้า / 02",tag:"THE SMALL THING",title:"ต้นไม้ที่คุณเกือบลืม",
 text:[
  "ก่อนออกจากห้อง คุณเห็นกระถางเล็กริมหน้าต่าง",
  "คุณซื้อมันมาในวันที่คิดว่าจะเริ่มดูแลชีวิตให้ดีขึ้น",
  "ผ่านไปสามเดือน ต้นไม้ยังอยู่ ส่วนชีวิตยังอยู่ในขั้นตอน <em>กำลังจะเริ่ม</em>",
  "คุณแตะดิน มันแห้ง"
 ],
 opts:[
  ["รดน้ำให้มัน",{care:2},"อย่างน้อยวันนี้ มีสิ่งหนึ่งที่คุณไม่ปล่อยให้แห้ง",{plant:"water",bag:"ใบไม้ที่รดน้ำแล้ว"}],
  ["ยกมันไปไว้ตรงแดด",{care:1,curiosity:1},"บางปัญหาไม่ได้ต้องการความพยายามเพิ่ม แค่ต้องการที่ที่เหมาะกว่า",{plant:"sun",bag:"กระถางริมแดด"}],
  ["พูดว่า “สู้ ๆ นะ” แล้วออกจากห้อง",{care:1},"การให้กำลังใจเป็นทักษะที่ราคาถูก แต่ก็ไม่ได้แย่",{plant:"pep"}],
  ["ปล่อยไว้ก่อน",{self:1},"วันนี้คุณไม่มีแรงเป็นผู้ดูแลทุกอย่าง",{plant:"forgot"}]
 ]
},
{
 time:"09:15",chapter:"เช้า / 03",tag:"THE LITTLE LUXURY",title:"กาแฟหนึ่งแก้ว กับบัญชีธนาคาร",
 text:[
  "ระหว่างทางคุณแวะร้านเดิม",
  "คุณเปิดแอปธนาคารก่อนสั่ง",
  "ยอดเงินยังเท่าเดิม",
  "คุณปิดแอป แล้วเปิดใหม่อีกครั้ง เผื่อความจริงจะเปลี่ยนเพราะคุณมีความหวัง",
  "มันไม่เปลี่ยน"
 ],
 opts:[
  ["เอาแก้วเดิม",{self:2,rest:1},"ความสุขเล็ก ๆ ไม่จำเป็นต้องมีใบอนุมัติ",{coffee:"usual",bag:"ใบเสร็จกาแฟ"}],
  ["เอาอันถูกสุด",{control:1,self:1},"คุณรู้จักคำว่า “พอ” แม้มันไม่ค่อยโรแมนติก",{coffee:"cheap"}],
  ["ไม่เอา เดินต่อ",{control:2,courage:1},"วันนี้ความจำเป็นชนะความอยาก",{coffee:"none"}],
  ["ซื้อเพิ่มให้คนที่มาด้วย",{care:2,connection:1},"กาแฟแก้วหนึ่งบางทีก็เป็นประโยคที่พูดง่ายกว่าคำว่า “เป็นห่วง”",{coffee:"two",bag:"แก้วของใครอีกคน"}]
 ]
},
{
 time:"11:26",chapter:"สาย / 04",tag:"A MESSAGE",title:"“เย็นนี้ว่างไหม”",
 text:[
  "โทรศัพท์สั่นตอนคุณกำลังทำงาน",
  "เพื่อนส่งมาว่า <em>“เย็นนี้ว่างไหม”</em>",
  "คำถามธรรมดามาก แต่คุณรู้ว่าคำตอบจะลากเรื่องอื่นตามมา",
  "บางทีเราไม่ได้กลัวการเจอใคร เราแค่เหนื่อยกับการเป็นตัวเองในเวอร์ชันที่ต้องคุยเก่ง"
 ],
 opts:[
  ["ตอบว่า “ว่าง”",{connection:2,courage:1},"คุณเปิดประตูไว้ก่อน แม้ยังไม่รู้ว่าเย็นนี้จะพาไปไหน",{meet:true}],
  ["บอกว่า “วันนี้ไม่ไหว”",{self:2,courage:1},"การปฏิเสธไม่ได้แปลว่าไม่รักใคร",{meet:false}],
  ["อ่านแล้วค่อยตอบ",{self:1,control:1},"คุณขอเวลาให้ความรู้สึกตามความคิดให้ทัน",{lateReply:true}],
  ["ส่งสติกเกอร์ไปก่อน",{connection:1},"คุณไม่ได้แก้ทุกอย่าง แต่ก็ไม่ได้หายไป",{sticker:true}]
 ]
},
{
 time:"14:37",chapter:"บ่าย / 05",tag:"A LITTLE ABSURDITY",title:"พักห้านาที แล้วหายไปหนึ่งชั่วโมง",
 text:[
  "คุณเปิดโทรศัพท์เพื่อพักจากงาน",
  "ห้านาทีผ่านไป",
  "ยี่สิบนาทีผ่านไป",
  "หนึ่งชั่วโมงผ่านไป",
  "ตอนนี้คุณรู้ว่าปลาหมึกมีหัวใจสามดวง แต่ยังไม่รู้ว่าจะจัดการชีวิตตัวเองอย่างไร",
  "ถือว่าได้ความรู้มาอย่างหนึ่ง"
 ],
 opts:[
  ["กลับไปทำงาน",{control:2},"คุณตัดใจจากจักรวาลปลาหมึก",{doomscroll:false}],
  ["ดูต่ออีกคลิป",{rest:1},"การพักที่ไม่ productive ก็ยังเป็นการพัก",{doomscroll:true,bag:"ความรู้เรื่องปลาหมึก"}],
  ["ออกไปเดิน",{courage:1,rest:1},"คุณเปลี่ยนอากาศก่อนพยายามเปลี่ยนความคิด",{walk:true}],
  ["ส่งคลิปให้เพื่อน",{connection:2},"เรื่องไร้สาระจะมีความหมายขึ้นมานิดหนึ่งเมื่อมีคนรับรู้ด้วย",{sentOctopus:true}]
 ]
},
{
 time:"18:12",chapter:"เย็น / 06",tag:"SOMEONE ASKS",title:"“ช่วงนี้มึงโอเคปะ?”",
 text:[
  "ถ้าคุณตอบรับนัดไว้ คุณเจอเพื่อนที่ร้านเดิม",
  "ถ้าคุณไม่ได้ตอบรับ คุณกลับบ้านคนเดียว แต่ระหว่างทางมีข้อความเด้งขึ้นมา — <em>“ไว้วันไหนมึงไหวค่อยเจอกันก็ได้”</em>",
  "ไม่ว่าจะอยู่ตรงไหน คำถามเดียวกันกลับมาหาคุณ:",
  "<em>“ช่วงนี้มึงโอเคปะ?”</em>"
 ],
 opts:[
  ["“โอเค”",{self:1,control:1},"คำตอบสั้นดี และไม่สร้างภาระให้ใคร",{honest:false}],
  ["“ไม่ค่อย”",{connection:2,courage:2},"คุณยอมให้ใครสักคนเห็นรอยร้าวเล็ก ๆ",{honest:true,bag:"ประโยคที่พูดออกมาแล้ว"}],
  ["หัวเราะแล้วเปลี่ยนเรื่อง",{self:1,connection:1},"มุกตลกเป็นเกราะที่น้ำหนักเบามาก และพกง่าย",{joke:true}],
  ["“แล้วมึงล่ะ?”",{connection:2,care:1},"คุณโยนประตูให้เขาแทนที่จะเดินผ่านประตูของตัวเอง",{turn:true}]
 ]
},
{
 time:"20:04",chapter:"ค่ำ / 07",tag:"THE THINGS WE CARRY",title:"ระหว่างทางกลับบ้าน",
 text:[
  "บนรถ คุณเห็นคู่หนึ่งทะเลาะกันเบา ๆ",
  "คุณไม่ได้ยินเรื่องทั้งหมด แต่ได้ยินประโยคหนึ่งว่า <em>“ก็ไม่เห็นเคยพูด”</em>",
  "คุณหันกลับไปมองหน้าต่าง",
  "ในกระเป๋าคุณมีของเล็ก ๆ จากวันนี้ — บางอย่างไร้สาระ บางอย่างไม่ไร้สาระเท่าไร",
  "คุณนึกถึงสิ่งหนึ่งที่ตัวเองยังไม่ได้พูด"
 ],
 opts:[
  ["พิมพ์ข้อความไว้ แต่ยังไม่ส่ง",{self:1,curiosity:1},"บางคำต้องมีที่อยู่ก่อน ถึงจะกล้าส่ง",{draft:true,bag:"ข้อความที่ยังไม่ส่ง"}],
  ["ส่งไปเลย",{connection:2,courage:2},"คุณเลือกความชัดเจน แม้จะกลัวคำตอบ",{sent:true}],
  ["เก็บโทรศัพท์ แล้วกลับบ้าน",{rest:2},"วันนี้คุณไม่จำเป็นต้องแก้ทุกความสัมพันธ์ในคืนเดียว",{home:true}],
  ["เปิดเพลงดัง ๆ แล้วมองนอกหน้าต่าง",{rest:1,self:1},"บางครั้งการไม่ทำอะไร ก็เป็นการทำอะไรบางอย่างกับตัวเอง",{music:true}]
 ]
},
{
 time:"23:48",chapter:"ดึก / 08",tag:"BEFORE SLEEP",title:"แล้ววันหนึ่งก็หมดลง",
 text:[
  "กลับถึงห้องแล้ว",
  "วันนี้ไม่มีปาฏิหาริย์ ไม่มีจักรวาลส่งคำตอบ และไม่มีใครหายไปอย่างลึกลับ",
  "มีแค่วันธรรมดาวันหนึ่งที่ค่อย ๆ หมดลง",
  "แต่ถ้าลองมองดี ๆ สิ่งที่คุณทำตั้งแต่เช้ายังทิ้งร่องรอยไว้เต็มวัน",
  "ครั้งนี้เกมจะไม่เดาแทนคุณ"
 ],
 free:true
}
];

function reset(){
 S.n=0;S.mem=[];S.bag=[];S.answers=[];S.missed=[];S.round=S.round||1;
 S.score={care:0,self:0,curiosity:0,connection:0,courage:0,rest:0,control:0};
 S.flags={};
 $("#memoryCount").textContent="เกมจำ: 0";$("#bag").textContent="ว่าง";$("#freeText").value="";
}
function remember(x){
 S.mem.push(x);
 $("#memoryCount").textContent="เกมจำ: "+S.mem.length;
 $("#bag").textContent=S.bag.length?S.bag.join(" · "):"วันนี้ยังไม่ได้เก็บอะไรไว้";
}
function addBag(x){if(x&&!S.bag.includes(x)){S.bag.push(x);remember("เก็บไว้: "+x)}}
function sceneText(s){
 return s.text.map(x=>{
  if(S.n===5 && !S.flags.meet) return x.replace("ถ้าคุณตอบรับนัดไว้ คุณเจอเพื่อนที่ร้านเดิม","คุณไม่ได้ไปเจอเพื่อนวันนี้");
  return x;
 }).join("");
}
function render(){
 const s=scenes[S.n];
 $("#chapter").textContent=s.chapter;$("#clock").textContent=s.time;
 $("#progress").style.width=((S.n+1)/scenes.length*100)+"%";
 $("#tag").textContent=s.tag;$("#sceneTitle").textContent=s.title;
 $("#storyText").innerHTML=sceneText(s).split("\n").map(x=>"<p>"+x+"</p>").join("");
 $("#choices").innerHTML="";$("#inputBox").classList.add("hidden");
 if(s.free){
  $("#inputBox").classList.remove("hidden");
  $("#whisper").textContent="คืนนี้เกมจะหยุดถาม แล้วฟังคุณ";
 }else{
  s.opts.forEach(o=>{
   const b=document.createElement("button");b.className="choice";b.textContent=o[0];
   b.onclick=()=>pick(o);$("#choices").appendChild(b);
  });
  const whispers=[
   "เกมจำเรื่องเล็ก ๆ ได้เก่งกว่าที่ควร",
   "บางทีสิ่งที่คุณเลือกก็จะกลับมาเจอคุณเอง",
   "ไม่ต้องรีบเป็นคนแบบไหน แค่เป็นคนที่กำลังใช้ชีวิต",
   "วันนี้ยังมีเรื่องให้ยุ่งอีกนิด"
  ];
  $("#whisper").textContent=whispers[S.n%whispers.length];
 }
}
function pick(o){
 const [label,sc,note,flags]=o;
 Object.keys(sc).forEach(k=>S.score[k]+=sc[k]||0);
 S.answers.push(label);
 Object.assign(S.flags,flags||{});
 if(flags?.bag)addBag(flags.bag);
 remember("ฉาก "+(S.n+1)+" — "+label);
 $("#choices").innerHTML='<div class="after-note">'+note+'</div>';
 const next=document.createElement("button");next.className="choice continue";next.textContent="แล้ววันก็เดินต่อ →";
 $("#choices").appendChild(next);
 $("#hint").textContent=note;
 next.onclick=()=>{S.n++;if(S.n>=scenes.length)finish();else render()};
}
$("#freeSubmit").onclick=()=>{
 const v=$("#freeText").value.trim();if(!v)return;
 S.answers.push(v);S.mem.push("คำตอบที่คุณฝากไว้: "+v);
 finish();
};

function finish(){
 const s=S.score;
 let type="คนที่ยังพยายามอยู่";
 if(s.connection>=8&&s.care>=5)type="คนที่ใส่ใจกับสิ่งที่ยังไม่พูด";
 else if(s.courage>=7&&s.connection>=5)type="คนที่กล้ายื่นมือ แม้ไม่รู้ว่าจะมีใครจับกลับมา";
 else if(s.self>=8&&s.rest>=4)type="คนที่กำลังเรียนรู้ว่าจะดูแลตัวเองอย่างไร";
 else if(s.control>=6&&s.curiosity>=2)type="คนที่ชอบเข้าใจโลก ก่อนจะยอมให้โลกเข้าใจตัวเอง";
 else if(s.curiosity>=4&&s.self>=5)type="คนที่ยังมีคำถามกับชีวิต และนั่นไม่ใช่เรื่องแย่";

 const lines=[];
 if(S.flags.plant==="forgot")lines.push("คุณปล่อยต้นไม้ไว้เหมือนที่บางครั้งคุณปล่อยเรื่องเล็ก ๆ ไว้ก่อน แล้วค่อยหวังว่าจะยังอยู่ที่เดิม");
 if(S.flags.plant==="water"||S.flags.plant==="sun")lines.push("คุณมีนิสัยแปลกอย่างหนึ่ง คือถ้าเห็นอะไรเล็ก ๆ กำลังแย่ คุณมักอดเข้าไปยุ่งไม่ได้");
 if(S.flags.coffee==="usual")lines.push("คุณยอมจ่ายให้ความสุขเล็ก ๆ แม้บัญชีธนาคารจะมองคุณด้วยสายตาที่ไม่เห็นด้วย");
 if(S.flags.doomscroll)lines.push("คุณเสียเวลาไปกับปลาหมึกสามหัว และที่น่าสงสัยคือคุณดูมีความสุขกับมัน");
 if(S.flags.honest)lines.push("วันนี้คุณพูดว่า “ไม่ค่อย” ออกไป ทั้งที่คำว่า “โอเค” ง่ายกว่ามาก");
 if(S.flags.sent)lines.push("คุณส่งข้อความที่อาจทำให้ใจเต้นแรง เพราะบางครั้งความไม่แน่นอนเหนื่อยกว่าคำตอบ");
 if(S.flags.draft)lines.push("คุณเขียนบางอย่างไว้ แต่ยังไม่ส่ง — แปลว่าคุณไม่ได้ไม่รู้สึก คุณแค่กำลังหาจังหวะ");
 if(S.flags.meet===false)lines.push("คุณเลือกไม่ออกไปเจอใคร และโลกก็ไม่ได้ถล่มลงมา");
 if(S.flags.sentOctopus)lines.push("คุณส่งเรื่องไร้สาระให้คนอื่น เพราะคุณรู้ว่าความสนิทไม่ได้สร้างจากบทสนทนาสำคัญอย่างเดียว");
 if(!lines.length)lines.push("วันนี้คุณไม่ได้ทำอะไรยิ่งใหญ่ และนั่นเป็นข้อมูลสำคัญเหมือนกัน");

 const contradiction=s.connection>s.self
  ?"คุณดูเหมือนคนที่อยากอยู่ใกล้ผู้คน แต่ก็ต้องมีพื้นที่เงียบ ๆ ไว้กลับมาเป็นตัวเอง"
  :"คุณดูเหมือนคนที่ต้องการพื้นที่ของตัวเอง แต่ลึก ๆ ก็ยังอยากให้มีใครสักคนสังเกตว่าคุณหายไป";

 const evidence=S.answers.slice(0,5).join(" · ");
 $("#resultTitle").textContent=type;
 $("#resultSub").textContent="เกมไม่ได้เห็นทั้งชีวิตคุณ เห็นแค่รอยเท้าที่ทิ้งไว้ในหนึ่งวัน แต่รอยเท้าบางแบบก็บอกทิศทางได้";
 $("#analysis").innerHTML=[
  "<p><strong>สิ่งที่วันนี้ทิ้งไว้</strong><br>"+lines.join("<br>")+"</p>",
  "<p><strong>สิ่งที่น่าสนใจกว่า</strong><br>"+contradiction+"</p>",
  "<p><strong>เกมจับอะไรได้อีกอย่าง</strong><br>คุณไม่ได้เลือกแบบเดิมทุกครั้ง บางเรื่องคุณใจดี บางเรื่องคุณปกป้องตัวเอง บางเรื่องคุณแค่เหนื่อย และบางเรื่องคุณเลือกดูปลาหมึกสามหัวต่อไปอย่างมีความสุข</p>",
  "<p><strong>คำตอบที่คุณเขียนตอนจบ</strong><br>“"+S.answers[S.answers.length-1]+"”</p>"
 ].join("");
 $("#evidenceText").textContent=evidence;
 $("#missedText").textContent=S.flags.meet===false?"นัดหนึ่งครั้งที่คุณเลือกไม่ไป และไม่มีใครตาย":"สิ่งที่คุณยังไม่ได้พูดทั้งหมด";
 $("#finalLine").textContent="ตัวตนไม่ใช่รูปถ่ายใบเดียว แต่มันเป็นฟิล์มทั้งม้วน วันนี้เป็นเพียงหนึ่งเฟรม — เบลอบ้าง สวยบ้าง หลุดโฟกัสบ้าง แต่เป็นของคุณ";
 $("#resultCode").textContent="DAY / "+String(S.round).padStart(2,"0");
 game.classList.add("hidden");result.classList.remove("hidden");
}
function start(){reset();intro.classList.add("hidden");result.classList.add("hidden");game.classList.remove("hidden");render()}
$("#start").onclick=start;$("#again").onclick=()=>{S.round++;start()};
$("#memoryBtn").onclick=()=>{$("#memoryPanel").classList.toggle("hidden");$("#memoryPanel").textContent="บันทึกของวันนี้\n\n"+S.mem.join("\n")};

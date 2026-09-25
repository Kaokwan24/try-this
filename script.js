const scenes=[
{t:"คุณตื่นขึ้นมาในห้องที่ไม่รู้จัก\\nนาฬิกาหยุดอยู่ที่ 03:17\\nหน้าต่างเปิดรับลม ทั้งที่คุณจำได้ว่าปิดมันก่อนนอน\\n\\nบนโต๊ะมีของสามอย่าง",c:[
["กุญแจสนิม — ของที่ดูเหมือนเคยเปิดบางอย่าง",{item:"key",f:{key:1},c:{courage:1,curiosity:1}}],
["จดหมายที่เขียนชื่อคุณ — ลายมือเหมือนคนที่คุณเคยรู้จัก",{item:"letter",f:{readLetter:1},c:{memory:1,tenderness:1}}],
["ขนมหมดอายุสี่ปี — กลิ่นยังดีอย่างน่าสงสัย",{item:"snack",f:{snack:1},c:{play:1}}]]},
{t:"ประตูปรากฏขึ้นตรงหน้า\\nมันไม่มีมือจับจากด้านนี้\\nจากอีกฝั่งมีเสียงถามเบา ๆ\\n\\n“คุณยังจำได้ไหม?”",c:[
["เปิดทันที",{f:{door:1},c:{courage:2}}],
["เอาหูแนบประตู แล้วถามว่า “จำอะไร?”",{f:{listen:1},c:{curiosity:2,tenderness:1}}],
["เคาะสามครั้ง แล้วรอ",{f:{knock:1},c:{patience:2}}]]},
{t:"หลังประตูเป็นร้านถ่ายรูปเล็ก ๆ\\nไม่มีคนเฝ้า\\nในรูปหนึ่ง คุณกำลังยืนอยู่ในห้องนี้\\nด้านหลังรูปเขียนว่า “ถ่ายเมื่อ 11 ปีก่อน”",c:[
["เอารูปใบนั้นกลับไป",{item:"photo",f:{photo:1},c:{memory:2}}],
["พลิกดูด้านหลังให้ละเอียด",{f:{photoBack:1},c:{curiosity:2}}],
["วางมันไว้ที่เดิม เพราะบางอย่างไม่ควรถูกพากลับไป",{f:{leavePhoto:1},c:{patience:1,tenderness:2}}]]},
{t:"ทางแยกสามทาง\\nป้ายหนึ่งเขียนว่า “ทางกลับ”\\nอีกป้าย “ทางที่ยังไม่เกิดขึ้น”\\nป้ายสุดท้ายถูกขีดทิ้งจนอ่านไม่ออก",c:[
["ไปทางกลับ",{f:{back:1},c:{memory:1}}],
["ไปทางที่ยังไม่เกิดขึ้น",{f:{future:1},c:{hope:2}}],
["เดินตามป้ายที่ถูกขีดทิ้ง",{f:{wrong:1},c:{curiosity:1,play:1}}]]},
{t:"ห้องพักเล็ก ๆ มีเก้าอี้และกระจก\\nในกระจก คุณเห็นตัวเองช้ากว่าความจริงสามวินาที\\nแล้วเงาในกระจกยกมือขึ้นก่อนคุณ",c:[
["ยกมือตามมัน",{f:{mirror:1},c:{curiosity:1,art:1}}],
["ถามเงาว่า “เธออยากได้อะไร?”",{f:{mirrorTalk:1},c:{tenderness:2}}],
["ทุบกระจก",{f:{mirrorBreak:1},c:{courage:2}}]]},
{t:"ถ้าคุณเก็บจดหมายไว้ คุณพบข้อความใหม่ด้านใน:\\n“ถ้าเจอคนที่จำคุณได้ก่อนคุณจำเขาได้ อย่ารีบถามว่าเขาเป็นใคร”\\nถ้าไม่ได้เก็บจดหมาย คุณพบเพียงกระดาษเปล่า",c:[
["เขียนชื่อใครสักคนลงบนกระดาษ",{f:{nameWrite:1},c:{memory:1}}],
["พับกระดาษเป็นเรือ",{item:"boat",f:{boat:1},c:{play:2,hope:1}}],
["ฉีกกระดาษทิ้ง แล้วดูว่ามีอะไรอยู่ข้างใต้",{f:{underPaper:1},c:{curiosity:2}}]]},
{t:"โทรศัพท์สีดำดังขึ้นเพียงครั้งเดียว\\nหน้าจอขึ้นเวลา 03:17\\nถ้าคุณรับสาย จะได้ยินเสียงของตัวเองพูดว่า\\n“อย่าไว้ใจตอนจบ”",c:[
["รับสาย",{f:{phone:1},c:{courage:1,curiosity:2}}],
["ปล่อยให้มันดังหายไป",{f:{ignorePhone:1},c:{patience:2}}],
["โทรกลับหาตัวเอง",{f:{callBack:1},c:{play:2,art:1}}]]},
{t:"เด็กคนหนึ่งนั่งอยู่บนพื้น ถือของชิ้นหนึ่งที่คุณเคยเห็น\\nเขาถามว่า “ของชิ้นนี้เป็นของคุณหรือเปล่า?”",c:[
["ตอบว่าใช่",{f:{claim:1},c:{memory:1}}],
["ตอบว่าไม่รู้",{f:{unsure:1},c:{patience:1,curiosity:1}}],
["ถามกลับว่า “แล้วของนายอยู่ไหน?”",{f:{askChild:1},c:{tenderness:2,curiosity:1}}]]},
{t:"เหนือประตูสีขาวมีคำถามเดียว\\n“ถ้าคุณรู้ว่าการกลับออกไปจะทำให้คุณลืมทุกอย่างที่เกิดขึ้นที่นี่ คุณยังจะกลับไหม?”",c:[
["กลับ — ฉันไม่จำเป็นต้องจำทุกอย่าง",{f:{leave:1},c:{hope:1,tenderness:1}}],
["ไม่กลับ — ฉันอยากรู้ให้หมด",{f:{stay:1},c:{curiosity:2}}],
["ขอเปิดประตูอีกบานก่อน",{f:{anotherDoor:1},c:{play:1,art:2}}]]},
{t:"โต๊ะตัวเดิมจากห้องแรกกลับมาอีกครั้ง\\nกุญแจ จดหมาย ขนม และรูปถ่ายวางเรียงกัน\\nมีของอีกชิ้นที่ไม่เคยอยู่ตรงนั้น: กุญแจอีกดอก\\nป้ายเขียนว่า “ของคุณ เมื่อครั้งที่แล้ว”",c:[
["หยิบกุญแจดอกใหม่",{item:"oldKey",f:{oldKey:1},c:{memory:1,curiosity:1}}],
["ทิ้งทุกอย่างไว้ แล้วเดินออก",{f:{release:1},c:{hope:2}}],
["หยิบของที่ตัวเองเคยทิ้งไว้กลับมาด้วย",{f:{returnItem:1},c:{courage:1,play:1}}]]},
{t:"คุณกลับมาถึงห้องแรก\\nนาฬิกายังเป็น 03:17 แต่ตอนนี้คุณรู้แล้วว่ามันไม่ได้หยุด\\nมันกำลังรอ\\nประตูที่คุณเข้ามาหายไป เหลือเพียงหน้าต่าง",c:[
["ถามว่า “ฉันเคยมาที่นี่แล้วใช่ไหม?”",{f:{askFinal:1},c:{curiosity:2,memory:1}}],
["พูดว่า “ถ้าอย่างนั้นก็เริ่มใหม่”",{f:{restart:1},c:{hope:2,play:1}}],
["ไม่ถามอะไรเลย",{f:{silentFinal:1},c:{patience:2,tenderness:1}}]]},
{t:"บนกระจกมีข้อความปรากฏขึ้น\\n“สิ่งที่คุณเลือกมาตลอดทางไม่ได้บอกว่าคุณเป็นคนแบบไหน\\nมันบอกว่า เมื่อไม่มีใครมอง คุณเลือกปฏิบัติต่อสิ่งที่อยู่ตรงหน้าอย่างไร”\\n\\nคุณเอามือแตะกระจก มันอุ่น",c:[
["แตะต่อ",{f:{touch:1},c:{tenderness:1}}],
["ถอนมือ",{f:{withdraw:1},c:{courage:1}}],
["เคาะกระจกสามครั้ง",{f:{knockGlass:1},c:{curiosity:1,play:1}}]]}
];

const endings={
loop:["คนที่กลับมาถึงที่เดิมโดยไม่เหมือนเดิม","นาฬิกาเปลี่ยนจาก 03:17 เป็น 03:18\\nแล้วไฟในห้องก็ดับลง\\n\\nบนโต๊ะมีจดหมายฉบับใหม่เขียนด้วยลายมือของคุณเอง:\\n“รอบนี้ลองเลือกสิ่งที่คุณไม่เคยเลือกดู”\\n\\nคุณหัวเราะเบา ๆ เพราะเพิ่งรู้ว่าเกมนี้อาจไม่ได้เริ่มคืนนี้เป็นครั้งแรก"],
memory:["นักเก็บหลักฐานของสิ่งที่ไม่มีใครเห็น","คุณออกมาพร้อมรูปถ่ายหนึ่งใบ\\nในรูปไม่มีคุณอยู่แล้ว มีเพียงเก้าอี้ว่างกับไฟดวงเล็ก\\n\\nด้านหลังรูปเขียนว่า “ขอบคุณที่จำแทนเรา”\\n\\nบางความทรงจำไม่ได้มีไว้ย้อนกลับไป มันมีไว้เพื่อพิสูจน์ว่าเรายังเดินต่อมาได้"],
mirror:["คนที่ยอมคุยกับตัวเองจนถึงที่สุด","เงาในกระจกไม่ได้ตามคุณออกมา\\nมันเพียงยืนอยู่ตรงนั้นและยิ้ม\\n\\nก่อนกระจกจะกลับมาเป็นกระจกธรรมดา มันขยับปากเป็นคำว่า\\n“คราวหน้าไม่ต้องกลัวฉันก็ได้”"],
hope:["คนที่ทิ้งไฟไว้ให้ตัวเองกลับมา","คุณเปิดประตูออก ข้างนอกไม่มีทางเดิน ไม่มีห้อง ไม่มีคำตอบ\\nมีเพียงเช้าวันใหม่\\n\\nคุณไม่รู้ว่าทุกอย่างเกิดขึ้นจริงหรือไม่ แต่เมื่อกลับถึงบ้าน คุณเปิดไฟไว้หนึ่งดวง เผื่อใครบางคนที่ยังหาทางกลับไม่เจอ"],
strange:["คนที่เลือกประตูที่เกมไม่ได้วาดไว้","กำแพงข้างหลังคุณเปิดออกเป็นรอยแยกเล็ก ๆ\\nไม่มีใครเขียนมันไว้ในแผนที่\\n\\nคุณเดินเข้าไปและพบโต๊ะตัวหนึ่งที่มีป้ายชื่อว่า\\n“สำหรับคนที่ไม่เชื่อว่ามีแค่ตอนจบเดียว”\\n\\nบนโต๊ะมีเกมอีกเกมหนึ่งวางอยู่"],
tender:["คนที่ทิ้งที่ว่างไว้ให้บางสิ่ง","คุณออกจากห้องโดยไม่เอาของกลับไปสักชิ้น\\nแต่เมื่อถึงบ้าน คุณพบกลิ่นขนมเก่า ๆ ในห้องครัว\\n\\nไม่มีใครอยู่ ไม่มีอะไรหาย\\n\\nคุณยิ้ม และไม่ได้พยายามหาคำอธิบาย"],
default:["คนที่ไม่ยอมให้คำตอบจบเรื่อง","คุณออกมาพร้อมคำตอบที่ไม่ค่อยเหมือนคำตอบ\\n\\nบางทีสิ่งที่เปลี่ยนคุณไม่ใช่ประตูที่เปิด แต่เป็นสิ่งเล็ก ๆ ที่คุณเลือกจะไม่เดินผ่าน\\n\\n03:18\\nคราวนี้นาฬิกาเดินต่อแล้ว"]
};

let i=0,scores={courage:0,curiosity:0,memory:0,tenderness:0,patience:0,art:0,hope:0,play:0},bag=[],flags={};
const story=document.querySelector("#story"),intro=document.querySelector(".intro"),result=document.querySelector("#result");
function reset(){i=0;scores={courage:0,curiosity:0,memory:0,tenderness:0,patience:0,art:0,hope:0,play:0};bag=[];flags={};}
function inventory(){let el=document.querySelector("#inventory");if(!el){el=document.createElement("div");el.id="inventory";el.className="inventory";story.prepend(el)}el.innerHTML="<span>POCKET</span>"+(bag.length?bag.map(x=>"<b>"+x+"</b>").join(""):"<b>ว่างเปล่า</b>")}
function render(){document.querySelector("#count").textContent=String(i+1).padStart(2,"0")+" / "+String(scenes.length).padStart(2,"0");document.querySelector("#scene").textContent=scenes[i].t;const bar=document.querySelector(".progress-line i");if(bar)bar.style.width=((i+1)/scenes.length*100)+"%";inventory();const box=document.querySelector("#choices");box.innerHTML="";scenes[i].c.forEach(([label,add])=>{const b=document.createElement("button");b.className="choice";b.textContent=label;b.onclick=()=>pick(add);box.appendChild(b)})}
function pick(add){if(add.item&&!bag.includes(add.item))bag.push(add.item);if(add.f)Object.assign(flags,add.f);if(add.c)Object.entries(add.c).forEach(([k,v])=>scores[k]+=v);if(i<scenes.length-1){i++;render()}else finish()}
function finish(){let key="default";if(flags.askFinal&&flags.oldKey)key="loop";else if(flags.mirrorTalk||flags.mirrorBreak)key="mirror";else if(flags.photo||flags.photoBack||flags.claim)key="memory";else if(flags.leave||flags.release||flags.restart)key="hope";else if(flags.anotherDoor||flags.callBack||flags.wrong)key="strange";else if(flags.askChild||flags.touch)key="tender";const r=endings[key];document.querySelector("#resultTitle").textContent=r[0];document.querySelector("#resultText").textContent=r[1];let note=document.querySelector("#result .result-note");if(!note){note=document.createElement("p");note.className="result-note";document.querySelector("#result .result-card").append(note)}note.textContent="ของที่คุณพกออกมา: "+(bag.length?bag.join(" · "):"ไม่มีอะไรเลย")+"\\n\\nบางอย่างจะเปลี่ยน ถ้าคุณกลับเข้าไปอีกครั้ง";story.classList.add("hidden");result.classList.remove("hidden")}
document.querySelector("#start").onclick=()=>{reset();intro.classList.add("hidden");result.classList.add("hidden");story.classList.remove("hidden");render()};
document.querySelector("#again").onclick=()=>{reset();result.classList.add("hidden");story.classList.remove("hidden");render()};
reset();
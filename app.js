const plan = [
 {id:"mon",day:"Lunes",short:"LUN",title:"Tren superior A",desc:"Pecho, espalda, hombros y brazos. Mantén el control en cada repetición.",items:[
  ["Press inclinado con mancuernas","3 × 8–12","Banco con inclinación moderada. Baja hasta un rango cómodo y empuja sin perder estabilidad en los hombros."],
  ["Jalón al pecho","3 × 8–12","Lleva la barra hacia la parte superior del pecho, dirigiendo los codos hacia abajo. Evita balancearte."],
  ["Press de pecho en máquina","2 × 10–12","Ajusta el asiento para que las empuñaduras queden a la altura del pecho. Regresa lentamente."],
  ["Remo sentado en polea","2 × 10–12","Lleva los codos atrás con el torso estable. No uses impulso."],
  ["Elevaciones laterales","2 × 12–15","Eleva los brazos hacia los lados con carga ligera y sin balancearte."],
  ["Extensión de tríceps con cuerda","2 × 10–15","Mantén los codos cerca del torso y extiende los brazos controladamente."],
  ["Curl de bíceps con mancuernas","2 × 10–12","Mantén los codos estables y evita balancear el cuerpo. Baja lentamente."]]},
 {id:"tue",day:"Martes",short:"MAR",title:"Tren inferior A",desc:"Trabajo equilibrado de piernas y zona media. Prioriza una técnica estable.",items:[
  ["Sentadilla con barra","2 × 8–10","Mantén el abdomen firme y desciende solo hasta donde conserves una posición estable. Usa una carga cómoda."],
  ["Prensa de piernas","3 × 10–12","Baja sin despegar la pelvis del respaldo y empuja sin bloquear agresivamente las rodillas."],
  ["Curl femoral sentado","2 × 10–15","Flexiona las rodillas sin levantar la cadera y controla el regreso."],
  ["Extensión de cuádriceps","2 × 10–15","Extiende las rodillas sin impulso y baja lentamente."],
  ["Elevación de pantorrillas de pie","3 × 12–15","Sube y baja los talones con un recorrido cómodo y controlado."],
  ["Crunch en polea","2 × 10–15","Acerca las costillas hacia la pelvis sin tirar del cuello."]]},
 {id:"wed",day:"Miércoles",short:"MIÉ",title:"Cardio suave + movilidad",desc:"Sesión ligera para la resistencia y la movilidad. Debes poder conversar mientras haces cardio.",items:[
  ["Caminata o bicicleta suave","15–20 min","Mantén una intensidad cómoda, sin convertirlo en una prueba de resistencia."],
  ["Movilidad de cadera","5 min","Haz movimientos suaves y controlados, sin forzar el rango."],
  ["Movilidad de hombros","5 min","Realiza deslizamientos en pared y círculos suaves sin dolor."],
  ["Movilidad torácica","3 min","Realiza rotaciones suaves del tronco, respirando con normalidad."]]},
 {id:"thu",day:"Jueves",short:"JUE",title:"Tren superior B",desc:"Segunda sesión de tren superior con variaciones de empuje y tracción.",items:[
  ["Press de pecho en máquina","3 × 8–12","Empuja sin despegar la espalda del respaldo y usa un recorrido cómodo."],
  ["Remo con pecho apoyado","3 × 8–12","Mantén el pecho en el soporte y lleva los codos hacia atrás."],
  ["Jalón con agarre neutro","2 × 10–12","Lleva los codos hacia los costados sin balancear el tronco."],
  ["Aperturas en máquina","2 × 12–15","Acerca los brazos sin forzar el estiramiento del pecho."],
  ["Pájaros en máquina","2 × 12–15","Separa los brazos para trabajar la parte posterior de los hombros con poco peso."],
  ["Curl martillo","2 × 10–12","Mantén las palmas enfrentadas y evita impulsarte."],
  ["Extensión de tríceps en polea","2 × 10–15","Mueve principalmente los antebrazos y mantén los codos estables."]]},
 {id:"fri",day:"Viernes",short:"VIE",title:"Tren inferior B",desc:"Trabajo complementario de piernas y abdomen. Ajusta esta sesión si el fútbol cae cerca.",items:[
  ["Peso muerto rumano","2 × 8–10","Lleva la cadera hacia atrás, conserva la espalda estable y baja solo hasta mantener el control."],
  ["Hip thrust","2 × 8–12","Eleva la cadera sin arquear excesivamente la zona lumbar."],
  ["Curl femoral tumbado","2 × 10–15","Flexiona las rodillas manteniendo la pelvis estable."],
  ["Sentadilla búlgara","2 × 8–10 por pierna","Usa un apoyo estable, baja de forma controlada y empieza sin peso o con poco peso."],
  ["Pantorrilla sentado","3 × 12–15","Eleva los talones y desciende lentamente."],
  ["Elevación de rodillas","2 × 10–15","Evita balancearte y controla el movimiento de la pelvis."],
  ["Plancha","2 × 20–40 s","Mantén el cuerpo estable y respira normalmente."]]},
 {id:"sat",day:"Sábado",short:"SÁB",title:"Complementaria: brazos + abdomen",desc:"Sesión breve y ligera. Hazla solo si estás recuperado y no interfiere con el fútbol.",items:[
  ["Curl de bíceps en polea","2 × 12–15","Conserva los codos estables y controla la extensión."],
  ["Curl martillo","2 × 10–12","Mantén las palmas enfrentadas y evita impulsarte."],
  ["Extensión de tríceps con cuerda","2 × 12–15","Separa ligeramente los extremos al extender los brazos."],
  ["Extensión de tríceps sobre la cabeza","2 × 10–12","Usa un recorrido cómodo y conserva los codos estables."],
  ["Dead bug","2 × 10 por lado","Extiende brazo y pierna contrarios manteniendo estable la zona lumbar."],
  ["Plancha","2 × 20–40 s","Mantén una línea estable entre cabeza, tronco y piernas."]]}
];
const $ = s => document.querySelector(s);
const getStore = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const saveStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let logs = getStore("entrena-logs", []);
let completed = getStore("entrena-completed", {});
let selectedDay = "mon";
let timerSeconds = 90, timerRemaining = 90, timerInterval = null;

function todayName(){return ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"][new Date().getDay()]}
$("#today-label").textContent = `${todayName().toUpperCase()} · TU PLAN DE ENTRENAMIENTO`;
function weekKey(){const d=new Date();const day=(d.getDay()+6)%7;d.setDate(d.getDate()-day);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;}
function completionKey(id){return `${weekKey()}-${id}`;}
function renderDays(){
 $("#day-list").innerHTML=plan.map(p=>`<button class="day-btn ${p.id===selectedDay?"active":""} ${completed[completionKey(p.id)]?"done":""}" data-day="${p.id}"><strong>${p.day}</strong><span>${p.title}</span></button>`).join("");
 document.querySelectorAll(".day-btn").forEach(b=>b.addEventListener("click",()=>{selectedDay=b.dataset.day;renderDays();renderSession();}));
}
function renderSession(){
 const p=plan.find(x=>x.id===selectedDay);
 $("#session-view").innerHTML=`<div class="session-head"><p class="eyebrow">${p.day.toUpperCase()} · SESIÓN</p><h3>${p.title}</h3><p>${p.desc}</p></div>`+p.items.map((it,i)=>`<article class="exercise"><div class="exercise-top"><div><h4>${it[0]}</h4><span class="exercise-meta">${it[1]}</span></div></div><p>${it[2]}</p><div class="exercise-actions"><button class="mini-btn" data-log="${i}">Registrar ejercicio</button><label class="done-check"><input type="checkbox" data-exdone="${i}" ${getStore("entrena-exdone",{})[`${completionKey(p.id)}-${i}`]?"checked":""}> Hecho</label></div></article>`).join("")+`<button class="primary-btn" id="complete-session">${completed[completionKey(p.id)]?"Sesión completada ✓":"Marcar sesión como completada"}</button>`;
 document.querySelectorAll("[data-log]").forEach(b=>b.addEventListener("click",()=>{const it=p.items[Number(b.dataset.log)];$("#log-day").value=p.id;$("#log-exercise").value=it[0];switchTab("tracking");$("#log-load").focus();}));
 document.querySelectorAll("[data-exdone]").forEach(c=>c.addEventListener("change",()=>{const obj=getStore("entrena-exdone",{});obj[`${completionKey(p.id)}-${c.dataset.exdone}`]=c.checked;saveStore("entrena-exdone",obj);}));
 $("#complete-session").addEventListener("click",()=>{completed[completionKey(p.id)]=!completed[completionKey(p.id)];saveStore("entrena-completed",completed);renderDays();renderSession();renderStats();});
}
function switchTab(name){document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",t.dataset.tab===name));document.querySelectorAll(".panel").forEach(p=>p.classList.toggle("active",p.id===`${name}-panel`));}
document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>switchTab(t.dataset.tab)));
function setupLogOptions(){
 $("#log-day").innerHTML=plan.map(p=>`<option value="${p.id}">${p.day} — ${p.title}</option>`).join("");
 $("#exercise-options").innerHTML=plan.flatMap(p=>p.items.map(i=>`<option value="${i[0]}">`)).join("");
}
function renderLogs(){
 $("#log-list").innerHTML=logs.length?logs.slice(0,20).map(l=>`<article class="log-item"><strong>${escapeHTML(l.exercise)}</strong><p>${l.day} · ${l.load?escapeHTML(l.load)+" kg · ":""}${escapeHTML(l.reps)} reps · RIR ${l.rir}${l.notes?"<br>"+escapeHTML(l.notes):""}<br>${new Date(l.date).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short"})}</p></article>`).join(""):`<div class="empty">Todavía no hay registros. Guarda tu primer ejercicio para comenzar.</div>`;
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
$("#save-log").addEventListener("click",()=>{
 const exercise=$("#log-exercise").value.trim(),reps=$("#log-reps").value.trim();
 if(!exercise||!reps){$("#save-feedback").textContent="Completa el ejercicio y las repeticiones.";return;}
 logs.unshift({day:plan.find(p=>p.id===$("#log-day").value)?.day||"Otro día",exercise,load:$("#log-load").value,reps,rir:$("#log-rir").value,notes:$("#log-notes").value.trim(),date:new Date().toISOString()});
 saveStore("entrena-logs",logs);$("#log-load").value="";$("#log-reps").value="";$("#log-notes").value="";$("#save-feedback").textContent="Registro guardado en este dispositivo.";renderLogs();renderStats();
});
$("#clear-logs").addEventListener("click",()=>{if(confirm("¿Borrar todo el historial de ejercicios?")){logs=[];saveStore("entrena-logs",logs);renderLogs();renderStats();}});
function renderStats(){
 const count=plan.filter(p=>completed[completionKey(p.id)]).length;
 $("#week-count").textContent=`${count}/5`;$("#total-sessions").textContent=Object.values(completed).filter(Boolean).length;$("#total-logs").textContent=logs.length;$("#week-summary").textContent=`${count} de 5`;
 $("#week-bars").innerHTML=plan.slice(0,5).map(p=>`<div class="week-bar"><div class="bar-track"><div class="bar-fill" style="height:${completed[completionKey(p.id)]?100:4}%"></div></div><small>${p.short}</small></div>`).join("");
}
function updateTimer(){const m=String(Math.floor(timerRemaining/60)).padStart(2,"0"),s=String(timerRemaining%60).padStart(2,"0");$("#timer-display").textContent=`${m}:${s}`;}
document.querySelectorAll("[data-time]").forEach(b=>b.addEventListener("click",()=>{timerSeconds=Number(b.dataset.time);timerRemaining=timerSeconds;document.querySelectorAll("[data-time]").forEach(x=>x.classList.toggle("selected",x===b));updateTimer();}));
$("#timer-start").addEventListener("click",()=>{if(timerInterval){clearInterval(timerInterval);timerInterval=null;$("#timer-start").textContent="Continuar";return;}if(timerRemaining<=0)timerRemaining=timerSeconds;$("#timer-start").textContent="Pausar";timerInterval=setInterval(()=>{timerRemaining--;updateTimer();if(timerRemaining<=0){clearInterval(timerInterval);timerInterval=null;$("#timer-start").textContent="Iniciar";if(navigator.vibrate)navigator.vibrate([180,100,180]);}},1000);});
$("#timer-reset").addEventListener("click",()=>{clearInterval(timerInterval);timerInterval=null;timerRemaining=timerSeconds;$("#timer-start").textContent="Iniciar";updateTimer();});
renderDays();renderSession();setupLogOptions();renderLogs();renderStats();updateTimer();
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}

function person(containerId, size, torsoangle, legleftangle, legrightangle, armleftangle, armrightangle) {
    const container = document.getElementById(containerId);
    // 清空原来的容器
    container.innerHTML = "";
    // 定义火柴人头部head
    const head = document.createElement("div");
    head.className = "head";
    head.style.height = `${size}px`;
    head.style.width = `${size}px`;
    head.style.border = "5px solid #fff";
    head.style.borderRadius = "50%";
    head.style.position = "absolute";
    const a1 = size / 2 + Math.cos(Math.PI / 3) * size / 2;
    head.style.top = `${-a1}px`;
    const a2 = size / 2 + Math.cos(Math.PI / 6) * size / 2;
    head.style.left = `${-a2}px`;
    container.appendChild(head);
    console.log(head);//
    // 定义火柴人躯干torso
    const torso = document.createElement("div");
    torso.className = "torso";
    torso.style.height = `${1.4 * size}px`;
    torso.style.borderLeft = "5px solid #fff";
    torso.style.position = "absolute";
    torso.style.top = "10px";
    torso.style.transformOrigin = "50% 0% 0px";
    const n1 = torsoangle / 180 * Math.PI;
    torso.style.transform = `rotate3d(0,0,1,${torsoangle}deg)`;
    container.appendChild(torso);
    console.log(torso);//
    // 定义火柴人左腿leg1
    const leg1 = document.createElement("div");
    leg1.className = "leg1";
    const c = 1.4 * size;
    leg1.style.height = `${c * 2 * 5 / 4}px`;
    leg1.style.borderLeft = "5px solid #fff";
    leg1.style.position = "absolute";
    const b1 = Math.abs(Math.cos(n1)) * 1.4 * size + 10;
    leg1.style.top = `${b1}px`;
    const b2 = Math.sin(n1) * 1.4 * size;
    leg1.style.left = `${-b2}px`;
    leg1.style.transformOrigin = "50% 0% 0px";
    leg1.style.transform = `rotate3d(0,0,1,${legleftangle}deg)`;
    container.appendChild(leg1);
    console.log(leg1);//
    // 定义火柴人右腿leg2
    const leg2 = document.createElement("div");
    leg2.className = "leg2";
    leg2.style.height = `${c * 2 * 5 / 4}px`;
    leg2.style.borderLeft = "5px solid #fff";
    leg2.style.position = "absolute";
    leg2.style.top = `${b1}px`;
    leg2.style.left = `${-b2}px`;
    leg2.style.transformOrigin = "50% 0% 0px";
    leg2.style.transform = `rotate3d(0,0,1,${-legrightangle}deg)`;
    container.appendChild(leg2);
    console.log(leg2);//
    // 定义火柴人左臂arm1
    const arm1 = document.createElement("div");
    arm1.className = "arm1";
    arm1.style.height = `${5 / 4 * c}px`;
    arm1.style.borderLeft = "5px solid #fff";
    arm1.style.position = "absolute";
    arm1.style.top = "10px";
    arm1.style.transformOrigin = "50% 0% 0px";
    arm1.style.transform = `rotate3d(0,0,1,${armleftangle}deg)`;
    container.appendChild(arm1);
    console.log(arm1);
    // 定义火柴人右臂arm2
    const arm2 = document.createElement("div");
    arm2.className = "arm2";
    arm2.style.height = `${5 / 4 * c}px`;
    arm2.style.borderLeft = "5px solid #fff";
    arm2.style.position = "absolute";
    arm2.style.top = "10px";
    arm2.style.transformOrigin = "50% 0% 0px";
    arm2.style.transform = `rotate3d(0,0,1,${-armrightangle}deg)`;
    container.appendChild(arm2);
    console.log(arm2);


}
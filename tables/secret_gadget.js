function timeTravelMachine() {
    const item = document.getElementById('time_machine');
    const img = document.getElementById('gadget_8_img');
    item.innerHTML = '<a href="../contents/time_leap_machine.html" target=_blank>Машина для прыжков во времени</a>';
    img.innerHTML = '<img class="rounded" src="../images/time_leap_machine.png" title="Машина для прыжков во времени" width="200">';
}

const change_gadget = document.getElementById("time_machine");
change_gadget.addEventListener("click", timeTravelMachine)
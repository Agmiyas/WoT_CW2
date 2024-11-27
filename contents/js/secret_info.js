function secretOfCERN() {
    const item = document.getElementById('new');
    item.innerHTML = 'Для реализации этой цели они работают над созданием машины времени, основным компонентом которой \
            является Большой Адронный Коллайдер. Сотрудниками Лаборатории были найдены доказательства бесчеловечных \
            экспериментов ЦЕРН по созданию машины времени.<a target="_blank" href = "../images/jellyman_report.png"><img src="../images/top_secret.png" title ="Тайны CERN" width="30"></a> ';
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click", secretOfCERN)
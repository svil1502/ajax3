$(document).ready(function () {
    corporateDate();

});

function corporateDate() {
    $.ajax({
        url: "new.xml",
        dataType: "xml",
        success: function (data) {
            console.log(data);
            $("ul").children().remove();
            $(data).find("employee").each(function() {
                var info='<li>Name: '+$(this).find("name").text()+'</li><li>Age: '+$(this).find("age").text()+'</li><li>company: '+$(this).find("company").text()+'</li>';

              $("ul").append(info);
            });
        }
    });
}

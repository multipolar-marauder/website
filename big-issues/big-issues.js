var phone = window.matchMedia("(max-width: 350px)");

var ipad = window.matchMedia("(max-width: 769px)");

var mobile = window.matchMedia("(max-width: 570px)");

function big_issue(issue) {
  var issue_title = issue.name;
  var desc_title = "History and Debate of " + issue.name;
  var desc = issue.desc;
  var result_title = "MM Members";
  var result_desc = issue.name;
  var percent1 = issue.pro_percent + "%";
  var percent2 = issue.con_percent + "%";
  var pro = "PRO";
  var con = "CON";

  document.getElementById("issue_title").innerHTML = issue_title;
  document.getElementById("issue_desc_title").innerHTML = desc_title;
  document.getElementById("issue_desc").innerHTML = desc;
  document.getElementById("result-title").innerHTML = result_title;
  document.getElementById("result-desc").innerHTML = result_desc;
  document.getElementById("vote-number-pro").innerHTML = percent1;
  document.getElementById("vote-number-con").innerHTML = percent2;
  document.getElementById("vote-types-pro").innerHTML = pro;
  document.getElementById("vote-types-con").innerHTML = con;

  document.getElementById("box-pro").style.paddingRight = padding_formula_pro(
    issue.pro_percent
  );
  document.getElementById("box-pro").style.paddingLeft = padding_formula_pro(
    issue.pro_percent
  );

  document.getElementById("box-con").style.paddingRight = padding_formula_con(
    issue.con_percent
  );
  document.getElementById("box-con").style.paddingLeft = padding_formula_con(
    issue.con_percent
  );
}

function padding_formula_pro(pro) {
  var max = 75;
  var paddingleft = (max * (pro / 100)) / 2;
  var final = paddingleft.toString();
  console.log(final);
  return final + "%";
}

function padding_formula_con(con) {
  var max = 75;
  var paddingleft = (max * (con / 100)) / 2;
  var final = paddingleft.toString();
  console.log(final);
  return final + "%";
}

function display_issue() {
  for (let i = 0; i < 50; i++) {
    document.getElementById("issue" + i).innerHTML = sorted_issues[i][0];
  }
}

function display_percent() {
  for (let i = 0; i < 50; i++) {
    if (sorted_issues[i][1] >= sorted_issues[i][2]) {
      document.getElementById("pro_or_con" + i).innerHTML =
        " " + sorted_issues[i][1] + "%" + " pro";
      document.getElementById("pro_or_con" + i).style.backgroundColor =
        "#66cc00";
      document.getElementById("pro_or_con" + i).style.paddingTop = "2.5%";
      document.getElementById("pro_or_con" + i).style.paddingBottom = "3%";
      document.getElementById("pro_or_con" + i).style.paddingLeft = "7%";
      document.getElementById("pro_or_con" + i).style.paddingRight = "7%";
      document.getElementById("pro_or_con" + i).style.textTransform =
        "uppercase";
      document.getElementById("pro_or_con" + i).style.borderRadius = "0px";

      if (phone.matches) {
        document.getElementById("pro_or_con" + i).style.borderRadius = "0px";
      }

      if (ipad.matches) {
        document.getElementById("pro_or_con" + i).style.borderRadius = "0px";
        document.getElementById("pro_or_con" + i).style.paddingRight = "7%";
        document.getElementById("pro_or_con" + i).style.paddingLeft = "7%";
      }
      if (mobile.matches) {
        document.getElementById("pro_or_con" + i).innerHTML =
          " " + sorted_issues[i][1] + "%" + " pro";
        document.getElementById("pro_or_con" + i).style.backgroundColor =
          "#66cc00";
        document.getElementById("pro_or_con" + i).style.paddingTop = "2.5%";
        document.getElementById("pro_or_con" + i).style.paddingBottom = "3%";
        document.getElementById("pro_or_con" + i).style.paddingLeft = "7%";
        document.getElementById("pro_or_con" + i).style.paddingRight = "7%";
        document.getElementById("pro_or_con" + i).style.textTransform =
          "uppercase";
        document.getElementById("pro_or_con" + i).style.borderRadius = "0px";
      }
    } else {
      document.getElementById("pro_or_con" + i).innerHTML =
        sorted_issues[i][2] + "%" + " con";
      document.getElementById("pro_or_con" + i).style.backgroundColor =
        "orange";
      document.getElementById("pro_or_con" + i).style.paddingTop = "2.5%";
      document.getElementById("pro_or_con" + i).style.paddingBottom = "3%";
      document.getElementById("pro_or_con" + i).style.paddingLeft = "6%";
      document.getElementById("pro_or_con" + i).style.paddingRight = "6%";
      document.getElementById("pro_or_con" + i).style.textTransform =
        "uppercase";
      document.getElementById("pro_or_con" + i).style.borderRadius = "0px";

      if (phone.matches) {
        document.getElementById("pro_or_con" + i).style.borderRadius = "0px";
        document.getElementById("pro_or_con" + i).style.paddingRight = "4%";
        document.getElementById("pro_or_con" + i).style.paddingLeft = "8%";
      }

      if (ipad.matches) {
        document.getElementById("pro_or_con" + i).style.borderRadius = "0px";
        document.getElementById("pro_or_con" + i).style.paddingRight = "4%";
        document.getElementById("pro_or_con" + i).style.paddingLeft = "8%";
      }

      if (mobile.matches) {
        document.getElementById("pro_or_con" + i).innerHTML =
          sorted_issues[i][2] + "%" + " con";
        document.getElementById("pro_or_con" + i).style.backgroundColor =
          "orange";
        document.getElementById("pro_or_con" + i).style.paddingTop = "2.5%";
        document.getElementById("pro_or_con" + i).style.paddingBottom = "3%";
        document.getElementById("pro_or_con" + i).style.paddingLeft = "6%";
        document.getElementById("pro_or_con" + i).style.paddingRight = "6%";
        document.getElementById("pro_or_con" + i).style.textTransform =
          "uppercase";
        document.getElementById("pro_or_con" + i).style.borderRadius = "0px";
      }
    }
  }
}

function top_pro(array) {
  let max = 0;
  let max_issue = "Abortion";
  for (let i = 0; i < array.length; i++) {
    if (array[i][1] >= max) {
      max = array[i][1];
      max_issue = array[i][0];
    }
  }
  document.getElementById("index-issue1").innerHTML = max_issue;
  document.getElementById("pro").innerHTML = max + "% " + "pro";
}

function top_con(array) {
  let max = 0;
  let max_issue = "Abortion";
  for (let i = 0; i < array.length; i++) {
    if (array[i][2] >= max) {
      max = array[i][2];
      max_issue = array[i][0];
    }
  }
  document.getElementById("index-issue2").innerHTML = max_issue;
  document.getElementById("con").innerHTML = max + "% " + "con";
}

function middle(array) {
  let middle_num = 50;
  let smallest = 100;
  let smallest_result;
  let final_j;
  let middle_issue = "Abortion";
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < 3; j++) {
      if (array[i][j] == middle_num) {
        middle_issue = array[i][0];
        document.getElementById("index-issue3").innerHTML = middle_issue;
        document.getElementById("middle").innerHTML = middle_num + "% " + "pro";
        document.getElementById("middle").style.backgroundColor = "#66cc00";
        document.getElementById("middle").style.paddingTop = "2.5%";
        document.getElementById("middle").style.paddingBottom = "3.5%";
        document.getElementById("middle").style.paddingLeft = "7%";
        document.getElementById("middle").style.paddingRight = "7%";
        document.getElementById("middle").style.textTransform = "uppercase";
        document.getElementById("middle").style.borderRadius = "0px";
        if (ipad.matches) {
          document.getElementById("middle").style.borderRadius = "0px";
          document.getElementById("middle").style.paddingRight = "4%";
          document.getElementById("middle").style.paddingLeft = "8%";
        }
        if (mobile.matches) {
          document.getElementById("middle").style.borderRadius = "0px";
          document.getElementById("middle").style.paddingRight = "7%";
          document.getElementById("middle").style.paddingLeft = "7%";
        }
        return middle;
      } else {
        if (smallest >= Math.abs(array[i][j] - 50)) {
          smallest = Math.abs(array[i][j] - 50);
          smallest_issue = array[i][j];
          smallest_result = array[i][0];
          if (array[i][2] > array[i][1]) {
            smallest_issue = array[i][2];
            final_j = 2;
          } else {
            final_j = 1;
            smallest_issue = array[i][1];
          }
        }
      }
    }
  }

  document.getElementById("index-issue3").innerHTML = smallest_result;

  if (final_j == 1) {
    document.getElementById("middle").innerHTML = smallest_issue + "% " + "pro";
    document.getElementById("middle").style.backgroundColor = "#66cc00";
    document.getElementById("middle").style.paddingTop = "2.5%";
    document.getElementById("middle").style.paddingBottom = "3.5%";
    document.getElementById("middle").style.paddingLeft = "7%";
    document.getElementById("middle").style.paddingRight = "7%";
    document.getElementById("middle").style.textTransform = "uppercase";
    document.getElementById("middle").style.borderRadius = "0px";
    if (ipad.matches) {
      document.getElementById("middle").style.borderRadius = "0px";
      document.getElementById("middle").style.paddingRight = "4%";
      document.getElementById("middle").style.paddingLeft = "8%";
    }
    if (mobile.matches) {
      document.getElementById("middle").style.borderRadius = "0px";
      document.getElementById("middle").style.paddingRight = "7%";
      document.getElementById("middle").style.paddingLeft = "7%";
    }
  }
  if (final_j == 2) {
    document.getElementById("middle").innerHTML = smallest_issue + "% " + "con";
    document.getElementById("middle").style.backgroundColor = "orange";
    document.getElementById("middle").style.paddingTop = "2.5%";
    document.getElementById("middle").style.paddingBottom = "3.5%";
    document.getElementById("middle").style.paddingLeft = "6%";
    document.getElementById("middle").style.paddingRight = "6%";
    document.getElementById("middle").style.textTransform = "uppercase";
    document.getElementById("middle").style.borderRadius = "0px";

    if (ipad.matches) {
      document.getElementById("middle").style.borderRadius = "0px";
      document.getElementById("middle").style.paddingRight = "4%";
      document.getElementById("middle").style.paddingLeft = "8%";
    }

    if (mobile.matches) {
      document.getElementById("middle").style.borderRadius = "0px";
      document.getElementById("middle").style.paddingRight = "6%";
      document.getElementById("middle").style.paddingLeft = "6%";
    }
  }
}

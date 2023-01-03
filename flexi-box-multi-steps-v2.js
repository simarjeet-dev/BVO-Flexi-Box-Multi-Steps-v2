$(document).ready(function () {
  // Show/Hide header tabs
  $(".tab").click(function () {
    $(".tab-content").removeClass("active-tab-content");
    $(".tab-content[data-id='" + $(this).attr("data-id") + "']").addClass(
      "active-tab-content"
    );
    $(".tab").removeClass("active-tab");
    $(this).parent().find(".tab").addClass("active-tab");
    $("#searchbar").val("").trigger("keyup"); //clear search
    //scroll up to top on switching tabs
    $('html, body').animate({
      scrollTop: 0
    }, {
      duration: 1000,
      easing: 'swing'
    });
    //scroll up to top on switching tabs ends here
  });

  // Sticky header on-scroll
  $(window).scroll(function (event) {
    var height = $(window).height();
    var scroll = $(window).scrollTop();
    if (scroll > height) {
      $(".sticky-header").addClass("show");
    } else {
      $(".sticky-header").removeClass("show");
    }
  });

  // Passing line-items on clicking submit button
  $("#submit-btn").click(function () {
    let items = 1;
    $("#flexi-box-form")
      .find(":input:checked")
      .each(function () {
        if ($(this).val() == "No") {
          $(this).prop("disabled", true);
        } else {
          $(this).attr("name", "properties[_ITEM" + items + "]");
          items++;
        }
      });
    $(this).submit();
  });

  const totalTabs = $(".tab").length;
  let selectedProducts = {};
  let checkboxes = $("input[type='checkbox']");

  checkboxes.click(function () {
    let currProduct = $(this).attr("data-id");
    let currProductDataId = $(this).attr("data-id-products");
    let nextTab = null;
    let action = true; // Add or Remove item
    let currTabId = Number(currProductDataId.split("_")[1]);
    let selectionLimit = $('.tab-content[data-id="tab' + currTabId + '"]').attr(
      "data-product-limit"
    );
    $(this).parents(".product-info").find(".added_to_cart").addClass("_hidden");
    $(this)
      .parents(".product-info")
      .find(".product_counter")
      .addClass("_hidden");
    if ($(this).is(":checked")) {
      $(this)
        .parents(".product-info")
        .find(".added_to_cart")
        .removeClass("_hidden");
      $(this)
        .parents(".product-info")
        .find(".product_counter")
        .removeClass("_hidden");
      let productTitle = $(this).val().split(" SKU:")[0];
      $(".Message_Bar").removeClass("is-hidden");
      $(".Message_Bar p span").text(productTitle);
      setTimeout(function () {
        $(".Message_Bar").addClass("is-hidden");
        $(".Message_Bar p span").text("");
      }, 2500);
    }
    let n = $("[data-id=tab" + currTabId + "] input:checked").length;
    //console.log(currTabId, selectionLimit);
    //console.log(n);
    if (n == selectionLimit) {
      $("[data-id=tab" + currTabId + "] input:not(:checked)").prop(
        "disabled",
        true
      );
    } else {
      action = false;
      $("[data-id=tab" + currTabId + "] input:not(:checked)").prop(
        "disabled",
        false
      );
    }

    //Show/Hide bubble counts and tick on completing selection limit
    if(n == selectionLimit) {
      $("#checkbox_count_" + currProductDataId).css("display", "inline-block");
      $("#checkbox_count_" + currProductDataId).html(`<i class="fa-solid fa-check"></i>`);
    }
    else if (n > 0) {
      $("#checkbox_count_" + currProductDataId).css("display", "inline-block");
      $("#checkbox_count_" + currProductDataId).html(n);
    }
    else {
      $("#checkbox_count_" + currProductDataId).css("display", "none");
    }

    // Switching tabs after adding mandatory items
    if (action == true) {
      let nextTab = `tab${currTabId + 1}`;
      $(`.tab[data-id='${nextTab}'`).click();
      $("#searchbar").val("").trigger("keyup"); //clear search
      //scroll up to top on switching tabs
      $('html, body').animate({
        scrollTop: 0
      }, {
        duration: 1000,
        easing: 'swing'
      });
      //scroll up to top on switching tabs ends here
    }

    // Enabling submit btn if all mandatory products are selected
    if (
      $("#flexi-box-form input[type=checkbox]:checked").length ==
      totalproductSelection
    ) {
      $("#submit-btn").css("display", "inline-block");
    } else {
      $("#submit-btn").css("display", "none");
    }
  });

  // Disable inspect element Right click and F12 key
  $(document).bind("contextmenu",function(e) {
   e.preventDefault();
  });
  $(document).keydown(function(e){
      if(e.which === 123){
         return false;
      }
  });

  // JS code for custom search bar
  $("#searchbar").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#collection-list li").filter(function () {
      $(this).toggle($(this).find("a").text().toLowerCase().indexOf(value) > -1);
    });
  });
  // Clear search on pressing clear button
  $('.search-clear').click(function(e){
    $("#searchbar").val("").trigger("keyup");
  });
}); //document.ready ends here

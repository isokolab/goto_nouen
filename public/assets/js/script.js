// ドロワーメニュー
// ハンバーガーメニュー
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

// 製品一覧スライダー

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: "24px", // スライド間の余白
  // freeMode: true, // 前後のスライドで止まらずにスライド
  grabCursor: true, // カーソルを置いたときに指のカーソルを表示
  centeredSlides: true, // アクティブなスライドを中央にする
  loopAdditionalSlides: 2,
  slidesPerView: "auto",
  // slidesPerView: 4.5,
  // speed: 1000,

  // autoplay: {
  //   delay: 0, // 途切れなくループ
  // },

  autoplay: {
    delay: 3000, // 3秒ごとにスライド
  },

  breakpoints: {
    0: {
      spaceBetween: 15,
    },

    430: {
      spaceBetween: 24,
    },
  },
});

// const mySwiper = new Swiper(".swiper", {
//   loop: true,
//   loopAdditionalSlides: 2,
//   speed: 1000,
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },
//   grabCursor: true,
//   centeredSlides: true,
//   breakpoints: {
//     0: {
//       slidesPerView: "1.5",
//       spaceBetween: 24,
//     },
//     600: {
//       slidesPerView: "auto",
//       spaceBetween: 24,
//     },
//   },
// });

// FAQアコーディオン

jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
  } else {
    jQuery(this).parent().addClass("is-open");
  }
});

let accordionDetails = ".js-accordion";
let accordionSummary = ".js-summary";
let accordionContent = ".js-content";
let speed = 200;

$(accordionSummary).each(function () {
  $(this).on("click", function (event) {
    // デフォルトの挙動を無効化
    event.preventDefault();
    if ($(this).parent($(accordionDetails)).attr("open")) {
      // アコーディオンを閉じるときの処理
      $(this)
        .nextAll($(accordionContent))
        .slideUp(speed, function () {
          // アニメーションの完了後にopen属性を取り除く
          $(this).parent($(accordionDetails)).removeAttr("open");
          // display:none;を消して、ページ内検索にヒットするようにする
          $(this).show();
        });
    } else {
      // アコーディオンを開くときの処理
      // open属性を付ける
      $(this).parent($(accordionDetails)).attr("open", "true");
      // いったんdisplay:none;してからslideDownで開く
      $(this).nextAll($(accordionContent)).hide().slideDown(speed);
    }
  });
});

// ページ内スクロール
// jQuery(function () {
//   // #を含むa要素をクリックした時
//   jQuery('a[href*="#"]').click(function (e) {
//     // スクロール先を指定（href="#"ならばhtml、そうでなければアンカーを代入）
//     var target = jQuery(this.hash === "" ? "html" : this.hash);
//     // スクロール先の要素が存在する時
//     if (target.length) {
//       // デフォルトの動作をキャンセル
//       e.preventDefault();
//       // ヘッダーの高さを取得
//       var headerHeight = jQuery("header").outerHeight();
//       // スクロール先の位置を計算（ヘッダーと任意の高さを引く）
//       var position = target.offset().top - headerHeight - 0;
//       // スクロール実行（500ミリ秒、swingを指定）
//       jQuery("html, body").animate({ scrollTop: position }, 500, "swing");

//       // ページトップ以外の時
//       if (!target.is("html")) {
//         // URLにハッシュを含める
//         history.pushState(null, "", this.hash);
//       }
//     }
//   });
// });

$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('.s_01 a[href^="#"]').click(function () {
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度
    // var buffer = 100;
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? "html" : href);
    // 移動先を調整
    var position = target.offset().top + adjust;
    // スムーススクロール
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

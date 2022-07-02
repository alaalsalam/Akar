window._wpemojiSettings = {
  baseUrl: "https://s.w.org/images/core/emoji/13.1.0/72x72/",
  ext: ".png",
  svgUrl: "https://s.w.org/images/core/emoji/13.1.0/svg/",
  svgExt: ".svg",
  source: {
    concatemoji:
      "https://exceed-erp.com/wp-includes/js/wp-emoji-release.min.js",
  },
};
/*! This file is auto-generated */
!(function (e, a, t) {
  var n,
    r,
    o,
    i = a.createElement("canvas"),
    p = i.getContext && i.getContext("2d");
  function s(e, t) {
    var a = String.fromCharCode;
    p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, e), 0, 0);
    e = i.toDataURL();
    return (
      p.clearRect(0, 0, i.width, i.height),
      p.fillText(a.apply(this, t), 0, 0),
      e === i.toDataURL()
    );
  }
  function c(e) {
    var t = a.createElement("script");
    (t.src = e),
      (t.defer = t.type = "text/javascript"),
      a.getElementsByTagName("head")[0].appendChild(t);
  }
  for (
    o = Array("flag", "emoji"),
      t.supports = { everything: !0, everythingExceptFlag: !0 },
      r = 0;
    r < o.length;
    r++
  )
    (t.supports[o[r]] = (function (e) {
      if (!p || !p.fillText) return !1;
      switch (((p.textBaseline = "top"), (p.font = "600 32px Arial"), e)) {
        case "flag":
          return s(
            [127987, 65039, 8205, 9895, 65039],
            [127987, 65039, 8203, 9895, 65039]
          )
            ? !1
            : !s(
                [55356, 56826, 55356, 56819],
                [55356, 56826, 8203, 55356, 56819]
              ) &&
                !s(
                  [
                    55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421,
                    56128, 56430, 56128, 56423, 56128, 56447,
                  ],
                  [
                    55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203,
                    56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203,
                    56128, 56447,
                  ]
                );
        case "emoji":
          return !s(
            [10084, 65039, 8205, 55357, 56613],
            [10084, 65039, 8203, 55357, 56613]
          );
      }
      return !1;
    })(o[r])),
      (t.supports.everything = t.supports.everything && t.supports[o[r]]),
      "flag" !== o[r] &&
        (t.supports.everythingExceptFlag =
          t.supports.everythingExceptFlag && t.supports[o[r]]);
  (t.supports.everythingExceptFlag =
    t.supports.everythingExceptFlag && !t.supports.flag),
    (t.DOMReady = !1),
    (t.readyCallback = function () {
      t.DOMReady = !0;
    }),
    t.supports.everything ||
      ((n = function () {
        t.readyCallback();
      }),
      a.addEventListener
        ? (a.addEventListener("DOMContentLoaded", n, !1),
          e.addEventListener("load", n, !1))
        : (e.attachEvent("onload", n),
          a.attachEvent("onreadystatechange", function () {
            "complete" === a.readyState && t.readyCallback();
          })),
      (n = t.source || {}).concatemoji
        ? c(n.concatemoji)
        : n.wpemoji && n.twemoji && (c(n.twemoji), c(n.wpemoji)));
})(window, document, window._wpemojiSettings);
var sgr_main = { sgr_site_key: "6LcU3_wUAAAAAL8AZVsFZasd7zPJnCJ4Zhp8PkHo" };
function sgr_2() {
  console.log("SGR_2 loaded!");
  let recaptcha = document.getElementsByClassName("sgr-main");
  for (let i = 0; i < recaptcha.length; i++) {
    grecaptcha.render(recaptcha.item(i), { sitekey: sgr_main.sgr_site_key });
  }
}
function sgr_3() {
  console.log("SGR_3 loaded!");
  let actionName = window.location.pathname;
  actionName = actionName.replace(/[^a-zA-Z/]/g, "_");
  grecaptcha
    .execute(sgr_main.sgr_site_key, { action: "sgr_" + actionName })
    .then(function (token) {
      let recaptcha = document.getElementsByClassName("sgr-main");
      for (let i = 0; i < recaptcha.length; i++) {
        recaptcha.item(i).value = token;
      }
    });
  setTimeout(sgr_3, 1000 * 60);
}
document.addEventListener("DOMContentLoaded", function (event) {
  let sgr_version = document.getElementById("sgr_version");
  if (sgr_version) {
    console.log("SGR admin loaded!");
    sgr_version.addEventListener("click", removeKeys);
    function removeKeys() {
      let sgr_site_key = document.getElementById("sgr_site_key");
      let sgr_secret_key = document.getElementById("sgr_secret_key");
      if (sgr_site_key.value === sgr_main.sgr_site_key) {
        sgr_site_key.value = "";
        sgr_secret_key.value = "";
      }
    }
  }
});
var MonsterInsights = function () {
    var e = [],
      i = "",
      r = !1;
    this.setLastClicked = function (t, n, i) {
      t = typeof t !== "undefined" ? t : [];
      n = typeof n !== "undefined" ? n : [];
      i = typeof i !== "undefined" ? i : !1;
      e.valuesArray = t;
      e.fieldsArray = n;
    };
    this.getLastClicked = function () {
      return e;
    };
    this.setInternalAsOutboundCategory = function (e) {
      i = e;
    };
    this.getInternalAsOutboundCategory = function () {
      return i;
    };
    this.sendEvent = function (e, t, n) {
      x(e, t, n, []);
    };
    function d() {
      if (window.monsterinsights_debug_mode) {
        return !0;
      } else {
        return !1;
      }
    }
    function c(e, t, n) {
      var l = {};
      for (var i in e) {
        if (!e.hasOwnProperty(i)) {
          continue;
        }
        if (t && t.indexOf(i) === -1) {
          continue;
        }
        if (n && n.indexOf(i) > -1) {
          continue;
        }
        l[i] = e[i];
      }
      return l;
    }
    function b(e, t, n) {
      if (!monsterinsights_frontend.v4_id || e !== "event") {
        return;
      }
      var i = n.event_category || "",
        r = ["event_name", "event_category", "event_label", "value"],
        l = c(n, null, r);
      l.action = t;
      var a = { "outbound-link": "click", download: "file_download" };
      __gtagTracker(e, a[i] || i.replace("-", "_"), l);
    }
    function y(e, t, n) {
      if (!monsterinsights_frontend.ua) {
        return;
      }
      var l = ["event_category", "event_label", "value"],
        i = c(n, l);
      i.send_to = monsterinsights_frontend.ua;
      __gtagTracker(e, t, i);
    }
    function l(t, i, l, a) {
      t = typeof t !== "undefined" ? t : "event";
      i = typeof i !== "undefined" ? i : "";
      a = typeof a !== "undefined" ? a : [];
      l = typeof l !== "undefined" ? l : {};
      y(t, i, l);
      b(t, i, l);
      e.valuesArray = a;
      e.fieldsArray = l;
      e.fieldsArray.event_action = i;
      e.tracked = !0;
      n("Tracked: " + a.type);
      n(e);
    }
    function x(t, i, l, a) {
      t = typeof t !== "undefined" ? t : "event";
      i = typeof i !== "undefined" ? i : "";
      a = typeof a !== "undefined" ? a : [];
      l = typeof l !== "undefined" ? l : {};
      __gtagTracker(t, i, l);
      e.valuesArray = a;
      e.fieldsArray = l;
      e.fieldsArray.event_action = i;
      e.tracked = !0;
      n("Tracked: " + a.type);
      n(e);
    }
    function t(t) {
      t = typeof t !== "undefined" ? t : [];
      e.valuesArray = t;
      e.fieldsArray = [];
      e.tracked = !1;
      n("Not Tracked: " + t.exit);
      n(e);
    }
    function n(e) {
      if (d()) {
        console.dir(e);
      }
    }
    function o(e) {
      return e.replace(/^\s+|\s+$/gm, "");
    }
    function u() {
      var n = 0,
        e = document.domain,
        i = e.split("."),
        t = "_gd" + new Date().getTime();
      while (n < i.length - 1 && document.cookie.indexOf(t + "=" + t) == -1) {
        e = i.slice(-1 - ++n).join(".");
        document.cookie = t + "=" + t + ";domain=" + e + ";";
      }
      document.cookie =
        t + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + e + ";";
      return e;
    }
    function h(e) {
      e = e.toString();
      e = e.substring(0, e.indexOf("#") == -1 ? e.length : e.indexOf("#"));
      e = e.substring(0, e.indexOf("?") == -1 ? e.length : e.indexOf("?"));
      e = e.substring(e.lastIndexOf("/") + 1, e.length);
      if (e.length > 0 && e.indexOf(".") !== -1) {
        e = e.substring(e.lastIndexOf(".") + 1);
        return e;
      } else {
        return "";
      }
    }
    function w(e) {
      return (
        e.which == 1 ||
        e.which == 2 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      );
    }
    function g() {
      var e = [];
      if (typeof monsterinsights_frontend.download_extensions == "string") {
        e = monsterinsights_frontend.download_extensions.split(",");
      }
      return e;
    }
    function v() {
      var e = [];
      if (typeof monsterinsights_frontend.inbound_paths == "string") {
        e = JSON.parse(monsterinsights_frontend.inbound_paths);
      }
      return e;
    }
    function A(e) {
      if (e.which == 1) {
        return "event.which=1";
      } else if (e.which == 2) {
        return "event.which=2";
      } else if (e.metaKey) {
        return "metaKey";
      } else if (e.ctrlKey) {
        return "ctrlKey";
      } else if (e.shiftKey) {
        return "shiftKey";
      } else if (e.altKey) {
        return "altKey";
      } else {
        return "";
      }
    }
    function T(e) {
      var f = g(),
        l = v(),
        t = "unknown",
        d = e.href,
        m = h(e.href),
        c = u(),
        r = e.hostname,
        a = e.protocol,
        k = e.pathname;
      d = d.toString();
      var s,
        p,
        b = e.getAttribute("data-vars-ga-category");
      if (b) {
        return b;
      }
      if (d.match(/^javascript\:/i)) {
        t = "internal";
      } else if (a && a.length > 0 && (o(a) == "tel" || o(a) == "tel:")) {
        t = "tel";
      } else if (a && a.length > 0 && (o(a) == "mailto" || o(a) == "mailto:")) {
        t = "mailto";
      } else if (
        r &&
        c &&
        r.length > 0 &&
        c.length > 0 &&
        !r.endsWith("." + c) &&
        r !== c
      ) {
        t = "external";
      } else if (k && JSON.stringify(l) != "{}" && k.length > 0) {
        var y = l.length;
        for (var n = 0; n < y; n++) {
          if (
            l[n].path &&
            l[n].label &&
            l[n].path.length > 0 &&
            l[n].label.length > 0 &&
            k.startsWith(l[n].path)
          ) {
            t = "internal-as-outbound";
            i = "outbound-link-" + l[n].label;
            break;
          }
        }
      } else if (
        r &&
        window.monsterinsights_experimental_mode &&
        r.length > 0 &&
        document.domain.length > 0 &&
        r !== document.domain
      ) {
        t = "cross-hostname";
      }
      if (
        m &&
        (t === "unknown" || "external" === t) &&
        f.length > 0 &&
        m.length > 0
      ) {
        for (s = 0, p = f.length; s < p; ++s) {
          if (f[s].length > 0 && (d.endsWith(f[s]) || f[s] == m)) {
            t = "download";
            break;
          }
        }
      }
      if (t === "unknown") {
        t = "internal";
      }
      return t;
    }
    function O(e, t) {
      var n =
        e.target && !e.target.match(/^_(self|parent|top)$/i) ? e.target : !1;
      if (t.ctrlKey || t.shiftKey || t.metaKey || t.which == 2) {
        n = "_blank";
      }
      return n;
    }
    function m(e) {
      if (
        e.getAttribute("data-vars-ga-label") &&
        e.getAttribute("data-vars-ga-label").replace(/\n/gi, "")
      ) {
        return e.getAttribute("data-vars-ga-label").replace(/\n/gi, "");
      } else if (e.title && e.title.replace(/\n/gi, "")) {
        return e.title.replace(/\n/gi, "");
      } else if (e.innerText && e.innerText.replace(/\n/gi, "")) {
        return e.innerText.replace(/\n/gi, "");
      } else if (
        e.getAttribute("aria-label") &&
        e.getAttribute("aria-label").replace(/\n/gi, "")
      ) {
        return e.getAttribute("aria-label").replace(/\n/gi, "");
      } else if (e.alt && e.alt.replace(/\n/gi, "")) {
        return e.alt.replace(/\n/gi, "");
      } else if (e.textContent && e.textContent.replace(/\n/gi, "")) {
        return e.textContent.replace(/\n/gi, "");
      } else {
        return undefined;
      }
    }
    function K(e) {
      var i = e.children,
        l = 0,
        a,
        n;
      for (var t = 0; t < i.length; t++) {
        a = i[t];
        n = m(a);
        if (n) {
          return n;
        }
        if (l == 99) {
          return undefined;
        }
        l++;
      }
      return undefined;
    }
    function k(n) {
      var o = n.srcElement || n.target,
        e = [],
        k;
      e.el = o;
      e.click_type = A(n);
      if ("undefined" === typeof __gtagTracker || !w(n)) {
        e.exit = "loaded";
        t(e);
        return;
      }
      while (
        o &&
        (typeof o.tagName == "undefined" ||
          o.tagName.toLowerCase() != "a" ||
          !o.href)
      ) {
        o = o.parentNode;
      }
      if (o && o.href && !o.hasAttribute("xlink:href")) {
        var c = o.href,
          M = h(o.href),
          S = g(),
          D = v(),
          L = monsterinsights_frontend.home_url,
          N = u(),
          a = T(o),
          x = O(o, n),
          b = o.getAttribute("data-vars-ga-action"),
          f = o.getAttribute("data-vars-ga-label");
        e.el = o;
        e.el_href = o.href;
        e.el_protocol = o.protocol;
        e.el_hostname = o.hostname;
        e.el_port = o.port;
        e.el_pathname = o.pathname;
        e.el_search = o.search;
        e.el_hash = o.hash;
        e.el_host = o.host;
        e.el_classes = o.getAttribute("class");
        e.el_id = o.id;
        e.debug_mode = d();
        e.download_extensions = S;
        e.inbound_paths = D;
        e.home_url = L;
        e.link = c;
        e.extension = M;
        e.type = a;
        e.target = x;
        e.title = m(o);
        if (!e.label && !e.title) {
          e.title = K(o);
        }
        if (a !== "internal" && a !== "javascript") {
          var y = !1,
            p = function () {
              if (y) {
                return;
              }
              s();
              y = !0;
              window.location.href = c;
            },
            E = function () {
              e.exit = "external";
              t(e);
            },
            I = function () {
              e.exit = "internal-as-outbound";
              t(e);
            },
            C = function () {
              e.exit = "cross-hostname";
              t(e);
            };
          if (x || a == "mailto" || a == "tel") {
            if (a == "download") {
              k = {
                event_category: "download",
                event_label: f || e.title,
                file_extension: e.extension,
                file_name: e.link.replace(/^.*\//g, ""),
                link_text: f || e.title,
                link_url: c,
                link_domain: e.el_hostname,
                link_classes: e.el_classes,
                link_id: e.el_id,
              };
            } else if (a == "tel") {
              k = {
                event_category: "tel",
                event_label: f || e.title.replace("tel:", ""),
                tel_number: c.replace("tel:", ""),
                link_text: f || e.title,
                link_url: c,
                link_classes: e.el_classes,
                link_id: e.el_id,
              };
            } else if (a == "mailto") {
              k = {
                event_category: "mailto",
                event_label: f || e.title.replace("mailto:", ""),
                email_address: c.replace("mailto:", ""),
                link_text: f || e.title.replace("mailto:", ""),
                link_url: c,
                link_classes: e.el_classes,
                link_id: e.el_id,
              };
            } else if (a == "internal-as-outbound") {
              k = {
                event_category: i,
                event_label: f || e.title,
                event_name: "click",
                is_affiliate_link: !0,
                affiliate_label: i.replace("outbound-link-", ""),
                link_text: f || e.title,
                link_url: c,
                link_domain: e.el_hostname,
                link_classes: e.el_classes,
                link_id: e.el_id,
                outbound: !0,
              };
            } else if (a == "external") {
              k = {
                event_category: "outbound-link",
                event_label: f || e.title,
                is_affiliate_link: !1,
                link_text: f || e.title,
                link_url: c,
                link_domain: e.el_hostname,
                link_classes: e.el_classes,
                link_id: e.el_id,
                outbound: !0,
              };
            } else if (a == "cross-hostname") {
              k = {
                event_category: "cross-hostname",
                event_label: f || e.title,
                link_text: f || e.title,
                link_url: c,
                link_domain: e.el_hostname,
                link_classes: e.el_classes,
                link_id: e.el_id,
              };
            }
            if (k) {
              l("event", b || c, k, e);
            } else {
              if (a && a != "internal") {
                k = {
                  event_category: a,
                  event_label: f || e.title,
                  link_text: f || e.title,
                  link_url: c,
                  link_domain: e.el_hostname,
                  link_classes: e.el_classes,
                  link_id: e.el_id,
                };
                l("event", b || c, k, e);
              } else {
                e.exit = "type";
                t(e);
              }
            }
          } else {
            if (
              a != "cross-hostname" &&
              a != "external" &&
              a != "internal-as-outbound"
            ) {
              if (!n.defaultPrevented) {
                if (n.preventDefault) {
                  n.preventDefault();
                } else {
                  n.returnValue = !1;
                }
              }
            }
            if (a == "download") {
              k = {
                event_category: "download",
                event_label: f || e.title,
                event_callback: p,
                file_extension: e.extension,
                file_name: e.link.replace(/^.*\//g, ""),
                link_text: f || e.title,
                link_url: c,
                link_domain: e.el_hostname,
                link_classes: e.el_classes,
                link_id: e.el_id,
              };
              l("event", b || c, k, e);
            } else if (a == "internal-as-outbound") {
              r = !0;
              window.onbeforeunload = function (t) {
                if (!n.defaultPrevented) {
                  if (n.preventDefault) {
                    n.preventDefault();
                  } else {
                    n.returnValue = !1;
                  }
                }
                k = {
                  event_category: i,
                  event_label: f || e.title,
                  event_callback: p,
                  is_affiliate_link: !0,
                  affiliate_label: i.replace("outbound-link-", ""),
                  link_text: f || e.title,
                  link_url: c,
                  link_domain: e.el_hostname,
                  link_classes: e.el_classes,
                  link_id: e.el_id,
                  outbound: !0,
                };
                if (navigator.sendBeacon) {
                  k.transport = "beacon";
                }
                l("event", b || c, k, e);
                setTimeout(p, 1000);
              };
            } else if (a == "external") {
              r = !0;
              window.onbeforeunload = function (t) {
                k = {
                  event_category: "outbound-link",
                  event_label: f || e.title,
                  event_callback: p,
                  is_affiliate_link: !1,
                  link_text: f || e.title,
                  link_url: c,
                  link_domain: e.el_hostname,
                  link_classes: e.el_classes,
                  link_id: e.el_id,
                  outbound: !0,
                };
                if (navigator.sendBeacon) {
                  k.transport = "beacon";
                }
                l("event", b || c, k, e);
              };
            } else if (a == "cross-hostname") {
              r = !0;
              window.onbeforeunload = function (t) {
                if (!n.defaultPrevented) {
                  if (n.preventDefault) {
                    n.preventDefault();
                  } else {
                    n.returnValue = !1;
                  }
                }
                k = {
                  event_category: "cross-hostname",
                  event_label: f || e.title,
                  event_callback: p,
                  link_text: f || e.title,
                  link_url: c,
                  link_domain: e.el_hostname,
                  link_classes: e.el_classes,
                  link_id: e.el_id,
                };
                if (navigator.sendBeacon) {
                  k.transport = "beacon";
                }
                l("event", b || c, k, e);
                setTimeout(p, 1000);
              };
            } else {
              if (a && a !== "internal") {
                k = {
                  event_category: a,
                  event_label: f || e.title,
                  event_callback: p,
                  link_text: f || e.title,
                  link_url: c,
                  link_domain: e.el_hostname,
                  link_classes: e.el_classes,
                  link_id: e.el_id,
                };
                l("event", b || c, k, e);
              } else {
                e.exit = "type";
                t(e);
              }
            }
            if (
              a != "external" &&
              a != "cross-hostname" &&
              a != "internal-as-outbound"
            ) {
              setTimeout(p, 1000);
            } else {
              if (a == "external") {
                setTimeout(E, 1100);
              } else if (a == "cross-hostname") {
                setTimeout(C, 1100);
              } else {
                setTimeout(I, 1100);
              }
            }
            setTimeout(s, 100);
          }
        } else {
          s();
          e.exit = "internal";
          t(e);
        }
      } else {
        e.exit = "notlink";
        t(e);
      }
    }
    var f = window.location.hash;
    function p() {
      if (
        monsterinsights_frontend.hash_tracking === "true" &&
        f != window.location.hash &&
        (monsterinsights_frontend.ua || monsterinsights_frontend.v4_id)
      ) {
        f = window.location.hash;
        if (monsterinsights_frontend.ua) {
          __gtagTracker("config", monsterinsights_frontend.ua, {
            page_path: location.pathname + location.search + location.hash,
          });
        }
        if (monsterinsights_frontend.v4_id) {
          __gtagTracker("config", monsterinsights_frontend.v4_id, {
            page_path: location.pathname + location.search + location.hash,
          });
        }
        n(
          "Hash change to: " +
            location.pathname +
            location.search +
            location.hash
        );
      } else {
        n(
          "Hash change to (untracked): " +
            location.pathname +
            location.search +
            location.hash
        );
      }
    }
    function s() {
      if (r) {
        window.onbeforeunload = null;
      }
    }
    var a = window;
    if (a.addEventListener) {
      a.addEventListener(
        "load",
        function () {
          document.body.addEventListener("click", k, !1);
        },
        !1
      );
      window.addEventListener("hashchange", p, !1);
    } else {
      if (a.attachEvent) {
        a.attachEvent("onload", function () {
          document.body.attachEvent("onclick", k);
        });
        window.attachEvent("onhashchange", p);
      }
    }
    if (typeof String.prototype.endsWith !== "function") {
      String.prototype.endsWith = function (e) {
        return this.indexOf(e, this.length - e.length) !== -1;
      };
    }
    if (typeof String.prototype.startsWith !== "function") {
      String.prototype.startsWith = function (e) {
        return this.indexOf(e) === 0;
      };
    }
    if (typeof Array.prototype.lastIndexOf !== "function") {
      Array.prototype.lastIndexOf = function (e) {
        "use strict";
        if (this === void 0 || this === null) {
          throw new TypeError();
        }
        var t,
          n,
          l = Object(this),
          i = l.length >>> 0;
        if (i === 0) {
          return -1;
        }
        t = i - 1;
        if (arguments.length > 1) {
          t = Number(arguments[1]);
          if (t != t) {
            t = 0;
          } else if (t != 0 && t != 1 / 0 && t != -(1 / 0)) {
            t = (t > 0 || -1) * Math.floor(Math.abs(t));
          }
        }
        for (n = t >= 0 ? Math.min(t, i - 1) : i - Math.abs(t); n >= 0; n--) {
          if (n in l && l[n] === e) {
            return n;
          }
        }
        return -1;
      };
    }
  },
  MonsterInsightsObject = new MonsterInsights();
/*! This file is auto-generated */
!(function (n, r) {
  var t, e;
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define("underscore", r)
    : ((n = "undefined" != typeof globalThis ? globalThis : n || self),
      (t = n._),
      ((e = n._ = r()).noConflict = function () {
        return (n._ = t), e;
      }));
})(this, function () {
  var n = "1.13.1",
    r =
      ("object" == typeof self && self.self === self && self) ||
      ("object" == typeof global && global.global === global && global) ||
      Function("return this")() ||
      {},
    e = Array.prototype,
    o = Object.prototype,
    s = "undefined" != typeof Symbol ? Symbol.prototype : null,
    u = e.push,
    a = e.slice,
    p = o.toString,
    t = o.hasOwnProperty,
    i = "undefined" != typeof ArrayBuffer,
    f = "undefined" != typeof DataView,
    c = Array.isArray,
    l = Object.keys,
    h = Object.create,
    v = i && ArrayBuffer.isView,
    y = isNaN,
    d = isFinite,
    g = !{ toString: null }.propertyIsEnumerable("toString"),
    b = [
      "valueOf",
      "isPrototypeOf",
      "toString",
      "propertyIsEnumerable",
      "hasOwnProperty",
      "toLocaleString",
    ],
    m = Math.pow(2, 53) - 1;
  function j(u, i) {
    return (
      (i = null == i ? u.length - 1 : +i),
      function () {
        for (
          var n = Math.max(arguments.length - i, 0), r = Array(n), t = 0;
          t < n;
          t++
        )
          r[t] = arguments[t + i];
        switch (i) {
          case 0:
            return u.call(this, r);
          case 1:
            return u.call(this, arguments[0], r);
          case 2:
            return u.call(this, arguments[0], arguments[1], r);
        }
        for (var e = Array(i + 1), t = 0; t < i; t++) e[t] = arguments[t];
        return (e[i] = r), u.apply(this, e);
      }
    );
  }
  function _(n) {
    var r = typeof n;
    return "function" == r || ("object" == r && !!n);
  }
  function w(n) {
    return void 0 === n;
  }
  function A(n) {
    return !0 === n || !1 === n || "[object Boolean]" === p.call(n);
  }
  function x(n) {
    var r = "[object " + n + "]";
    return function (n) {
      return p.call(n) === r;
    };
  }
  var S = x("String"),
    O = x("Number"),
    M = x("Date"),
    E = x("RegExp"),
    B = x("Error"),
    N = x("Symbol"),
    I = x("ArrayBuffer"),
    T = x("Function"),
    k = r.document && r.document.childNodes,
    D = (T =
      "function" != typeof /./ &&
      "object" != typeof Int8Array &&
      "function" != typeof k
        ? function (n) {
            return "function" == typeof n || !1;
          }
        : T),
    R = x("Object"),
    F = f && R(new DataView(new ArrayBuffer(8))),
    V = "undefined" != typeof Map && R(new Map()),
    P = x("DataView");
  var q = F
      ? function (n) {
          return null != n && D(n.getInt8) && I(n.buffer);
        }
      : P,
    U = c || x("Array");
  function W(n, r) {
    return null != n && t.call(n, r);
  }
  var z = x("Arguments");
  !(function () {
    z(arguments) ||
      (z = function (n) {
        return W(n, "callee");
      });
  })();
  var L = z;
  function $(n) {
    return O(n) && y(n);
  }
  function C(n) {
    return function () {
      return n;
    };
  }
  function K(r) {
    return function (n) {
      n = r(n);
      return "number" == typeof n && 0 <= n && n <= m;
    };
  }
  function J(r) {
    return function (n) {
      return null == n ? void 0 : n[r];
    };
  }
  var G = J("byteLength"),
    H = K(G),
    Q =
      /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
  var X = i
      ? function (n) {
          return v ? v(n) && !q(n) : H(n) && Q.test(p.call(n));
        }
      : C(!1),
    Y = J("length");
  function Z(n, r) {
    r = (function (r) {
      for (var t = {}, n = r.length, e = 0; e < n; ++e) t[r[e]] = !0;
      return {
        contains: function (n) {
          return t[n];
        },
        push: function (n) {
          return (t[n] = !0), r.push(n);
        },
      };
    })(r);
    var t = b.length,
      e = n.constructor,
      u = (D(e) && e.prototype) || o,
      i = "constructor";
    for (W(n, i) && !r.contains(i) && r.push(i); t--; )
      (i = b[t]) in n && n[i] !== u[i] && !r.contains(i) && r.push(i);
  }
  function nn(n) {
    if (!_(n)) return [];
    if (l) return l(n);
    var r,
      t = [];
    for (r in n) W(n, r) && t.push(r);
    return g && Z(n, t), t;
  }
  function rn(n, r) {
    var t = nn(r),
      e = t.length;
    if (null == n) return !e;
    for (var u = Object(n), i = 0; i < e; i++) {
      var o = t[i];
      if (r[o] !== u[o] || !(o in u)) return !1;
    }
    return !0;
  }
  function tn(n) {
    return n instanceof tn
      ? n
      : this instanceof tn
      ? void (this._wrapped = n)
      : new tn(n);
  }
  function en(n) {
    return new Uint8Array(n.buffer || n, n.byteOffset || 0, G(n));
  }
  (tn.VERSION = n),
    (tn.prototype.valueOf =
      tn.prototype.toJSON =
      tn.prototype.value =
        function () {
          return this._wrapped;
        }),
    (tn.prototype.toString = function () {
      return String(this._wrapped);
    });
  var un = "[object DataView]";
  function on(n, r, t, e) {
    if (n === r) return 0 !== n || 1 / n == 1 / r;
    if (null == n || null == r) return !1;
    if (n != n) return r != r;
    var u = typeof n;
    return (
      ("function" == u || "object" == u || "object" == typeof r) &&
      (function n(r, t, e, u) {
        r instanceof tn && (r = r._wrapped);
        t instanceof tn && (t = t._wrapped);
        var i = p.call(r);
        if (i !== p.call(t)) return !1;
        if (F && "[object Object]" == i && q(r)) {
          if (!q(t)) return !1;
          i = un;
        }
        switch (i) {
          case "[object RegExp]":
          case "[object String]":
            return "" + r == "" + t;
          case "[object Number]":
            return +r != +r ? +t != +t : 0 == +r ? 1 / +r == 1 / t : +r == +t;
          case "[object Date]":
          case "[object Boolean]":
            return +r == +t;
          case "[object Symbol]":
            return s.valueOf.call(r) === s.valueOf.call(t);
          case "[object ArrayBuffer]":
          case un:
            return n(en(r), en(t), e, u);
        }
        var o = "[object Array]" === i;
        if (!o && X(r)) {
          var f = G(r);
          if (f !== G(t)) return !1;
          if (r.buffer === t.buffer && r.byteOffset === t.byteOffset) return !0;
          o = !0;
        }
        if (!o) {
          if ("object" != typeof r || "object" != typeof t) return !1;
          (i = r.constructor), (f = t.constructor);
          if (
            i !== f &&
            !(D(i) && i instanceof i && D(f) && f instanceof f) &&
            "constructor" in r &&
            "constructor" in t
          )
            return !1;
        }
        e = e || [];
        u = u || [];
        var a = e.length;
        for (; a--; ) if (e[a] === r) return u[a] === t;
        e.push(r);
        u.push(t);
        if (o) {
          if ((a = r.length) !== t.length) return !1;
          for (; a--; ) if (!on(r[a], t[a], e, u)) return !1;
        } else {
          var c,
            l = nn(r);
          if (((a = l.length), nn(t).length !== a)) return !1;
          for (; a--; )
            if (((c = l[a]), !W(t, c) || !on(r[c], t[c], e, u))) return !1;
        }
        e.pop();
        u.pop();
        return !0;
      })(n, r, t, e)
    );
  }
  function fn(n) {
    if (!_(n)) return [];
    var r,
      t = [];
    for (r in n) t.push(r);
    return g && Z(n, t), t;
  }
  function an(e) {
    var u = Y(e);
    return function (n) {
      if (null == n) return !1;
      var r = fn(n);
      if (Y(r)) return !1;
      for (var t = 0; t < u; t++) if (!D(n[e[t]])) return !1;
      return e !== hn || !D(n[cn]);
    };
  }
  var cn = "forEach",
    ln = ["clear", "delete"],
    sn = ["get", "has", "set"],
    pn = ln.concat(cn, sn),
    hn = ln.concat(sn),
    vn = ["add"].concat(ln, cn, "has"),
    yn = V ? an(pn) : x("Map"),
    dn = V ? an(hn) : x("WeakMap"),
    gn = V ? an(vn) : x("Set"),
    bn = x("WeakSet");
  function mn(n) {
    for (var r = nn(n), t = r.length, e = Array(t), u = 0; u < t; u++)
      e[u] = n[r[u]];
    return e;
  }
  function jn(n) {
    for (var r = {}, t = nn(n), e = 0, u = t.length; e < u; e++)
      r[n[t[e]]] = t[e];
    return r;
  }
  function _n(n) {
    var r,
      t = [];
    for (r in n) D(n[r]) && t.push(r);
    return t.sort();
  }
  function wn(a, c) {
    return function (n) {
      var r = arguments.length;
      if ((c && (n = Object(n)), r < 2 || null == n)) return n;
      for (var t = 1; t < r; t++)
        for (var e = arguments[t], u = a(e), i = u.length, o = 0; o < i; o++) {
          var f = u[o];
          (c && void 0 !== n[f]) || (n[f] = e[f]);
        }
      return n;
    };
  }
  var An = wn(fn),
    xn = wn(nn),
    Sn = wn(fn, !0);
  function On(n) {
    if (!_(n)) return {};
    if (h) return h(n);
    var r = function () {};
    r.prototype = n;
    n = new r();
    return (r.prototype = null), n;
  }
  function Mn(n) {
    return _(n) ? (U(n) ? n.slice() : An({}, n)) : n;
  }
  function En(n) {
    return U(n) ? n : [n];
  }
  function Bn(n) {
    return tn.toPath(n);
  }
  function Nn(n, r) {
    for (var t = r.length, e = 0; e < t; e++) {
      if (null == n) return;
      n = n[r[e]];
    }
    return t ? n : void 0;
  }
  function In(n, r, t) {
    r = Nn(n, Bn(r));
    return w(r) ? t : r;
  }
  function Tn(n) {
    return n;
  }
  function kn(r) {
    return (
      (r = xn({}, r)),
      function (n) {
        return rn(n, r);
      }
    );
  }
  function Dn(r) {
    return (
      (r = Bn(r)),
      function (n) {
        return Nn(n, r);
      }
    );
  }
  function Rn(u, i, n) {
    if (void 0 === i) return u;
    switch (null == n ? 3 : n) {
      case 1:
        return function (n) {
          return u.call(i, n);
        };
      case 3:
        return function (n, r, t) {
          return u.call(i, n, r, t);
        };
      case 4:
        return function (n, r, t, e) {
          return u.call(i, n, r, t, e);
        };
    }
    return function () {
      return u.apply(i, arguments);
    };
  }
  function Fn(n, r, t) {
    return null == n ? Tn : D(n) ? Rn(n, r, t) : (_(n) && !U(n) ? kn : Dn)(n);
  }
  function Vn(n, r) {
    return Fn(n, r, 1 / 0);
  }
  function Pn(n, r, t) {
    return tn.iteratee !== Vn ? tn.iteratee(n, r) : Fn(n, r, t);
  }
  function qn() {}
  function Un(n, r) {
    return (
      null == r && ((r = n), (n = 0)),
      n + Math.floor(Math.random() * (r - n + 1))
    );
  }
  (tn.toPath = En), (tn.iteratee = Vn);
  var Wn =
    Date.now ||
    function () {
      return new Date().getTime();
    };
  function zn(r) {
    function t(n) {
      return r[n];
    }
    var n = "(?:" + nn(r).join("|") + ")",
      e = RegExp(n),
      u = RegExp(n, "g");
    return function (n) {
      return e.test((n = null == n ? "" : "" + n)) ? n.replace(u, t) : n;
    };
  }
  var Ln = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
    },
    $n = zn(Ln),
    Cn = zn(jn(Ln)),
    Kn = (tn.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g,
    }),
    Jn = /(.)^/,
    Gn = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029",
    },
    Hn = /\\|'|\r|\n|\u2028|\u2029/g;
  function Qn(n) {
    return "\\" + Gn[n];
  }
  var Xn = /^\s*(\w|\$)+\s*$/;
  var Yn = 0;
  function Zn(n, r, t, e, u) {
    if (!(e instanceof r)) return n.apply(t, u);
    (t = On(n.prototype)), (u = n.apply(t, u));
    return _(u) ? u : t;
  }
  var nr = j(function (u, i) {
    function o() {
      for (var n = 0, r = i.length, t = Array(r), e = 0; e < r; e++)
        t[e] = i[e] === f ? arguments[n++] : i[e];
      for (; n < arguments.length; ) t.push(arguments[n++]);
      return Zn(u, o, this, this, t);
    }
    var f = nr.placeholder;
    return o;
  });
  nr.placeholder = tn;
  var rr = j(function (r, t, e) {
      if (!D(r)) throw new TypeError("Bind must be called on a function");
      var u = j(function (n) {
        return Zn(r, u, t, this, e.concat(n));
      });
      return u;
    }),
    tr = K(Y);
  function er(n, r, t, e) {
    if (((e = e || []), r || 0 === r)) {
      if (r <= 0) return e.concat(n);
    } else r = 1 / 0;
    for (var u = e.length, i = 0, o = Y(n); i < o; i++) {
      var f = n[i];
      if (tr(f) && (U(f) || L(f)))
        if (1 < r) er(f, r - 1, t, e), (u = e.length);
        else for (var a = 0, c = f.length; a < c; ) e[u++] = f[a++];
      else t || (e[u++] = f);
    }
    return e;
  }
  var ur = j(function (n, r) {
    var t = (r = er(r, !1, !1)).length;
    if (t < 1) throw new Error("bindAll must be passed function names");
    for (; t--; ) {
      var e = r[t];
      n[e] = rr(n[e], n);
    }
    return n;
  });
  var ir = j(function (n, r, t) {
      return setTimeout(function () {
        return n.apply(null, t);
      }, r);
    }),
    or = nr(ir, tn, 1);
  function fr(n) {
    return function () {
      return !n.apply(this, arguments);
    };
  }
  function ar(n, r) {
    var t;
    return function () {
      return 0 < --n && (t = r.apply(this, arguments)), n <= 1 && (r = null), t;
    };
  }
  r = nr(ar, 2);
  function cr(n, r, t) {
    r = Pn(r, t);
    for (var e, u = nn(n), i = 0, o = u.length; i < o; i++)
      if (r(n[(e = u[i])], e, n)) return e;
  }
  function lr(i) {
    return function (n, r, t) {
      r = Pn(r, t);
      for (var e = Y(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i)
        if (r(n[u], u, n)) return u;
      return -1;
    };
  }
  var sr = lr(1),
    k = lr(-1);
  function pr(n, r, t, e) {
    for (var u = (t = Pn(t, e, 1))(r), i = 0, o = Y(n); i < o; ) {
      var f = Math.floor((i + o) / 2);
      t(n[f]) < u ? (i = f + 1) : (o = f);
    }
    return i;
  }
  function hr(i, o, f) {
    return function (n, r, t) {
      var e = 0,
        u = Y(n);
      if ("number" == typeof t)
        0 < i
          ? (e = 0 <= t ? t : Math.max(t + u, e))
          : (u = 0 <= t ? Math.min(t + 1, u) : t + u + 1);
      else if (f && t && u) return n[(t = f(n, r))] === r ? t : -1;
      if (r != r) return 0 <= (t = o(a.call(n, e, u), $)) ? t + e : -1;
      for (t = 0 < i ? e : u - 1; 0 <= t && t < u; t += i)
        if (n[t] === r) return t;
      return -1;
    };
  }
  var vr = hr(1, sr, pr),
    T = hr(-1, k);
  function yr(n, r, t) {
    t = (tr(n) ? sr : cr)(n, r, t);
    if (void 0 !== t && -1 !== t) return n[t];
  }
  function dr(n, r, t) {
    if (((r = Rn(r, t)), tr(n)))
      for (u = 0, i = n.length; u < i; u++) r(n[u], u, n);
    else
      for (var e = nn(n), u = 0, i = e.length; u < i; u++) r(n[e[u]], e[u], n);
    return n;
  }
  function gr(n, r, t) {
    r = Pn(r, t);
    for (
      var e = !tr(n) && nn(n), u = (e || n).length, i = Array(u), o = 0;
      o < u;
      o++
    ) {
      var f = e ? e[o] : o;
      i[o] = r(n[f], f, n);
    }
    return i;
  }
  function br(a) {
    return function (n, r, t, e) {
      var u = 3 <= arguments.length;
      return (function (n, r, t, e) {
        var u = !tr(n) && nn(n),
          i = (u || n).length,
          o = 0 < a ? 0 : i - 1;
        for (e || ((t = n[u ? u[o] : o]), (o += a)); 0 <= o && o < i; o += a) {
          var f = u ? u[o] : o;
          t = r(t, n[f], f, n);
        }
        return t;
      })(n, Rn(r, e, 4), t, u);
    };
  }
  (f = br(1)), (R = br(-1));
  function mr(n, e, r) {
    var u = [];
    return (
      (e = Pn(e, r)),
      dr(n, function (n, r, t) {
        e(n, r, t) && u.push(n);
      }),
      u
    );
  }
  function jr(n, r, t) {
    r = Pn(r, t);
    for (var e = !tr(n) && nn(n), u = (e || n).length, i = 0; i < u; i++) {
      var o = e ? e[i] : i;
      if (!r(n[o], o, n)) return !1;
    }
    return !0;
  }
  function _r(n, r, t) {
    r = Pn(r, t);
    for (var e = !tr(n) && nn(n), u = (e || n).length, i = 0; i < u; i++) {
      var o = e ? e[i] : i;
      if (r(n[o], o, n)) return !0;
    }
    return !1;
  }
  function wr(n, r, t, e) {
    return (
      tr(n) || (n = mn(n)),
      0 <= vr(n, r, (t = "number" != typeof t || e ? 0 : t))
    );
  }
  P = j(function (n, t, e) {
    var u, i;
    return (
      D(t)
        ? (i = t)
        : ((t = Bn(t)), (u = t.slice(0, -1)), (t = t[t.length - 1])),
      gr(n, function (n) {
        var r = i;
        if (!r) {
          if (null == (n = u && u.length ? Nn(n, u) : n)) return;
          r = n[t];
        }
        return null == r ? r : r.apply(n, e);
      })
    );
  });
  function Ar(n, r) {
    return gr(n, Dn(r));
  }
  function xr(n, e, r) {
    var t,
      u,
      i = -1 / 0,
      o = -1 / 0;
    if (
      null == e ||
      ("number" == typeof e && "object" != typeof n[0] && null != n)
    )
      for (var f = 0, a = (n = tr(n) ? n : mn(n)).length; f < a; f++)
        null != (t = n[f]) && i < t && (i = t);
    else
      (e = Pn(e, r)),
        dr(n, function (n, r, t) {
          (u = e(n, r, t)),
            (o < u || (u === -1 / 0 && i === -1 / 0)) && ((i = n), (o = u));
        });
    return i;
  }
  function Sr(n, r, t) {
    if (null == r || t) return (n = !tr(n) ? mn(n) : n)[Un(n.length - 1)];
    var e = (tr(n) ? Mn : mn)(n),
      n = Y(e);
    r = Math.max(Math.min(r, n), 0);
    for (var u = n - 1, i = 0; i < r; i++) {
      var o = Un(i, u),
        f = e[i];
      (e[i] = e[o]), (e[o] = f);
    }
    return e.slice(0, r);
  }
  function Or(i, r) {
    return function (t, e, n) {
      var u = r ? [[], []] : {};
      return (
        (e = Pn(e, n)),
        dr(t, function (n, r) {
          r = e(n, r, t);
          i(u, n, r);
        }),
        u
      );
    };
  }
  var c = Or(function (n, r, t) {
      W(n, t) ? n[t].push(r) : (n[t] = [r]);
    }),
    i = Or(function (n, r, t) {
      n[t] = r;
    }),
    sn = Or(function (n, r, t) {
      W(n, t) ? n[t]++ : (n[t] = 1);
    }),
    ln = Or(function (n, r, t) {
      n[t ? 0 : 1].push(r);
    }, !0),
    Mr = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  function Er(n, r, t) {
    return r in t;
  }
  var Br = j(function (n, r) {
      var t = {},
        e = r[0];
      if (null == n) return t;
      D(e)
        ? (1 < r.length && (e = Rn(e, r[1])), (r = fn(n)))
        : ((e = Er), (r = er(r, !1, !1)), (n = Object(n)));
      for (var u = 0, i = r.length; u < i; u++) {
        var o = r[u],
          f = n[o];
        e(f, o, n) && (t[o] = f);
      }
      return t;
    }),
    pn = j(function (n, t) {
      var r,
        e = t[0];
      return (
        D(e)
          ? ((e = fr(e)), 1 < t.length && (r = t[1]))
          : ((t = gr(er(t, !1, !1), String)),
            (e = function (n, r) {
              return !wr(t, r);
            })),
        Br(n, e, r)
      );
    });
  function Nr(n, r, t) {
    return a.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)));
  }
  function Ir(n, r, t) {
    return null == n || n.length < 1
      ? null == r || t
        ? void 0
        : []
      : null == r || t
      ? n[0]
      : Nr(n, n.length - r);
  }
  function Tr(n, r, t) {
    return a.call(n, null == r || t ? 1 : r);
  }
  var kr = j(function (n, r) {
      return (
        (r = er(r, !0, !0)),
        mr(n, function (n) {
          return !wr(r, n);
        })
      );
    }),
    V = j(function (n, r) {
      return kr(n, r);
    });
  function Dr(n, r, t, e) {
    A(r) || ((e = t), (t = r), (r = !1)), null != t && (t = Pn(t, e));
    for (var u = [], i = [], o = 0, f = Y(n); o < f; o++) {
      var a = n[o],
        c = t ? t(a, o, n) : a;
      r && !t
        ? ((o && i === c) || u.push(a), (i = c))
        : t
        ? wr(i, c) || (i.push(c), u.push(a))
        : wr(u, a) || u.push(a);
    }
    return u;
  }
  vn = j(function (n) {
    return Dr(er(n, !0, !0));
  });
  function Rr(n) {
    for (var r = (n && xr(n, Y).length) || 0, t = Array(r), e = 0; e < r; e++)
      t[e] = Ar(n, e);
    return t;
  }
  Ln = j(Rr);
  function Fr(n, r) {
    return n._chain ? tn(r).chain() : r;
  }
  function Vr(t) {
    return (
      dr(_n(t), function (n) {
        var r = (tn[n] = t[n]);
        tn.prototype[n] = function () {
          var n = [this._wrapped];
          return u.apply(n, arguments), Fr(this, r.apply(tn, n));
        };
      }),
      tn
    );
  }
  dr(
    ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function (r) {
      var t = e[r];
      tn.prototype[r] = function () {
        var n = this._wrapped;
        return (
          null != n &&
            (t.apply(n, arguments),
            ("shift" !== r && "splice" !== r) || 0 !== n.length || delete n[0]),
          Fr(this, n)
        );
      };
    }
  ),
    dr(["concat", "join", "slice"], function (n) {
      var r = e[n];
      tn.prototype[n] = function () {
        var n = this._wrapped;
        return Fr(this, (n = null != n ? r.apply(n, arguments) : n));
      };
    });
  Ln = Vr({
    __proto__: null,
    VERSION: n,
    restArguments: j,
    isObject: _,
    isNull: function (n) {
      return null === n;
    },
    isUndefined: w,
    isBoolean: A,
    isElement: function (n) {
      return !(!n || 1 !== n.nodeType);
    },
    isString: S,
    isNumber: O,
    isDate: M,
    isRegExp: E,
    isError: B,
    isSymbol: N,
    isArrayBuffer: I,
    isDataView: q,
    isArray: U,
    isFunction: D,
    isArguments: L,
    isFinite: function (n) {
      return !N(n) && d(n) && !isNaN(parseFloat(n));
    },
    isNaN: $,
    isTypedArray: X,
    isEmpty: function (n) {
      if (null == n) return !0;
      var r = Y(n);
      return "number" == typeof r && (U(n) || S(n) || L(n))
        ? 0 === r
        : 0 === Y(nn(n));
    },
    isMatch: rn,
    isEqual: function (n, r) {
      return on(n, r);
    },
    isMap: yn,
    isWeakMap: dn,
    isSet: gn,
    isWeakSet: bn,
    keys: nn,
    allKeys: fn,
    values: mn,
    pairs: function (n) {
      for (var r = nn(n), t = r.length, e = Array(t), u = 0; u < t; u++)
        e[u] = [r[u], n[r[u]]];
      return e;
    },
    invert: jn,
    functions: _n,
    methods: _n,
    extend: An,
    extendOwn: xn,
    assign: xn,
    defaults: Sn,
    create: function (n, r) {
      return (n = On(n)), r && xn(n, r), n;
    },
    clone: Mn,
    tap: function (n, r) {
      return r(n), n;
    },
    get: In,
    has: function (n, r) {
      for (var t = (r = Bn(r)).length, e = 0; e < t; e++) {
        var u = r[e];
        if (!W(n, u)) return !1;
        n = n[u];
      }
      return !!t;
    },
    mapObject: function (n, r, t) {
      r = Pn(r, t);
      for (var e = nn(n), u = e.length, i = {}, o = 0; o < u; o++) {
        var f = e[o];
        i[f] = r(n[f], f, n);
      }
      return i;
    },
    identity: Tn,
    constant: C,
    noop: qn,
    toPath: En,
    property: Dn,
    propertyOf: function (r) {
      return null == r
        ? qn
        : function (n) {
            return In(r, n);
          };
    },
    matcher: kn,
    matches: kn,
    times: function (n, r, t) {
      var e = Array(Math.max(0, n));
      r = Rn(r, t, 1);
      for (var u = 0; u < n; u++) e[u] = r(u);
      return e;
    },
    random: Un,
    now: Wn,
    escape: $n,
    unescape: Cn,
    templateSettings: Kn,
    template: function (i, n, r) {
      n = Sn({}, (n = !n && r ? r : n), tn.templateSettings);
      var t,
        r = RegExp(
          [
            (n.escape || Jn).source,
            (n.interpolate || Jn).source,
            (n.evaluate || Jn).source,
          ].join("|") + "|$",
          "g"
        ),
        o = 0,
        f = "__p+='";
      if (
        (i.replace(r, function (n, r, t, e, u) {
          return (
            (f += i.slice(o, u).replace(Hn, Qn)),
            (o = u + n.length),
            r
              ? (f += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'")
              : t
              ? (f += "'+\n((__t=(" + t + "))==null?'':__t)+\n'")
              : e && (f += "';\n" + e + "\n__p+='"),
            n
          );
        }),
        (f += "';\n"),
        (r = n.variable))
      ) {
        if (!Xn.test(r))
          throw new Error("variable is not a bare identifier: " + r);
      } else (f = "with(obj||{}){\n" + f + "}\n"), (r = "obj");
      f =
        "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
        f +
        "return __p;\n";
      try {
        t = new Function(r, "_", f);
      } catch (n) {
        throw ((n.source = f), n);
      }
      return (
        ((n = function (n) {
          return t.call(this, n, tn);
        }).source = "function(" + r + "){\n" + f + "}"),
        n
      );
    },
    result: function (n, r, t) {
      var e = (r = Bn(r)).length;
      if (!e) return D(t) ? t.call(n) : t;
      for (var u = 0; u < e; u++) {
        var i = null == n ? void 0 : n[r[u]];
        void 0 === i && ((i = t), (u = e)), (n = D(i) ? i.call(n) : i);
      }
      return n;
    },
    uniqueId: function (n) {
      var r = ++Yn + "";
      return n ? n + r : r;
    },
    chain: function (n) {
      return ((n = tn(n))._chain = !0), n;
    },
    iteratee: Vn,
    partial: nr,
    bind: rr,
    bindAll: ur,
    memoize: function (e, u) {
      function i(n) {
        var r = i.cache,
          t = "" + (u ? u.apply(this, arguments) : n);
        return W(r, t) || (r[t] = e.apply(this, arguments)), r[t];
      }
      return (i.cache = {}), i;
    },
    delay: ir,
    defer: or,
    throttle: function (t, e, u) {
      var i,
        o,
        f,
        a,
        c = 0;
      function l() {
        (c = !1 === u.leading ? 0 : Wn()),
          (i = null),
          (a = t.apply(o, f)),
          i || (o = f = null);
      }
      function n() {
        var n = Wn();
        c || !1 !== u.leading || (c = n);
        var r = e - (n - c);
        return (
          (o = this),
          (f = arguments),
          r <= 0 || e < r
            ? (i && (clearTimeout(i), (i = null)),
              (c = n),
              (a = t.apply(o, f)),
              i || (o = f = null))
            : i || !1 === u.trailing || (i = setTimeout(l, r)),
          a
        );
      }
      return (
        (u = u || {}),
        (n.cancel = function () {
          clearTimeout(i), (c = 0), (i = o = f = null);
        }),
        n
      );
    },
    debounce: function (r, t, e) {
      function u() {
        var n = Wn() - o;
        n < t
          ? (i = setTimeout(u, t - n))
          : ((i = null), e || (a = r.apply(c, f)), i || (f = c = null));
      }
      var i,
        o,
        f,
        a,
        c,
        n = j(function (n) {
          return (
            (c = this),
            (f = n),
            (o = Wn()),
            i || ((i = setTimeout(u, t)), e && (a = r.apply(c, f))),
            a
          );
        });
      return (
        (n.cancel = function () {
          clearTimeout(i), (i = f = c = null);
        }),
        n
      );
    },
    wrap: function (n, r) {
      return nr(r, n);
    },
    negate: fr,
    compose: function () {
      var t = arguments,
        e = t.length - 1;
      return function () {
        for (var n = e, r = t[e].apply(this, arguments); n--; )
          r = t[n].call(this, r);
        return r;
      };
    },
    after: function (n, r) {
      return function () {
        if (--n < 1) return r.apply(this, arguments);
      };
    },
    before: ar,
    once: r,
    findKey: cr,
    findIndex: sr,
    findLastIndex: k,
    sortedIndex: pr,
    indexOf: vr,
    lastIndexOf: T,
    find: yr,
    detect: yr,
    findWhere: function (n, r) {
      return yr(n, kn(r));
    },
    each: dr,
    forEach: dr,
    map: gr,
    collect: gr,
    reduce: f,
    foldl: f,
    inject: f,
    reduceRight: R,
    foldr: R,
    filter: mr,
    select: mr,
    reject: function (n, r, t) {
      return mr(n, fr(Pn(r)), t);
    },
    every: jr,
    all: jr,
    some: _r,
    any: _r,
    contains: wr,
    includes: wr,
    include: wr,
    invoke: P,
    pluck: Ar,
    where: function (n, r) {
      return mr(n, kn(r));
    },
    max: xr,
    min: function (n, e, r) {
      var t,
        u,
        i = 1 / 0,
        o = 1 / 0;
      if (
        null == e ||
        ("number" == typeof e && "object" != typeof n[0] && null != n)
      )
        for (var f = 0, a = (n = tr(n) ? n : mn(n)).length; f < a; f++)
          null != (t = n[f]) && t < i && (i = t);
      else
        (e = Pn(e, r)),
          dr(n, function (n, r, t) {
            ((u = e(n, r, t)) < o || (u === 1 / 0 && i === 1 / 0)) &&
              ((i = n), (o = u));
          });
      return i;
    },
    shuffle: function (n) {
      return Sr(n, 1 / 0);
    },
    sample: Sr,
    sortBy: function (n, e, r) {
      var u = 0;
      return (
        (e = Pn(e, r)),
        Ar(
          gr(n, function (n, r, t) {
            return { value: n, index: u++, criteria: e(n, r, t) };
          }).sort(function (n, r) {
            var t = n.criteria,
              e = r.criteria;
            if (t !== e) {
              if (e < t || void 0 === t) return 1;
              if (t < e || void 0 === e) return -1;
            }
            return n.index - r.index;
          }),
          "value"
        )
      );
    },
    groupBy: c,
    indexBy: i,
    countBy: sn,
    partition: ln,
    toArray: function (n) {
      return n
        ? U(n)
          ? a.call(n)
          : S(n)
          ? n.match(Mr)
          : tr(n)
          ? gr(n, Tn)
          : mn(n)
        : [];
    },
    size: function (n) {
      return null == n ? 0 : (tr(n) ? n : nn(n)).length;
    },
    pick: Br,
    omit: pn,
    first: Ir,
    head: Ir,
    take: Ir,
    initial: Nr,
    last: function (n, r, t) {
      return null == n || n.length < 1
        ? null == r || t
          ? void 0
          : []
        : null == r || t
        ? n[n.length - 1]
        : Tr(n, Math.max(0, n.length - r));
    },
    rest: Tr,
    tail: Tr,
    drop: Tr,
    compact: function (n) {
      return mr(n, Boolean);
    },
    flatten: function (n, r) {
      return er(n, r, !1);
    },
    without: V,
    uniq: Dr,
    unique: Dr,
    union: vn,
    intersection: function (n) {
      for (var r = [], t = arguments.length, e = 0, u = Y(n); e < u; e++) {
        var i = n[e];
        if (!wr(r, i)) {
          for (var o = 1; o < t && wr(arguments[o], i); o++);
          o === t && r.push(i);
        }
      }
      return r;
    },
    difference: kr,
    unzip: Rr,
    transpose: Rr,
    zip: Ln,
    object: function (n, r) {
      for (var t = {}, e = 0, u = Y(n); e < u; e++)
        r ? (t[n[e]] = r[e]) : (t[n[e][0]] = n[e][1]);
      return t;
    },
    range: function (n, r, t) {
      null == r && ((r = n || 0), (n = 0)), (t = t || (r < n ? -1 : 1));
      for (
        var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0;
        i < e;
        i++, n += t
      )
        u[i] = n;
      return u;
    },
    chunk: function (n, r) {
      if (null == r || r < 1) return [];
      for (var t = [], e = 0, u = n.length; e < u; )
        t.push(a.call(n, e, (e += r)));
      return t;
    },
    mixin: Vr,
    default: tn,
  });
  return (Ln._ = Ln);
});
/*! This file is auto-generated */
!(function (n) {
  var s =
    ("object" == typeof self && self.self === self && self) ||
    ("object" == typeof global && global.global === global && global);
  if ("function" == typeof define && define.amd)
    define(["underscore", "jquery", "exports"], function (t, e, i) {
      s.Backbone = n(s, i, t, e);
    });
  else if ("undefined" != typeof exports) {
    var t,
      e = require("underscore");
    try {
      t = require("jquery");
    } catch (t) {}
    n(s, exports, e, t);
  } else s.Backbone = n(s, {}, s._, s.jQuery || s.Zepto || s.ender || s.$);
})(function (t, h, b, e) {
  var i = t.Backbone,
    o = Array.prototype.slice;
  (h.VERSION = "1.4.0"),
    (h.$ = e),
    (h.noConflict = function () {
      return (t.Backbone = i), this;
    }),
    (h.emulateHTTP = !1),
    (h.emulateJSON = !1);
  function a(t, e, i, n, s) {
    var r,
      o = 0;
    if (i && "object" == typeof i) {
      void 0 !== n && "context" in s && void 0 === s.context && (s.context = n);
      for (r = b.keys(i); o < r.length; o++) e = a(t, e, r[o], i[r[o]], s);
    } else if (i && c.test(i))
      for (r = i.split(c); o < r.length; o++) e = t(e, r[o], n, s);
    else e = t(e, i, n, s);
    return e;
  }
  var u,
    n = (h.Events = {}),
    c = /\s+/;
  (n.on = function (t, e, i) {
    return (
      (this._events = a(s, this._events || {}, t, e, {
        context: i,
        ctx: this,
        listening: u,
      })),
      u &&
        (((this._listeners || (this._listeners = {}))[u.id] = u).interop = !1),
      this
    );
  }),
    (n.listenTo = function (t, e, i) {
      if (!t) return this;
      var n = t._listenId || (t._listenId = b.uniqueId("l")),
        s = this._listeningTo || (this._listeningTo = {}),
        r = (u = s[n]);
      r ||
        (this._listenId || (this._listenId = b.uniqueId("l")),
        (r = u = s[n] = new g(this, t)));
      t = l(t, e, i, this);
      if (((u = void 0), t)) throw t;
      return r.interop && r.on(e, i), this;
    });
  var s = function (t, e, i, n) {
      var s, r;
      return (
        i &&
          ((s = t[e] || (t[e] = [])),
          (r = n.context),
          (e = n.ctx),
          (n = n.listening) && n.count++,
          s.push({ callback: i, context: r, ctx: r || e, listening: n })),
        t
      );
    },
    l = function (t, e, i, n) {
      try {
        t.on(e, i, n);
      } catch (t) {
        return t;
      }
    };
  (n.off = function (t, e, i) {
    return (
      this._events &&
        (this._events = a(r, this._events, t, e, {
          context: i,
          listeners: this._listeners,
        })),
      this
    );
  }),
    (n.stopListening = function (t, e, i) {
      var n = this._listeningTo;
      if (!n) return this;
      for (var s = t ? [t._listenId] : b.keys(n), r = 0; r < s.length; r++) {
        var o = n[s[r]];
        if (!o) break;
        o.obj.off(e, i, this), o.interop && o.off(e, i);
      }
      return b.isEmpty(n) && (this._listeningTo = void 0), this;
    });
  var r = function (t, e, i, n) {
    if (t) {
      var s,
        r = n.context,
        o = n.listeners,
        h = 0;
      if (e || r || i) {
        for (s = e ? [e] : b.keys(t); h < s.length; h++) {
          var a = t[(e = s[h])];
          if (!a) break;
          for (var u = [], c = 0; c < a.length; c++) {
            var l = a[c];
            (i && i !== l.callback && i !== l.callback._callback) ||
            (r && r !== l.context)
              ? u.push(l)
              : (l = l.listening) && l.off(e, i);
          }
          u.length ? (t[e] = u) : delete t[e];
        }
        return t;
      }
      for (s = b.keys(o); h < s.length; h++) o[s[h]].cleanup();
    }
  };
  (n.once = function (t, e, i) {
    var n = a(d, {}, t, e, this.off.bind(this));
    return this.on(n, (e = "string" == typeof t && null == i ? void 0 : e), i);
  }),
    (n.listenToOnce = function (t, e, i) {
      i = a(d, {}, e, i, this.stopListening.bind(this, t));
      return this.listenTo(t, i);
    });
  var d = function (t, e, i, n) {
    var s;
    return (
      i &&
        ((s = t[e] =
          b.once(function () {
            n(e, s), i.apply(this, arguments);
          }))._callback = i),
      t
    );
  };
  n.trigger = function (t) {
    if (!this._events) return this;
    for (
      var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0;
      n < e;
      n++
    )
      i[n] = arguments[n + 1];
    return a(f, this._events, t, void 0, i), this;
  };
  var f = function (t, e, i, n) {
      var s, r;
      return (
        t &&
          ((s = t[e]),
          (r = t.all),
          s && r && (r = r.slice()),
          s && p(s, n),
          r && p(r, [e].concat(n))),
        t
      );
    },
    p = function (t, e) {
      var i,
        n = -1,
        s = t.length,
        r = e[0],
        o = e[1],
        h = e[2];
      switch (e.length) {
        case 0:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx);
          return;
        case 1:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r);
          return;
        case 2:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r, o);
          return;
        case 3:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r, o, h);
          return;
        default:
          for (; ++n < s; ) (i = t[n]).callback.apply(i.ctx, e);
          return;
      }
    },
    g = function (t, e) {
      (this.id = t._listenId),
        (this.listener = t),
        (this.obj = e),
        (this.interop = !0),
        (this.count = 0),
        (this._events = void 0);
    };
  (g.prototype.on = n.on),
    (g.prototype.off = function (t, e) {
      e = this.interop
        ? ((this._events = a(r, this._events, t, e, {
            context: void 0,
            listeners: void 0,
          })),
          !this._events)
        : (this.count--, 0 === this.count);
      e && this.cleanup();
    }),
    (g.prototype.cleanup = function () {
      delete this.listener._listeningTo[this.obj._listenId],
        this.interop || delete this.obj._listeners[this.id];
    }),
    (n.bind = n.on),
    (n.unbind = n.off),
    b.extend(h, n);
  var v = (h.Model = function (t, e) {
    var i = t || {};
    (e = e || {}),
      this.preinitialize.apply(this, arguments),
      (this.cid = b.uniqueId(this.cidPrefix)),
      (this.attributes = {}),
      e.collection && (this.collection = e.collection),
      e.parse && (i = this.parse(i, e) || {});
    var n = b.result(this, "defaults"),
      i = b.defaults(b.extend({}, n, i), n);
    this.set(i, e), (this.changed = {}), this.initialize.apply(this, arguments);
  });
  b.extend(v.prototype, n, {
    changed: null,
    validationError: null,
    idAttribute: "id",
    cidPrefix: "c",
    preinitialize: function () {},
    initialize: function () {},
    toJSON: function (t) {
      return b.clone(this.attributes);
    },
    sync: function () {
      return h.sync.apply(this, arguments);
    },
    get: function (t) {
      return this.attributes[t];
    },
    escape: function (t) {
      return b.escape(this.get(t));
    },
    has: function (t) {
      return null != this.get(t);
    },
    matches: function (t) {
      return !!b.iteratee(t, this)(this.attributes);
    },
    set: function (t, e, i) {
      if (null == t) return this;
      var n;
      if (
        ("object" == typeof t ? ((n = t), (i = e)) : ((n = {})[t] = e),
        !this._validate(n, (i = i || {})))
      )
        return !1;
      var s = i.unset,
        r = i.silent,
        o = [],
        t = this._changing;
      (this._changing = !0),
        t ||
          ((this._previousAttributes = b.clone(this.attributes)),
          (this.changed = {}));
      var h,
        a = this.attributes,
        u = this.changed,
        c = this._previousAttributes;
      for (h in n)
        (e = n[h]),
          b.isEqual(a[h], e) || o.push(h),
          b.isEqual(c[h], e) ? delete u[h] : (u[h] = e),
          s ? delete a[h] : (a[h] = e);
      if (
        (this.idAttribute in n && (this.id = this.get(this.idAttribute)), !r)
      ) {
        o.length && (this._pending = i);
        for (var l = 0; l < o.length; l++)
          this.trigger("change:" + o[l], this, a[o[l]], i);
      }
      if (t) return this;
      if (!r)
        for (; this._pending; )
          (i = this._pending),
            (this._pending = !1),
            this.trigger("change", this, i);
      return (this._pending = !1), (this._changing = !1), this;
    },
    unset: function (t, e) {
      return this.set(t, void 0, b.extend({}, e, { unset: !0 }));
    },
    clear: function (t) {
      var e,
        i = {};
      for (e in this.attributes) i[e] = void 0;
      return this.set(i, b.extend({}, t, { unset: !0 }));
    },
    hasChanged: function (t) {
      return null == t ? !b.isEmpty(this.changed) : b.has(this.changed, t);
    },
    changedAttributes: function (t) {
      if (!t) return !!this.hasChanged() && b.clone(this.changed);
      var e,
        i,
        n = this._changing ? this._previousAttributes : this.attributes,
        s = {};
      for (i in t) {
        var r = t[i];
        b.isEqual(n[i], r) || ((s[i] = r), (e = !0));
      }
      return !!e && s;
    },
    previous: function (t) {
      return null != t && this._previousAttributes
        ? this._previousAttributes[t]
        : null;
    },
    previousAttributes: function () {
      return b.clone(this._previousAttributes);
    },
    fetch: function (i) {
      i = b.extend({ parse: !0 }, i);
      var n = this,
        s = i.success;
      return (
        (i.success = function (t) {
          var e = i.parse ? n.parse(t, i) : t;
          if (!n.set(e, i)) return !1;
          s && s.call(i.context, n, t, i), n.trigger("sync", n, t, i);
        }),
        F(this, i),
        this.sync("read", this, i)
      );
    },
    save: function (t, e, i) {
      var n;
      null == t || "object" == typeof t
        ? ((n = t), (i = e))
        : ((n = {})[t] = e);
      var s = (i = b.extend({ validate: !0, parse: !0 }, i)).wait;
      if (n && !s) {
        if (!this.set(n, i)) return !1;
      } else if (!this._validate(n, i)) return !1;
      var r = this,
        o = i.success,
        h = this.attributes;
      (i.success = function (t) {
        r.attributes = h;
        var e = i.parse ? r.parse(t, i) : t;
        if ((e = s ? b.extend({}, n, e) : e) && !r.set(e, i)) return !1;
        o && o.call(i.context, r, t, i), r.trigger("sync", r, t, i);
      }),
        F(this, i),
        n && s && (this.attributes = b.extend({}, h, n));
      e = this.isNew() ? "create" : i.patch ? "patch" : "update";
      "patch" != e || i.attrs || (i.attrs = n);
      e = this.sync(e, this, i);
      return (this.attributes = h), e;
    },
    destroy: function (e) {
      e = e ? b.clone(e) : {};
      function i() {
        n.stopListening(), n.trigger("destroy", n, n.collection, e);
      }
      var n = this,
        s = e.success,
        r = e.wait,
        t = !(e.success = function (t) {
          r && i(),
            s && s.call(e.context, n, t, e),
            n.isNew() || n.trigger("sync", n, t, e);
        });
      return (
        this.isNew()
          ? b.defer(e.success)
          : (F(this, e), (t = this.sync("delete", this, e))),
        r || i(),
        t
      );
    },
    url: function () {
      var t =
        b.result(this, "urlRoot") || b.result(this.collection, "url") || q();
      if (this.isNew()) return t;
      var e = this.get(this.idAttribute);
      return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e);
    },
    parse: function (t, e) {
      return t;
    },
    clone: function () {
      return new this.constructor(this.attributes);
    },
    isNew: function () {
      return !this.has(this.idAttribute);
    },
    isValid: function (t) {
      return this._validate({}, b.extend({}, t, { validate: !0 }));
    },
    _validate: function (t, e) {
      if (!e.validate || !this.validate) return !0;
      t = b.extend({}, this.attributes, t);
      t = this.validationError = this.validate(t, e) || null;
      return (
        !t ||
        (this.trigger("invalid", this, t, b.extend(e, { validationError: t })),
        !1)
      );
    },
  });
  function x(t, e, i) {
    i = Math.min(Math.max(i, 0), t.length);
    for (var n = Array(t.length - i), s = e.length, r = 0; r < n.length; r++)
      n[r] = t[r + i];
    for (r = 0; r < s; r++) t[r + i] = e[r];
    for (r = 0; r < n.length; r++) t[r + s + i] = n[r];
  }
  var m = (h.Collection = function (t, e) {
      (e = e || {}),
        this.preinitialize.apply(this, arguments),
        e.model && (this.model = e.model),
        void 0 !== e.comparator && (this.comparator = e.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        t && this.reset(t, b.extend({ silent: !0 }, e));
    }),
    w = { add: !0, remove: !0, merge: !0 },
    _ = { add: !0, remove: !1 };
  b.extend(m.prototype, n, {
    model: v,
    preinitialize: function () {},
    initialize: function () {},
    toJSON: function (e) {
      return this.map(function (t) {
        return t.toJSON(e);
      });
    },
    sync: function () {
      return h.sync.apply(this, arguments);
    },
    add: function (t, e) {
      return this.set(t, b.extend({ merge: !1 }, e, _));
    },
    remove: function (t, e) {
      e = b.extend({}, e);
      var i = !b.isArray(t);
      t = i ? [t] : t.slice();
      t = this._removeModels(t, e);
      return (
        !e.silent &&
          t.length &&
          ((e.changes = { added: [], merged: [], removed: t }),
          this.trigger("update", this, e)),
        i ? t[0] : t
      );
    },
    set: function (t, e) {
      if (null != t) {
        (e = b.extend({}, w, e)).parse &&
          !this._isModel(t) &&
          (t = this.parse(t, e) || []);
        var i = !b.isArray(t);
        t = i ? [t] : t.slice();
        var n = e.at;
        (n = (n = null != n ? +n : n) > this.length ? this.length : n) < 0 &&
          (n += this.length + 1);
        for (
          var s = [],
            r = [],
            o = [],
            h = [],
            a = {},
            u = e.add,
            c = e.merge,
            l = e.remove,
            d = !1,
            f = this.comparator && null == n && !1 !== e.sort,
            p = b.isString(this.comparator) ? this.comparator : null,
            g = 0;
          g < t.length;
          g++
        ) {
          var v,
            m = t[g],
            _ = this.get(m);
          _
            ? (c &&
                m !== _ &&
                ((v = this._isModel(m) ? m.attributes : m),
                e.parse && (v = _.parse(v, e)),
                _.set(v, e),
                o.push(_),
                f && !d && (d = _.hasChanged(p))),
              a[_.cid] || ((a[_.cid] = !0), s.push(_)),
              (t[g] = _))
            : u &&
              (m = t[g] = this._prepareModel(m, e)) &&
              (r.push(m), this._addReference(m, e), (a[m.cid] = !0), s.push(m));
        }
        if (l) {
          for (g = 0; g < this.length; g++)
            a[(m = this.models[g]).cid] || h.push(m);
          h.length && this._removeModels(h, e);
        }
        var y = !1;
        if (
          (s.length && !f && u && l
            ? ((y =
                this.length !== s.length ||
                b.some(this.models, function (t, e) {
                  return t !== s[e];
                })),
              (this.models.length = 0),
              x(this.models, s, 0),
              (this.length = this.models.length))
            : r.length &&
              (f && (d = !0),
              x(this.models, r, null == n ? this.length : n),
              (this.length = this.models.length)),
          d && this.sort({ silent: !0 }),
          !e.silent)
        ) {
          for (g = 0; g < r.length; g++)
            null != n && (e.index = n + g),
              (m = r[g]).trigger("add", m, this, e);
          (d || y) && this.trigger("sort", this, e),
            (r.length || h.length || o.length) &&
              ((e.changes = { added: r, removed: h, merged: o }),
              this.trigger("update", this, e));
        }
        return i ? t[0] : t;
      }
    },
    reset: function (t, e) {
      e = e ? b.clone(e) : {};
      for (var i = 0; i < this.models.length; i++)
        this._removeReference(this.models[i], e);
      return (
        (e.previousModels = this.models),
        this._reset(),
        (t = this.add(t, b.extend({ silent: !0 }, e))),
        e.silent || this.trigger("reset", this, e),
        t
      );
    },
    push: function (t, e) {
      return this.add(t, b.extend({ at: this.length }, e));
    },
    pop: function (t) {
      var e = this.at(this.length - 1);
      return this.remove(e, t);
    },
    unshift: function (t, e) {
      return this.add(t, b.extend({ at: 0 }, e));
    },
    shift: function (t) {
      var e = this.at(0);
      return this.remove(e, t);
    },
    slice: function () {
      return o.apply(this.models, arguments);
    },
    get: function (t) {
      if (null != t)
        return (
          this._byId[t] ||
          this._byId[this.modelId(this._isModel(t) ? t.attributes : t)] ||
          (t.cid && this._byId[t.cid])
        );
    },
    has: function (t) {
      return null != this.get(t);
    },
    at: function (t) {
      return t < 0 && (t += this.length), this.models[t];
    },
    where: function (t, e) {
      return this[e ? "find" : "filter"](t);
    },
    findWhere: function (t) {
      return this.where(t, !0);
    },
    sort: function (t) {
      var e = this.comparator;
      if (!e) throw new Error("Cannot sort a set without a comparator");
      t = t || {};
      var i = e.length;
      return (
        b.isFunction(e) && (e = e.bind(this)),
        1 === i || b.isString(e)
          ? (this.models = this.sortBy(e))
          : this.models.sort(e),
        t.silent || this.trigger("sort", this, t),
        this
      );
    },
    pluck: function (t) {
      return this.map(t + "");
    },
    fetch: function (i) {
      var n = (i = b.extend({ parse: !0 }, i)).success,
        s = this;
      return (
        (i.success = function (t) {
          var e = i.reset ? "reset" : "set";
          s[e](t, i),
            n && n.call(i.context, s, t, i),
            s.trigger("sync", s, t, i);
        }),
        F(this, i),
        this.sync("read", this, i)
      );
    },
    create: function (t, e) {
      var n = (e = e ? b.clone(e) : {}).wait;
      if (!(t = this._prepareModel(t, e))) return !1;
      n || this.add(t, e);
      var s = this,
        r = e.success;
      return (
        (e.success = function (t, e, i) {
          n && s.add(t, i), r && r.call(i.context, t, e, i);
        }),
        t.save(null, e),
        t
      );
    },
    parse: function (t, e) {
      return t;
    },
    clone: function () {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator,
      });
    },
    modelId: function (t) {
      return t[this.model.prototype.idAttribute || "id"];
    },
    values: function () {
      return new E(this, k);
    },
    keys: function () {
      return new E(this, I);
    },
    entries: function () {
      return new E(this, S);
    },
    _reset: function () {
      (this.length = 0), (this.models = []), (this._byId = {});
    },
    _prepareModel: function (t, e) {
      if (this._isModel(t)) return t.collection || (t.collection = this), t;
      t = new ((e = e ? b.clone(e) : {}).collection = this).model(t, e);
      return t.validationError
        ? (this.trigger("invalid", this, t.validationError, e), !1)
        : t;
    },
    _removeModels: function (t, e) {
      for (var i = [], n = 0; n < t.length; n++) {
        var s,
          r,
          o = this.get(t[n]);
        o &&
          ((s = this.indexOf(o)),
          this.models.splice(s, 1),
          this.length--,
          delete this._byId[o.cid],
          null != (r = this.modelId(o.attributes)) && delete this._byId[r],
          e.silent || ((e.index = s), o.trigger("remove", o, this, e)),
          i.push(o),
          this._removeReference(o, e));
      }
      return i;
    },
    _isModel: function (t) {
      return t instanceof v;
    },
    _addReference: function (t, e) {
      this._byId[t.cid] = t;
      var i = this.modelId(t.attributes);
      null != i && (this._byId[i] = t), t.on("all", this._onModelEvent, this);
    },
    _removeReference: function (t, e) {
      delete this._byId[t.cid];
      var i = this.modelId(t.attributes);
      null != i && delete this._byId[i],
        this === t.collection && delete t.collection,
        t.off("all", this._onModelEvent, this);
    },
    _onModelEvent: function (t, e, i, n) {
      if (e) {
        if (("add" === t || "remove" === t) && i !== this) return;
        var s, r;
        "destroy" === t && this.remove(e, n),
          "change" !== t ||
            ((s = this.modelId(e.previousAttributes())) !==
              (r = this.modelId(e.attributes)) &&
              (null != s && delete this._byId[s],
              null != r && (this._byId[r] = e)));
      }
      this.trigger.apply(this, arguments);
    },
  });
  var y = "function" == typeof Symbol && Symbol.iterator;
  y && (m.prototype[y] = m.prototype.values);
  var E = function (t, e) {
      (this._collection = t), (this._kind = e), (this._index = 0);
    },
    k = 1,
    I = 2,
    S = 3;
  y &&
    (E.prototype[y] = function () {
      return this;
    }),
    (E.prototype.next = function () {
      if (this._collection) {
        if (this._index < this._collection.length) {
          var t,
            e = this._collection.at(this._index);
          return (
            this._index++,
            {
              value:
                this._kind === k
                  ? e
                  : ((t = this._collection.modelId(e.attributes)),
                    this._kind === I ? t : [t, e]),
              done: !1,
            }
          );
        }
        this._collection = void 0;
      }
      return { value: void 0, done: !0 };
    });
  var e = (h.View = function (t) {
      (this.cid = b.uniqueId("view")),
        this.preinitialize.apply(this, arguments),
        b.extend(this, b.pick(t, P)),
        this._ensureElement(),
        this.initialize.apply(this, arguments);
    }),
    T = /^(\S+)\s*(.*)$/,
    P = [
      "model",
      "collection",
      "el",
      "id",
      "attributes",
      "className",
      "tagName",
      "events",
    ];
  b.extend(e.prototype, n, {
    tagName: "div",
    $: function (t) {
      return this.$el.find(t);
    },
    preinitialize: function () {},
    initialize: function () {},
    render: function () {
      return this;
    },
    remove: function () {
      return this._removeElement(), this.stopListening(), this;
    },
    _removeElement: function () {
      this.$el.remove();
    },
    setElement: function (t) {
      return (
        this.undelegateEvents(),
        this._setElement(t),
        this.delegateEvents(),
        this
      );
    },
    _setElement: function (t) {
      (this.$el = t instanceof h.$ ? t : h.$(t)), (this.el = this.$el[0]);
    },
    delegateEvents: function (t) {
      if (!(t = t || b.result(this, "events"))) return this;
      for (var e in (this.undelegateEvents(), t)) {
        var i = t[e];
        (i = !b.isFunction(i) ? this[i] : i) &&
          ((e = e.match(T)), this.delegate(e[1], e[2], i.bind(this)));
      }
      return this;
    },
    delegate: function (t, e, i) {
      return this.$el.on(t + ".delegateEvents" + this.cid, e, i), this;
    },
    undelegateEvents: function () {
      return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
    },
    undelegate: function (t, e, i) {
      return this.$el.off(t + ".delegateEvents" + this.cid, e, i), this;
    },
    _createElement: function (t) {
      return document.createElement(t);
    },
    _ensureElement: function () {
      var t;
      this.el
        ? this.setElement(b.result(this, "el"))
        : ((t = b.extend({}, b.result(this, "attributes"))),
          this.id && (t.id = b.result(this, "id")),
          this.className && (t.class = b.result(this, "className")),
          this.setElement(this._createElement(b.result(this, "tagName"))),
          this._setAttributes(t));
    },
    _setAttributes: function (t) {
      this.$el.attr(t);
    },
  });
  function H(i, n, t, s) {
    b.each(t, function (t, e) {
      n[e] &&
        (i.prototype[e] = (function (n, t, s, r) {
          switch (t) {
            case 1:
              return function () {
                return n[s](this[r]);
              };
            case 2:
              return function (t) {
                return n[s](this[r], t);
              };
            case 3:
              return function (t, e) {
                return n[s](this[r], $(t, this), e);
              };
            case 4:
              return function (t, e, i) {
                return n[s](this[r], $(t, this), e, i);
              };
            default:
              return function () {
                var t = o.call(arguments);
                return t.unshift(this[r]), n[s].apply(n, t);
              };
          }
        })(n, t, e, s));
    });
  }
  var $ = function (e, t) {
    return b.isFunction(e)
      ? e
      : b.isObject(e) && !t._isModel(e)
      ? ((i = b.matches(e)),
        function (t) {
          return i(t.attributes);
        })
      : b.isString(e)
      ? function (t) {
          return t.get(e);
        }
      : e;
    var i;
  };
  b.each(
    [
      [
        m,
        {
          forEach: 3,
          each: 3,
          map: 3,
          collect: 3,
          reduce: 0,
          foldl: 0,
          inject: 0,
          reduceRight: 0,
          foldr: 0,
          find: 3,
          detect: 3,
          filter: 3,
          select: 3,
          reject: 3,
          every: 3,
          all: 3,
          some: 3,
          any: 3,
          include: 3,
          includes: 3,
          contains: 3,
          invoke: 0,
          max: 3,
          min: 3,
          toArray: 1,
          size: 1,
          first: 3,
          head: 3,
          take: 3,
          initial: 3,
          rest: 3,
          tail: 3,
          drop: 3,
          last: 3,
          without: 0,
          difference: 0,
          indexOf: 3,
          shuffle: 1,
          lastIndexOf: 3,
          isEmpty: 1,
          chain: 1,
          sample: 3,
          partition: 3,
          groupBy: 3,
          countBy: 3,
          sortBy: 3,
          indexBy: 3,
          findIndex: 3,
          findLastIndex: 3,
        },
        "models",
      ],
      [
        v,
        {
          keys: 1,
          values: 1,
          pairs: 1,
          invert: 1,
          pick: 0,
          omit: 0,
          chain: 1,
          isEmpty: 1,
        },
        "attributes",
      ],
    ],
    function (t) {
      var i = t[0],
        e = t[1],
        n = t[2];
      (i.mixin = function (t) {
        var e = b.reduce(
          b.functions(t),
          function (t, e) {
            return (t[e] = 0), t;
          },
          {}
        );
        H(i, t, e, n);
      }),
        H(i, b, e, n);
    }
  ),
    (h.sync = function (t, e, n) {
      var i = A[t];
      b.defaults((n = n || {}), {
        emulateHTTP: h.emulateHTTP,
        emulateJSON: h.emulateJSON,
      });
      var s,
        r = { type: i, dataType: "json" };
      n.url || (r.url = b.result(e, "url") || q()),
        null != n.data ||
          !e ||
          ("create" !== t && "update" !== t && "patch" !== t) ||
          ((r.contentType = "application/json"),
          (r.data = JSON.stringify(n.attrs || e.toJSON(n)))),
        n.emulateJSON &&
          ((r.contentType = "application/x-www-form-urlencoded"),
          (r.data = r.data ? { model: r.data } : {})),
        !n.emulateHTTP ||
          ("PUT" !== i && "DELETE" !== i && "PATCH" !== i) ||
          ((r.type = "POST"),
          n.emulateJSON && (r.data._method = i),
          (s = n.beforeSend),
          (n.beforeSend = function (t) {
            if ((t.setRequestHeader("X-HTTP-Method-Override", i), s))
              return s.apply(this, arguments);
          })),
        "GET" === r.type || n.emulateJSON || (r.processData = !1);
      var o = n.error;
      n.error = function (t, e, i) {
        (n.textStatus = e),
          (n.errorThrown = i),
          o && o.call(n.context, t, e, i);
      };
      r = n.xhr = h.ajax(b.extend(r, n));
      return e.trigger("request", e, r, n), r;
    });
  var A = {
    create: "POST",
    update: "PUT",
    patch: "PATCH",
    delete: "DELETE",
    read: "GET",
  };
  h.ajax = function () {
    return h.$.ajax.apply(h.$, arguments);
  };
  var y = (h.Router = function (t) {
      (t = t || {}),
        this.preinitialize.apply(this, arguments),
        t.routes && (this.routes = t.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments);
    }),
    C = /\((.*?)\)/g,
    R = /(\(\?)?:\w+/g,
    M = /\*\w+/g,
    N = /[\-{}\[\]+?.,\\\^$|#\s]/g;
  b.extend(y.prototype, n, {
    preinitialize: function () {},
    initialize: function () {},
    route: function (e, i, n) {
      b.isRegExp(e) || (e = this._routeToRegExp(e)),
        b.isFunction(i) && ((n = i), (i = "")),
        (n = n || this[i]);
      var s = this;
      return (
        h.history.route(e, function (t) {
          t = s._extractParameters(e, t);
          !1 !== s.execute(n, t, i) &&
            (s.trigger.apply(s, ["route:" + i].concat(t)),
            s.trigger("route", i, t),
            h.history.trigger("route", s, i, t));
        }),
        this
      );
    },
    execute: function (t, e, i) {
      t && t.apply(this, e);
    },
    navigate: function (t, e) {
      return h.history.navigate(t, e), this;
    },
    _bindRoutes: function () {
      if (this.routes) {
        this.routes = b.result(this, "routes");
        for (var t, e = b.keys(this.routes); null != (t = e.pop()); )
          this.route(t, this.routes[t]);
      }
    },
    _routeToRegExp: function (t) {
      return (
        (t = t
          .replace(N, "\\$&")
          .replace(C, "(?:$1)?")
          .replace(R, function (t, e) {
            return e ? t : "([^/?]+)";
          })
          .replace(M, "([^?]*?)")),
        new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
      );
    },
    _extractParameters: function (t, e) {
      var i = t.exec(e).slice(1);
      return b.map(i, function (t, e) {
        return e === i.length - 1
          ? t || null
          : t
          ? decodeURIComponent(t)
          : null;
      });
    },
  });
  var j = (h.History = function () {
      (this.handlers = []),
        (this.checkUrl = this.checkUrl.bind(this)),
        "undefined" != typeof window &&
          ((this.location = window.location), (this.history = window.history));
    }),
    O = /^[#\/]|\s+$/g,
    U = /^\/+|\/+$/g,
    z = /#.*$/;
  (j.started = !1),
    b.extend(j.prototype, n, {
      interval: 50,
      atRoot: function () {
        return (
          this.location.pathname.replace(/[^\/]$/, "$&/") === this.root &&
          !this.getSearch()
        );
      },
      matchRoot: function () {
        return (
          this.decodeFragment(this.location.pathname).slice(
            0,
            this.root.length - 1
          ) +
            "/" ===
          this.root
        );
      },
      decodeFragment: function (t) {
        return decodeURI(t.replace(/%25/g, "%2525"));
      },
      getSearch: function () {
        var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
        return t ? t[0] : "";
      },
      getHash: function (t) {
        t = (t || this).location.href.match(/#(.*)$/);
        return t ? t[1] : "";
      },
      getPath: function () {
        var t = this.decodeFragment(
          this.location.pathname + this.getSearch()
        ).slice(this.root.length - 1);
        return "/" === t.charAt(0) ? t.slice(1) : t;
      },
      getFragment: function (t) {
        return (t =
          null == t
            ? this._usePushState || !this._wantsHashChange
              ? this.getPath()
              : this.getHash()
            : t).replace(O, "");
      },
      start: function (t) {
        if (j.started)
          throw new Error("Backbone.history has already been started");
        if (
          ((j.started = !0),
          (this.options = b.extend({ root: "/" }, this.options, t)),
          (this.root = this.options.root),
          (this._wantsHashChange = !1 !== this.options.hashChange),
          (this._hasHashChange =
            "onhashchange" in window &&
            (void 0 === document.documentMode || 7 < document.documentMode)),
          (this._useHashChange = this._wantsHashChange && this._hasHashChange),
          (this._wantsPushState = !!this.options.pushState),
          (this._hasPushState = !(!this.history || !this.history.pushState)),
          (this._usePushState = this._wantsPushState && this._hasPushState),
          (this.fragment = this.getFragment()),
          (this.root = ("/" + this.root + "/").replace(U, "/")),
          this._wantsHashChange && this._wantsPushState)
        ) {
          if (!this._hasPushState && !this.atRoot()) {
            t = this.root.slice(0, -1) || "/";
            return this.location.replace(t + "#" + this.getPath()), !0;
          }
          this._hasPushState &&
            this.atRoot() &&
            this.navigate(this.getHash(), { replace: !0 });
        }
        this._hasHashChange ||
          !this._wantsHashChange ||
          this._usePushState ||
          ((this.iframe = document.createElement("iframe")),
          (this.iframe.src = "javascript:0"),
          (this.iframe.style.display = "none"),
          (this.iframe.tabIndex = -1),
          (e = (e = document.body).insertBefore(
            this.iframe,
            e.firstChild
          ).contentWindow).document.open(),
          e.document.close(),
          (e.location.hash = "#" + this.fragment));
        var e =
          window.addEventListener ||
          function (t, e) {
            return attachEvent("on" + t, e);
          };
        if (
          (this._usePushState
            ? e("popstate", this.checkUrl, !1)
            : this._useHashChange && !this.iframe
            ? e("hashchange", this.checkUrl, !1)
            : this._wantsHashChange &&
              (this._checkUrlInterval = setInterval(
                this.checkUrl,
                this.interval
              )),
          !this.options.silent)
        )
          return this.loadUrl();
      },
      stop: function () {
        var t =
          window.removeEventListener ||
          function (t, e) {
            return detachEvent("on" + t, e);
          };
        this._usePushState
          ? t("popstate", this.checkUrl, !1)
          : this._useHashChange &&
            !this.iframe &&
            t("hashchange", this.checkUrl, !1),
          this.iframe &&
            (document.body.removeChild(this.iframe), (this.iframe = null)),
          this._checkUrlInterval && clearInterval(this._checkUrlInterval),
          (j.started = !1);
      },
      route: function (t, e) {
        this.handlers.unshift({ route: t, callback: e });
      },
      checkUrl: function (t) {
        var e = this.getFragment();
        if (
          (e =
            e === this.fragment && this.iframe
              ? this.getHash(this.iframe.contentWindow)
              : e) === this.fragment
        )
          return !1;
        this.iframe && this.navigate(e), this.loadUrl();
      },
      loadUrl: function (e) {
        return (
          !!this.matchRoot() &&
          ((e = this.fragment = this.getFragment(e)),
          b.some(this.handlers, function (t) {
            if (t.route.test(e)) return t.callback(e), !0;
          }))
        );
      },
      navigate: function (t, e) {
        if (!j.started) return !1;
        (e && !0 !== e) || (e = { trigger: !!e }),
          (t = this.getFragment(t || ""));
        var i = this.root,
          n =
            (i = "" === t || "?" === t.charAt(0) ? i.slice(0, -1) || "/" : i) +
            t;
        t = t.replace(z, "");
        i = this.decodeFragment(t);
        if (this.fragment !== i) {
          if (((this.fragment = i), this._usePushState))
            this.history[e.replace ? "replaceState" : "pushState"](
              {},
              document.title,
              n
            );
          else {
            if (!this._wantsHashChange) return this.location.assign(n);
            this._updateHash(this.location, t, e.replace),
              this.iframe &&
                t !== this.getHash(this.iframe.contentWindow) &&
                ((n = this.iframe.contentWindow),
                e.replace || (n.document.open(), n.document.close()),
                this._updateHash(n.location, t, e.replace));
          }
          return e.trigger ? this.loadUrl(t) : void 0;
        }
      },
      _updateHash: function (t, e, i) {
        i
          ? ((i = t.href.replace(/(javascript:|#).*$/, "")),
            t.replace(i + "#" + e))
          : (t.hash = "#" + e);
      },
    }),
    (h.history = new j());
  v.extend =
    m.extend =
    y.extend =
    e.extend =
    j.extend =
      function (t, e) {
        var i = this,
          n =
            t && b.has(t, "constructor")
              ? t.constructor
              : function () {
                  return i.apply(this, arguments);
                };
        return (
          b.extend(n, i, e),
          (n.prototype = b.create(i.prototype, t)),
          ((n.prototype.constructor = n).__super__ = i.prototype),
          n
        );
      };
  var q = function () {
      throw new Error('A "url" property or function must be specified');
    },
    F = function (e, i) {
      var n = i.error;
      i.error = function (t) {
        n && n.call(i.context, e, t, i), e.trigger("error", e, t, i);
      };
    };
  return h;
});
/*! This file is auto-generated */
!(function (c) {
  var w = window.wpApiSettings;
  function t(e) {
    return (e = t.buildAjaxOptions(e)), t.transport(e);
  }
  (t.buildAjaxOptions = function (e) {
    var t,
      n,
      a,
      p,
      o,
      r,
      i = e.url,
      d = e.path,
      s = e.method;
    for (r in ("string" == typeof e.namespace &&
      "string" == typeof e.endpoint &&
      ((n = e.namespace.replace(/^\/|\/$/g, "")),
      (d = (t = e.endpoint.replace(/^\//, "")) ? n + "/" + t : n)),
    "string" == typeof d &&
      ((n = w.root),
      (d = d.replace(/^\//, "")),
      "string" == typeof n &&
        -1 !== n.indexOf("?") &&
        (d = d.replace("?", "&")),
      (i = n + d)),
    (p = !(e.data && e.data._wpnonce)),
    (o = !0),
    (a = e.headers || {})))
      if (a.hasOwnProperty(r))
        switch (r.toLowerCase()) {
          case "x-wp-nonce":
            p = !1;
            break;
          case "accept":
            o = !1;
        }
    return (
      p && (a = c.extend({ "X-WP-Nonce": w.nonce }, a)),
      o && (a = c.extend({ Accept: "application/json, */*;q=0.1" }, a)),
      "string" == typeof s &&
        (("PUT" !== (s = s.toUpperCase()) && "DELETE" !== s) ||
          ((a = c.extend({ "X-HTTP-Method-Override": s }, a)), (s = "POST"))),
      delete (e = c.extend({}, e, { headers: a, url: i, method: s })).path,
      delete e.namespace,
      delete e.endpoint,
      e
    );
  }),
    (t.transport = c.ajax),
    (window.wp = window.wp || {}),
    (window.wp.apiRequest = t);
})(jQuery);
/*! This file is auto-generated */
!(function (e) {
  "use strict";
  (e.wp = e.wp || {}),
    (wp.api =
      wp.api ||
      new (function () {
        (this.models = {}), (this.collections = {}), (this.views = {});
      })()),
    (wp.api.versionString = wp.api.versionString || "wp/v2/"),
    !_.isFunction(_.includes) &&
      _.isFunction(_.contains) &&
      (_.includes = _.contains);
})(window),
  (function (e) {
    "use strict";
    var t, i;
    (e.wp = e.wp || {}),
      (wp.api = wp.api || {}),
      (wp.api.utils = wp.api.utils || {}),
      (wp.api.getModelByRoute = function (t) {
        return _.find(wp.api.models, function (e) {
          return e.prototype.route && t === e.prototype.route.index;
        });
      }),
      (wp.api.getCollectionByRoute = function (t) {
        return _.find(wp.api.collections, function (e) {
          return e.prototype.route && t === e.prototype.route.index;
        });
      }),
      Date.prototype.toISOString ||
        ((t = function (e) {
          return (i = 1 === (i = String(e)).length ? "0" + i : i);
        }),
        (Date.prototype.toISOString = function () {
          return (
            this.getUTCFullYear() +
            "-" +
            t(this.getUTCMonth() + 1) +
            "-" +
            t(this.getUTCDate()) +
            "T" +
            t(this.getUTCHours()) +
            ":" +
            t(this.getUTCMinutes()) +
            ":" +
            t(this.getUTCSeconds()) +
            "." +
            String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) +
            "Z"
          );
        })),
      (wp.api.utils.parseISO8601 = function (e) {
        var t,
          i,
          n,
          o,
          s = 0,
          a = [1, 4, 5, 6, 7, 10, 11];
        if (
          (i =
            /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(
              e
            ))
        ) {
          for (n = 0; (o = a[n]); ++n) i[o] = +i[o] || 0;
          (i[2] = (+i[2] || 1) - 1),
            (i[3] = +i[3] || 1),
            "Z" !== i[8] &&
              void 0 !== i[9] &&
              ((s = 60 * i[10] + i[11]), "+" === i[9] && (s = 0 - s)),
            (t = Date.UTC(i[1], i[2], i[3], i[4], i[5] + s, i[6], i[7]));
        } else t = Date.parse ? Date.parse(e) : NaN;
        return t;
      }),
      (wp.api.utils.getRootUrl = function () {
        return e.location.origin
          ? e.location.origin + "/"
          : e.location.protocol + "//" + e.location.host + "/";
      }),
      (wp.api.utils.capitalize = function (e) {
        return _.isUndefined(e) ? e : e.charAt(0).toUpperCase() + e.slice(1);
      }),
      (wp.api.utils.capitalizeAndCamelCaseDashes = function (e) {
        return _.isUndefined(e)
          ? e
          : ((e = wp.api.utils.capitalize(e)), wp.api.utils.camelCaseDashes(e));
      }),
      (wp.api.utils.camelCaseDashes = function (e) {
        return e.replace(/-([a-z])/g, function (e) {
          return e[1].toUpperCase();
        });
      }),
      (wp.api.utils.extractRoutePart = function (e, t, i, n) {
        return (
          (t = t || 1),
          (i = i || wp.api.versionString),
          (e = (e =
            0 === e.indexOf("/" + i) ? e.substr(i.length + 1) : e).split("/")),
          n && (e = e.reverse()),
          _.isUndefined(e[--t]) ? "" : e[t]
        );
      }),
      (wp.api.utils.extractParentName = function (e) {
        var t = e.lastIndexOf("_id>[\\d]+)/");
        return t < 0
          ? ""
          : ((t = (t = e.substr(0, t - 1)).split("/")).pop(), (t = t.pop()));
      }),
      (wp.api.utils.decorateFromRoute = function (e, t) {
        _.each(e, function (e) {
          _.includes(e.methods, "POST") || _.includes(e.methods, "PUT")
            ? _.isEmpty(e.args) ||
              (_.isEmpty(t.prototype.args)
                ? (t.prototype.args = e.args)
                : (t.prototype.args = _.extend(t.prototype.args, e.args)))
            : _.includes(e.methods, "GET") &&
              (_.isEmpty(e.args) ||
                (_.isEmpty(t.prototype.options)
                  ? (t.prototype.options = e.args)
                  : (t.prototype.options = _.extend(
                      t.prototype.options,
                      e.args
                    ))));
        });
      }),
      (wp.api.utils.addMixinsAndHelpers = function (t, e, i) {
        function n(e, t, i, n, o) {
          var s,
            a = jQuery.Deferred(),
            e = e.get("_embedded") || {};
          return _.isNumber(t) && 0 !== t
            ? ((s = (s = e[n] ? _.findWhere(e[n], { id: t }) : s) || { id: t }),
              (s = new wp.api.models[i](s)).get(o)
                ? a.resolve(s)
                : s.fetch({
                    success: function (e) {
                      a.resolve(e);
                    },
                    error: function (e, t) {
                      a.reject(t);
                    },
                  }),
              a.promise())
            : (a.reject(), a);
        }
        function p(e, t) {
          _.each(e.models, function (e) {
            e.set("parent_post", t);
          });
        }
        var o = !1,
          s = ["date", "modified", "date_gmt", "modified_gmt"],
          a = {
            setDate: function (e, t) {
              t = t || "date";
              if (_.indexOf(s, t) < 0) return !1;
              this.set(t, e.toISOString());
            },
            getDate: function (e) {
              var t = e || "date",
                e = this.get(t);
              return (
                !(_.indexOf(s, t) < 0 || _.isNull(e)) &&
                new Date(wp.api.utils.parseISO8601(e))
              );
            },
          },
          r = {
            getMeta: function (e) {
              return this.get("meta")[e];
            },
            getMetas: function () {
              return this.get("meta");
            },
            setMetas: function (e) {
              var t = this.get("meta");
              _.extend(t, e), this.set("meta", t);
            },
            setMeta: function (e, t) {
              var i = this.get("meta");
              (i[e] = t), this.set("meta", i);
            },
          },
          c = {
            getRevisions: function () {
              return (
                (e = this),
                (t = "PostRevisions"),
                (s = o = ""),
                (a = jQuery.Deferred()),
                (r = e.get("id")),
                (e = e.get("_embedded") || {}),
                _.isNumber(r) && 0 !== r
                  ? (_.isUndefined(i) || _.isUndefined(e[i])
                      ? (o = { parent: r })
                      : (s = _.isUndefined(n) ? e[i] : e[i][n]),
                    (o = new wp.api.collections[t](s, o)),
                    _.isUndefined(o.models[0])
                      ? o.fetch({
                          success: function (e) {
                            p(e, r), a.resolve(e);
                          },
                          error: function (e, t) {
                            a.reject(t);
                          },
                        })
                      : (p(o, r), a.resolve(o)),
                    a.promise())
                  : (a.reject(), a)
              );
              var e, t, i, n, o, s, a, r;
            },
          },
          d = {
            getTags: function () {
              var e = this.get("tags"),
                t = new wp.api.collections.Tags();
              return _.isEmpty(e)
                ? jQuery.Deferred().resolve([])
                : t.fetch({ data: { include: e } });
            },
            setTags: function (e) {
              var i,
                n = this,
                o = [];
              if (_.isString(e)) return !1;
              _.isArray(e)
                ? new wp.api.collections.Tags().fetch({
                    data: { per_page: 100 },
                    success: function (t) {
                      _.each(e, function (e) {
                        (i = new wp.api.models.Tag(
                          t.findWhere({ slug: e })
                        )).set("parent_post", n.get("id")),
                          o.push(i);
                      }),
                        (e = new wp.api.collections.Tags(o)),
                        n.setTagsWithCollection(e);
                    },
                  })
                : this.setTagsWithCollection(e);
            },
            setTagsWithCollection: function (e) {
              return this.set("tags", e.pluck("id")), this.save();
            },
          },
          l = {
            getCategories: function () {
              var e = this.get("categories"),
                t = new wp.api.collections.Categories();
              return _.isEmpty(e)
                ? jQuery.Deferred().resolve([])
                : t.fetch({ data: { include: e } });
            },
            setCategories: function (e) {
              var i,
                n = this,
                o = [];
              if (_.isString(e)) return !1;
              _.isArray(e)
                ? new wp.api.collections.Categories().fetch({
                    data: { per_page: 100 },
                    success: function (t) {
                      _.each(e, function (e) {
                        (i = new wp.api.models.Category(
                          t.findWhere({ slug: e })
                        )).set("parent_post", n.get("id")),
                          o.push(i);
                      }),
                        (e = new wp.api.collections.Categories(o)),
                        n.setCategoriesWithCollection(e);
                    },
                  })
                : this.setCategoriesWithCollection(e);
            },
            setCategoriesWithCollection: function (e) {
              return this.set("categories", e.pluck("id")), this.save();
            },
          },
          u = {
            getAuthorUser: function () {
              return n(this, this.get("author"), "User", "author", "name");
            },
          },
          g = {
            getFeaturedMedia: function () {
              return n(
                this,
                this.get("featured_media"),
                "Media",
                "wp:featuredmedia",
                "source_url"
              );
            },
          };
        return _.isUndefined(t.prototype.args)
          ? t
          : (_.each(s, function (e) {
              _.isUndefined(t.prototype.args[e]) || (o = !0);
            }),
            o && (t = t.extend(a)),
            _.isUndefined(t.prototype.args.author) || (t = t.extend(u)),
            _.isUndefined(t.prototype.args.featured_media) || (t = t.extend(g)),
            _.isUndefined(t.prototype.args.categories) || (t = t.extend(l)),
            _.isUndefined(t.prototype.args.meta) || (t = t.extend(r)),
            _.isUndefined(t.prototype.args.tags) || (t = t.extend(d)),
            (t = _.isUndefined(i.collections[e + "Revisions"])
              ? t
              : t.extend(c)));
      });
  })(window),
  (function () {
    "use strict";
    var i = window.wpApiSettings || {},
      e = [
        "Comment",
        "Media",
        "Comment",
        "Post",
        "Page",
        "Status",
        "Taxonomy",
        "Type",
      ];
    (wp.api.WPApiBaseModel = Backbone.Model.extend({
      initialize: function () {
        -1 === _.indexOf(e, this.name) && (this.requireForceForDelete = !0);
      },
      sync: function (e, t, i) {
        var n;
        return (
          (i = i || {}),
          _.isNull(t.get("date_gmt")) && t.unset("date_gmt"),
          _.isEmpty(t.get("slug")) && t.unset("slug"),
          _.isFunction(t.nonce) &&
            !_.isEmpty(t.nonce()) &&
            ((n = i.beforeSend),
            (i.beforeSend = function (e) {
              if ((e.setRequestHeader("X-WP-Nonce", t.nonce()), n))
                return n.apply(this, arguments);
            }),
            (i.complete = function (e) {
              e = e.getResponseHeader("X-WP-Nonce");
              e &&
                _.isFunction(t.nonce) &&
                t.nonce() !== e &&
                t.endpointModel.set("nonce", e);
            })),
          this.requireForceForDelete &&
            "delete" === e &&
            (t.url = t.url() + "?force=true"),
          Backbone.sync(e, t, i)
        );
      },
      save: function (e, t) {
        return (
          !(
            !_.includes(this.methods, "PUT") &&
            !_.includes(this.methods, "POST")
          ) && Backbone.Model.prototype.save.call(this, e, t)
        );
      },
      destroy: function (e) {
        return (
          !!_.includes(this.methods, "DELETE") &&
          Backbone.Model.prototype.destroy.call(this, e)
        );
      },
    })),
      (wp.api.models.Schema = wp.api.WPApiBaseModel.extend({
        defaults: { _links: {}, namespace: null, routes: {} },
        initialize: function (e, t) {
          (t = t || {}),
            wp.api.WPApiBaseModel.prototype.initialize.call(this, e, t),
            (this.apiRoot = t.apiRoot || i.root),
            (this.versionString = t.versionString || i.versionString);
        },
        url: function () {
          return this.apiRoot + this.versionString;
        },
      }));
  })(),
  (function () {
    "use strict";
    window.wpApiSettings;
    wp.api.WPApiBaseCollection = Backbone.Collection.extend({
      initialize: function (e, t) {
        (this.state = {
          data: {},
          currentPage: null,
          totalPages: null,
          totalObjects: null,
        }),
          _.isUndefined(t) ? (this.parent = "") : (this.parent = t.parent);
      },
      sync: function (e, t, i) {
        var n,
          o,
          s = this;
        return (
          (i = i || {}),
          _.isFunction(t.nonce) &&
            !_.isEmpty(t.nonce()) &&
            ((n = i.beforeSend),
            (i.beforeSend = function (e) {
              if ((e.setRequestHeader("X-WP-Nonce", t.nonce()), n))
                return n.apply(s, arguments);
            }),
            (i.complete = function (e) {
              e = e.getResponseHeader("X-WP-Nonce");
              e &&
                _.isFunction(t.nonce) &&
                t.nonce() !== e &&
                t.endpointModel.set("nonce", e);
            })),
          "read" === e &&
            (i.data
              ? ((s.state.data = _.clone(i.data)), delete s.state.data.page)
              : (s.state.data = i.data = {}),
            void 0 === i.data.page
              ? ((s.state.currentPage = null),
                (s.state.totalPages = null),
                (s.state.totalObjects = null))
              : (s.state.currentPage = i.data.page - 1),
            (o = i.success),
            (i.success = function (e, t, i) {
              if (
                (_.isUndefined(i) ||
                  ((s.state.totalPages = parseInt(
                    i.getResponseHeader("x-wp-totalpages"),
                    10
                  )),
                  (s.state.totalObjects = parseInt(
                    i.getResponseHeader("x-wp-total"),
                    10
                  ))),
                null === s.state.currentPage
                  ? (s.state.currentPage = 1)
                  : s.state.currentPage++,
                o)
              )
                return o.apply(this, arguments);
            })),
          Backbone.sync(e, t, i)
        );
      },
      more: function (e) {
        if (
          (((e = e || {}).data = e.data || {}),
          _.extend(e.data, this.state.data),
          void 0 === e.data.page)
        ) {
          if (!this.hasMore()) return !1;
          null === this.state.currentPage || this.state.currentPage <= 1
            ? (e.data.page = 2)
            : (e.data.page = this.state.currentPage + 1);
        }
        return this.fetch(e);
      },
      hasMore: function () {
        return null === this.state.totalPages ||
          null === this.state.totalObjects ||
          null === this.state.currentPage
          ? null
          : this.state.currentPage < this.state.totalPages;
      },
    });
  })(),
  (function () {
    "use strict";
    var o,
      s = {},
      c = window.wpApiSettings || {};
    (window.wp = window.wp || {}),
      (wp.api = wp.api || {}),
      _.isEmpty(c) && (c.root = window.location.origin + "/wp-json/"),
      (o = Backbone.Model.extend({
        defaults: {
          apiRoot: c.root,
          versionString: wp.api.versionString,
          nonce: null,
          schema: null,
          models: {},
          collections: {},
        },
        initialize: function () {
          var e,
            t = this;
          Backbone.Model.prototype.initialize.apply(t, arguments),
            (e = jQuery.Deferred()),
            (t.schemaConstructed = e.promise()),
            (t.schemaModel = new wp.api.models.Schema(null, {
              apiRoot: t.get("apiRoot"),
              versionString: t.get("versionString"),
              nonce: t.get("nonce"),
            })),
            t.schemaModel.once("change", function () {
              t.constructFromSchema(), e.resolve(t);
            }),
            t.get("schema")
              ? t.schemaModel.set(t.schemaModel.parse(t.get("schema")))
              : !_.isUndefined(sessionStorage) &&
                (_.isUndefined(c.cacheSchema) || c.cacheSchema) &&
                sessionStorage.getItem(
                  "wp-api-schema-model" +
                    t.get("apiRoot") +
                    t.get("versionString")
                )
              ? t.schemaModel.set(
                  t.schemaModel.parse(
                    JSON.parse(
                      sessionStorage.getItem(
                        "wp-api-schema-model" +
                          t.get("apiRoot") +
                          t.get("versionString")
                      )
                    )
                  )
                )
              : t.schemaModel.fetch({
                  success: function (e) {
                    if (
                      !_.isUndefined(sessionStorage) &&
                      (_.isUndefined(c.cacheSchema) || c.cacheSchema)
                    )
                      try {
                        sessionStorage.setItem(
                          "wp-api-schema-model" +
                            t.get("apiRoot") +
                            t.get("versionString"),
                          JSON.stringify(e)
                        );
                      } catch (e) {}
                  },
                  error: function (e) {
                    window.console.log(e);
                  },
                });
        },
        constructFromSchema: function () {
          var s = this,
            a = c.mapping || {
              models: {
                Categories: "Category",
                Comments: "Comment",
                Pages: "Page",
                PagesMeta: "PageMeta",
                PagesRevisions: "PageRevision",
                Posts: "Post",
                PostsCategories: "PostCategory",
                PostsRevisions: "PostRevision",
                PostsTags: "PostTag",
                Schema: "Schema",
                Statuses: "Status",
                Tags: "Tag",
                Taxonomies: "Taxonomy",
                Types: "Type",
                Users: "User",
              },
              collections: {
                PagesMeta: "PageMeta",
                PagesRevisions: "PageRevisions",
                PostsCategories: "PostCategories",
                PostsMeta: "PostMeta",
                PostsRevisions: "PostRevisions",
                PostsTags: "PostTags",
              },
            },
            e = s.get("modelEndpoints"),
            i = new RegExp("(?:.*[+)]|/(" + e.join("|") + "))$"),
            n = [],
            o = [],
            r = s.get("apiRoot").replace(wp.api.utils.getRootUrl(), ""),
            p = { models: {}, collections: {} };
          _.each(s.schemaModel.get("routes"), function (e, t) {
            t !== s.get(" versionString") &&
              t !== r &&
              t !== "/" + s.get("versionString").slice(0, -1) &&
              (i.test(t) ? n : o).push({ index: t, route: e });
          }),
            _.each(n, function (e) {
              var t,
                i = wp.api.utils.extractRoutePart(
                  e.index,
                  2,
                  s.get("versionString"),
                  !0
                ),
                n = wp.api.utils.extractRoutePart(
                  e.index,
                  1,
                  s.get("versionString"),
                  !1
                ),
                o = wp.api.utils.extractRoutePart(
                  e.index,
                  1,
                  s.get("versionString"),
                  !0
                );
              n === s.get("versionString") && (n = ""),
                "me" === o && (i = "me"),
                "" !== n && n !== i
                  ? ((t =
                      wp.api.utils.capitalizeAndCamelCaseDashes(n) +
                      wp.api.utils.capitalizeAndCamelCaseDashes(i)),
                    (t = a.models[t] || t),
                    (p.models[t] = wp.api.WPApiBaseModel.extend({
                      url: function () {
                        var e =
                          s.get("apiRoot") +
                          s.get("versionString") +
                          n +
                          "/" +
                          (_.isUndefined(this.get("parent")) ||
                          0 === this.get("parent")
                            ? _.isUndefined(this.get("parent_post"))
                              ? ""
                              : this.get("parent_post") + "/"
                            : this.get("parent") + "/") +
                          i;
                        return (
                          _.isUndefined(this.get("id")) ||
                            (e += "/" + this.get("id")),
                          e
                        );
                      },
                      nonce: function () {
                        return s.get("nonce");
                      },
                      endpointModel: s,
                      route: e,
                      name: t,
                      methods: e.route.methods,
                      endpoints: e.route.endpoints,
                    })))
                  : ((t = wp.api.utils.capitalizeAndCamelCaseDashes(i)),
                    (t = a.models[t] || t),
                    (p.models[t] = wp.api.WPApiBaseModel.extend({
                      url: function () {
                        var e =
                          s.get("apiRoot") +
                          s.get("versionString") +
                          ("me" === i ? "users/me" : i);
                        return (
                          _.isUndefined(this.get("id")) ||
                            (e += "/" + this.get("id")),
                          e
                        );
                      },
                      nonce: function () {
                        return s.get("nonce");
                      },
                      endpointModel: s,
                      route: e,
                      name: t,
                      methods: e.route.methods,
                      endpoints: e.route.endpoints,
                    }))),
                wp.api.utils.decorateFromRoute(
                  e.route.endpoints,
                  p.models[t],
                  s.get("versionString")
                );
            }),
            _.each(o, function (e) {
              var t,
                i,
                n = e.index.slice(e.index.lastIndexOf("/") + 1),
                o = wp.api.utils.extractRoutePart(
                  e.index,
                  1,
                  s.get("versionString"),
                  !1
                );
              "" !== o && o !== n && s.get("versionString") !== o
                ? ((t =
                    wp.api.utils.capitalizeAndCamelCaseDashes(o) +
                    wp.api.utils.capitalizeAndCamelCaseDashes(n)),
                  (i = a.models[t] || t),
                  (t = a.collections[t] || t),
                  (p.collections[t] = wp.api.WPApiBaseCollection.extend({
                    url: function () {
                      return (
                        s.get("apiRoot") +
                        s.get("versionString") +
                        o +
                        "/" +
                        (_.isUndefined(this.parent) || "" === this.parent
                          ? _.isUndefined(this.get("parent_post"))
                            ? ""
                            : this.get("parent_post") + "/"
                          : this.parent + "/") +
                        n
                      );
                    },
                    model: function (e, t) {
                      return new p.models[i](e, t);
                    },
                    nonce: function () {
                      return s.get("nonce");
                    },
                    endpointModel: s,
                    name: t,
                    route: e,
                    methods: e.route.methods,
                  })))
                : ((t = wp.api.utils.capitalizeAndCamelCaseDashes(n)),
                  (i = a.models[t] || t),
                  (t = a.collections[t] || t),
                  (p.collections[t] = wp.api.WPApiBaseCollection.extend({
                    url: function () {
                      return s.get("apiRoot") + s.get("versionString") + n;
                    },
                    model: function (e, t) {
                      return new p.models[i](e, t);
                    },
                    nonce: function () {
                      return s.get("nonce");
                    },
                    endpointModel: s,
                    name: t,
                    route: e,
                    methods: e.route.methods,
                  }))),
                wp.api.utils.decorateFromRoute(
                  e.route.endpoints,
                  p.collections[t]
                );
            }),
            _.each(p.models, function (e, t) {
              p.models[t] = wp.api.utils.addMixinsAndHelpers(e, t, p);
            }),
            s.set("models", p.models),
            s.set("collections", p.collections);
        },
      })),
      (wp.api.endpoints = new Backbone.Collection()),
      (wp.api.init = function (e) {
        var t,
          i,
          n = {};
        return (
          (e = e || {}),
          (n.nonce = _.isString(e.nonce) ? e.nonce : c.nonce || ""),
          (n.apiRoot = e.apiRoot || c.root || "/wp-json"),
          (n.versionString = e.versionString || c.versionString || "wp/v2/"),
          (n.schema = e.schema || null),
          (n.modelEndpoints = e.modelEndpoints || ["me", "settings"]),
          n.schema ||
            n.apiRoot !== c.root ||
            n.versionString !== c.versionString ||
            (n.schema = c.schema),
          s[n.apiRoot + n.versionString] ||
            ((t =
              (t = wp.api.endpoints.findWhere({
                apiRoot: n.apiRoot,
                versionString: n.versionString,
              })) || new o(n)),
            (e = (i = jQuery.Deferred()).promise()),
            t.schemaConstructed.done(function (e) {
              wp.api.endpoints.add(e),
                (wp.api.models = _.extend(wp.api.models, e.get("models"))),
                (wp.api.collections = _.extend(
                  wp.api.collections,
                  e.get("collections")
                )),
                i.resolve(e);
            }),
            (s[n.apiRoot + n.versionString] = e)),
          s[n.apiRoot + n.versionString]
        );
      }),
      (wp.api.loadPromise = wp.api.init());
  })();
const WPDA_REST_API_PATH = "wpda/v1/";
function wpda_rest_api(path, data) {
  jQuery
    .ajax({
      url: wpApiSettings.root + WPDA_REST_API_PATH + path,
      method: "POST",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("X-WP-Nonce", wpApiSettings.nonce);
      },
      data: data,
    })
    .done(function (response) {
      console.log(response);
    });
}
(function ($) {
  $.fn.easeScroll = function (options) {
    !(function () {
      function e() {
        var e = !1;
        e && c("keydown", r), v.keyboardSupport && !e && u("keydown", r);
      }
      function t() {
        if (document.body) {
          var t = document.body,
            o = document.documentElement,
            n = window.innerHeight,
            r = t.scrollHeight;
          if (
            ((S = document.compatMode.indexOf("CSS") >= 0 ? o : t),
            (w = t),
            e(),
            (x = !0),
            top != self)
          )
            y = !0;
          else if (r > n && (t.offsetHeight <= n || o.offsetHeight <= n)) {
            var a = !1,
              i = function () {
                a ||
                  o.scrollHeight == document.height ||
                  ((a = !0),
                  setTimeout(function () {
                    (o.style.height = document.height + "px"), (a = !1);
                  }, 100));
              };
            if (
              ((o.style.height = "auto"),
              setTimeout(i, 10),
              S.offsetHeight <= n)
            ) {
              var l = document.createElement("div");
              (l.style.clear = "both"), t.appendChild(l);
            }
          }
          v.fixedBackground ||
            b ||
            ((t.style.backgroundAttachment = "scroll"),
            (o.style.backgroundAttachment = "scroll"));
        }
      }
      function o(e, t, o, n) {
        if ((n || (n = 1e3), d(t, o), 1 != v.accelerationMax)) {
          var r = +new Date(),
            a = r - C;
          if (a < v.accelerationDelta) {
            var i = (1 + 30 / a) / 2;
            i > 1 && ((i = Math.min(i, v.accelerationMax)), (t *= i), (o *= i));
          }
          C = +new Date();
        }
        if (
          (M.push({
            x: t,
            y: o,
            lastX: 0 > t ? 0.99 : -0.99,
            lastY: 0 > o ? 0.99 : -0.99,
            start: +new Date(),
          }),
          !T)
        ) {
          var l = e === document.body,
            u = function () {
              for (
                var r = +new Date(), a = 0, i = 0, c = 0;
                c < M.length;
                c++
              ) {
                var s = M[c],
                  d = r - s.start,
                  f = d >= v.animationTime,
                  h = f ? 1 : d / v.animationTime;
                v.pulseAlgorithm && (h = p(h));
                var m = (s.x * h - s.lastX) >> 0,
                  w = (s.y * h - s.lastY) >> 0;
                (a += m),
                  (i += w),
                  (s.lastX += m),
                  (s.lastY += w),
                  f && (M.splice(c, 1), c--);
              }
              l
                ? window.scrollBy(a, i)
                : (a && (e.scrollLeft += a), i && (e.scrollTop += i)),
                t || o || (M = []),
                M.length ? E(u, e, n / v.frameRate + 1) : (T = !1);
            };
          E(u, e, 0), (T = !0);
        }
      }
      function n(e) {
        x || t();
        var n = e.target,
          r = l(n);
        if (
          !r ||
          e.defaultPrevented ||
          s(w, "embed") ||
          (s(n, "embed") && /\.pdf/i.test(n.src))
        )
          return !0;
        var a = e.wheelDeltaX || 0,
          i = e.wheelDeltaY || 0;
        return (
          a || i || (i = e.wheelDelta || 0),
          !v.touchpadSupport && f(i)
            ? !0
            : (Math.abs(a) > 1.2 && (a *= v.stepSize / 120),
              Math.abs(i) > 1.2 && (i *= v.stepSize / 120),
              o(r, -a, -i),
              void e.preventDefault())
        );
      }
      function r(e) {
        var t = e.target,
          n =
            e.ctrlKey ||
            e.altKey ||
            e.metaKey ||
            (e.shiftKey && e.keyCode !== H.spacebar);
        if (
          /input|textarea|select|embed/i.test(t.nodeName) ||
          t.isContentEditable ||
          e.defaultPrevented ||
          n
        )
          return !0;
        if (s(t, "button") && e.keyCode === H.spacebar) return !0;
        var r,
          a = 0,
          i = 0,
          u = l(w),
          c = u.clientHeight;
        switch ((u == document.body && (c = window.innerHeight), e.keyCode)) {
          case H.up:
            i = -v.arrowScroll;
            break;
          case H.down:
            i = v.arrowScroll;
            break;
          case H.spacebar:
            (r = e.shiftKey ? 1 : -1), (i = -r * c * 0.9);
            break;
          case H.pageup:
            i = 0.9 * -c;
            break;
          case H.pagedown:
            i = 0.9 * c;
            break;
          case H.home:
            i = -u.scrollTop;
            break;
          case H.end:
            var d = u.scrollHeight - u.scrollTop - c;
            i = d > 0 ? d + 10 : 0;
            break;
          case H.left:
            a = -v.arrowScroll;
            break;
          case H.right:
            a = v.arrowScroll;
            break;
          default:
            return !0;
        }
        o(u, a, i), e.preventDefault();
      }
      function a(e) {
        w = e.target;
      }
      function i(e, t) {
        for (var o = e.length; o--; ) z[N(e[o])] = t;
        return t;
      }
      function l(e) {
        var t = [],
          o = S.scrollHeight;
        do {
          var n = z[N(e)];
          if (n) return i(t, n);
          if ((t.push(e), o === e.scrollHeight)) {
            if (!y || S.clientHeight + 10 < o) return i(t, document.body);
          } else if (
            e.clientHeight + 10 < e.scrollHeight &&
            ((overflow = getComputedStyle(e, "").getPropertyValue(
              "overflow-y"
            )),
            "scroll" === overflow || "auto" === overflow)
          )
            return i(t, e);
        } while ((e = e.parentNode));
      }
      function u(e, t, o) {
        window.addEventListener(e, t, o || !1);
      }
      function c(e, t, o) {
        window.removeEventListener(e, t, o || !1);
      }
      function s(e, t) {
        return (e.nodeName || "").toLowerCase() === t.toLowerCase();
      }
      function d(e, t) {
        (e = e > 0 ? 1 : -1),
          (t = t > 0 ? 1 : -1),
          (k.x !== e || k.y !== t) && ((k.x = e), (k.y = t), (M = []), (C = 0));
      }
      function f(e) {
        if (e) {
          (e = Math.abs(e)), D.push(e), D.shift(), clearTimeout(A);
          var t = D[0] == D[1] && D[1] == D[2],
            o = h(D[0], 120) && h(D[1], 120) && h(D[2], 120);
          return !(t || o);
        }
      }
      function h(e, t) {
        return Math.floor(e / t) == e / t;
      }
      function m(e) {
        var t, o, n;
        return (
          (e *= v.pulseScale),
          1 > e
            ? (t = e - (1 - Math.exp(-e)))
            : ((o = Math.exp(-1)),
              (e -= 1),
              (n = 1 - Math.exp(-e)),
              (t = o + n * (1 - o))),
          t * v.pulseNormalize
        );
      }
      function p(e) {
        return e >= 1
          ? 1
          : 0 >= e
          ? 0
          : (1 == v.pulseNormalize && (v.pulseNormalize /= m(1)), m(e));
      }
      var settings = $.extend(
        {
          frameRate: 60,
          animationTime: 1000,
          stepSize: 120,
          pulseAlgorithm: !0,
          pulseScale: 8,
          pulseNormalize: 1,
          accelerationDelta: 20,
          accelerationMax: 1,
          keyboardSupport: !0,
          arrowScroll: 50,
          touchpadSupport: !0,
          fixedBackground: !0,
        },
        options
      );
      var w,
        g = {
          frameRate: settings.frameRate,
          animationTime: settings.animationTime,
          stepSize: settings.stepSize,
          pulseAlgorithm: settings.pulseAlgorithm,
          pulseScale: settings.pulseScale,
          pulseNormalize: settings.pulseNormalize,
          accelerationDelta: settings.accelerationDelta,
          accelerationMax: settings.accelerationMax,
          keyboardSupport: settings.keyboardSupport,
          arrowScroll: settings.arrowScroll,
          touchpadSupport: settings.touchpadSupport,
          fixedBackground: settings.fixedBackground,
          excluded: "",
        },
        v = g,
        b = !1,
        y = !1,
        k = { x: 0, y: 0 },
        x = !1,
        S = document.documentElement,
        D = [120, 120, 120],
        H = {
          left: 37,
          up: 38,
          right: 39,
          down: 40,
          spacebar: 32,
          pageup: 33,
          pagedown: 34,
          end: 35,
          home: 36,
        },
        v = g,
        M = [],
        T = !1,
        C = +new Date(),
        z = {};
      setInterval(function () {
        z = {};
      }, 1e4);
      var A,
        N = (function () {
          var e = 0;
          return function (t) {
            return t.uniqueID || (t.uniqueID = e++);
          };
        })(),
        E = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (e, t, o) {
              window.setTimeout(e, o || 1e3 / 60);
            }
          );
        })(),
        K = /chrome|iPad/i.test(window.navigator.userAgent),
        L = "onmousewheel" in document;
      L && K && (u("mousedown", a), u("mousewheel", n), u("load", t));
    })();
  };
})(jQuery);

(function () {
  var b, f;
  b = this.jQuery || window.jQuery;
  f = b(window);
  b.fn.stick_in_parent = function (d) {
    var A, w, J, n, B, K, p, q, k, E, t;
    null == d && (d = {});
    t = d.sticky_class;
    B = d.inner_scrolling;
    E = d.recalc_every;
    k = d.parent;
    q = d.offset_top;
    p = d.spacer;
    w = d.bottoming;
    null == q && (q = 0);
    null == k && (k = void 0);
    null == B && (B = !0);
    null == t && (t = "is_stuck");
    A = b(document);
    null == w && (w = !0);
    J = function (a, d, n, C, F, u, r, G) {
      var v, H, m, D, I, c, g, x, y, z, h, l;
      if (!a.data("sticky_kit")) {
        a.data("sticky_kit", !0);
        I = A.height();
        g = a.parent();
        null != k && (g = g.closest(k));
        if (!g.length) throw "failed to find stick parent";
        v = m = !1;
        (h = null != p ? p && a.closest(p) : b("<div />")) &&
          h.css("position", a.css("position"));
        x = function () {
          var c, f, e;
          if (
            !G &&
            ((I = A.height()),
            (c = parseInt(g.css("border-top-width"), 10)),
            (f = parseInt(g.css("padding-top"), 10)),
            (d = parseInt(g.css("padding-bottom"), 10)),
            (n = g.offset().top + c + f),
            (C = g.height()),
            m &&
              ((v = m = !1),
              null == p && (a.insertAfter(h), h.detach()),
              a
                .css({ position: "", top: "", width: "", bottom: "" })
                .removeClass(t),
              (e = !0)),
            (F = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - q),
            (u = a.outerHeight(!0)),
            (r = a.css("float")),
            h &&
              h.css({
                width: a.outerWidth(!0),
                height: u,
                display: a.css("display"),
                "vertical-align": a.css("vertical-align"),
                float: r,
              }),
            e)
          )
            return l();
        };
        x();
        if (u !== C)
          return (
            (D = void 0),
            (c = q),
            (z = E),
            (l = function () {
              var b, l, e, k;
              if (
                !G &&
                ((e = !1),
                null != z && (--z, 0 >= z && ((z = E), x(), (e = !0))),
                e || A.height() === I || x(),
                (e = f.scrollTop()),
                null != D && (l = e - D),
                (D = e),
                m
                  ? (w &&
                      ((k = e + u + c > C + n),
                      v &&
                        !k &&
                        ((v = !1),
                        a
                          .css({ position: "fixed", bottom: "", top: c })
                          .trigger("sticky_kit:unbottom"))),
                    e < F &&
                      ((m = !1),
                      (c = q),
                      null == p &&
                        (("left" !== r && "right" !== r) || a.insertAfter(h),
                        h.detach()),
                      (b = { position: "", width: "", top: "" }),
                      a.css(b).removeClass(t).trigger("sticky_kit:unstick")),
                    B &&
                      ((b = f.height()),
                      u + q > b &&
                        !v &&
                        ((c -= l),
                        (c = Math.max(b - u, c)),
                        (c = Math.min(q, c)),
                        m && a.css({ top: c + "px" }))))
                  : e > F &&
                    ((m = !0),
                    (b = { position: "fixed", top: c }),
                    (b.width =
                      "border-box" === a.css("box-sizing")
                        ? a.outerWidth() + "px"
                        : a.width() + "px"),
                    a.css(b).addClass(t),
                    null == p &&
                      (a.after(h),
                      ("left" !== r && "right" !== r) || h.append(a)),
                    a.trigger("sticky_kit:stick")),
                m && w && (null == k && (k = e + u + c > C + n), !v && k))
              )
                return (
                  (v = !0),
                  "static" === g.css("position") &&
                    g.css({ position: "relative" }),
                  a
                    .css({ position: "absolute", bottom: d, top: "auto" })
                    .trigger("sticky_kit:bottom")
                );
            }),
            (y = function () {
              x();
              return l();
            }),
            (H = function () {
              G = !0;
              f.off("touchmove", l);
              f.off("scroll", l);
              f.off("resize", y);
              b(document.body).off("sticky_kit:recalc", y);
              a.off("sticky_kit:detach", H);
              a.removeData("sticky_kit");
              a.css({ position: "", bottom: "", top: "", width: "" });
              g.position("position", "");
              if (m)
                return (
                  null == p &&
                    (("left" !== r && "right" !== r) || a.insertAfter(h),
                    h.remove()),
                  a.removeClass(t)
                );
            }),
            f.on("touchmove", l),
            f.on("scroll", l),
            f.on("resize", y),
            b(document.body).on("sticky_kit:recalc", y),
            a.on("sticky_kit:detach", H),
            setTimeout(l, 0)
          );
      }
    };
    n = 0;
    for (K = this.length; n < K; n++) (d = this[n]), J(b(d));
    return this;
  };
}.call(this));

!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      a.each(
        ["onResize", "onThrottledResize"],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Type = { Event: "event", State: "state" }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: "auto",
              "margin-left": d ? b : "",
              "margin-right": d ? "" : b,
            };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = "",
            i = "";
          for (g /= 2; g--; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i);
          (this._clones = b),
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              "padding-left": a || "",
              "padding-right": a || "",
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass("active"),
            this.settings.center &&
              (this.$stage.children(".center").removeClass("center"),
              this.$stage.children().eq(this.current()).addClass("center"));
        },
      },
    ]),
    (e.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var b, c, e;
        (b = this.$element.find("img")),
          (c = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (e = this.$element.children(c).width()),
          b.length && e <= 0 && this.preloadAutoWidthImages(b);
      }
      this.$element.addClass(this.options.loadingClass),
        (this.$stage = a(
          "<" +
            this.settings.stageElement +
            ' class="' +
            this.settings.stageClass +
            '"/>'
        ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.$element.is(":visible")
          ? this.refresh()
          : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          "function" == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.$element.is(":visible") &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + ".owl.core",
          a.proxy(this.onTransitionEnd, this)
        ),
        this.settings.responsive !== !1 &&
          this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            a.proxy(this.onDragEnd, this)
          ));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is("animating") &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          "mouseup.owl.core touchend.owl.core",
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          "mousemove.owl.core touchmove.owl.core",
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on(
              "mousemove.owl.core touchmove.owl.core",
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is("dragging") &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (e.prototype.closest = function (b, c) {
      var d = -1,
        e = 30,
        f = this.width(),
        g = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            g,
            a.proxy(function (a, h) {
              return (
                "left" === c && b > h - e && b < h + e
                  ? (d = a)
                  : "right" === c && b > h - f - e && b < h - f + e
                  ? (d = a + 1)
                  : this.op(b, "<", h) &&
                    this.op(b, ">", g[a + 1] || h - f) &&
                    (d = "left" === c ? a + 1 : a),
                d === -1
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", g[this.minimum()])
            ? (d = b = this.minimum())
            : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
        d
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"), this.trigger("translate")),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px,0px)",
              transition: this.speed() / 1e3 + "s",
            })
          : c
          ? this.$stage.animate(
              { left: b + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + "px" });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        "string" === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)),
        a !== d &&
          ((this._speed = 0),
          (this._current = a),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(a)),
          this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        for (
          b = this._items.length,
            c = this._items[--b].width(),
            d = this.$element.width();
          b-- &&
          ((c += this._items[b].width() + this.settings.margin), !(c > d));

        );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h),
          d !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.$element.is(":visible") && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave("animating"), this.trigger("translated");
    }),
    (e.prototype.viewport = function () {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn("Can not detect viewport width."),
        d
      );
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)),
        a !== d &&
          (this.trigger("remove", { content: this._items[a], position: a }),
          this._items[a].remove(),
          this._items.splice(a, 1),
          this._mergers.splice(a, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter("pre-loading"),
            (c = a(c)),
            a(new Image())
              .one(
                "load",
                a.proxy(function (a) {
                  c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        this.settings.responsive !== !1 &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : a < c;
        case ">":
          return d ? a < c : a > c;
        case ">=":
          return d ? a <= c : a >= c;
        case "<=":
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        j = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            "function" == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && a.namespace.indexOf("owl") !== -1)
              ? a.namespace && a.namespace.indexOf("owl") > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data("owl.carousel");
        f ||
          ((f = new e(this, "object" == typeof b && b)),
          d.data("owl.carousel", f),
          a.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + ".owl.carousel.core",
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f)
                );
            }
          )),
          "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              )
                for (
                  var c = this._core.settings,
                    e = (c.center && Math.ceil(c.items / 2)) || c.items,
                    f = (c.center && e * -1) || 0,
                    g =
                      (b.property && b.property.value !== d
                        ? b.property.value
                        : this._core.current()) + f,
                    h = this._core.clones().length,
                    i = a.proxy(function (a, b) {
                      this.load(b);
                    }, this);
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        "background-image": 'url("' + g + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              "position" == a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.$stage.children().toArray().slice(b, c),
          e = [],
          f = 0;
        a.each(d, function (b, c) {
          e.push(a(c).height());
        }),
          (f = Math.max.apply(null, e)),
          this._core.$stage
            .parent()
            .height(f)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr("data-vimeo-id")
              ? "vimeo"
              : a.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
          })(),
          d =
            a.attr("data-vimeo-id") ||
            a.attr("data-youtube-id") ||
            a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"'
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (a) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? '<div class="owl-video-tn ' +
                  j +
                  '" ' +
                  i +
                  '="' +
                  a +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  a +
                  ')"></div>'),
              b.after(d),
              b.after(e);
          };
        if (
          (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type
          ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
          : "vimeo" === c.type
          ? a.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a[0].thumbnail_large), l(f);
              },
            })
          : "vzaar" === c.type &&
            a.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a.framegrab_url), l(f);
              },
            });
      }),
      (e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          "youtube" === f.type
            ? (c =
                '<iframe width="' +
                g +
                '" height="' +
                h +
                '" src="//www.youtube.com/embed/' +
                f.id +
                "?autoplay=1&rel=0&v=" +
                f.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === f.type
            ? (c =
                '<iframe src="//player.vimeo.com/video/' +
                f.id +
                '?autoplay=1" width="' +
                g +
                '" height="' +
                h +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : "vzaar" === f.type &&
              (c =
                '<iframe frameborder="0"height="' +
                h +
                '"width="' +
                g +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                f.id +
                '/player?autoplay=true"></iframe>'),
          a('<div class="owl-video-frame">' + c + "</div>").insertAfter(
            e.find(".owl-video")
          ),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            a.proxy(function (a) {
              a.namespace && (this.swapping = "translated" == a.type);
            }, this),
          "translate.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass("animated owl-animated-in")
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                "position" === a.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype.play = function (a, b) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (e.prototype._getNextTimeout = function (d, e) {
        return (
          this._timeout && b.clearTimeout(this._timeout),
          b.setTimeout(
            a.proxy(function () {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                c.hidden ||
                this._core.next(e || this._core.settings.autoplaySpeed);
            }, this),
            d || this._core.settings.autoplayTimeout
          )
        );
      }),
      (e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          (b.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a("<div>")
                .addClass(c.dotClass)
                .append(a("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "div",
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || "page" == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (c) {
            c.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e("transform");
        },
        csstransforms3d: function () {
          return !!e("perspective");
        },
        csstransitions: function () {
          return !!e("transition");
        },
        cssanimations: function () {
          return !!e("animation");
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);
(function ($) {
  $(window).on("load", function () {
    $(document).scrollzipInit();
    $(document).rollerInit();
  });
  $(window).on("load scroll resize", function () {
    $(".numscroller").scrollzip({
      showFunction: function () {
        numberRoller($(this).attr("data-slno"));
      },
      wholeVisible: false,
    });
  });
  $.fn.scrollzipInit = function () {
    $("body").prepend(
      "<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>"
    );
  };
  $.fn.rollerInit = function () {
    var i = 0;
    $(".numscroller").each(function () {
      i++;
      $(this).attr("data-slno", i);
      $(this).addClass("roller-title-number-" + i);
    });
  };
  $.fn.scrollzip = function (options) {
    var settings = $.extend(
      {
        showFunction: null,
        hideFunction: null,
        showShift: 0,
        wholeVisible: false,
        hideShift: 0,
      },
      options
    );
    return this.each(function (i, obj) {
      $(this).addClass("scrollzip");
      if ($.isFunction(settings.showFunction)) {
        if (
          !$(this).hasClass("isShown") &&
          $(window).outerHeight() +
            $("#scrollzipPoint").offset().top -
            settings.showShift >
            $(this).offset().top +
              (settings.wholeVisible ? $(this).outerHeight() : 0) &&
          $("#scrollzipPoint").offset().top +
            (settings.wholeVisible ? $(this).outerHeight() : 0) <
            $(this).outerHeight() + $(this).offset().top - settings.showShift
        ) {
          $(this).addClass("isShown");
          settings.showFunction.call(this);
        }
      }
      if ($.isFunction(settings.hideFunction)) {
        if (
          $(this).hasClass("isShown") &&
          ($(window).outerHeight() +
            $("#scrollzipPoint").offset().top -
            settings.hideShift <
            $(this).offset().top +
              (settings.wholeVisible ? $(this).outerHeight() : 0) ||
            $("#scrollzipPoint").offset().top +
              (settings.wholeVisible ? $(this).outerHeight() : 0) >
              $(this).outerHeight() + $(this).offset().top - settings.hideShift)
        ) {
          $(this).removeClass("isShown");
          settings.hideFunction.call(this);
        }
      }
      return this;
    });
  };
  function numberRoller(slno) {
    var min = $(".roller-title-number-" + slno).attr("data-min");
    var max = $(".roller-title-number-" + slno).attr("data-max");
    var timediff = $(".roller-title-number-" + slno).attr("data-delay");
    var increment = $(".roller-title-number-" + slno).attr("data-increment");
    var numdiff = max - min;
    var timeout = (timediff * 1000) / numdiff;
    numberRoll(slno, min, max, increment, timeout);
  }
  function numberRoll(slno, min, max, increment, timeout) {
    if (min <= max) {
      $(".roller-title-number-" + slno).html(min);
      min = parseInt(min) + parseInt(increment);
      setTimeout(function () {
        numberRoll(
          eval(slno),
          eval(min),
          eval(max),
          eval(increment),
          eval(timeout)
        );
      }, timeout);
    } else {
      $(".roller-title-number-" + slno).html(max);
    }
  }
})(jQuery);
(function ($) {
  $(document).ready(function () {
    $(window).on("load", function () {
      var y = $(window).scrollTop();
      $(window).scrollTop(y + 1);
      $("#status").fadeOut();
      // $("#preloader").delay(10).slideUp("slow");
      $("body").delay(200).css({ overflow: "visible" });
      $(
        ".headerSection-body p, .headerSection-body h1, .headercta, .homeTopSection-title, .homeTopSection-image img, .homeTopSection-text p, .homeMidSection-body-text .labelTitle, .homeMidSection-body-text .labelText, .homeCounter-tag .num, .homeBottomSection-right-text, .homeBottomSection-right-logo, .homeBottomSection-left-image, .subSection .subscribe .subArrow, .footer-page li, .headerPage header .headerBack h2, .headerPage header .headerBack h1, .solutions-right h2 span, .solutions-right h2 .solutionimg, .accordion h3, .tabcontent p, .solutions-left ol li, .featureCard, .bottomSection h3, .event-card, .event-card-body-footer, .event-header-title h1, .moreNews h2, .event-body-text p, .post-header-date, .post-header-title h1, .post-body-text h3, .post-body-text p, .job,  .map-section .form-section form input, .map-section .form-section form textarea, .map-section .tabs-section > ul > li, .map-section .tabs-section, .careers-section-applicationForm-form input, .careers-section-applicationForm-form textarea, .about-intro h2, .about-intro .intro-text p, .about-vision .vision-item h4, .vision-text, .about-more .more-text p, .about-more .more-text ul, .about-more .more-text ol li, .about-strategy .strategy-text h2, .about-strategy .strategy-text p"
      ).each(function () {
        $(this).addClass("wow fadeInUp");
      });
      $(
        ".homeCounter-tag .name, .subSection .subscribe h3, .filtersitems .item.visible, .featureCardInverted, .mainTitle, .careers-section-vacancies h2, .careers-section-applicationForm h2, .demoApplicationForm-right h2, .demoApplicationForm-right h3, .demoApplicationForm-left h2"
      ).each(function () {
        $(this).addClass("wow fadeInDown");
      });
      $(
        ".headerSection-image, .homeMidSection-body-header h3, .event-card-body-date, .event-header-date, .post-image, .about-intro .intro-img img"
      ).each(function () {
        $(this).addClass("wow fadeIn");
      });
      $(".homeTopSection-text button, .clients .clients-left li").each(
        function () {
          $(this).addClass("wow fadeInLeft");
        }
      );
      $(
        ".headerSection-image, .homeTopSection-image img, .homeMidSection-body-header h3, .homeMidSection-body-text, .homeMidSection-body-text .labelTitle, .homeBottomSection-right-logo, .subSection .subscribe h3, .headerPage header .headerBack h2, .clients .clients-left li, .featureCard, .midSection-right h3, .bottomSection h3, .mainTitle, .event-header-title h1, .moreNews h2, .post-image, .post-header-date, .post-body-text h3, .post-body-text p, .map-section .tabs-section, .solutions-right h2 span, .about-intro h2, .about-vision .vision-item.vision h4, .about-more .more-text p, .about-more .more-text ul, .about-more .more-text ol li, .about-strategy .strategy-text h2"
      ).each(function () {
        $(this).attr("data-wow-delay", "0.3s");
      });
      $(
        ".headerSection-body p, .homeMidSection-body-text .labelText, .homeBottomSection-right-text, .subSection .subscribe .subArrow, .headerPage header .headerBack h1, .midSection-right-body, .event-card, .event-body-text p, .post-header-title h1, .careers-section-vacancies h2, .careers-section-applicationForm h2, input, textarea, .demoApplicationForm-right h2, .demoApplicationForm-right h3, .demoApplicationForm-left h2, .about-intro .intro-img img, .about-intro .intro-text p, .vision-text, .about-strategy .strategy-text p"
      ).each(function () {
        $(this).attr("data-wow-delay", "0.6s");
      });
      $(
        ".headerSection-body h1, .homeTopSection-text p, .homeMidSection-body-text button, .homeCounter-tag .name, .homeBottomSection-left-image, .event-card-body-footer, .map-section .tabs-section ul li, .solutions-right h2 .solutionimg"
      ).each(function () {
        $(this).attr("data-wow-delay", "0.9s");
      });
      $(
        ".headercta, .homeTopSection-title, .homeTopSection-text button, .event-header-date"
      ).each(function () {
        $(this).attr("data-wow-delay", "1.2s");
      });
      $(".event-card-body-date").each(function () {
        $(this).attr("data-wow-delay", "1.5s");
      });
      $(
        ".homeMidSection-body-header h3, .subSection .subscribe h3, .event-header-date"
      ).each(function () {
        $(this).attr("data-wow-duration", "1s");
      });
      $(
        ".homeTopSection-image img, .homeMidSection-body-header h3, .midSection-right h3, .post-image, .about-intro .intro-img img"
      ).each(function () {
        $(this).attr("data-wow-duration", "1.5s");
      });
      var delay = 0.4;
      $(".footer-page .footer-page-header > ul > li").each(function () {
        $(this).attr("data-wow-delay", "" + delay + "s");
        delay = delay + 0.1;
      });
      delay = 0.4;
      $(".filtersitems .item.active").each(function (n) {
        $(this).attr("data-wow-delay", "" + delay + "s");
        delay = delay + 0.1;
        if (delay > 0.7) {
          delay = 0.4;
        }
        console.log(delay);
      });
      delay = 0.4;
      $(".featureCardInverted").each(function () {
        $(this).attr("data-wow-delay", "" + delay + "s");
        delay = delay + 0.1;
      });
      $(".vision-item.vision h4").each(function () {});
      new WOW().init();
      $(".midSection-right").stick_in_parent();
    });
    $("html").easeScroll();
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $(".headerSection").css({ height: winHeight });
    $(window).resize(function () {
      $(".headerSection").css({ height: winHeight });
    });
    $(".headerSection-body-bottom").click(function () {
      $([document.documentElement, document.body]).animate(
        { scrollTop: $(".homeTopSection").offset().top },
        1400
      );
    });
    $.fn.moveIt = function () {
      var $window = $(window);
      var instances = [];
      $(this).each(function () {
        instances.push(new moveItItem($(this)));
      });
      window.addEventListener(
        "scroll",
        function () {
          var scrollTop = $window.scrollTop();
          instances.forEach(function (inst) {
            inst.update(scrollTop);
          });
        },
        { passive: true }
      );
    };
    var moveItItem = function (el) {
      this.el = $(el);
      this.speed = parseInt(this.el.attr("data-scroll-speed"));
    };
    moveItItem.prototype.update = function (scrollTop) {
      this.el.css(
        "transform",
        "translateY(" + -(scrollTop / this.speed) + "px)"
      );
    };
    $(function () {
      $("[data-scroll-speed]").moveIt();
    });
    $(
      ".homeMidSection-body-text button, .homeBottomSection-left-label, .solutions-left, .about-intro .intro-img"
    ).attr("data-scroll-speed", "9");
    $(".homeTopSection-image").attr("data-scroll-speed", "7");
    $(".map-section .form-section").attr("data-scroll-speed", "5");
    $(".about-intro h2").attr("data-scroll-speed", "3");
    $(window).resize(function () {
      if ($(window).width() >= 550) {
        $(".about-vision .vision-item.vision").attr("data-scroll-speed", "5");
        $(".about-more .more-img").attr("data-scroll-speed", "9");
      } else {
        $(".about-vision .vision-item.vision, .about-more .more-img").attr(
          "data-scroll-speed",
          ""
        );
      }
    });
    if ($(window).width() >= 550) {
      $(".about-vision .vision-item.vision").attr("data-scroll-speed", "5");
      $(".about-more .more-img").attr("data-scroll-speed", "9");
    } else {
      $(".about-vision .vision-item.vision, .about-more .more-img").attr(
        "data-scroll-speed",
        ""
      );
    }
    $(".headerslider").each(function () {
      $(this).owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        dots: true,
        autoplayTimeout: 10000,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
        smartSpeed: 1200,
      });
    });
    $(".homeslider").each(function () {
      $(this).owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        dots: true,
        autoplayTimeout: 10000,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
        smartSpeed: 1200,
      });
    });
    $(".featuresslider .slide").each(function (n) {
      var num = n + 1;
      $(this).find(".labelNumber").text(num);
    });
    $(".featuresslider").each(function () {
      $(this).owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        dots: true,
        autoplayTimeout: 10000,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
        smartSpeed: 1200,
      });
    });
    $(".testslider").each(function () {
      $(this).owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        dots: true,
        autoplayTimeout: 10000,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
        smartSpeed: 1200,
      });
    });
    $(".techslider").each(function () {
      $(this).owlCarousel({
        loop: true,
        margin: 17,
        nav: false,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3000,
        responsive: { 0: { items: 1 }, 800: { items: 2 }, 1000: { items: 3 } },
        smartSpeed: 800,
      });
    });
    $(".interfaceslider").each(function () {
      $(this).owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        dots: true,
        autoplayTimeout: 2000,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
        smartSpeed: 700,
      });
    });
    $(".homeCounter-tag .num").each(function (n) {
      var maxn = $.trim($(this).text());
      var inc = 30;
      if (n == 0) {
        inc = "3";
      } else if (n == 1) {
        inc = "30";
      } else {
        inc = "1";
      }
      $(this)
        .addClass("numscroller")
        .attr("data-min", "1")
        .attr("data-max", maxn)
        .attr("data-delay", "1")
        .attr("data-increment", inc);
    });
    $(".tabslinks").each(function () {
      $(this).clone().addClass("responvetabs").appendTo($(this).parent());
      $('<div class="tabstitle"></div>').prependTo($(this).parent());
    });
    $(".tabslinks.responvetabs").slideUp();
    $(".tabslinks li a").attr("href", "");
    $(".tabslinks li a, .responvetabs li a").click(function () {
      var t = $(this).attr("data-target");
      $(".tabs > div").removeClass("active");
      $(t).addClass("active");
      $(".tabslinks li").removeClass("active");
      $(this).parent().addClass("active");
      var txt = $(this).parent().parent().find(".active > a").text();
      $(".tabstitle").text(txt);
      $(".tabslinks.responvetabs").slideUp();
      return false;
      $([document.documentElement, document.body]).animate(
        { scrollTop: $(".solutions").offset().top },
        700
      );
    });
    $(".tabslinks li:first-child, .tabs > div:first-child").addClass("active");
    if (location.hash != "") {
      var t = location.hash;
      $(".tabs > div").removeClass("active");
      $(t).addClass("active");
      $(".tabslinks li").removeClass("active");
      $('.tabslinks [data-target="' + t + '"]')
        .parent()
        .addClass("active");
      var txt = $(this).parent().parent().find(".active > a").text();
      $(".tabstitle").text(txt);
      $(".tabslinks.responvetabs").slideUp();
    }
    $(window).bind("hashchange", function () {
      setTimeout(function () {
        scrollTop: $(".solutions").offset().top;
      }, 0.1);
      $([document.documentElement, document.body]).animate(
        { scrollTop: $(".solutions").offset().top },
        700
      );
      var t = location.hash;
      $(".tabs > div").removeClass("active");
      $(t).addClass("active");
      $(".tabslinks li").removeClass("active");
      $('.tabslinks [data-target="' + t + '"]')
        .parent()
        .addClass("active");
      var txt = $(this).parent().parent().find(".active > a").text();
      $(".tabstitle").text(txt);
      $(".tabslinks.responvetabs").slideUp();
    });
    $(".tabslinks.responvetabs").each(function () {
      var t = $(this).find(".active").text();
      $(".tabstitle").text(t);
    });
    $(".tabslinks.responvetabs").slideUp();
    $(".tabstitle").click(function () {
      $(".tabslinks.responvetabs").slideToggle();
    });
    $(".accordion .item .itemcontent").slideUp();
    $(".accordion .item h3:not(.active)").click(function () {
      $(".itemcontent")
        .not($(this).parent().find($(".itemcontent")))
        .slideUp();
      $(this).parent().find($(".itemcontent")).slideToggle();
      $(this).toggleClass("active");
      $(".accordion .item h3").not(this).removeClass("active");
    });
    $(".filterslinks > li > a").click(function () {
      var c = $(this).attr("data-target");
      $(".filtersitems .item").removeClass("visible");
      $(".filtersitems .item").removeClass("active");
      $(".filtersitems .item." + c).addClass("active");
      setTimeout(function () {
        $(".filtersitems .item." + c).addClass("visible");
      }, 300);
      $(this).parent().addClass("active");
      $(".filterslinks > li").not($(this).parent()).removeClass("active");
    });
    $(".filterslinks > li:first-child").each(function () {
      var c = $(this).find("a").attr("data-target");
      $(this).addClass("active");
      $("." + c).addClass("active");
      $("." + c).addClass("visible");
    });
    if ($(window).width() > 850) {
      $(".navBar").wrap('<div class="navwrapper"></div>');
      $(".navBar").addClass("show");
      $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
          $("#gotop").addClass("show");
          $(".navBar").removeClass("show");
        } else {
          $("#gotop").removeClass("show");
          $(".navBar").addClass("show");
        }
      });
      $("#gotop").click(function () {
        $(".navBar").addClass("show");
        $(this).removeClass("show");
      });
    } else {
      $(".navBar").addClass("show");
      $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
          $(".navBar").addClass("mobile");
        } else {
          $(".navBar").removeClass("mobile");
        }
      });
    }
    $(".job .jobcontent").slideUp();
    $(".job details").click(function () {
      $(this).parent().find($(".jobcontent")).slideToggle();
    });
    $(".applyBtn").click(function () {
      var t = $(this).parent().parent().find("details summary > div").text();
      $(".careers-section-applicationForm-form form .postion").val(t);
      $([document.documentElement, document.body]).animate(
        { scrollTop: $("form").offset().top },
        500
      );
      return false;
    });
    $("header").prepend(
      '<div class="responsivenav"><div class="responsivenav-content"></div></div>'
    );
    $(
      ".navBar .navBar-buttons-langBtn, .navBar .navBar-menu, .navBar .navBar-buttons-demo, .footer-page-header"
    )
      .clone()
      .appendTo(".responsivenav .responsivenav-content");
    $(".responsivenav .responsivenav-content").append(
      '<div class="close"></div>'
    );
    $(".responsivenav .responsivenav-content ul > li > ul").slideUp();
    $(
      ".responsivenav .responsivenav-content li.menu-item-has-children > a"
    ).attr("href", "#sub");
    $(".responsivenav .responsivenav-content li.menu-item-has-children").click(
      function () {
        $(this).find("> ul").slideToggle();
      }
    );
    $(".responsivenav .responsivenav-content .close").click(function () {
      $(this).parent().parent().removeClass("show");
    });
    $(".navBar-buttons").append(
      '<div class="navBar-buttons-demo responsive-menu"><a href="#menu"></a></div>'
    );
    var rmenutext = $("#gotop span").text();
    $(".navBar-buttons .responsive-menu a").text(rmenutext);
    $(".responsive-menu a").click(function () {
      $(".responsivenav").addClass("show");
    });
    $(".midSection-left")
      .clone()
      .prependTo($(".midSection"))
      .addClass("responsivefeatures")
      .addClass("owl-carousel");
    $(".responsivefeatures").each(function () {
      $(this).owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        autoplay: true,
        dots: false,
        autoplayTimeout: 2000,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
        smartSpeed: 700,
      });
    });
    $(".map-section .tabs-section label").click(function () {
      $(".map-section .tabs-section label").removeClass("active");
      $(this).addClass("active");
    });
    $(".map-section .tabs-section label:nth-child(2)").addClass("active");
    $(".headerSection").each(function () {
      $(this)
        .find(".headerSection-body-button > span a")
        .addClass("headercta")
        .clone()
        .insertAfter($(this).find(".headerSection-body h1"))
        .wrapInner("<span></span>");
      $(this).find(".headerSection-body-button").remove();
    });
    $(".container > h6").addClass("breadCrumbNav");
    $(
      ".footer-page-header > ul, .footer-page-bottom-socials, .questions-left, .navBar-menu ul li ul"
    ).append('<div class="clr"></div>');
    $(".page-numbers .page-numbers.current")
      .addClass("pagination-link")
      .addClass("is-current");
    $(".page-numbers .page-numbers").addClass("pagination-link");
    $(".map-section .tabs-section label").click(function () {
      var m = $(this).attr("data-map");
      $(".map iframe").attr("src", m);
    });
  });
})(jQuery);
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
// gtag("js", new Date());
// gtag("config", "UA-57177100-1");
// var Tawk_API = Tawk_API || {};
// var Tawk_LoadStart = new Date();
// (function () {
//   var s1 = document.createElement("script"),
//     s0 = document.getElementsByTagName("script")[0];
//   s1.async = true;
//   s1.src = "https://embed.tawk.to/5d6c19cc77aa790be331de8e/default";
//   s1.charset = "UTF-8";
//   s1.setAttribute("crossorigin", "*");
//   s0.parentNode.insertBefore(s1, s0);
// })();
// var wpcf7 = {
//   api: {
//     root: "https://exceed-erp.com/wp-json/",
//     namespace: "contact-form-7/v1",
//   },
//   cached: "1",
// };

  // !(function () {
  //   "use strict";
  //   const e = (e) => Math.abs(parseInt(e, 10)),
  //     t = (e, t) => {
  //       const r = new Map([
  //         ["init", "init"],
  //         ["validation_failed", "invalid"],
  //         ["acceptance_missing", "unaccepted"],
  //         ["spam", "spam"],
  //         ["aborted", "aborted"],
  //         ["mail_sent", "sent"],
  //         ["mail_failed", "failed"],
  //         ["submitting", "submitting"],
  //         ["resetting", "resetting"],
  //         ["payment_required", "payment-required"],
  //       ]);
  //       r.has(t) && (t = r.get(t)),
  //         Array.from(r.values()).includes(t) ||
  //           (t = `custom-${(t = (t = t
  //             .replace(/[^0-9a-z]+/i, " ")
  //             .trim()).replace(/\s+/, "-"))}`);
  //       const n = e.getAttribute("data-status");
  //       return (
  //         (e.wpcf7.status = t),
  //         e.setAttribute("data-status", t),
  //         e.classList.add(t),
  //         n && n !== t && e.classList.remove(n),
  //         t
  //       );
  //     },
  //     r = (e, t, r) => {
  //       const n = new CustomEvent(`wpcf7${t}`, { bubbles: !0, detail: r });
  //       "string" == typeof e && (e = document.querySelector(e)),
  //         e.dispatchEvent(n);
  //     },
  //     n = (e) => {
  //       const { root: t, namespace: r = "contact-form-7/v1" } = wpcf7.api;
  //       return a.reduceRight(
  //         (e, t) => (r) => t(r, e),
  //         (e) => {
  //           let n,
  //             a,
  //             {
  //               url: c,
  //               path: s,
  //               endpoint: o,
  //               headers: i,
  //               body: l,
  //               data: p,
  //               ...d
  //             } = e;
  //           "string" == typeof o &&
  //             ((n = r.replace(/^\/|\/$/g, "")),
  //             (a = o.replace(/^\//, "")),
  //             (s = a ? n + "/" + a : n)),
  //             "string" == typeof s &&
  //               (-1 !== t.indexOf("?") && (s = s.replace("?", "&")),
  //               (s = s.replace(/^\//, "")),
  //               (c = t + s)),
  //             (i = { Accept: "application/json, */*;q=0.1", ...i }),
  //             delete i["X-WP-Nonce"],
  //             p &&
  //               ((l = JSON.stringify(p)),
  //               (i["Content-Type"] = "application/json"));
  //           const u = {
  //               code: "fetch_error",
  //               message: "You are probably offline.",
  //             },
  //             f = {
  //               code: "invalid_json",
  //               message: "The response is not a valid JSON response.",
  //             };
  //           return window
  //             .fetch(c || s || window.location.href, {
  //               ...d,
  //               headers: i,
  //               body: l,
  //             })
  //             .then(
  //               (e) =>
  //                 Promise.resolve(e)
  //                   .then((e) => {
  //                     if (e.status >= 200 && e.status < 300) return e;
  //                     throw e;
  //                   })
  //                   .then((e) => {
  //                     if (204 === e.status) return null;
  //                     if (e && e.json)
  //                       return e.json().catch(() => {
  //                         throw f;
  //                       });
  //                     throw f;
  //                   }),
  //               () => {
  //                 throw u;
  //               }
  //             );
  //         }
  //       )(e);
  //     },
  //     a = [];
  //   function c(e) {
  //     let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  //     if (wpcf7.blocked) return s(e), void t(e, "submitting");
  //     const c = new FormData(e);
  //     a.submitter &&
  //       a.submitter.name &&
  //       c.append(a.submitter.name, a.submitter.value);
  //     const o = {
  //         contactFormId: e.wpcf7.id,
  //         pluginVersion: e.wpcf7.pluginVersion,
  //         contactFormLocale: e.wpcf7.locale,
  //         unitTag: e.wpcf7.unitTag,
  //         containerPostId: e.wpcf7.containerPost,
  //         status: e.wpcf7.status,
  //         inputs: Array.from(c, (e) => {
  //           const t = e[0],
  //             r = e[1];
  //           return !t.match(/^_/) && { name: t, value: r };
  //         }).filter((e) => !1 !== e),
  //         formData: c,
  //       },
  //       i = (t) => {
  //         const r = document.createElement("li");
  //         r.setAttribute("id", t.error_id),
  //           t.idref
  //             ? r.insertAdjacentHTML(
  //                 "beforeend",
  //                 `<a href="#${t.idref}">${t.message}</a>`
  //               )
  //             : r.insertAdjacentText("beforeend", t.message),
  //           e.wpcf7.parent
  //             .querySelector(".screen-reader-response ul")
  //             .appendChild(r);
  //       },
  //       l = (t) => {
  //         const r = e.querySelector(t.into),
  //           n = r.querySelector(".wpcf7-form-control");
  //         n.classList.add("wpcf7-not-valid"),
  //           n.setAttribute("aria-describedby", t.error_id);
  //         const a = document.createElement("span");
  //         a.setAttribute("class", "wpcf7-not-valid-tip"),
  //           a.setAttribute("aria-hidden", "true"),
  //           a.insertAdjacentText("beforeend", t.message),
  //           r.appendChild(a),
  //           r.querySelectorAll("[aria-invalid]").forEach((e) => {
  //             e.setAttribute("aria-invalid", "true");
  //           }),
  //           n.closest(".use-floating-validation-tip") &&
  //             (n.addEventListener("focus", (e) => {
  //               a.setAttribute("style", "display: none");
  //             }),
  //             a.addEventListener("mouseover", (e) => {
  //               a.setAttribute("style", "display: none");
  //             }));
  //       };
  //     n({
  //       endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
  //       method: "POST",
  //       body: c,
  //       wpcf7: { endpoint: "feedback", form: e, detail: o },
  //     })
  //       .then((n) => {
  //         const a = t(e, n.status);
  //         return (
  //           (o.status = n.status),
  //           (o.apiResponse = n),
  //           ["invalid", "unaccepted", "spam", "aborted"].includes(a)
  //             ? r(e, a, o)
  //             : ["sent", "failed"].includes(a) && r(e, `mail${a}`, o),
  //           r(e, "submit", o),
  //           n
  //         );
  //       })
  //       .then((t) => {
  //         t.posted_data_hash &&
  //           (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value =
  //             t.posted_data_hash),
  //           "mail_sent" === t.status &&
  //             (e.reset(), (e.wpcf7.resetOnMailSent = !0)),
  //           t.invalid_fields &&
  //             (t.invalid_fields.forEach(i), t.invalid_fields.forEach(l)),
  //           e.wpcf7.parent
  //             .querySelector('.screen-reader-response [role="status"]')
  //             .insertAdjacentText("beforeend", t.message),
  //           e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
  //             e.innerText = t.message;
  //           });
  //       })
  //       .catch((e) => console.error(e));
  //   }
  //   (n.use = (e) => {
  //     a.unshift(e);
  //   }),
  //     n.use((e, n) => {
  //       if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
  //         const { form: n, detail: a } = e.wpcf7;
  //         s(n), r(n, "beforesubmit", a), t(n, "submitting");
  //       }
  //       return n(e);
  //     });
  //   const s = (e) => {
  //     (e.wpcf7.parent.querySelector(
  //       '.screen-reader-response [role="status"]'
  //     ).innerText = ""),
  //       (e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText =
  //         ""),
  //       e.querySelectorAll(".wpcf7-not-valid-tip").forEach((e) => {
  //         e.remove();
  //       }),
  //       e.querySelectorAll("[aria-invalid]").forEach((e) => {
  //         e.setAttribute("aria-invalid", "false");
  //       }),
  //       e.querySelectorAll(".wpcf7-form-control").forEach((e) => {
  //         e.removeAttribute("aria-describedby"),
  //           e.classList.remove("wpcf7-not-valid");
  //       }),
  //       e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
  //         e.innerText = "";
  //       });
  //   };
  //   function o(e) {
  //     const a = new FormData(e),
  //       c = {
  //         contactFormId: e.wpcf7.id,
  //         pluginVersion: e.wpcf7.pluginVersion,
  //         contactFormLocale: e.wpcf7.locale,
  //         unitTag: e.wpcf7.unitTag,
  //         containerPostId: e.wpcf7.containerPost,
  //         status: e.wpcf7.status,
  //         inputs: Array.from(a, (e) => {
  //           const t = e[0],
  //             r = e[1];
  //           return !t.match(/^_/) && { name: t, value: r };
  //         }).filter((e) => !1 !== e),
  //         formData: a,
  //       };
  //     n({
  //       endpoint: `contact-forms/${e.wpcf7.id}/refill`,
  //       method: "GET",
  //       wpcf7: { endpoint: "refill", form: e, detail: c },
  //     })
  //       .then((n) => {
  //         e.wpcf7.resetOnMailSent
  //           ? (delete e.wpcf7.resetOnMailSent, t(e, "mail_sent"))
  //           : t(e, "init"),
  //           (c.apiResponse = n),
  //           r(e, "reset", c);
  //       })
  //       .catch((e) => console.error(e));
  //   }
  //   n.use((e, r) => {
  //     if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
  //       const { form: r, detail: n } = e.wpcf7;
  //       s(r), t(r, "resetting");
  //     }
  //     return r(e);
  //   });
  //   const i = (e, t) => {
  //       for (const r in t) {
  //         const n = t[r];
  //         e.querySelectorAll(`input[name="${r}"]`).forEach((e) => {
  //           e.value = "";
  //         }),
  //           e.querySelectorAll(`img.wpcf7-captcha-${r}`).forEach((e) => {
  //             e.setAttribute("src", n);
  //           });
  //         const a = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
  //         a &&
  //           e
  //             .querySelectorAll(`input[name="_wpcf7_captcha_challenge_${r}"]`)
  //             .forEach((e) => {
  //               e.value = a[1];
  //             });
  //       }
  //     },
  //     l = (e, t) => {
  //       for (const r in t) {
  //         const n = t[r][0],
  //           a = t[r][1];
  //         e.querySelectorAll(`.wpcf7-form-control-wrap.${r}`).forEach((e) => {
  //           (e.querySelector(`input[name="${r}"]`).value = ""),
  //             (e.querySelector(".wpcf7-quiz-label").textContent = n),
  //             (e.querySelector(`input[name="_wpcf7_quiz_answer_${r}"]`).value =
  //               a);
  //         });
  //       }
  //     };
  //   function p(t) {
  //     const r = new FormData(t);
  //     (t.wpcf7 = {
  //       id: e(r.get("_wpcf7")),
  //       status: t.getAttribute("data-status"),
  //       pluginVersion: r.get("_wpcf7_version"),
  //       locale: r.get("_wpcf7_locale"),
  //       unitTag: r.get("_wpcf7_unit_tag"),
  //       containerPost: e(r.get("_wpcf7_container_post")),
  //       parent: t.closest(".wpcf7"),
  //     }),
  //       t.querySelectorAll(".has-spinner").forEach((e) => {
  //         e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>');
  //       }),
  //       ((e) => {
  //         e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t) => {
  //           t.addEventListener("change", (t) => {
  //             const r = t.target.getAttribute("name");
  //             e.querySelectorAll(`input[type="checkbox"][name="${r}"]`).forEach(
  //               (e) => {
  //                 e !== t.target && (e.checked = !1);
  //               }
  //             );
  //           });
  //         });
  //       })(t),
  //       ((e) => {
  //         e.querySelectorAll(".has-free-text").forEach((t) => {
  //           const r = t.querySelector("input.wpcf7-free-text"),
  //             n = t.querySelector('input[type="checkbox"], input[type="radio"]');
  //           (r.disabled = !n.checked),
  //             e.addEventListener("change", (e) => {
  //               (r.disabled = !n.checked),
  //                 e.target === n && n.checked && r.focus();
  //             });
  //         });
  //       })(t),
  //       ((e) => {
  //         e.querySelectorAll(".wpcf7-validates-as-url").forEach((e) => {
  //           e.addEventListener("change", (t) => {
  //             let r = e.value.trim();
  //             r &&
  //               !r.match(/^[a-z][a-z0-9.+-]*:/i) &&
  //               -1 !== r.indexOf(".") &&
  //               ((r = r.replace(/^\/+/, "")), (r = "http://" + r)),
  //               (e.value = r);
  //           });
  //         });
  //       })(t),
  //       ((e) => {
  //         if (
  //           !e.querySelector(".wpcf7-acceptance") ||
  //           e.classList.contains("wpcf7-acceptance-as-validation")
  //         )
  //           return;
  //         const t = () => {
  //           let t = !0;
  //           e.querySelectorAll(".wpcf7-acceptance").forEach((e) => {
  //             if (!t || e.classList.contains("optional")) return;
  //             const r = e.querySelector('input[type="checkbox"]');
  //             ((e.classList.contains("invert") && r.checked) ||
  //               (!e.classList.contains("invert") && !r.checked)) &&
  //               (t = !1);
  //           }),
  //             e.querySelectorAll(".wpcf7-submit").forEach((e) => {
  //               e.disabled = !t;
  //             });
  //         };
  //         t(),
  //           e.addEventListener("change", (e) => {
  //             t();
  //           }),
  //           e.addEventListener("wpcf7reset", (e) => {
  //             t();
  //           });
  //       })(t),
  //       ((t) => {
  //         const r = (t, r) => {
  //             const n = e(t.getAttribute("data-starting-value")),
  //               a = e(t.getAttribute("data-maximum-value")),
  //               c = e(t.getAttribute("data-minimum-value")),
  //               s = t.classList.contains("down")
  //                 ? n - r.value.length
  //                 : r.value.length;
  //             t.setAttribute("data-current-value", s),
  //               (t.innerText = s),
  //               a && a < r.value.length
  //                 ? t.classList.add("too-long")
  //                 : t.classList.remove("too-long"),
  //               c && r.value.length < c
  //                 ? t.classList.add("too-short")
  //                 : t.classList.remove("too-short");
  //           },
  //           n = (e) => {
  //             (e = { init: !1, ...e }),
  //               t.querySelectorAll(".wpcf7-character-count").forEach((n) => {
  //                 const a = n.getAttribute("data-target-name"),
  //                   c = t.querySelector(`[name="${a}"]`);
  //                 c &&
  //                   ((c.value = c.defaultValue),
  //                   r(n, c),
  //                   e.init &&
  //                     c.addEventListener("keyup", (e) => {
  //                       r(n, c);
  //                     }));
  //               });
  //           };
  //         n({ init: !0 }),
  //           t.addEventListener("wpcf7reset", (e) => {
  //             n();
  //           });
  //       })(t),
  //       window.addEventListener("load", (e) => {
  //         wpcf7.cached && t.reset();
  //       }),
  //       t.addEventListener("reset", (e) => {
  //         wpcf7.reset(t);
  //       }),
  //       t.addEventListener("submit", (e) => {
  //         const r = e.submitter;
  //         wpcf7.submit(t, { submitter: r }), e.preventDefault();
  //       }),
  //       t.addEventListener("wpcf7submit", (e) => {
  //         e.detail.apiResponse.captcha && i(t, e.detail.apiResponse.captcha),
  //           e.detail.apiResponse.quiz && l(t, e.detail.apiResponse.quiz);
  //       }),
  //       t.addEventListener("wpcf7reset", (e) => {
  //         e.detail.apiResponse.captcha && i(t, e.detail.apiResponse.captcha),
  //           e.detail.apiResponse.quiz && l(t, e.detail.apiResponse.quiz);
  //       });
  //   }
  //   document.addEventListener("DOMContentLoaded", (e) => {
  //     var t;
  //     if ("undefined" == typeof wpcf7)
  //       return void console.error("wpcf7 is not defined.");
  //     if (void 0 === wpcf7.api)
  //       return void console.error("wpcf7.api is not defined.");
  //     if ("function" != typeof window.fetch)
  //       return void console.error("Your browser doesn't support window.fetch().");
  //     if ("function" != typeof window.FormData)
  //       return void console.error(
  //         "Your browser doesn't support window.FormData()."
  //       );
  //     const r = document.querySelectorAll(".wpcf7 > form");
  //     "function" == typeof r.forEach
  //       ? ((wpcf7 = {
  //           init: p,
  //           submit: c,
  //           reset: o,
  //           ...(null !== (t = wpcf7) && void 0 !== t ? t : {}),
  //         }),
  //         r.forEach((e) => wpcf7.init(e)))
  //       : console.error("Your browser doesn't support NodeList.forEach().");
  //   });
  // })();

/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */ !(function (a, b) {
  if ("function" == typeof define && define.amd)
    define(["module", "exports"], b);
  else if ("undefined" != typeof exports) b(module, exports);
  else {
    var c = { exports: {} };
    b(c, c.exports), (a.WOW = c.exports);
  }
})(this, function (a, b) {
  "use strict";
  function c(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(a, b) {
    return b.indexOf(a) >= 0;
  }
  function e(a, b) {
    for (var c in b)
      if (null == a[c]) {
        var d = b[c];
        a[c] = d;
      }
    return a;
  }
  function f(a) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      a
    );
  }
  function g(a) {
    var b =
        arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
      c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
      d =
        arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
      e = void 0;
    return (
      null != document.createEvent
        ? ((e = document.createEvent("CustomEvent")),
          e.initCustomEvent(a, b, c, d))
        : null != document.createEventObject
        ? ((e = document.createEventObject()), (e.eventType = a))
        : (e.eventName = a),
      e
    );
  }
  function h(a, b) {
    null != a.dispatchEvent
      ? a.dispatchEvent(b)
      : b in (null != a)
      ? a[b]()
      : "on" + b in (null != a) && a["on" + b]();
  }
  function i(a, b, c) {
    null != a.addEventListener
      ? a.addEventListener(b, c, !1)
      : null != a.attachEvent
      ? a.attachEvent("on" + b, c)
      : (a[b] = c);
  }
  function j(a, b, c) {
    null != a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : null != a.detachEvent
      ? a.detachEvent("on" + b, c)
      : delete a[b];
  }
  function k() {
    return "innerHeight" in window
      ? window.innerHeight
      : document.documentElement.clientHeight;
  }
  Object.defineProperty(b, "__esModule", { value: !0 });
  var l,
    m,
    n = (function () {
      function a(a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          (d.enumerable = d.enumerable || !1),
            (d.configurable = !0),
            "value" in d && (d.writable = !0),
            Object.defineProperty(a, d.key, d);
        }
      }
      return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    })(),
    o =
      window.WeakMap ||
      window.MozWeakMap ||
      (function () {
        function a() {
          c(this, a), (this.keys = []), (this.values = []);
        }
        return (
          n(a, [
            {
              key: "get",
              value: function (a) {
                for (var b = 0; b < this.keys.length; b++) {
                  var c = this.keys[b];
                  if (c === a) return this.values[b];
                }
              },
            },
            {
              key: "set",
              value: function (a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                  var d = this.keys[c];
                  if (d === a) return (this.values[c] = b), this;
                }
                return this.keys.push(a), this.values.push(b), this;
              },
            },
          ]),
          a
        );
      })(),
    p =
      window.MutationObserver ||
      window.WebkitMutationObserver ||
      window.MozMutationObserver ||
      ((m = l =
        (function () {
          function a() {
            c(this, a),
              "undefined" != typeof console &&
                null !== console &&
                (console.warn(
                  "MutationObserver is not supported by your browser."
                ),
                console.warn(
                  "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                ));
          }
          return n(a, [{ key: "observe", value: function () {} }]), a;
        })()),
      (l.notSupported = !0),
      m),
    q =
      window.getComputedStyle ||
      function (a) {
        var b = /(\-([a-z]){1})/g;
        return {
          getPropertyValue: function (c) {
            "float" === c && (c = "styleFloat"),
              b.test(c) &&
                c.replace(b, function (a, b) {
                  return b.toUpperCase();
                });
            var d = a.currentStyle;
            return (null != d ? d[c] : void 0) || null;
          },
        };
      },
    r = (function () {
      function a() {
        var b =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        c(this, a),
          (this.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
            resetAnimation: !0,
          }),
          (this.animate = (function () {
            return "requestAnimationFrame" in window
              ? function (a) {
                  return window.requestAnimationFrame(a);
                }
              : function (a) {
                  return a();
                };
          })()),
          (this.vendors = ["moz", "webkit"]),
          (this.start = this.start.bind(this)),
          (this.resetAnimation = this.resetAnimation.bind(this)),
          (this.scrollHandler = this.scrollHandler.bind(this)),
          (this.scrollCallback = this.scrollCallback.bind(this)),
          (this.scrolled = !0),
          (this.config = e(b, this.defaults)),
          null != b.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              b.scrollContainer
            )),
          (this.animationNameCache = new o()),
          (this.wowEvent = g(this.config.boxClass));
      }
      return (
        n(a, [
          {
            key: "init",
            value: function () {
              (this.element = window.document.documentElement),
                d(document.readyState, ["interactive", "complete"])
                  ? this.start()
                  : i(document, "DOMContentLoaded", this.start),
                (this.finished = []);
            },
          },
          {
            key: "start",
            value: function () {
              var a = this;
              if (
                ((this.stopped = !1),
                (this.boxes = [].slice.call(
                  this.element.querySelectorAll("." + this.config.boxClass)
                )),
                (this.all = this.boxes.slice(0)),
                this.boxes.length)
              )
                if (this.disabled()) this.resetStyle();
                else
                  for (var b = 0; b < this.boxes.length; b++) {
                    var c = this.boxes[b];
                    this.applyStyle(c, !0);
                  }
              if (
                (this.disabled() ||
                  (i(
                    this.config.scrollContainer || window,
                    "scroll",
                    this.scrollHandler
                  ),
                  i(window, "resize", this.scrollHandler),
                  (this.interval = setInterval(this.scrollCallback, 50))),
                this.config.live)
              ) {
                var d = new p(function (b) {
                  for (var c = 0; c < b.length; c++)
                    for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                      var f = d.addedNodes[e];
                      a.doSync(f);
                    }
                });
                d.observe(document.body, { childList: !0, subtree: !0 });
              }
            },
          },
          {
            key: "stop",
            value: function () {
              (this.stopped = !0),
                j(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval);
            },
          },
          {
            key: "sync",
            value: function () {
              p.notSupported && this.doSync(this.element);
            },
          },
          {
            key: "doSync",
            value: function (a) {
              if (
                (("undefined" != typeof a && null !== a) || (a = this.element),
                1 === a.nodeType)
              ) {
                a = a.parentNode || a;
                for (
                  var b = a.querySelectorAll("." + this.config.boxClass), c = 0;
                  c < b.length;
                  c++
                ) {
                  var e = b[c];
                  d(e, this.all) ||
                    (this.boxes.push(e),
                    this.all.push(e),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(e, !0),
                    (this.scrolled = !0));
                }
              }
            },
          },
          {
            key: "show",
            value: function (a) {
              return (
                this.applyStyle(a),
                (a.className = a.className + " " + this.config.animateClass),
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation &&
                  (i(a, "animationend", this.resetAnimation),
                  i(a, "oanimationend", this.resetAnimation),
                  i(a, "webkitAnimationEnd", this.resetAnimation),
                  i(a, "MSAnimationEnd", this.resetAnimation)),
                a
              );
            },
          },
          {
            key: "applyStyle",
            value: function (a, b) {
              var c = this,
                d = a.getAttribute("data-wow-duration"),
                e = a.getAttribute("data-wow-delay"),
                f = a.getAttribute("data-wow-iteration");
              return this.animate(function () {
                return c.customStyle(a, b, d, e, f);
              });
            },
          },
          {
            key: "resetStyle",
            value: function () {
              for (var a = 0; a < this.boxes.length; a++) {
                var b = this.boxes[a];
                b.style.visibility = "visible";
              }
            },
          },
          {
            key: "resetAnimation",
            value: function (a) {
              if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                var b = a.target || a.srcElement;
                b.className = b.className
                  .replace(this.config.animateClass, "")
                  .trim();
              }
            },
          },
          {
            key: "customStyle",
            value: function (a, b, c, d, e) {
              return (
                b && this.cacheAnimationName(a),
                (a.style.visibility = b ? "hidden" : "visible"),
                c && this.vendorSet(a.style, { animationDuration: c }),
                d && this.vendorSet(a.style, { animationDelay: d }),
                e && this.vendorSet(a.style, { animationIterationCount: e }),
                this.vendorSet(a.style, {
                  animationName: b ? "none" : this.cachedAnimationName(a),
                }),
                a
              );
            },
          },
          {
            key: "vendorSet",
            value: function (a, b) {
              for (var c in b)
                if (b.hasOwnProperty(c)) {
                  var d = b[c];
                  a["" + c] = d;
                  for (var e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
                  }
                }
            },
          },
          {
            key: "vendorCSS",
            value: function (a, b) {
              for (
                var c = q(a), d = c.getPropertyCSSValue(b), e = 0;
                e < this.vendors.length;
                e++
              ) {
                var f = this.vendors[e];
                d = d || c.getPropertyCSSValue("-" + f + "-" + b);
              }
              return d;
            },
          },
          {
            key: "animationName",
            value: function (a) {
              var b = void 0;
              try {
                b = this.vendorCSS(a, "animation-name").cssText;
              } catch (c) {
                b = q(a).getPropertyValue("animation-name");
              }
              return "none" === b ? "" : b;
            },
          },
          {
            key: "cacheAnimationName",
            value: function (a) {
              return this.animationNameCache.set(a, this.animationName(a));
            },
          },
          {
            key: "cachedAnimationName",
            value: function (a) {
              return this.animationNameCache.get(a);
            },
          },
          {
            key: "scrollHandler",
            value: function () {
              this.scrolled = !0;
            },
          },
          {
            key: "scrollCallback",
            value: function () {
              if (this.scrolled) {
                this.scrolled = !1;
                for (var a = [], b = 0; b < this.boxes.length; b++) {
                  var c = this.boxes[b];
                  if (c) {
                    if (this.isVisible(c)) {
                      this.show(c);
                      continue;
                    }
                    a.push(c);
                  }
                }
                (this.boxes = a),
                  this.boxes.length || this.config.live || this.stop();
              }
            },
          },
          {
            key: "offsetTop",
            value: function (a) {
              for (; void 0 === a.offsetTop; ) a = a.parentNode;
              for (var b = a.offsetTop; a.offsetParent; )
                (a = a.offsetParent), (b += a.offsetTop);
              return b;
            },
          },
          {
            key: "isVisible",
            value: function (a) {
              var b = a.getAttribute("data-wow-offset") || this.config.offset,
                c =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset,
                d = c + Math.min(this.element.clientHeight, k()) - b,
                e = this.offsetTop(a),
                f = e + a.clientHeight;
              return d >= e && f >= c;
            },
          },
          {
            key: "disabled",
            value: function () {
              return !this.config.mobile && f(navigator.userAgent);
            },
          },
        ]),
        a
      );
    })();
  (b["default"] = r), (a.exports = b["default"]);
});
var wpcf7_recaptcha = {
  sitekey: "6LeVzeUUAAAAAFWSm-2rUjXzIXM4fmVQB3P1a2jL",
  actions: { homepage: "homepage", contactform: "contactform" },
};
document.addEventListener("DOMContentLoaded", (t) => {
  var e;
  wpcf7_recaptcha = {
    ...(null !== (e = wpcf7_recaptcha) && void 0 !== e ? e : {}),
  };
  const c = wpcf7_recaptcha.sitekey,
    { homepage: n, contactform: a } = wpcf7_recaptcha.actions,
    o = (t) => {
      const { action: e, func: n, params: a } = t;
      grecaptcha
        .execute(c, { action: e })
        .then((t) => {
          const c = new CustomEvent("wpcf7grecaptchaexecuted", {
            detail: { action: e, token: t },
          });
          document.dispatchEvent(c);
        })
        .then(() => {
          "function" == typeof n && n(...a);
        })
        .catch((t) => console.error(t));
    };
  if (
    (grecaptcha.ready(() => {
      o({ action: n });
    }),
    document.addEventListener("change", (t) => {
      o({ action: a });
    }),
    "undefined" != typeof wpcf7 && "function" == typeof wpcf7.submit)
  ) {
    const t = wpcf7.submit;
    wpcf7.submit = function (e) {
      let c =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      o({ action: a, func: t, params: [e, c] });
    };
  }
  document.addEventListener("wpcf7grecaptchaexecuted", (t) => {
    const e = document.querySelectorAll(
      'form.wpcf7-form input[name="_wpcf7_recaptcha_response"]'
    );
    for (let c = 0; c < e.length; c++)
      e[c].setAttribute("value", t.detail.token);
  });
});
(function () {
  var expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 31536000 * 1000);
  document.cookie =
    "pll_language=en; expires=" +
    expirationDate.toUTCString() +
    "; path=/; secure; SameSite=Lax";
})();

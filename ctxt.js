/******************************

脚本名称: Context Pro 展示天使版
脚本作者：kkkhz
更新时间：2023年9月7日 16:43
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/dluffymonkey/QX/main/ctxt.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-header https://raw.githubusercontent.com/dluffymonkey/QX/main/ctxt.js


[mitm] 
hostname = api.revenuecat.com

*******************************/

const kkkhz = {};
const kkkhz1 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  kkkhz.headers = $request.headers;
} else if (kkkhz1) {
  var headers = {};
  for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
    }
  }
  kkkhz1["current_offering_id"] = "review";
  kkkhz.body = JSON.stringify(kkkhz1);
}
$done(kkkhz);
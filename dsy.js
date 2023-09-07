/*************************************

项目名称：倒数鸭
软件版本：v1.0.0(14)
下载地址：https://is.gd/rETAhp
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/dluffymonkey/QX/main/dsy.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-header https://raw.githubusercontent.com/dluffymonkey/QX/main/dsy.js

[mitm]
hostname = api.revenuecat.com

**************************************/

const kkkhz = {};
const kkkhz1 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"];
	delete $request.headers["x-RevenueCat-ETag"];
	kkkhz.headers = $request.headers;
} else if (kkkhz1 && kkkhz1.subscriber) {
	kkkhz1.subscriber.subscriptions = kkkhz1.subscriber.subscriptions || {};
	kkkhz1.subscriber.entitlements = kkkhz1.subscriber.entitlements || {};
	var headers = {};
	for (var key in $request.headers) {
		const reg = /^[a-z]+$/;
		if (key === "User-Agent" && !reg.test(key)) {
			var lowerkey = key.toLowerCase();
			$request.header[lowerkey] = $request.header[key];
			delete $request.header[key];
		}
	}
	var UA = $request.header["user-agent"];
	const app = '1';
	const UAMappings = {
		'CountDuck': { name: 'premium', id: 'Lifetime'},
	};
	const data = {
		"expires_date": "2099-12-31T12:00:00Z",
		"original_purchase_date": "2023-09-01T11:00:00Z",
		"purchase_date": "2023-09-01T11:00:00Z",
		"ownership_type": "PURCHASED",
		"store": "app_store"
	};
	for (const i in UAMappings) {
		if (new RegExp('^${i}', i).test(UA)) {
			const {name, id} = UAMappings[i];
			kkkhz1.subscriber.subscriptions = {};
   			kkkhz1.subscriber.subscriptions[id] = data;
      		kkkhz1.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      		kkkhz1.subscriber.entitlements[name].product_identifier = id;
			break;
		}
	}
	kkkhz.body = JSON.stringify(kkkhz1);
}  
$done(kkkhz);

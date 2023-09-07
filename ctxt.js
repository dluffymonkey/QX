/******************************

脚本名称: Context Pro 展示天使版
脚本作者：kkkhz
更新时间：2023年9月7日 16:43
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/dluffymonkey/QX/main/ctxt.js

[mitm] 
hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);

objc = {
  "offerings": [
    {
      "metadata": null,
      "paywall": {
        "localized_strings": {
          "zh_Hans": {
            "offer_details": "{{ total_price_and_per_month }}",
            "title": "Context Pro",
            "subtitle": "📝  无限创建语境\n✴️  解锁全部 app 图标\n👀  解锁全部桌面小组件",
            "call_to_action": "👑 立即购买"
          }
        },
        "asset_base_url": "https://assets.pawwalls.com",
        "config": {
          "packages": [
            "pkg_ctx_1y_sspai_preorder_basic"
          ],
          "colors": {
            "light": {
              "call_to_action_foreground": "#ffffff",
              "text_1": "#207E44",
              "call_to_action_background": "#172C19",
              "background": "#ffffff"
            },
            "dark": {
              "call_to_action_foreground": "#ffffff",
              "text_1": "#207E44",
              "call_to_action_background": "#30a35f",
              "background": "#ffffff"
            }
          },
          "privacy_url": "https://okr.vision/blog/2020/11/08/vision-privacy-policy",
          "tos_url": "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
          "images": {
            "header": "629002_1694050672.png"
          },
          "display_restore_purchases": true
        },
        "revision": 10,
        "template_name": "1",
        "default_locale": "en_US"
      },
      "description": "少数派众筹普通版",
      "identifier": "offering_ctx_sspai_preorder_basic",
      "packages": [
        {
          "platform_product_identifier": "ctx_01y_sspai_preorder_basic",
          "identifier": "pkg_ctx_1y_sspai_preorder_basic"
        },
        {
          "platform_product_identifier": "ctx_sub_1y_sspai_preorder_basic",
          "identifier": "$rc_annual"
        },
        {
          "platform_product_identifier": "ctx_sub_1m",
          "identifier": "$rc_monthly"
        }
      ]
    },
    {
      "metadata": null,
      "paywall": {
        "localized_strings": {
          "zh_Hans": {
            "offer_details": "{{ total_price_and_per_month }}",
            "title": "Context Pro",
            "subtitle": "📝  无限创建语境\n✴️  解锁全部 app 图标\n👀  解锁全部桌面小组件",
            "call_to_action": "👑 立即购买"
          }
        },
        "asset_base_url": "https://assets.pawwalls.com",
        "config": {
          "packages": [
            "pkg_ctx_1y_sspai_preorder_angel"
          ],
          "colors": {
            "light": {
              "call_to_action_foreground": "#ffffff",
              "text_1": "#9e3933",
              "call_to_action_background": "#000000",
              "background": "#ffffff"
            },
            "dark": {
              "call_to_action_foreground": "#ffffff",
              "text_1": "#9E3933",
              "call_to_action_background": "#ca3b33",
              "background": "#ffffff"
            }
          },
          "privacy_url": "https://okr.vision/blog/2020/11/08/vision-privacy-policy",
          "tos_url": "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
          "images": {
            "header": "629002_1693998811.png"
          },
          "display_restore_purchases": true
        },
        "revision": 11,
        "template_name": "1",
        "default_locale": "en_US"
      },
      "description": "少数派众筹天使版",
      "identifier": "offering_ctx_sspai_preorder_angel",
      "packages": [
        {
          "platform_product_identifier": "ctx_3y_sspai_preorder_angel",
          "identifier": "pkg_ctx_1y_sspai_preorder_angel"
        },
        {
          "platform_product_identifier": "ctx_sub_1y_sspai_preorder_angel",
          "identifier": "$rc_annual"
        },
        {
          "platform_product_identifier": "ctx_sub_1m",
          "identifier": "$rc_monthly"
        }
      ]
    },
    {
      "metadata": null,
      "paywall": {
        "localized_strings": {
          "zh_Hans": {
            "offer_details": "{{ total_price_and_per_month }}",
            "title": "Context Pro",
            "offer_name": "{{ product_name }}",
            "subtitle": "📝  无限创建语境\n✴️  解锁全部 app 图标\n👀  解锁全部桌面小组件",
            "offer_details_with_intro_offer": "19 ater",
            "call_to_action": "👑 立即购买"
          }
        },
        "asset_base_url": "https://assets.pawwalls.com",
        "config": {
          "colors": {
            "light": {
              "background": "#123b22",
              "call_to_action_foreground": "#ffffff",
              "text_1": "#347F54",
              "accent_2": "#32a55e",
              "call_to_action_background": "#172C19",
              "accent_1": "#ffffff"
            },
            "dark": {
              "background": "#000000",
              "call_to_action_foreground": "#ffffff",
              "text_1": "#FFFFFF",
              "accent_2": "#0e4e2a",
              "call_to_action_background": "#172c19",
              "accent_1": "#F7F7F7"
            }
          },
          "default_package": "$rc_annual",
          "blurred_background_image": true,
          "display_restore_purchases": true,
          "images": {
            "icon": "629002_1693821077.png",
            "background": "629002_1693820608.png"
          },
          "tos_url": "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
          "packages": [
            "$rc_annual",
            "$rc_monthly"
          ],
          "privacy_url": "https://okr.vision/blog/2020/11/08/vision-privacy-policy"
        },
        "revision": 4,
        "template_name": "2",
        "default_locale": "en_US"
      },
      "description": "the real default offering",
      "identifier": "real_default",
      "packages": [
        {
          "platform_product_identifier": "ctx_sub_1m",
          "identifier": "$rc_monthly"
        },
        {
          "platform_product_identifier": "ctx_sub_1y",
          "identifier": "$rc_annual"
        }
      ]
    },
    {
      "metadata": null,
      "paywall": {
        "localized_strings": {
          "zh_Hans": {
            "offer_details": "{{ total_price_and_per_month }}",
            "title": "Context Pro",
            "offer_name": "{{ product_name }}",
            "subtitle": "📝  无限创建语境\n✴️  解锁全部 app 图标\n👀  解锁全部桌面小组件",
            "call_to_action": "👑 立即购买"
          }
        },
        "asset_base_url": "https://assets.pawwalls.com",
        "config": {
          "colors": {
            "light": {
              "background": "#ffffff",
              "call_to_action_foreground": "#ffffff",
              "text_1": "#207E44",
              "accent_2": "#32A55E",
              "call_to_action_background": "#172C19",
              "accent_1": "#ffffff"
            },
            "dark": {
              "background": "#000000",
              "call_to_action_foreground": "#ffffff",
              "text_1": "#FFFFFF",
              "accent_2": "#0E4E2A",
              "call_to_action_background": "#172C19",
              "accent_1": "#F7F7F7"
            }
          },
          "default_package": "pkg_ctx_1y_sspai_preorder_basic",
          "blurred_background_image": true,
          "display_restore_purchases": true,
          "images": {
            "icon": "629002_1693831923.png",
            "background": "629002_1693831919.png"
          },
          "tos_url": "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
          "packages": [
            "pkg_ctx_1y_sspai_preorder_basic",
            "$rc_annual",
            "$rc_monthly",
            "pkg_sspai_basic_annual",
            "pkg_ctx_1y_sspai_preorder_angel",
            "ordinary_annual"
          ],
          "privacy_url": "https://okr.vision/blog/2020/11/08/vision-privacy-policy"
        },
        "revision": 4,
        "template_name": "2",
        "default_locale": "en_US"
      },
      "description": "for review",
      "identifier": "review",
      "packages": [
        {
          "platform_product_identifier": "ctx_01y_sspai_preorder_basic",
          "identifier": "pkg_ctx_1y_sspai_preorder_basic"
        },
        {
          "platform_product_identifier": "ctx_sub_1m",
          "identifier": "$rc_monthly"
        },
        {
          "platform_product_identifier": "ctx_sub_1y",
          "identifier": "ordinary_annual"
        },
        {
          "platform_product_identifier": "ctx_3y_sspai_preorder_angel",
          "identifier": "pkg_ctx_1y_sspai_preorder_angel"
        },
        {
          "platform_product_identifier": "ctx_sub_1y_sspai_preorder_basic",
          "identifier": "pkg_sspai_basic_annual"
        },
        {
          "platform_product_identifier": "ctx_sub_1y_sspai_preorder_angel",
          "identifier": "$rc_annual"
        }
      ]
    },
    {
      "metadata": null,
      "paywall": {
        "localized_strings": {
          "zh_Hans": {
            "offer_details": "{{ total_price_and_per_month }}",
            "title": "Context Pro",
            "offer_name": "{{ product_name }}",
            "subtitle": "📝  无限创建语境\n✴️  解锁全部 app 图标\n👀  解锁全部桌面小组件",
            "offer_details_with_intro_offer": "19 ater",
            "call_to_action": "👑 立即购买"
          }
        },
        "asset_base_url": "https://assets.pawwalls.com",
        "config": {
          "colors": {
            "light": {
              "background": "#123b22",
              "call_to_action_foreground": "#ffffff",
              "text_1": "#347F54",
              "accent_2": "#32a55e",
              "call_to_action_background": "#172C19",
              "accent_1": "#ffffff"
            },
            "dark": {
              "background": "#000000",
              "call_to_action_foreground": "#ffffff",
              "text_1": "#ffffff",
              "accent_2": "#0e4e2a",
              "call_to_action_background": "#172c19",
              "accent_1": "#F7F7F7"
            }
          },
          "default_package": "$rc_annual",
          "blurred_background_image": true,
          "display_restore_purchases": true,
          "images": {
            "icon": "629002_1693821077.png",
            "background": "629002_1693820608.png"
          },
          "tos_url": "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
          "packages": [
            "$rc_annual",
            "$rc_monthly"
          ],
          "privacy_url": "https://okr.vision/blog/2020/11/08/vision-privacy-policy"
        },
        "revision": 4,
        "template_name": "2",
        "default_locale": "en_US"
      },
      "description": "default",
      "identifier": "default",
      "packages": [
        {
          "platform_product_identifier": "ctx_sub_1y",
          "identifier": "$rc_annual"
        },
        {
          "platform_product_identifier": "ctx_sub_1m",
          "identifier": "$rc_monthly"
        }
      ]
    }
  ],
  "current_offering_id": "review"
}

$done({body : JSON.stringify(objc)});
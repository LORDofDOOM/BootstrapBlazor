const path = require("path");
const webpack = require("webpack");

const { MultiFormatReader, BarcodeFormat } = require('@zxing/library');

module.exports = {
  target: ["web", "es5"],
  plugins: [
    new webpack.ProvidePlugin({
      "window.jQuery": "jquery",
      "window.$": "jquery",
      jQuery: "jquery",
      $: "jquery",
    }),
  ],
  entry: {
    "bootstrap.blazor.polyfill.min.js": [
      "@babel/polyfill",
      "jquery",
      "popper.js",
      "bootstrap",
      path.resolve(__dirname, "wwwroot/lib/extensions/longbow.extensions.js"),
      "davidshimjs-qrcodejs",
      "@zxing/library",
      path.resolve(__dirname, "wwwroot/lib/captcha/longbow.captcha.js"),
      path.resolve(__dirname, "wwwroot/lib/grid/longbow.grid.js"),
      path.resolve(__dirname, "wwwroot/lib/handwritten/handwritten.js"),
      "summernote",
      "jquery-slimscroll",
      path.resolve(__dirname, "wwwroot/lib/tab/longbow.tab.js"),
      path.resolve(__dirname, "Components/Anchor/Anchor.razor.cs.js"),
      path.resolve(__dirname, "Components/BarcodeReader/BarcodeReader.razor.cs.js"),
      path.resolve(__dirname, "Components/Button/PopConfirmButton.razor.cs.js"),
      path.resolve(__dirname, "Components/Camera/Camera.razor.cs.js"),
      path.resolve(__dirname, "Components/Carousel/Carousel.razor.cs.js"),
      path.resolve(__dirname, "Components/Collapse/Collapse.razor.cs.js"),
      path.resolve(__dirname, "Components/ColorPicker/ColorPicker.razor.cs.js"),
      path.resolve(__dirname, "Components/Console/Console.razor.cs.js"),
      path.resolve(__dirname, "Components/DateTimePicker/DateTimePicker.razor.cs.js"),
      path.resolve(__dirname, "Components/DateTimePicker/TimePickerBody.razor.cs.js"),
      path.resolve(__dirname, "Components/DateTimeRange/DateTimeRange.razor.cs.js"),
      path.resolve(__dirname, "Components/Dialog/EditDialog.razor.cs.js"),
      path.resolve(__dirname, "Components/Download/Download.cs.js"),
      path.resolve(__dirname, "Components/Drawer/Drawer.razor.cs.js"),
      path.resolve(__dirname, "Components/Editor/Editor.razor.cs.js"),
      path.resolve(__dirname, "Components/GoTop/GoTop.razor.cs.js"),
      path.resolve(__dirname, "Components/Layout/Layout.razor.cs.js"),
      path.resolve(__dirname, "Components/Message/Message.razor.cs.js"),
      path.resolve(__dirname, "Components/Modal/Modal.razor.cs.js"),
      path.resolve(__dirname, "Components/Menu/Menu.razor.cs.js"),
      path.resolve(__dirname, "Components/Popover/PopoverConfirmBox.razor.cs.js"),
      path.resolve(__dirname, "Components/QRCode/QRCode.razor.cs.js"),
      path.resolve(__dirname, "Components/Rate/Rate.razor.cs.js"),
      path.resolve(__dirname, "Components/Row/Row.razor.cs.js"),
      path.resolve(__dirname, "Components/Scroll/Scroll.razor.cs.js"),
      path.resolve(__dirname, "Components/Select/Select.razor.cs.js"),
      path.resolve(__dirname, "Components/Select/MultiSelect.razor.cs.js"),
      path.resolve(__dirname, "Components/Slider/Slider.razor.cs.js"),
      path.resolve(__dirname, "Components/Split/Split.razor.cs.js"),
      path.resolve(__dirname, "Components/Tab/Tab.razor.cs.js"),
      path.resolve(__dirname, "Components/Table/Table.razor.cs.js"),
      path.resolve(__dirname, "Components/Table/Filter/TableFilter.razor.cs.js"),
      path.resolve(__dirname, "Components/Title/Title.cs.js"),
      path.resolve(__dirname, "Components/Toast/Toast.razor.cs.js"),
      path.resolve(__dirname, "Components/Tooltip/Tooltip.cs.js"),
      path.resolve(__dirname, "Components/Tree/Tree.razor.cs.js"),
      path.resolve(__dirname, "Components/Upload/Upload.razor.cs.js"),
      path.resolve(__dirname, "Components/ValidateForm/ValidateForm.razor.cs.js")
    ],
  },
  optimization: {
    minimize: true,
  },
  output: {
    filename: "bootstrap.blazor.polyfill.min.js",
    path: path.resolve(__dirname, "wwwroot/js"),
  },
  module: {
    rules: [
      {
        test: /qrcode/,
        loader: "expose-loader",
        options: {
          exposes: ["QRCode"],
        },
      },
      {
        test: /zxing/,
        loader: "expose-loader",
        options: {
          exposes: ["ZXing"],
        },
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]],
          },
        },
      },
      {
        exclude: /node_modules/,
      },      
    ],
  },
};
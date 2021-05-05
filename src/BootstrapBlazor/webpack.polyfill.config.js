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
      path.resolve(__dirname, "Components/Anchor/Anchor.razor.cs.min.js"),
      path.resolve(__dirname, "Components/BarcodeReader/BarcodeReader.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Button/PopConfirmButton.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Camera/Camera.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Carousel/Carousel.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Collapse/Collapse.razor.cs.min.js"),
      path.resolve(__dirname, "Components/ColorPicker/ColorPicker.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Console/Console.razor.cs.min.js"),
      path.resolve(__dirname, "Components/DateTimePicker/DateTimePicker.razor.cs.min.js"),
      path.resolve(__dirname, "Components/DateTimePicker/TimePickerBody.razor.cs.min.js"),
      path.resolve(__dirname, "Components/DateTimeRange/DateTimeRange.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Dialog/EditDialog.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Download/Download.cs.min.js"),
      path.resolve(__dirname, "Components/Drawer/Drawer.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Editor/Editor.razor.cs.min.js"),
      path.resolve(__dirname, "Components/GoTop/GoTop.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Layout/Layout.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Message/Message.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Modal/Modal.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Menu/Menu.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Popover/PopoverConfirmBox.razor.cs.min.js"),
      path.resolve(__dirname, "Components/QRCode/QRCode.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Rate/Rate.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Row/Row.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Scroll/Scroll.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Select/Select.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Select/MultiSelect.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Slider/Slider.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Split/Split.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Tab/Tab.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Table/Table.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Table/Filter/TableFilter.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Title/Title.cs.min.js"),
      path.resolve(__dirname, "Components/Toast/Toast.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Tooltip/Tooltip.cs.min.js"),
      path.resolve(__dirname, "Components/Tree/Tree.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Upload/Upload.razor.cs.min.js"),
      path.resolve(__dirname, "Components/ValidateForm/ValidateForm.razor.cs.min.js")
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
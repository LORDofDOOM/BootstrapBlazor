const path = require("path");

module.exports = {
  entry: {
    "bootstrap.blazor.bundle.min.js": [
      path.resolve(__dirname, "wwwroot/lib/jquery/jquery-3.5.1.min.js"),
      path.resolve(__dirname, "wwwroot/lib/bootstrap/js/bootstrap.bundle.min.js"),
      path.resolve(__dirname, "wwwroot/lib/summernote/summernote-bs4.min.js"),
      path.resolve(__dirname, "wwwroot/lib/slimscroll/jquery.slimscroll.min.js"),
      path.resolve(__dirname, "wwwroot/lib/barcodereader/qrcode.min.js"),
      path.resolve(__dirname, "wwwroot/lib/barcodereader/zxing.min.js"),
      path.resolve(__dirname, "wwwroot/lib/handwritten/handwritten.min.js"),
      path.resolve(__dirname, "wwwroot/lib/extensions/longbow.extensions.min.js"),
      path.resolve(__dirname, "wwwroot/lib/captcha/longbow.captcha.min.js"),
      path.resolve(__dirname, "wwwroot/lib/tab/longbow.tab.min.js"),
      path.resolve(__dirname, "wwwroot/js/bootstrap.blazor.min.js"),
      path.resolve(__dirname, "Components/Upload/Upload.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Editor/Editor.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Message/Message.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Toast/Toast.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Carousel/Carousel.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Slider/Slider.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Rate/Rate.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Collapse/Collapse.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Split/Split.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Anchor/Anchor.razor.cs.min.js"),
      path.resolve(__dirname, "Components/BarcodeReader/BarcodeReader.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Camera/Camera.razor.cs.min.js"),
      path.resolve(__dirname, "Components/QRCode/QRCode.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Scroll/Scroll.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Modal/Modal.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Table/Table.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Table/Filter/TableFilter.razor.cs.min.js"),
      path.resolve(__dirname, "Components/Drawer/Drawer.razor.cs.min.js"),
	  path.resolve(__dirname, "Components/Select/Select.razor.cs.min.js"),
	  path.resolve(__dirname, "Components/DateTimePicker/DateTimePicker.razor.cs.min.js"),
	  path.resolve(__dirname, "Components/DateTimePicker/TimePickerBody.razor.cs.min.js"),
	  path.resolve(__dirname, "Components/DateTimeRange/DateTimeRange.razor.cs.min.js"),
	  path.resolve(__dirname, "Components/Tab/Tab.razor.cs.min.js"),
	  path.resolve(__dirname, "Components/Layout/Layout.razor.cs.min.js"),
	  path.resolve(__dirname, "Components/GoTop/GoTop.razor.cs.min.js"),
	  
    ],
  },
  optimization: {
    minimize: true,
  },
  output: {
    filename: "bootstrap.blazor.bundle.min.js",
    path: path.resolve(__dirname, "wwwroot/js"),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
      },
    ],
  },
};

﻿// Copyright (c) Argo Zhang (argo@163.com). All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Website: https://www.blazor.zone or https://argozhang.github.io/

using BootstrapBlazor.Components;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Options;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Linq;

namespace BootstrapBlazor.Shared.Shared
{
    /// <summary>
    /// 
    /// </summary>
    public sealed partial class ComponentLayout
    {
        [NotNull]
        private string? RazorFileName { get; set; }

        [NotNull]
        private string? CsharpFileName { get; set; }

        [NotNull]
        private string? VideoFileName { get; set; }

        [Inject]
        [NotNull]
        private IOptions<WebsiteOptions>? SiteOptions { get; set; }

        [NotNull]
        private Tab? TabSet { get; set; }

        /// <summary>
        /// OnParametersSet 方法
        /// </summary>
        protected override void OnParametersSet()
        {
            base.OnParametersSet();

            var page = Navigator.ToBaseRelativePath(Navigator.Uri);
            var comName = page.Split("/").LastOrDefault() ?? string.Empty;

            if (!string.IsNullOrEmpty(comName) && SiteOptions.Value.SourceCodes.TryGetValue(comName, out var fileName))
            {
                RazorFileName = fileName;
            }
            else
            {
                RazorFileName = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(comName);
            }

            RazorFileName = $"{RazorFileName}.razor";
            CsharpFileName = $"{RazorFileName}.cs";
            VideoFileName = comName;
        }

        /// <summary>
        /// OnAfterRender 方法
        /// </summary>
        /// <param name="firstRender"></param>
        protected override void OnAfterRender(bool firstRender)
        {
            base.OnAfterRender(firstRender);

            TabSet.ActiveTab(TabSet.Items.First());
        }
    }
}

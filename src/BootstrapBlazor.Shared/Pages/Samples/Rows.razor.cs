﻿// Copyright (c) Argo Zhang (argo@163.com). All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Website: https://www.blazor.zone or https://argozhang.github.io/

using BootstrapBlazor.Components;
using BootstrapBlazor.Shared.Common;
using BootstrapBlazor.Shared.Pages.Components;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Localization;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace BootstrapBlazor.Shared.Pages
{
    /// <summary>
    /// 
    /// </summary>
    public sealed partial class Rows
    {
        [Inject]
        [NotNull]
        private IStringLocalizer<Foo>? Localizer { get; set; }

        private RowFoo Model { get; } = new()
        {
            Name = "张三",
            Count = 23,
            Address = "测试地址",
            DateTime = new DateTime(1997, 12, 05),
            Educations = new List<EnumEducation> { EnumEducation.Primary, EnumEducation.Middel }
        };

        [NotNull]
        private IEnumerable<SelectedItem>? Hobbys { get; set; }

        /// <summary>
        /// OnInitialized 方法
        /// </summary>
        protected override void OnInitialized()
        {
            base.OnInitialized();

            Hobbys = Foo.GenerateHobbys(Localizer);
        }

        private void test(EventArgs e)
        {
            Hobbys = new List<SelectedItem>
            {
               new SelectedItem
               {
                   Text = "aaa",
                   Value = "bbb"
               },
               new SelectedItem
               {
                   Text = "ccc",
                   Value = "ddd"
               }
            };
            Model.Address = "aaaaa";
        }

        private static IEnumerable<AttributeItem> GetAttributes() => new AttributeItem[]
        {
            new AttributeItem() {
                Name = "ItemsPerRow",
                Description = "设置一行显示几个控件",
                Type = "enum",
                ValueList = " One,Two,Three,Four,Six,Twelve ",
                DefaultValue = " One "
            },
            new AttributeItem() {
                Name = "RowType",
                Description = "设置排版格式，子Row如果不指定，会使用父Row的设置",
                Type = "enum?",
                ValueList = "Normal, FormInline,FormRow",
                DefaultValue = "null"
            },
            new AttributeItem() {
                Name = "ColSpan",
                Description = "设置子Row跨父Row列数",
                Type = "int?",
                ValueList = "-",
                DefaultValue = "null"
            },
            new AttributeItem() {
                Name = "MaxCount",
                Description = "设置行内最多显示的控件数",
                Type = "int?",
                ValueList = "-",
                DefaultValue = "null"
            }
        };

        private class RowFoo : Foo
        {
            /// <summary>
            /// 
            /// </summary>
            [Required(ErrorMessage = "请选择学历")]
            [Display(Name = "学历")]
            [AutoGenerateColumn(Order = 60)]
            public List<EnumEducation>? Educations { get; set; }
        }
    }
}

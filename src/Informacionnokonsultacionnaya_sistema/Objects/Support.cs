//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Informacionnokonsultacionnaya_sistema
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Support.
    /// </summary>
    // *** Start programmer edit section *** (Support CustomAttributes)

    // *** End programmer edit section *** (Support CustomAttributes)
    [AutoAltered()]
    [Caption("Вид поддержки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("SupportE", new string[] {
            "Name as \'Наименование\'",
            "Description as \'Описание\'",
            "link as \'Ссылка на сайт\'",
            "Form as \'Форма предоставления\'",
            "Form.Name"}, Hidden=new string[] {
            "Form.Name"})]
    [AssociatedDetailViewAttribute("SupportE", "ListSize", "ListSizeE", true, "", "Условие 1: Размер компании", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("SupportE", "ListInv", "ListInvE", true, "", "Условие 2: Инвестиции ", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("SupportE", "ListIndustry", "ListIndustryE", false, "", "Условие 3: Подотрасль", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("SupportE", "ListComponent", "ListComponentE", false, "", "Условие 4: Соц.составляющая", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("SupportE", "Form", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [View("SupportL", new string[] {
            "Name as \'Наименование\'",
            "Description as \'Описание\'",
            "link as \'Ссылка на сайт\'",
            "Form.Name as \'Форма предоставления\'"})]
    public class Support : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private string fDescription;
        
        private string flink;
        
        private IIS.Informacionnokonsultacionnaya_sistema.Form fForm;
        
        private IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListComponent fListComponent;
        
        private IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListIndustry fListIndustry;
        
        private IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListInv fListInv;
        
        private IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListSize fListSize;
        
        // *** Start programmer edit section *** (Support CustomMembers)

        // *** End programmer edit section *** (Support CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Support.Name CustomAttributes)

        // *** End programmer edit section *** (Support.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Support.Name Get start)

                // *** End programmer edit section *** (Support.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Support.Name Get end)

                // *** End programmer edit section *** (Support.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.Name Set start)

                // *** End programmer edit section *** (Support.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Support.Name Set end)

                // *** End programmer edit section *** (Support.Name Set end)
            }
        }
        
        /// <summary>
        /// Description.
        /// </summary>
        // *** Start programmer edit section *** (Support.Description CustomAttributes)

        // *** End programmer edit section *** (Support.Description CustomAttributes)
        [StrLen(255)]
        public virtual string Description
        {
            get
            {
                // *** Start programmer edit section *** (Support.Description Get start)

                // *** End programmer edit section *** (Support.Description Get start)
                string result = this.fDescription;
                // *** Start programmer edit section *** (Support.Description Get end)

                // *** End programmer edit section *** (Support.Description Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.Description Set start)

                // *** End programmer edit section *** (Support.Description Set start)
                this.fDescription = value;
                // *** Start programmer edit section *** (Support.Description Set end)

                // *** End programmer edit section *** (Support.Description Set end)
            }
        }
        
        /// <summary>
        /// link.
        /// </summary>
        // *** Start programmer edit section *** (Support.link CustomAttributes)

        // *** End programmer edit section *** (Support.link CustomAttributes)
        [StrLen(255)]
        public virtual string link
        {
            get
            {
                // *** Start programmer edit section *** (Support.link Get start)

                // *** End programmer edit section *** (Support.link Get start)
                string result = this.flink;
                // *** Start programmer edit section *** (Support.link Get end)

                // *** End programmer edit section *** (Support.link Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.link Set start)

                // *** End programmer edit section *** (Support.link Set start)
                this.flink = value;
                // *** Start programmer edit section *** (Support.link Set end)

                // *** End programmer edit section *** (Support.link Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.Form CustomAttributes)

        // *** End programmer edit section *** (Support.Form CustomAttributes)
        [NotNull()]
        public virtual IIS.Informacionnokonsultacionnaya_sistema.Form Form
        {
            get
            {
                // *** Start programmer edit section *** (Support.Form Get start)

                // *** End programmer edit section *** (Support.Form Get start)
                IIS.Informacionnokonsultacionnaya_sistema.Form result = this.fForm;
                // *** Start programmer edit section *** (Support.Form Get end)

                // *** End programmer edit section *** (Support.Form Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.Form Set start)

                // *** End programmer edit section *** (Support.Form Set start)
                this.fForm = value;
                // *** Start programmer edit section *** (Support.Form Set end)

                // *** End programmer edit section *** (Support.Form Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.ListComponent CustomAttributes)

        // *** End programmer edit section *** (Support.ListComponent CustomAttributes)
        public virtual IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListComponent ListComponent
        {
            get
            {
                // *** Start programmer edit section *** (Support.ListComponent Get start)

                // *** End programmer edit section *** (Support.ListComponent Get start)
                if ((this.fListComponent == null))
                {
                    this.fListComponent = new IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListComponent(this);
                }
                IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListComponent result = this.fListComponent;
                // *** Start programmer edit section *** (Support.ListComponent Get end)

                // *** End programmer edit section *** (Support.ListComponent Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.ListComponent Set start)

                // *** End programmer edit section *** (Support.ListComponent Set start)
                this.fListComponent = value;
                // *** Start programmer edit section *** (Support.ListComponent Set end)

                // *** End programmer edit section *** (Support.ListComponent Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.ListIndustry CustomAttributes)

        // *** End programmer edit section *** (Support.ListIndustry CustomAttributes)
        public virtual IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListIndustry ListIndustry
        {
            get
            {
                // *** Start programmer edit section *** (Support.ListIndustry Get start)

                // *** End programmer edit section *** (Support.ListIndustry Get start)
                if ((this.fListIndustry == null))
                {
                    this.fListIndustry = new IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListIndustry(this);
                }
                IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListIndustry result = this.fListIndustry;
                // *** Start programmer edit section *** (Support.ListIndustry Get end)

                // *** End programmer edit section *** (Support.ListIndustry Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.ListIndustry Set start)

                // *** End programmer edit section *** (Support.ListIndustry Set start)
                this.fListIndustry = value;
                // *** Start programmer edit section *** (Support.ListIndustry Set end)

                // *** End programmer edit section *** (Support.ListIndustry Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.ListInv CustomAttributes)

        // *** End programmer edit section *** (Support.ListInv CustomAttributes)
        public virtual IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListInv ListInv
        {
            get
            {
                // *** Start programmer edit section *** (Support.ListInv Get start)

                // *** End programmer edit section *** (Support.ListInv Get start)
                if ((this.fListInv == null))
                {
                    this.fListInv = new IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListInv(this);
                }
                IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListInv result = this.fListInv;
                // *** Start programmer edit section *** (Support.ListInv Get end)

                // *** End programmer edit section *** (Support.ListInv Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.ListInv Set start)

                // *** End programmer edit section *** (Support.ListInv Set start)
                this.fListInv = value;
                // *** Start programmer edit section *** (Support.ListInv Set end)

                // *** End programmer edit section *** (Support.ListInv Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.ListSize CustomAttributes)

        // *** End programmer edit section *** (Support.ListSize CustomAttributes)
        public virtual IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListSize ListSize
        {
            get
            {
                // *** Start programmer edit section *** (Support.ListSize Get start)

                // *** End programmer edit section *** (Support.ListSize Get start)
                if ((this.fListSize == null))
                {
                    this.fListSize = new IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListSize(this);
                }
                IIS.Informacionnokonsultacionnaya_sistema.DetailArrayOfListSize result = this.fListSize;
                // *** Start programmer edit section *** (Support.ListSize Get end)

                // *** End programmer edit section *** (Support.ListSize Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.ListSize Set start)

                // *** End programmer edit section *** (Support.ListSize Set start)
                this.fListSize = value;
                // *** Start programmer edit section *** (Support.ListSize Set end)

                // *** End programmer edit section *** (Support.ListSize Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "SupportE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View SupportE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("SupportE", typeof(IIS.Informacionnokonsultacionnaya_sistema.Support));
                }
            }
            
            /// <summary>
            /// "SupportL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View SupportL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("SupportL", typeof(IIS.Informacionnokonsultacionnaya_sistema.Support));
                }
            }
        }
    }
}

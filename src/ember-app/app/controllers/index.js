import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.caption'),
          title: i18n.t('forms.application.sitemap.информационно-консультационная-система.title'),
          children: [{
            link: 'i-i-s-informacionnokonsultacionnaya-sistema-support-l',
            caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnokonsultacionnaya-sistema-support-l.caption'),
            title: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnokonsultacionnaya-sistema-support-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-informacionnokonsultacionnaya-sistema-form-l',
            caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnokonsultacionnaya-sistema-form-l.caption'),
            title: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnokonsultacionnaya-sistema-form-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-informacionnokonsultacionnaya-sistema-subindustry-l',
            caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnokonsultacionnaya-sistema-subindustry-l.caption'),
            title: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnokonsultacionnaya-sistema-subindustry-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-informacionnokonsultacionnaya-sistema-size-l',
            caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnokonsultacionnaya-sistema-size-l.caption'),
            title: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnokonsultacionnaya-sistema-size-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-informacionnokonsultacionnaya-sistema-component-l',
            caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnokonsultacionnaya-sistema-component-l.caption'),
            title: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnokonsultacionnaya-sistema-component-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-informacionnokonsultacionnaya-sistema-investment-l',
            caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnokonsultacionnaya-sistema-investment-l.caption'),
            title: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnokonsultacionnaya-sistema-investment-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})
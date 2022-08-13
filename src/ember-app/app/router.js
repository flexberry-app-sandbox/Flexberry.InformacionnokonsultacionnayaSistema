import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-component-l');
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-component-e',
  { path: 'i-i-s-informacionnokonsultacionnaya-sistema-component-e/:id' });
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-component-e.new',
  { path: 'i-i-s-informacionnokonsultacionnaya-sistema-component-e/new' });
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-form-l');
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-form-e',
  { path: 'i-i-s-informacionnokonsultacionnaya-sistema-form-e/:id' });
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-form-e.new',
  { path: 'i-i-s-informacionnokonsultacionnaya-sistema-form-e/new' });
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-investment-l');
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-investment-e',
  { path: 'i-i-s-informacionnokonsultacionnaya-sistema-investment-e/:id' });
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-investment-e.new',
  { path: 'i-i-s-informacionnokonsultacionnaya-sistema-investment-e/new' });
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-size-l');
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-size-e',
  { path: 'i-i-s-informacionnokonsultacionnaya-sistema-size-e/:id' });
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-size-e.new',
  { path: 'i-i-s-informacionnokonsultacionnaya-sistema-size-e/new' });
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-subindustry-l');
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-subindustry-e',
  { path: 'i-i-s-informacionnokonsultacionnaya-sistema-subindustry-e/:id' });
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-subindustry-e.new',
  { path: 'i-i-s-informacionnokonsultacionnaya-sistema-subindustry-e/new' });
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-support-l');
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-support-e',
  { path: 'i-i-s-informacionnokonsultacionnaya-sistema-support-e/:id' });
  this.route('i-i-s-informacionnokonsultacionnaya-sistema-support-e.new',
  { path: 'i-i-s-informacionnokonsultacionnaya-sistema-support-e/new' });
});

export default Router;

import { Checkbox } from './src/checkbox/Checkbox';
import { TextInput } from './src/textinput/TextInput';
import { Store } from './src/store/Store';
import { Select } from './src/select/Select';
import { Completion } from './src/completion/Completion';
import { Modax } from './src/dialog/Modax';
import { Dialog } from './src/dialog/Dialog';
import { Button } from './src/button/Button';
import { FormField } from './src/formfield/FormField';
import { Loading } from './src/loading/Loading';
import { CharCount } from './src/charcount/CharCount';
import { Options } from './src/options/Options';
import { ContactChat } from './src/contacts/ContactChat';
import { ContactHistory } from './src/contacts/ContactHistory';
import { TicketList } from './src/list/TicketList';
import { ContactDetails } from './src/contacts/ContactDetails';
import { TembaList } from './src/list/TembaList';
import { ContactSearch } from './src/contactsearch/ContactSearch';
import { VectorIcon } from './src/vectoricon/VectorIcon';
import { Alert } from './src/alert/Alert';
import { Omnibox } from './src/omnibox/Omnibox';
import { Tip } from './src/tip/Tip';
import { TembaMenu } from './src/list/TembaMenu';
import { Anchor } from './src/anchor/Anchor';
import { Dropdown } from './src/dropdown/Dropdown';
import { TabPane } from './src/tabpane/TabPane';
import { Tab } from './src/tabpane/Tab';
import Label from './src/label/Label';
import { ContactName } from './src/contacts/ContactName';
import { ContactUrn } from './src/contacts/ContactUrn';
import { ContactFields } from './src/contacts/ContactFields';
import { ContactFieldEditor } from './src/contacts/ContactFieldEditor';

import { ContactBadges } from './src/contacts/ContactBadges';
import { ContactPending } from './src/contacts/ContactPending';
import { ContactTickets } from './src/contacts/ContactTickets';
import { TembaSlider } from './src/slider/TembaSlider';

export function addCustomElement(name: string, comp: any) {
  if (!window.customElements.get(name)) {
    window.customElements.define(name, comp);
  }
}

addCustomElement('temba-anchor', Anchor);
addCustomElement('temba-alert', Alert);
addCustomElement('temba-store', Store);
addCustomElement('temba-textinput', TextInput);
addCustomElement('temba-completion', Completion);
addCustomElement('temba-checkbox', Checkbox);
addCustomElement('temba-select', Select);
addCustomElement('temba-options', Options);
addCustomElement('temba-loading', Loading);
addCustomElement('temba-button', Button);
addCustomElement('temba-omnibox', Omnibox);
addCustomElement('temba-tip', Tip);
addCustomElement('temba-contact-name', ContactName);
addCustomElement('temba-contact-field', ContactFieldEditor);
addCustomElement('temba-contact-fields', ContactFields);
addCustomElement('temba-urn', ContactUrn);

addCustomElement('temba-field', FormField);
addCustomElement('temba-dialog', Dialog);
addCustomElement('temba-modax', Modax);
addCustomElement('temba-charcount', CharCount);
addCustomElement('temba-contact-history', ContactHistory);
addCustomElement('temba-contact-chat', ContactChat);
addCustomElement('temba-contact-details', ContactDetails);
addCustomElement('temba-ticket-list', TicketList);
addCustomElement('temba-list', TembaList);
addCustomElement('temba-label', Label);
addCustomElement('temba-menu', TembaMenu);
addCustomElement('temba-contact-search', ContactSearch);
addCustomElement('temba-icon', VectorIcon);
addCustomElement('temba-dropdown', Dropdown);
addCustomElement('temba-tabs', TabPane);
addCustomElement('temba-tab', Tab);
addCustomElement('temba-contact-groups', ContactBadges);
addCustomElement('temba-contact-pending', ContactPending);
addCustomElement('temba-contact-tickets', ContactTickets);
addCustomElement('temba-slider', TembaSlider);

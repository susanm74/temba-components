import {
  css,
  customElement,
  html,
  property,
  TemplateResult,
} from 'lit-element';
import { TembaList } from './TembaList';
import { FormElement } from '../FormElement';
import { timeSince } from '../utils';
import { Contact } from '../interfaces';

export class ContactList extends FormElement {
  @property({ type: String })
  endpoint: string;

  @property({ type: String })
  refreshKey: string;

  @property({ type: String })
  nextSelection: string;

  static get styles() {
    return css`
      :host {
        width: 100%;
      }
    `;
  }

  public refresh(): void {
    this.refreshKey = 'requested_' + new Date().getTime();
  }

  public setNextSelection(value: string) {
    this.nextSelection = value;
  }

  private handleChange(event: Event) {
    this.value = (event.target as TembaList).selected;
    this.dispatchEvent(new Event('change'));
  }

  private renderOption(contact: Contact, selected: boolean): TemplateResult {
    return html`
      <div style="display: flex-col;">
        <div style="display:flex;	align-items: center;">
          <div style="flex: 1; font-weight:400; color:#333; margin-top: 0.4em">
            ${contact.name}
          </div>
          <div style="font-size: 11px">
            ${timeSince(new Date(contact.last_seen_on))}
          </div>
        </div>
        ${contact.last_msg
          ? html`
              <div
                style="font-size: 11px; margin:0.4em 0; display: -webkit-box;  -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;"
              >
                ${contact.last_msg.direction === 'I'
                  ? html`<temba-icon
                      name="user"
                      style="display:inline-block;margin-bottom:-1px;fill:rgba(0,0,0,.6)"
                    ></temba-icon>`
                  : null}
                ${contact.last_msg.text}
              </div>
            `
          : null}
      </div>
    `;
  }

  public render(): TemplateResult {
    return html`
      <temba-list
        @change=${this.handleChange.bind(this)}
        valueKey="uuid"
        .nextSelection="${this.nextSelection}"
        .endpoint="${this.endpoint}"
        .refreshKey=${this.refreshKey}
        .renderOption=${this.renderOption.bind(this)}
      ></temba-list>
    `;
  }
}
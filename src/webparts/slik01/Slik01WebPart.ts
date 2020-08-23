import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import * as $ from 'jquery';
import { SPComponentLoader } from '@microsoft/sp-loader';

import styles from './Slik01WebPart.module.scss';
import * as strings from 'Slik01WebPartStrings';

import {
  SPHttpClient,
  SPHttpClientResponse
} from '@microsoft/sp-http';

import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';

export interface ISlik01WebPartProps {
  description: string;
}

export interface ISPLists {
  value: ISPList[];
}

export interface ISPList {
  Title: string;
  value: string;
  icon: string;
}




export default class Slik01WebPart extends BaseClientSideWebPart<ISlik01WebPartProps> {

  private _getListData(): Promise<ISPLists> {
    return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('bmpkpi')/Items", SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }
  private _renderListAsync(): void {

    if (Environment.type == EnvironmentType.SharePoint ||
      Environment.type == EnvironmentType.ClassicSharePoint) {
      this._getListData()
        .then((response) => {
          this._renderList(response.value);
        });
    }
  }
  private _renderList(items: ISPList[]): void {


    let html: string = '<table border=1 width=100% style="border-collapse: collapse;">';
    html += '<th>Title</th> <th>Value</th><th>Icon</th>';


    items.forEach((item: ISPList,index) => {

      console.error(index);

    switch (index) {

       case 1:
          document.getElementById("bmp-cd-provAccept").innerHTML= items[index].value;
          document.getElementById("first").innerHTML= items[index].Title;

         break;
      //   case 2:
      //     document.getElementById("bmp-cd-ewaSub").innerHTML= oListItem.get_item('Value');
      //     document.getElementById("second").innerHTML=oListItem.get_item('Title');

      //     break;

      //     case 3:
      //       document.getElementById("bmp-cd-sitraSub").innerHTML= oListItem.get_item('Value');
      //     document.getElementById("third").innerHTML=oListItem.get_item('Title');

      //  break;
      //  case 4:
      //   document.getElementById("bmp-cd-mainSub").innerHTML= oListItem.get_item('Value');
      //   document.getElementById("fourth").innerHTML=oListItem.get_item('Title');

      //  break;
      //  case 5:
      //   document.getElementById("bmp-cd-wharf").innerHTML= oListItem.get_item('Value');
      //   document.getElementById("fifth").innerHTML=oListItem.get_item('Title');

      //  break;
      //  case 6:
      //   document.getElementById("bmp-cd-7cdu").innerHTML= oListItem.get_item('Value');
      //   document.getElementById("sixth").innerHTML=oListItem.get_item('Title');

      //  break;
      //  case 7:
      //   document.getElementById("bmp-cd-rhcuRfsu").innerHTML= oListItem.get_item('Value');
      //   document.getElementById("seventh").innerHTML=oListItem.get_item('Title');

      //  break;
      //  case 8:
      //  document.getElementById("date").innerHTML= oListItem.get_item('Title');

      //   default:
      //     break;
      }
      html += `
        <tr>
            <td>${item.Title}</td>
            <td>${item.value}</td>
            <td>${item.icon}</td>


            `;
    });
    html += '</table>';

    const listContainer: Element = this.domElement.querySelector('#spListContainer');
    listContainer.innerHTML = html;
  }



  public render(): void {
    this.domElement.innerHTML = `
<style>
.kpis-subtitle {
  color: #961622;
  line-height: 30.72px;
  padding-bottom: 15.36px;
  text-transform: uppercase;
  text-align: center;
  background: #ffffff;
  font-size: 23.04px;
}
.led-container,
.led-generic-container {
  width: 680px;
  height: 480px;
  padding: 60px;
  background-image: url("TeamsitesBG.jpg");
  background-position: top right;
}
.bmp-cd-container,
.generic-cd-container {
  background-color: #ffffff;
  color: #797369;
  font-family: sans-serif;
  font-size: 23.04px;
}
.bmp-cd-container .bmp-led-title,
.generic-cd-container .bmp-led-title {
  color: #ed1b2f;
  text-align: center;
  font-size:23.04px;

  padding-bottom: 30.72px;
}
.bmp-cd-container table,
.generic-cd-container table {
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
}
.bmp-cd-container .bmp-led-table,
.generic-cd-container .bmp-led-table {
  height: 480px;
}
.bmp-cd-container .bmp-table-main,
.generic-cd-container .bmp-table-main {
  width: 100%;
}
.bmp-cd-container .bmp-table-main > tbody > tr > td,
.generic-cd-container .bmp-table-main > tbody > tr > td {
  width: 50%;
}
.bmp-cd-container .bmp-table-main #bmp-td-1,
.generic-cd-container .bmp-table-main #bmp-td-1 {
  padding: 0;
  padding-right: 3.84px;
}
.bmp-cd-container .bmp-table-main #bmp-td-2,
.generic-cd-container .bmp-table-main #bmp-td-2 {
  padding: 0;
  padding-left: 3.84px;
}
.bmp-cd-container .bmp-table-main #bmp-td-center,
.generic-cd-container .bmp-table-main #bmp-td-center {
  padding: 0;
  padding-right: 25%;
  padding-left: 25%;
}
.bmp-cd-container .bmp-item-container,
.generic-cd-container .bmp-item-container {
  padding: 7.68px;
  margin: 0 0 7.68px;
  background: #f3f2ee;
  overflow: hidden;
}
.bmp-cd-container .bmp-item-icon-td,
.generic-cd-container .bmp-item-icon-td {
  height: 46.08px;
  width: 51.2px;
}
.bmp-cd-container .bmp-item-icon,
.generic-cd-container .bmp-item-icon {
  width: 51.2px;
}
.bmp-cd-container img,
.generic-cd-container img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}
.bmp-cd-container .bmp-item-cd-td,
.generic-cd-container .bmp-item-cd-td {
  width: 42%;
  text-align: center;
}
.bmp-cd-container .bmp-item-title-td,
.generic-cd-container .bmp-item-title-td {
  height: 155px;
  padding-left: 7.68px;
}
.bmp-cd-container .bmp-item-title,
.generic-cd-container .bmp-item-title {
  font-size: 23.04px;
}
.bmp-cd-container .bmp-item-title-compressed,
.generic-cd-container .bmp-item-title-compressed {
  font-size: 23.04px ;
}
.bmp-cd-container .bmp-item-cd,
.generic-cd-container .bmp-item-cd {
  color: #ed1b2f;
  padding: 7.68px 0;
  border-radius: 15.36px;
  background: #eae6de;
  white-space: nowrap;
  font-size: 23.04px;
}
.eam-cd-container {
  background-image: url("/sites/ITSolutions/bg_eam01.png");
}
.eam-cd-container .bmp-led-title {
  color: #ffffff;
  text-shadow: 0 0 22px #797369;
}
.eam-cd-container .bmp-item-cd {
  color: #157ba3;
  background: rgba(255, 255, 255, 0.7);
  font-size: 23.04px;
}
.eam-cd-container .bmp-item-container {
  background: rgba(255, 255, 255, 0);
  max-width: 460px;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  margin-bottom: 0;
}
.bmp-bottom-links {
  text-align: center;
  margin-top: 15.36px;
}
.bmp-bottom-links a {
  color: #ed1b2f;
}
.showSharePointRibbon {
  margin-top: 600px;
  font-size: 20px;
}
.margin-bottom-0 {
  margin-bottom: 0 !important;
}
</style>

<div class="bmp-cd-container">
    <div class="bmp-cd-innercontainer">

      <div id="bmp-cd-wrapper" class="cd-wrapper"">
        <span id="date" style="float: right;color:red;font-size: xx-small;font-weight: normal;" ></span>
        <table class="bmp-table-main">




        <td class="bmp-item-icon-td">
        <div class="bmp-item-container">
          <table>


                <td class="bmp-item-icon-td">
                  <div class="bmp-item-icon">
                    <img src="/sites/ITSolutions/icons/Overall.png" />                         </div>
                </td>
                <td class="bmp-item-title-td">
                  <div id="first" class="bmp-item-title bmp-item-title-compressed bmp-item-title-compressed-provAccept">

                    </div>
                </td>
                <td class="bmp-item-cd-td">
                  <div class="bmp-item-cd">
                    <span id="bmp-cd-provAccept"></span>
                  </div>
                </td>



          </table>
        </div>
      </td>


                  </table>
                </div>
              </td>



        </table>

      </div>
    </div>
  </div>

  <div id="spListContainer" />

`;
    this._renderListAsync();

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

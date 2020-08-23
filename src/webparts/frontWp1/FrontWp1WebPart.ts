import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import { SPComponentLoader } from '@microsoft/sp-loader';

import * as jQuery from 'jquery';



import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './FrontWp1WebPart.module.scss';
import * as strings from 'FrontWp1WebPartStrings';

export interface IFrontWp1WebPartProps {
  description: string;
}

export default class FrontWp1WebPart extends BaseClientSideWebPart <IFrontWp1WebPartProps> {


  public render(): void {
    this.domElement.innerHTML = `


    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>



<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
      <li data-target="#myCarousel" data-slide-to="4"></li>
      <li data-target="#myCarousel" data-slide-to="5"></li>
      <li data-target="#myCarousel" data-slide-to="6"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <img src="https://i.imgur.com/EtkK30c.png" alt="Los Angeles" style="width:100%;">
      </div>

      <div class="item">
        <img src="https://cdn.datafloq.com/cache/blog_images/878x531/big-data-oil-oil-gas-industry-handle.jpg" alt="Chicago" style="width:100%;">
      </div>
      <div class="item">
      <img src="https://cdn.datafloq.com/cache/blog_images/878x531/big-data-oil-oil-gas-industry-handle.jpg" alt="Chicago" style="width:100%;">
    </div>
    <div class="item">
    <img src="https://cdn.datafloq.com/cache/blog_images/878x531/big-data-oil-oil-gas-industry-handle.jpg" alt="Chicago" style="width:100%;">
  </div>
  <div class="item">
  <img src="https://cdn.datafloq.com/cache/blog_images/878x531/big-data-oil-oil-gas-industry-handle.jpg" alt="Chicago" style="width:100%;">
</div>
<div class="item">
<img src="https://cdn.datafloq.com/cache/blog_images/878x531/big-data-oil-oil-gas-industry-handle.jpg" alt="Chicago" style="width:100%;">
</div>


      <div class="item">
        <img src="https://blogs.3ds.com/delmia/wp-content/uploads/sites/24/2018/06/istock_000026700687_full-1.jpg" alt="New york" style="width:100%;">
      </div>
    </div>




    <!-- Left and right controls -->

  </div>

          </div>
          </div>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

          <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
          <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>


          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


          <style>
.carousel-indicators .active {
  width: 12px;
  height: 12px;
  margin: 0;
  background-color: #961622;
  }

</style>

          `;
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

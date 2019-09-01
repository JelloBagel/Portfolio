import React from "react";
import PropTypes from "prop-types";

function OverlapDivider({ image }) {
  return (
    <React.Fragment>
      {image ? (
        <img className="overlapDivider__img" src={image.src} alt={image.alt} />
      ) : null}
      {/* <div
        class="relative"
        ng-style="{
            'margin-top': vm.negativeMargins.top,
            'margin-bottom': vm.negativeMargins.bottom,
            'margin-left': vm.negativeMargins.left,
            'margin-right': vm.negativeMargins.right,
        }"
        style="margin-top: -60px;"
      >
        <div
          class="absolute pin"
          ng-style="{ margin: '-' + (
                vm.padding.y/2
            ) + 'px -' + (
                vm.padding.x/2
            ) + 'px' }"
          style="margin: 0px;"
        >
          <canvas
            class="absolute pin w-full h-full"
            width="2522"
            height="124"
          ></canvas>
        </div>

        <div class="relative">
          <div
            ng-if="vm.$transclude.isSlotFilled('notchTop')"
            class="absolute pin-t pin-x ng-scope"
            ng-style="{
                    paddingLeft: vm.lrBeginNotch / 2 + 'px',
                    paddingRight: vm.lrBeginNotch / 2 + 'px',
                }"
            style="padding-left: 30.5px; padding-right: 30.5px;"
          >
            <div
              class="relative"
              ng-style="{ height: vm.options.notchSize + ( vm.options.border.width || 0 ) + 'px' }"
              style="height: 62px;"
            >
              <div ng-transclude="notchTop">
                <notch-top class="ng-scope">
                  <div class="absolute pin overflow-hidden">
                    <div class="hidden md:block">
                      <div class="absolute tl sprite-home-flange-l"></div>

                      <div class="absolute tr sprite-home-flange-r"></div>
                    </div>

                    <div class="md:hidden">
                      <div class="absolute tl sprite-home-flange-mobile-l"></div>

                      <div class="absolute tr sprite-home-flange-mobile-r"></div>
                    </div>
                  </div>
                </notch-top>
              </div>
            </div>
          </div>

          <div
            class="relative border border-transparent content-box"
            ng-class="{ 'border border-transparent content-box': vm.options.border.width }"
            ng-style="{
                    borderTopWidth: ! vm.noBorderPaddingTop &amp;&amp; ( vm.options.borderTop || vm.options.border ).width || 0 + 'px',
                    borderBottomWidth: ! vm.noBorderPaddingBottom &amp;&amp; ( vm.options.borderBottom || vm.options.border ).width || 0 + 'px',
                    borderLeftWidth: ! vm.noBorderPaddingLeft &amp;&amp; vm.options.border.width || 0 + 'px',
                    borderRightWidth: ! vm.noBorderPaddingRight &amp;&amp; vm.options.border.width || 0 + 'px',
                    paddingTop: vm.options.noNotchPadding == true || vm.options.noNotchPadding.top
                        ? '0px'
                        : vm.options.notchSize + 'px',
                    paddingBottom: vm.options.noNotchPadding == true || vm.options.noNotchPadding.bottom
                        ? '0px'
                        : vm.options.notchSize + 'px',
                    paddingRight: vm.options.noNotchPadding == true || vm.options.noNotchPadding.right
                        ? '0px'
                        : vm.options.notchSize + 'px',
                    paddingLeft: vm.options.noNotchPadding == true || vm.options.noNotchPadding.left
                        ? '0px'
                        : vm.options.notchSize + 'px',
                }"
            style="border-width: 2px 0px 0px; padding: 0px;"
          >
            <div
              class=""
              ng-style="{ minHeight: vm.options.noNotchPadding == true ? vm.options.notchSize + 'px' : '' }"
              ng-transclude=""
              style="min-height: 60px;"
            ></div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
}

OverlapDivider.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  content: PropTypes.string
};
export default OverlapDivider;

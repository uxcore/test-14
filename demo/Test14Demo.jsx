/**
 * Test14 Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import SelectFormField from 'uxcore-select-form-field';
import Form from 'uxcore-form';
import Const from 'uxcore-const';
import Validators from 'uxcore-validator';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsxdata: {
        bj: '北',
        nj: '南',
        dj: '东',
        xj: '西',
      },
      jsxdata2: [
        { value: 'bj', text: '北京', disabled: true },
        { value: 'nj', text: '南京' },
      ],
      mode: Const.MODE.EDIT,
      value: 'aaa',
    };
  }

  render() {
    const me = this;
    return (
      <div>
        <Form jsxmode={me.state.mode} jsxvalues={{ city: this.state.value, city2: '*' }}>
          <SelectFormField
            jsxstyle={{ width: '800px' }}
            jsxlabel="单选"
            jsxname="city"
            allowClear
            size="small"
            // combobox
            jsxrules={{ validator: Validators.isNotEmpty, errMsg: '不能为空' }}
            disabled={false}
            jsxdata={me.state.jsxdata2}
            onSearch={() => { }}
            onFocus={() => { console.log('focus'); }}
            onBlur={() => { console.log('blur'); }}
          />
        </Form>
      </div>
    );
  }
}

export default Demo;

import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Post to Tumblr Action. Posts the content passed into the action to Tumblr.
 *
 * ```js
 * postToTumblr();
 * ```
 */
const postToTumblr = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.tumblr.post',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(postToTumblr);

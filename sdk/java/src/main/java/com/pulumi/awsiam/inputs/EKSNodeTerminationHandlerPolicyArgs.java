// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.awsiam.inputs;

import com.pulumi.core.Output;
import com.pulumi.core.annotations.Import;
import java.lang.Boolean;
import java.lang.String;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;


/**
 * The Node Termination Handler policy to the role.
 * 
 */
public final class EKSNodeTerminationHandlerPolicyArgs extends com.pulumi.resources.ResourceArgs {

    public static final EKSNodeTerminationHandlerPolicyArgs Empty = new EKSNodeTerminationHandlerPolicyArgs();

    /**
     * Determines whether to attach the Node Termination Handler policy to the role.
     * 
     */
    @Import(name="attach", required=true)
    private Output<Boolean> attach;

    /**
     * @return Determines whether to attach the Node Termination Handler policy to the role.
     * 
     */
    public Output<Boolean> attach() {
        return this.attach;
    }

    /**
     * List of SQS ARNs that contain node termination events. If not provided, then a default
     * ARN of &#34;*&#34; will be provided.
     * 
     */
    @Import(name="sqsQueueArns")
    private @Nullable Output<List<String>> sqsQueueArns;

    /**
     * @return List of SQS ARNs that contain node termination events. If not provided, then a default
     * ARN of &#34;*&#34; will be provided.
     * 
     */
    public Optional<Output<List<String>>> sqsQueueArns() {
        return Optional.ofNullable(this.sqsQueueArns);
    }

    private EKSNodeTerminationHandlerPolicyArgs() {}

    private EKSNodeTerminationHandlerPolicyArgs(EKSNodeTerminationHandlerPolicyArgs $) {
        this.attach = $.attach;
        this.sqsQueueArns = $.sqsQueueArns;
    }

    public static Builder builder() {
        return new Builder();
    }
    public static Builder builder(EKSNodeTerminationHandlerPolicyArgs defaults) {
        return new Builder(defaults);
    }

    public static final class Builder {
        private EKSNodeTerminationHandlerPolicyArgs $;

        public Builder() {
            $ = new EKSNodeTerminationHandlerPolicyArgs();
        }

        public Builder(EKSNodeTerminationHandlerPolicyArgs defaults) {
            $ = new EKSNodeTerminationHandlerPolicyArgs(Objects.requireNonNull(defaults));
        }

        /**
         * @param attach Determines whether to attach the Node Termination Handler policy to the role.
         * 
         * @return builder
         * 
         */
        public Builder attach(Output<Boolean> attach) {
            $.attach = attach;
            return this;
        }

        /**
         * @param attach Determines whether to attach the Node Termination Handler policy to the role.
         * 
         * @return builder
         * 
         */
        public Builder attach(Boolean attach) {
            return attach(Output.of(attach));
        }

        /**
         * @param sqsQueueArns List of SQS ARNs that contain node termination events. If not provided, then a default
         * ARN of &#34;*&#34; will be provided.
         * 
         * @return builder
         * 
         */
        public Builder sqsQueueArns(@Nullable Output<List<String>> sqsQueueArns) {
            $.sqsQueueArns = sqsQueueArns;
            return this;
        }

        /**
         * @param sqsQueueArns List of SQS ARNs that contain node termination events. If not provided, then a default
         * ARN of &#34;*&#34; will be provided.
         * 
         * @return builder
         * 
         */
        public Builder sqsQueueArns(List<String> sqsQueueArns) {
            return sqsQueueArns(Output.of(sqsQueueArns));
        }

        /**
         * @param sqsQueueArns List of SQS ARNs that contain node termination events. If not provided, then a default
         * ARN of &#34;*&#34; will be provided.
         * 
         * @return builder
         * 
         */
        public Builder sqsQueueArns(String... sqsQueueArns) {
            return sqsQueueArns(List.of(sqsQueueArns));
        }

        public EKSNodeTerminationHandlerPolicyArgs build() {
            $.attach = Objects.requireNonNull($.attach, "expected parameter 'attach' to be non-null");
            return $;
        }
    }

}

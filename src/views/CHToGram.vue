<template>
    <CRow>
        <CCol col="12">
            <CCard>
                <CCardHeader>
                    CH
                    <CIcon name="cilArrowRight" />
                    Gram
                </CCardHeader>
                <CCardBody>
                    <CRow>
                        <CCol sm="12" lg="6">
                            <CInput
                                v-model="referenceWeight"
                                label="Termék súlya"
                                placeholder="Add meg a súlyt"
                                append="g"
                            />
                        </CCol>
                        <CCol sm="12" lg="6">
                            <CInput
                                v-model="referenceCH"
                                label="CH"
                                placeholder="Add meg a CH tartalmat"
                                append="g"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol> <hr /> </CCol>
                    </CRow>

                    <CRow>
                        <CCol sm="12" lg="6">
                            <CInput
                                v-model="calculatedWeight"
                                label="Számolandó súlya"
                                append="g"
                                :isValid="isValid"
                                disabled
                            />
                        </CCol>
                        <CCol sm="12" lg="6">
                            <CInput
                                v-model="calculatedCH"
                                label="Számolandó CH"
                                placeholder="Add meg a CH tartalmat"
                                append="g"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CButton :color="'danger'" class="m-2" @click="clear">
                                Alaphelyzet
                            </CButton>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
</template>

<script>
export default {
    name: "CHToGram",
    data() {
        return {
            referenceWeight: "",
            referenceCH: "",
            calculatedWeight: "",
            calculatedCH: ""
        };
    },
    computed: {
        isValid() {
            if (this.calculatedWeight === "") {
                return null;
            }

            return this.calculatedCH > 0;
        }
    },
    methods: {
        calc() {
            if (this.referenceWeight > 0 && this.referenceCH > 0 && this.calculatedCH > 0) {
                this.calculatedWeight =
                    (this.calculatedCH / this.referenceCH) * this.referenceWeight;
            }
        },
        clear() {
            this.referenceWeight = "";
            this.referenceCH = "";
            this.calculatedWeight = "";
            this.calculatedCH = "";
        }
    },
    watch: {
        referenceWeight() {
            this.calc();
        },
        referenceCH() {
            this.calc();
        },
        calculatedCH() {
            this.calc();
        }
    },
    created() {
        this.clear();
    }
};
</script>

<style></style>

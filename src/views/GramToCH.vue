<template>
    <CRow>
        <CCol col="12">
            <CCard>
                <CCardHeader>
                    Gram
                    <CIcon name="cilArrowRight" />
                    CH
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
                        <CCol sm="12" lg="6">
                            <CInput
                                v-model="calculatedWeight"
                                label="Számolandó súlya"
                                placeholder="Add meg a súlyt"
                                append="g"
                            />
                        </CCol>
                        <CCol sm="12" lg="6">
                            <CInput
                                v-model="calculatedCH"
                                label="CH"
                                append="g"
                                :isValid="isValid"
                                disabled
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
    name: "GramToCH",
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
            if (this.calculatedCH === "") {
                return null;
            }

            return this.calculatedCH > 0;
        }
    },
    methods: {
        calc() {
            if (this.referenceWeight > 0 && this.referenceCH > 0 && this.calculatedWeight > 0) {
                this.calculatedCH =
                    (this.calculatedWeight / this.referenceWeight) * this.referenceCH;
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
        calculatedWeight() {
            this.calc();
        }
    },
    created() {
        this.clear();
    }
};
</script>

<style></style>
